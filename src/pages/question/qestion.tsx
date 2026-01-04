import QuestionComponent from '../../components/question/qestion';
import type { Dispatch } from 'react';
import type { Action } from '../../reducer/reducer';

interface QuestionPageProps {
  dispatch: Dispatch<Action>;
}

function QuestionPage({ dispatch }: QuestionPageProps) {
  return <QuestionComponent dispatch={dispatch} />;
}

export default QuestionPage;
