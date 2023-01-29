from rest_framework import serializers
from RealSliceMain.models import Groups, Txns, Users

class groupsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Groups
        fields=('user_id', 'group_id', 'code')

class txnsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Txns
        fields=('sender', 'receiver', 'amount')

class usersSerializer(serializers.ModelSerializer):
    class Meta:
        model=Users
        fields=('name')