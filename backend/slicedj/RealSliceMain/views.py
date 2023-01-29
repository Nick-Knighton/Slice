from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from datetime import datetime
from django.db import connection
from django.contrib.auth.hashers import make_password, check_password

from RealSliceMain.models import Groups, Txns, Users
from RealSliceMain.serializers import *
from RealSliceMain.working import minCashFlow, getResults

def calcTransactions():
    graph = [ [0, 0, 6, 0],
          [5, 0, 6, 0],
          [5, 0, 6, 0], 
          [5, 0, 0, 0],
          ]
    
    minCashFlow(graph)
    res = getResults()
    print(res)

@csrf_exempt
def transactionApi(request):
    if request.method == 'POST':
        cursor = connection.cursor()
        transaction = JSONParser().parse(request)
        user = transaction['User']
        amount = float(transaction['amountPaid'])
        people = transaction['peopleWhoOwe']

        calcedAmt = amount / (len(people) + 1)

        selectedUsrId = Users.objects.raw("SELECT * FROM users WHERE name='" + user + "'")[0].id
        peopleIds = []
        cmd = "SELECT * FROM users WHERE name='"
        for i in people:
            peopleIds.append(Users.objects.raw(cmd + i + "'")[0].id)

        cmd = "INSERT INTO txns(sender, receiver, amount) VALUES("
        for i in peopleIds:
            cursor.execute(cmd + str(i) + ", " + str(selectedUsrId) + ", " + str(calcedAmt) + ")")
        
        return JsonResponse("Transaction Received!", safe=False)