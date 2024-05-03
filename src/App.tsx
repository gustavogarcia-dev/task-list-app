import './App.css'
import Title from './components/title'
import InputTarea from './components/inputTarea'
function App() {


  return (
      <div className="container-md">
         <div className='d-flex flex-column justify-content-center align-items-center my-3 m-auto p-2'>
          <Title titulo='Lista de tareas' />
          <InputTarea />
          <br />
        </div>
      </div>
  )
}

export default App
