import React from 'react';
import './QuestionsSection.scss';
import QuestionsForm from '../QuestionsForm/QuestionsForm';
import StepInfo from '../StepInfo/StepInfo';
import { useSelector } from 'react-redux';

function QuestionsSection() {
  const step = useSelector(state => state.formStep);
  return (
    <section className='questions-section'>
      <StepInfo step={step}/>
      <QuestionsForm/>
    </section>
  )
}

export default QuestionsSection;
