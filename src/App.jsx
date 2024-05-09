import './App.css'
import Column from './components/Column/Column'

function App() {

  return (
    <div className="App">
      <Column state="PLANNED" />
      <Column state="ONGOING" />
      <Column state="DONE" />

      <h1 className='note'>Drag Task to Move Column</h1>
    </div>
  )
}

export default App
