import React, { useState } from 'react';


function Page() {
    
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    
    
    return (
        <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
            <div class="text-2xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 bg-gradient-to-r from-cyan-500 to-blue-500">
                <ul class="flex flex-row justify-center bg-gradient-to-r from-cyan-500 to-blue-500" >
                    <li class="mr-2 flex flex-row justify-center">
                        <a href="#" class="inline-block  p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Home</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Create Payment</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Current Money Owed</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Transaction History</a>
                    </li>
                </ul>

            </div>

            <div id='form elements'className="h-full flex flex-col justify-center items-center">
                <div>
                    <div class="relative mt-1 rounded-md shadow-sm">
                        <select id="currency" name="currency" class="h-full rounded-md border-transparent bg-white py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-3xl ">
                            <option>Nick</option>
                            <option>Zac</option>
                            <option>Will</option>
                        </select>
                    </div>
                </div>
                
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 sm:text-3xl">Price</label>
                    <div class="relative mt-1 rounded-md shadow-sm">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span class="text-gray-500 sm:text-3xl">$</span>
                        </div>
                        <input type="text" name="price" id="price" class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-3xl" placeholder="0.00"/>
                        <div class="absolute inset-y-0 right-0 flex items-center">
                        <label for="currency" class="sr-only">Currency</label>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center flex-col bg-white mt-5 h-32 overflow-auto sm:text-3xl">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="option1"/>
                        <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox1">Nick</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2"/>
                        <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox2">Zac</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2"/>
                        <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox2">Sam</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2"/>
                        <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox2">Tim</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2"/>
                        <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox2">Eli</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2"/>
                        <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox2">Bill</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="checkbox" id="inlineCheckbox3" value="option3" disabled/>
                        <label class="form-check-label inline-block text-gray-800 opacity-50" for="inlineCheckbox3">Will (disabled)</label>
                    </div>
                </div>
                
                <button class="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 mt-3 rounded-full sm:text-3xl ">
                    1234
                </button>

            </div>


        </div>


    )
} 
export default Page;