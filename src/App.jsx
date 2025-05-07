//Components
import Header from './components/Header'
import Body from './components/Body'

import { useState } from 'react'

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value }
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <Header />
      <Body data={data} updateFieldHandler={updateFieldHandler}/>
    </div>
  )
}

export default App
