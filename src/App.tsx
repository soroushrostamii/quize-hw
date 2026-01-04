import { useReducer } from 'react';
import { initialStatePage, reducerPage } from './reducer/reducer';
import StartPage from './pages/start/start';
import SetupPage from './pages/setup/setup';
import QuestionPage from './pages/question/qestion';
import FinishPage from './pages/finish/finish';

function App() {
  const [state, dispatch] = useReducer(reducerPage, initialStatePage);
  return (
    <>
      {state.start && <StartPage dispatch={dispatch} />}
      {state.setup && <SetupPage dispatch={dispatch} />}
      {state.question && <QuestionPage dispatch={dispatch} />}
      {state.finish && <FinishPage dispatch={dispatch} />}
    </>
  );
}

export default App;
