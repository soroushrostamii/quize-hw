import type { Dispatch } from 'react';
import type { Action } from '../../reducer/reducer';

interface FinishComponentProps {
  dispatch: Dispatch<Action>;
}

function FinishComponent({ dispatch }: FinishComponentProps) {
  const handleRestart = () => {
    // آپدیت state: همه را reset می‌کنیم و به start برمی‌گردیم
    dispatch({ type: 'SET_FINISH', payload: false });
    dispatch({ type: 'SET_START', payload: true });
  };

  return (
    <div>
      <h1>صفحه پایان</h1>
      <button onClick={handleRestart}>شروع مجدد</button>
    </div>
  );
}

export default FinishComponent;
