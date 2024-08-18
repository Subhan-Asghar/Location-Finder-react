import { useState } from "react";

function App() {
  const [ipaddress, setipaddress] = useState('');
  const [dataip, setdataip] = useState('');

  async function ip() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setipaddress(data.ip);
      // Fetch IP data
      async function ipdata(ipadd) {
        try {
          const responseip = await fetch(`https://ipinfo.io/${ipadd}?token=0d478690783a53`);
          const dataip = await responseip.json();
          
          setdataip(dataip);
        } catch (err) {
          console.log("Error", err);
        }
      }
      ipdata(data.ip);
    } catch (err) {
      console.log("Error", err);
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 flex justify-center items-center flex-col p-4">
        <div className="bg-white h-auto my-6 rounded-2xl w-full max-w-md flex flex-col justify-center p-6 shadow-xl">
          <h3 className="text-gray-800 font-semibold text-2xl mb-4 text-center">
            Location Finder</h3>
          <button className="h-12 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-lg font-bold text-lg text-white transition-transform transform hover:scale-105"
            onClick={ip}>
            Find Location
          </button>
        </div>
        {dataip && (
          <div className="bg-white h-auto rounded-2xl w-full max-w-md flex flex-col shadow-xl p-6 mt-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-gray-800 font-semibold text-lg">IP:</h3>
              <h3 className="text-gray-800 text-md">{dataip.ip}</h3>
            </div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-gray-800 font-semibold text-lg">City:</h3>
              <h3 className="text-gray-800 text-md">{dataip.city}</h3>
            </div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-gray-800 font-semibold text-lg">Region:</h3>
              <h3 className="text-gray-800 text-md">{dataip.region}</h3>
            </div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-gray-800 font-semibold text-lg">Postal:</h3>
              <h3 className="text-gray-800 text-md">{dataip.postal}</h3>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-gray-800 font-semibold text-lg">Timezone:</h3>
              <h3 className="text-gray-800 text-md">{dataip.timezone}</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

// "I’m giving my best effort to add Google Maps to the app, but I'm running into some challenges. 
//  I've tried using different libraries, but nothing seems to be working so far. 
//  Any tips or suggestions would be greatly appreciated!"
