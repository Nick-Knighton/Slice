import logo from './logo.svg';


function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
      
        <form class="bg-white shadow-md rounded px-8 pt-8 pb-8 h-1/2 w-1/3">
          
          <div class="mb-6 items-center">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Join a group
            </label>
            <input class="h-32 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Code"/>
          </div>
          
          <div class="flex items-center justify-center">
            <button class="w-64 h-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Create a group
            </button>
          </div>

        </form>

    </div>
  );
}
export default App;
