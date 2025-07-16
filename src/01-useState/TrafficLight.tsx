import { useState } from 'react';

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
  // blue: 'bg-blue-500 animate-pulse',
  // pink: 'bg-pink-500 animate-pulse',
};

// type TrafficLightColor = 'red' | 'yellow' | 'green';
type TrafficLightColor = keyof typeof colors;

export const TrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>('red');

  const handleColorChange = (color: TrafficLightColor) => {
    console.log({ color });

    setLight((prev) => {
      console.log({ prev });
      return color;
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex flex-col space-y-6 items-center justify-center p-4">
        <div className=" border-2 bg-amber-400 border-amber-400 flex flex-col items-center p-4 space-y-8">
          <div className={`w-36 h-36 rounded-full bg-gray-800`}>
            <div
              className={`w-32 h-32 ${
                light === 'red' ? colors[light] : 'bg-gray-500'
              } rounded-full mx-auto mt-2`}
            ></div>
          </div>
          <div className={`w-36 h-36 rounded-full bg-gray-800 `}>
            <div
              className={`w-32 h-32 ${
                light === 'yellow' ? colors[light] : 'bg-gray-500'
              } rounded-full mx-auto mt-2`}
            ></div>
          </div>
          <div className={`w-36 h-36 rounded-full bg-gray-800 `}>
            <div
              className={`w-32 h-32 ${
                light === 'green' ? colors[light] : 'bg-gray-500'
              } rounded-full mx-auto mt-2`}
            ></div>
          </div>
        </div>

        <div className="flex space-x-4">
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
        </div>
      </div>
    </>
  );
};
