import { useCallback, useState } from 'react';
import { MyTitle } from './ui/MyTitle';
import { MySubtitle } from './ui/MySubtitle';

export const MemoHook = () => {
  const [title, setTitle] = useState('Hello');
  const [subtitle, setSubtitle] = useState('Benito');

  const handleMyAPICall = useCallback(() => {
    console.log('Call my API -', subtitle);
  }, [subtitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>
      <MyTitle title={title} />
      <MySubtitle subtitle={subtitle} callMyAPI={handleMyAPICall} />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle('Hello' + new Date().getTime())}
      >
        Change Title
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        // onClick={() => setTitle('World' + new Date().getTime())}
        onClick={() => setSubtitle("World")}
      >
        Change SubTitle
      </button>
    </div>
  );
};
