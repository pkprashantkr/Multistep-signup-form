import React, { useState } from 'react';
import { StepperContext } from './contexts/StepperContext';
import Stepper from './components/Stepper';
import StepperControl from './components/StepperControl';
import Account from './components/steps/Account';
import Details from './components/steps/Details';
import Final from './components/steps/Final';

const App = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('')
  const [finalData, setFinalData] = useState([])
  

  const steps = [
    "Account Info.",
    "Personal Details",
    "Complete"
  ];

  const displayStep = (step) => {
    switch(step) {
      case 1:
        return <Account />
      
      case 2:
        return <Details />
        
      case 3:
              return <Final />
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  return (
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-1 bg-white mt-32 px-4 py-3' >
      {/* Stepper */}
      <div className= "container horizontal mt-5 ">
        <Stepper 
          steps = {steps}
          currentStep = {currentStep}
        />

    <div className='my-`0 p-10'>
      <StepperContext.Provider value={{
        userData,
        setUserData,
        finalData,
        setFinalData
      }}>
        {displayStep(currentStep)}
      </StepperContext.Provider>
    </div>

      </div>

      {/* Navigation Controls */}
      {currentStep !== steps.length && 
      <StepperControl 
        handleClick= {handleClick}
        currentStep= {currentStep}
        steps= {steps}
      />
      }
    </div>
  )
}

export default App