import LabeledInput from "./LabeledInput"

const UserForm = ({data, updateFieldHandler}) => {
  return (
    <div className="w-full flex flex-col gap-2 mb-4">

      <LabeledInput 
      htmlFor={"name"} 
      labelText={"Nome:"} 
      inputType={"text"} 
      inputName={"name"} 
      inputPlaceholder={"Digite seu nome"} 
      value={data.name || ""}
      onChange={(e) => updateFieldHandler("name", e.target.value)}
      />

      <LabeledInput 
      htmlFor={"email"} 
      labelText={"E-mail:"} 
      inputType={"email"} 
      inputName={"email"} 
      inputPlaceholder={"Digite seu e-mail"} 
      value={data.email || ""}
      onChange={(e) => updateFieldHandler("email", e.target.value)}
      />
    </div>
  )
}

export default UserForm
