import { useEffect, useState } from 'react';

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
  // blue: 'bg-blue-500 animate-pulse',
  // pink: 'bg-pink-500 animate-pulse',
};

// type TrafficLightColor = 'red' | 'yellow' | 'green';
type TrafficLightColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {
  const [countDownlight, setCountdownLight] = useState<TrafficLightColor>('red');
  const [countDown, setCountDown] = useState(5);

  //? CountDown effect
  useEffect(() => {
    if (countDown === 0) return;

    const intervalId = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countDown]);

  const handleColorChange = (color: TrafficLightColor) => {
    console.log({ color });

    setCountdownLight((prev) => {
      console.log({ prev });
      return color;
    });
  };

//? Change light color effect
useEffect(() => {
  if(countDown > 0) return;

  setCountDown(5);

  if(countDownlight === 'red'){
    setCountdownLight('green');
    return;
  }

  if(countDownlight === 'yellow'){
    setCountdownLight('red');
    return;
  }
  if(countDownlight === 'green'){
    setCountdownLight('yellow');
    return;
  }

  
}, [countDown, countDownlight])


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex flex-col space-y-6 items-center justify-center p-4">
        <h1 className="text-white font-bold text-3xl">
          StopLight with useEffect
        </h1>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${(countDown / 5) * 100}%` }}
          ></div>
        </div>

        <h2 className="text-white text-xl"> Countdown: {countDown} </h2>
        <div className=" border-2 bg-amber-400 border-amber-400 flex flex-col items-center p-4 space-y-8">
          <div className={`w-36 h-36 rounded-full bg-gray-800`}>
            <div
              className={`w-32 h-32 ${
                countDownlight === 'red'
                  ? colors[countDownlight]
                  : 'bg-gray-500'
              } rounded-full mx-auto mt-2`}
            ></div>
          </div>
          <div className={`w-36 h-36 rounded-full bg-gray-800 `}>
            <div
              className={`w-32 h-32 ${
                countDownlight === 'yellow'
                  ? colors[countDownlight]
                  : 'bg-gray-500'
              } rounded-full mx-auto mt-2`}
            ></div>
          </div>
          <div className={`w-36 h-36 rounded-full bg-gray-800 `}>
            <div
              className={`w-32 h-32 ${
                countDownlight === 'green'
                  ? colors[countDownlight]
                  : 'bg-gray-500'
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
