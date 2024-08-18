import { useState } from "react";
function App() {
  const [ipaddress, setipaddress] = useState('')

  async function ip(){
    try{
      const response =await fetch('https://api.ipify.org?format=json')
      const data = await response.json();
      console.log(data)
      setipaddress(data.ip)
    }catch(err){
      console.log("Error",err)

  }}
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 flex justify-center items-center">
        <div className="bg-white h-44 my-6 rounded-2xl w-72 flex flex-col justify-center p-6 shadow-lg">
          <h3 className="text-gray-800 font-semibold text-2xl mb-4 text-center">
            Location Finder</h3>
          <button className="h-10 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-lg font-bold text-lg text-white transition-transform transform hover:scale-105 "
          onClick={ip}
          >Find Location</button>
          <h3 className="text-gray-800 mb-4  text-center">{ipaddress}</h3>
        </div>
      </div>
    </>
  );
}

export default App;
