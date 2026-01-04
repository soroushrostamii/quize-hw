import type { Dispatch } from 'react';
import type { Action } from '../../reducer/reducer';

interface StartComponentProps {
  dispatch: Dispatch<Action>;
}

function StartComponent({ dispatch }: StartComponentProps) {
  const handleNext = () => {
    dispatch({ type: 'SET_START', payload: false });
    dispatch({ type: 'SET_SETUP', payload: true });
  };

  return (
    <div className="w-full h-screen bg-indigo-900 flex flex-col items-center justify-around text-white">
      <h1 className="text-4xl font-bold">صفحه شروع</h1>
      <h2 className="text-2xl font-bold">welcome to quiz</h2>
      <button
        onClick={handleNext}
        className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md"
      >
        شروع کنید
      </button>
    </div>
  );
}

export default StartComponent;
