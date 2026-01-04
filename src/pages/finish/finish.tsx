import FinishComponent from '../../components/finish/finish';
import type { Dispatch } from 'react';
import type { Action } from '../../reducer/reducer';

interface FinishPageProps {
  dispatch: Dispatch<Action>;
}

function FinishPage({ dispatch }: FinishPageProps) {
  return <FinishComponent dispatch={dispatch} />;
}

export default FinishPage;
