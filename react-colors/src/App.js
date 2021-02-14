import "./App.css"
import Pallete from "./Pallete"
import seedColors from "./seedColors"
import {generatePallete} from './colorHelpers'

function App() {
  return (
    <div className="App">
      <Pallete palette={generatePallete(seedColors[4])}/>
    </div>
  )
}

export default App
