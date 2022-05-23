import React from 'react'
import ReactDOM from 'react-dom'
import MultiStep from './index'
import StepOne from './components/Steps/stepOne'
import StepTwo from './components/Steps/stepTwo'
import StepThree from './components/Steps/stepThree'
import StepFour from './components/Steps/stepFour'

const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
  { component: <StepFour /> }
]

// custom styles
const prevStyle = { background: '#33c3f0' }
const nextStyle = { background: '#33c3f0' }

const App = () => (
  <div className='container'>
    <MultiStep activeStep={0} steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
