import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-8">
      <div className="flex items-center justify-center gap-8">
        <label className="flex flex-col items-center justify-center hover:text-red-500 transition-colors duration-300 ease-in-out">
          <input 
          type="radio" 
          value="unsatisfied" 
          name="review" 
          required 
          className="hidden peer"
          checked={data.review === "unsatisfied"}
          onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiFrownFill className="text-3xl peer-checked:text-red-500" />
          <p className="peer-checked:text-red-500 text-white/50">Insatisfeito</p>
        </label>
        <label className="flex flex-col items-center justify-center hover:text-yellow-500 transition-colors duration-300 ease-in-out">
          <input 
          type="radio" 
          value="neutral" 
          name="review" 
          required 
          className="hidden peer"
          checked={data.review === "neutral"}
          onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill className="text-3xl peer-checked:text-yellow-500" />
          <p className="peer-checked:text-yellow-500 text-white/50">Poderia ser melhor</p>
        </label>
        <label className="flex flex-col items-center justify-center hover:text-green-300 transition-colors duration-300 ease-in-out">
          <input 
          type="radio" 
          value="satisfied" 
          name="review" 
          required 
          className="hidden peer"
          checked={data.review === "satisfied"}
          onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiSmileFill className="text-3xl peer-checked:text-green-300" />
          <p className="peer-checked:text-green-300 text-white/50">Safisteito</p>
        </label>
        <label className="flex flex-col items-center justify-center hover:text-green-500 transition-colors duration-300 ease-in-out">
          <input 
          type="radio" 
          value="very_satisfied" 
          name="review" 
          required 
          className="hidden peer"
          checked={data.review === "very_satisfied"}
          onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill className="text-3xl peer-checked:text-green-500" />
          <p className="peer-checked:text-green-500 text-white/50">Muito satisfeito</p>
        </label>
      </div>
      <div className="flex flex-col items-start w-full">
        <label htmlFor="comment">Comentário:</label>
        <textarea 
        name="comment" 
        id="comment" 
        placeholder="Conte como foi sua experiência com o produto" 
        required 
        className="w-full min-h-20 p-2 text-gray-300 border border-gray-600/30 rounded  resize-none"
        value={data.comment || ""}
        onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
      
    </div>
  )
}

export default ReviewForm
