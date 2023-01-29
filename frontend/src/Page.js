import React, { useState } from 'react';


function Page() {
    
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    
    
    return (
        <div class="text-2xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 bg-gradient-to-r from-cyan-500 to-blue-500">
            <ul class="flex flex-row justify-center bg-gradient-to-r from-cyan-500 to-blue-500" >
                <li class="mr-2 flex flex-row justify-center">
                    <a href="#" class="inline-block self-start p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
                </li>
                <li class="mr-2">
                    <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Payment</a>
                </li>
                <li class="mr-2">
                    <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Money</a>
                </li>
                <li class="mr-2">
                    <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">History</a>
                </li>
            </ul>

            <ul>
                <li>People</li>
                <form>
                <li>
                Amount Owed:
            <input
      className="shadow appearance-none border rounded w-full w-small py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      value={value}
      onChange={handleChange}
      pattern="^\d+(?:\.\d{1,2})?$"
      placeholder="Enter a monetary value"
    />
            </li>
            <input type="submit" value="Submit" />
            </form>

                <li>Debtors</li>
            </ul>
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
            </div>

{/* </div> */}
</div>
    )
} 
export default Page;