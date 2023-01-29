import React, { useState } from 'react';
import axios from 'axios';


function Page() {
    const [user, setUser] = useState('');   //Needs to have the default value set to whatever comes first 
    const [amountPayed, setamountPayed] = useState('0.00');
    const [debtors, setDebtors] = useState([]);
    
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://127.0.0.1:8000/user/transaction', createJSON()
              ).then((res) => {setUser(''); setamountPayed(0.00); setDebtors([]);}).catch(err => console.log(err));

        // console.log("User:", user);
        // console.log("Amount:", amountPayed);
        // console.log("Debtors:", debtors);
    };

    function createJSON(){
        var res = []
          res.push(
            {
              "User": user,
              "amountPayed": amountPayed,
              "peopleWhoOwe": debtors
            }
          )
          console.log("Res:", res);
        return res;
      }

    const handleCheck = (e) => {
        const { value, checked } = e.target;
        // console.log(`${value} is ${checked}`);

        if (checked) {
            setDebtors(debtors => debtors.concat(value))
          }
        
          // Case 2  : The user unchecks the box
        else {
            setDebtors(debtors.filter((e) => e !== value));
        }
    }


    
    
    return (
        <div className="space-x-16 flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
            
{/* Working here */}
            <div className='bg-white w-1/3 h-1/3 rounded-md'></div>
            <div className='bg-white w-1/3 h-2/3 rounded-md text-3xl'>
                <label className='flex justify-center mt-5'>Enter  New Payment</label>
                <form id='form elements'className="h-full flex flex-col justify-start mt-auto items-center" onSubmit={handleSubmit}>
                    
                    <div class="rounded-md pt-32 shadow-sm w-10/12 bg-white">
                        <select id="currency" name="currency" class="h-full w-full rounded-md border-transparent bg-white text-gray-500  sm:text-3xl " value={user} onChange={(event) => {setUser(event.target.value)}}>
                            <option>Nick</option>
                            <option>Zac</option>
                            <option>Will</option>
                        </select>
                    </div>
                    
                    <div className='w-10/12 pt-16 pb-16'>
                        <label for="price" class="block text-sm font-medium text-gray-700 sm:text-3xl">Price</label>
                        <div class="relative mt-1 rounded-md shadow-sm">
                            <div class="w-full bg-white pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                <span class="text-gray-500 sm:text-3xl">$</span>

                            </div>
                            <input type="text" name="price" id="price" class="h-16 w-full pl-7 pr-12 sm:text-sm" placeholder="0.00" value={amountPayed} onChange={(event) => {
                                setamountPayed(event.target.value);
            }}/>
                        </div>
                    </div>

                    <div id="checkBoxes" class="flex justify-top flex-col bg-white mt-2 h-32 overflow-auto sm:text-xl w-10/12 px-3 pt-2 pb-2 rounded-md mb-2 mt-5">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#85C0E9] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="Nick" onChange={handleCheck}/>
                            <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox1">Nick</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#85C0E9] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="Zac" onChange={handleCheck}/>
                            <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox2">Zac</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#85C0E9] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="Will" onChange={handleCheck}/>
                            <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox2">Will</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#85C0E9] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="Liam" onChange={handleCheck}/>
                            <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox2">Liam</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#85C0E9] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="William" onChange={handleCheck}/>
                            <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox2">William</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#85C0E9] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="Don" onChange={handleCheck}/>
                            <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox2">Don</label>
                        </div>
                        
                    </div>
                    

                    <button  type="submit" class="mt-16 bg-white outline outline-4  outline-offset-2 hover:bg-[#85C0E9] text-black font-bold rounded-full sm:text-3xl w-10/12">
                        Submit
                    </button>

                </form>
            </div>

            <div className='bg-white bg-white w-1/3 h-2/3 rounded-md'>
            </div>


        </div>


    )
} 
export default Page;