const LabeledInput = ({htmlFor, labelText, inputType, inputName, inputPlaceholder, value, onChange}) => {
  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor={htmlFor} className="font-semibold">{labelText}</label>
        <input 
          type={inputType} 
          name={inputName} 
          placeholder={inputPlaceholder} 
          value={value}
          onChange={onChange}
          required
          className="border-2 border-gray-700 rounded px-1 py-2 shadow-md shadow-black/50"
        />
      </div>
    </div>
  )
}

export default LabeledInput
