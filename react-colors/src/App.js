import "./App.css"
import Pallete from "./Pallete"
import seedColors from "./seedColors"
import { generatePallete } from "./colorHelpers"
import { Route, Switch } from "react-router-dom"

function App() {
  const findPalette = (id) => seedColors.find((palette) => palette.id === id)

  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Pallete Let Go Here!</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={({ match }) => (
          <Pallete palette={generatePallete(findPalette(match.params.id))} />
        )}
      />
    </Switch>
  )
}

export default App
