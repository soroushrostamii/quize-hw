import { useState, type Dispatch } from 'react';
import type { Action } from '../../reducer/reducer';

interface SetupComponentProps {
  dispatch: Dispatch<Action>;
}

function SetupComponent({ dispatch }: SetupComponentProps) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('21');
  const [difficulty, setDifficulty] = useState('easy');
  const handleNext = () => {
    dispatch({ type: 'SET_SETUP', payload: false });
    dispatch({ type: 'SET_QUESTION', payload: true });
  };
  async function HandleFetch() {
    // console.log({ amount, category, difficulty });
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
    );
    const data = await response.json();
    console.log(data);
    handleNext();
  }

  return (
    <div className="w-full h-screen bg-indigo-900 flex flex-col items-center justify-around text-white">
      <h1>صفحه تنظیمات</h1>
      <input
        placeholder="please enter the between 1 and 50"
        type="text"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="bg-white w-1/2 py-2 px-1 text-black rounded-lg"
      />
      <select
        className="bg-white w-1/2 py-2 px-1 text-black rounded-lg"
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="21">SPORT</option>
        <option value="22">GEOGRAPHY</option>
        <option value="27">ANIMAL</option>
        <option value="25">ART</option>
      </select>
      <select
        className="bg-white w-1/2 py-2 px-1 text-black rounded-lg"
        value={difficulty}
        onChange={e => setDifficulty(e.target.value)}
      >
        <option value="easy">EASY</option>
        <option value="medium">MEDIUM</option>
        <option value="hard">HARD</option>
      </select>
      <button
        onClick={HandleFetch}
        className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md"
      >
        ادامه
      </button>
    </div>
  );
}

export default SetupComponent;
