import SetupComponent from '../../components/setup/setup';
import type { Dispatch } from 'react';
import type { Action } from '../../reducer/reducer';

interface SetupPageProps {
  dispatch: Dispatch<Action>;
}

function SetupPage({ dispatch }: SetupPageProps) {
  return <SetupComponent dispatch={dispatch} />;
}

export default SetupPage;
