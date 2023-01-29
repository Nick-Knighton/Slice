function Page() {
    return (
        <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
            <div class="text-2xl font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 bg-gradient-to-r from-cyan-500 to-blue-500">
                <ul class="flex flex-row justify-center bg-gradient-to-r from-cyan-500 to-blue-500" >
                    <li class="mr-2 flex flex-row justify-center">
                        <a href="#" class="inline-block  p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Home</a>
                    </li>
                    <li class="mr-2">
                        <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Create Paymeant</a>
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
                        <select id="currency" name="currency" class="h-full rounded-md border-transparent bg-white py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ">
                            <option>Nick</option>
                            <option>Zac</option>
                            <option>Will</option>
                        </select>
                    </div>
                </div>
                
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                    <div class="relative mt-1 rounded-md shadow-sm">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span class="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input type="text" name="price" id="price" class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0.00"/>
                        <div class="absolute inset-y-0 right-0 flex items-center">
                        <label for="currency" class="sr-only">Currency</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
} 
export default Page;