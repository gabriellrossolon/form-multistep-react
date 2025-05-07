import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'

const Steps = ({currentStep}) => {
  return (
    <div className="flex items-center justify-center w-full rounded-x shadow-md shadow-gray-600/10">
      <div className={`flex flex-col items-center justify-center flex-1 px-4 py-2 gap-1 rounded-l-xl ${currentStep >= 0 && "bg-green-800"}`}>
        <AiOutlineUser />
        <p className="font-semibold">Identificação</p>
      </div>
      <div className={`flex flex-col items-center justify-center flex-1 px-4 py-2 gap-1 ${currentStep >= 1 && "bg-green-800"}`}>
        <AiOutlineStar />
        <p className="font-semibold">Avaliação</p>
      </div>
      <div className={`flex flex-col items-center justify-center flex-1 px-4 py-2 rounded-r-xl gap-1 ${currentStep >= 2 && "bg-green-800"}`}>
        <FiSend />
        <p className="font-semibold">Envio</p>
      </div>
    </div>
  )
}

export default Steps
