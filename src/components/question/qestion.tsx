import type { Dispatch } from 'react';
import type { Action } from '../../reducer/reducer';

interface QuestionComponentProps {
  dispatch: Dispatch<Action>;
}

function QuestionComponent({ dispatch }: QuestionComponentProps) {
  const handleNext = () => {
    dispatch({ type: 'SET_QUESTION', payload: false });
    dispatch({ type: 'SET_FINISH', payload: true });
  };

  return (
    <div>
      <h1>صفحه سوالات</h1>
      <button onClick={handleNext}>پایان</button>
    </div>
  );
}

export default QuestionComponent;
