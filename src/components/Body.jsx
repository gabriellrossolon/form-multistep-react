
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import { useForm } from '../hooks/useForm'
import Button from './Button'
import UserForm from './UserForm'
import ReviewForm from './ReviewForm'
import Thanks from './Thanks'
import Steps from './Steps'

const Body = ({data, updateFieldHandler}) => {

  const formComponents = [
  <UserForm data={data} updateFieldHandler={updateFieldHandler}/>, 
  <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>, 
  <Thanks data={data} updateFieldHandler={updateFieldHandler}/>
  ]

  const submitForm = () => {
    alert("Obrigado, seu formulário foi enviado")
    window.location.reload();
  }

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents);

  return (
    <div className="flex flex-col items-center gap-4 shadow-[2px_2px_4px_rgba(0,0,0,0.3)] shadow-gray-700 rounded-xl p-6 bg-black/10">
      <Steps currentStep={currentStep}/>
      <form onSubmit={(e) => changeStep(currentStep + 1, e)} className="flex flex-col gap-4">
          <div className="flex items-baseline justify-center min-w-xl min-h-75">{currentComponent}</div>
          <div className="flex items-center justify-end gap-4">
            {!isFirstStep &&
              < Button text="Voltar" imageBeh={<GrFormPrevious />} type="button" onClick={(e) => changeStep(currentStep - 1, e)}/>
            }
            
            {!isLastStep ? 
            < Button text="Avançar" imageFront={<GrFormNext />} type="submit"/> :
            < Button text="Enviar" imageFront={<FiSend />} type="button" onClick={() => submitForm()}/>
            }
          </div>
        </form>
    </div>
  )
}

export default Body
