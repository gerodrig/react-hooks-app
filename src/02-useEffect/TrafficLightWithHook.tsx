import { useTrafficLight } from '../hooks/useTrafficLight';



// type TrafficLightColor = 'red' | 'yellow' | 'green';

export const TrafficLightWithHook = () => {
  
  const { redLight, greenLight, yellowLight, countdown, percentage } = useTrafficLight();


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex flex-col space-y-6 items-center justify-center p-4">
        <h1 className="text-white font-bold text-3xl">
          StopLight with useEffect
        </h1>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <h2 className="text-white text-xl"> Countdown: {countdown} </h2>
        <div className=" border-2 bg-amber-400 border-amber-400 flex flex-col items-center p-4 space-y-8">
          <div className={`w-36 h-36 rounded-full bg-gray-800`}>
            <div
              className={`w-32 h-32 ${redLight} rounded-full mx-auto mt-2`}
            ></div>
          </div>
          <div className={`w-36 h-36 rounded-full bg-gray-800 `}>
            <div
              className={`w-32 h-32 ${yellowLight} rounded-full mx-auto mt-2`}
            ></div>
          </div>
          <div className={`w-36 h-36 rounded-full bg-gray-800 `}>
            <div
              className={`w-32 h-32 ${greenLight} rounded-full mx-auto mt-2`}
            ></div>
          </div>
        </div>

        {/* <div className="flex space-x-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => handleColorChange('red')}
          >
            Red
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => handleColorChange('yellow')}
          >
            Amber
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => handleColorChange('green')}
          >
            Green
          </button>
        </div> */}
      </div>
    </>
  );
};
