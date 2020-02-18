import React from 'react';
import './QuestionsSection.scss';
import QuestionsForm from '../QuestionsForm/QuestionsForm';
import StepInfo from '../StepInfo/StepInfo';
import { useSelector } from 'react-redux';

function QuestionsSection() {
  const currentStepNumber = useSelector(state => state.formStep.currentStep);



  const currentStepInArr = useSelector(state => state.formStep.stepsInfo.filter(step => step.stepNumber === currentStepNumber));

  const currentStep = currentStepInArr[0];

  return (
    <section className='questions-section'>
      <StepInfo step={currentStep} />
      <QuestionsForm step={currentStep} />
    </section>
  )
}

export default QuestionsSection;
