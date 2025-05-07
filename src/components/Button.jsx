const Button = ({type, text, imageBeh, imageFront, onClick}) => {
  return (
    <div>
      <button className="bg-gray-700 font-semibold rounded py-2 px-4 flex items-center cursor-pointer hover:bg-green-800 transition-colors duration-300 ease-in-out" type={type} onClick={onClick}>
        {imageBeh}
        {text}
        {imageFront}
        </button>
    </div>
  )
}

export default Button
