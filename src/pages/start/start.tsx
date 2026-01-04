import StartComponent from '../../components/start/start';
import type { Dispatch } from 'react';
import type { Action } from '../../reducer/reducer';

interface StartPageProps {
  dispatch: Dispatch<Action>;
}

function StartPage({ dispatch }: StartPageProps) {
  return <StartComponent dispatch={dispatch} />;
}

export default StartPage;
