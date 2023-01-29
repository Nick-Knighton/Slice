import { useNavigate } from 'react-router-dom';


function App() {
  let navigate = useNavigate();
  
  const navigateToManager = () => {
    navigate("/page");
  }

  
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      
        <form class="flex flex-col justify-center space-y-24 bg-white shadow-md rounded h-1/2 w-1/3">
          
          <div class="px-10">
            <label class="block text-gray-700 text-lg font-bold" for="username">
              Join a group
            </label>
            <input class="flex h-32 text-2xl shadow appearance-none border rounded w-full text-gray-750 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Code"/>
          </div>
          
          <div class="px-10">
            <button onClick={navigateToManager} class=" w-full text-2xl h-32 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline" type="button">
              Create a group
            </button>
          </div>

        </form>

    </div>
  );
}
export default App;
