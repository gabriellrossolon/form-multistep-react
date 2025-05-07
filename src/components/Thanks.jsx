import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

const emojiData = {
  unsatisfied: {
    icon: <BsFillEmojiFrownFill />,
    color: "text-red-500",
  },
  neutral: {
    icon: <BsFillEmojiNeutralFill />,
    color: "text-yellow-500",
  },
  satisfied: {
    icon: <BsFillEmojiSmileFill />,
    color: "text-green-300",
  },
  very_satisfied: {
    icon: <BsFillEmojiHeartEyesFill />,
    color: "text-green-500",
  },
};

const Thanks = ({data, updateFieldHandler}) => {
  return (
    <div className="max-w-xl flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-semibold text-center">Falta pouco...</h2>
          <p className="text-center text-white/70">A sua opinião é muito importante, por isso você receberá um cupom de <strong>10% de desconto</strong> para a sua próxima compra!</p>
          <p className="text-white">
            Para concluir sua avaliação, clique no botão de Enviar.
          </p>
        </div>
        <div className="border border-gray-400 rounded p-2 flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Resumo da sua avaliação, {data.name}:</h3>
          <p className="text-white/70 flex items-center gap-2">
            <span className="font-semibold">Satisfação com o produto:</span>
            <div className={`text-xl ${emojiData[data.review]?.color}`}>
            {emojiData[data.review]?.icon}
            </div>
          </p>
          <p className="text-white/70 flex items-center gap-2">
            <span className="font-semibold">Comentário:</span>
            <div>
              {data.comment}
            </div>
          </p>
        </div>
    </div>
  )
}

export default Thanks
