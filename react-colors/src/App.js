import React, { useState, useCallback, useEffect } from 'react'
import "./App.css"
import Pallete from "./Pallete"
import seedColors from "./seedColors"
import PaletteList from "./PaletteList"
import SingleColorPalette from "./SingleColorPalette"
import NewPaletteForm from "./NewPaletteForm"
import { generatePallete } from "./colorHelpers"
import { Route, Switch } from "react-router-dom"

function App() {

  const savePalettes = JSON.parse(window.localStorage.getItem('palettes'))
  const [palettes, setPalettes] = useState(savePalettes || seedColors)

  const findPalette = (id) => palettes.find((palette) => palette.id === id)

  const savePalette = useCallback((newPalette) => {
    setPalettes([...palettes, newPalette])
  }, [palettes])

  const deletePalette = (id) => setPalettes(palettes.filter(palette => palette.id !== id))

  useEffect(() => {
    syncLocalStorage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [palettes])

  const syncLocalStorage = useCallback(
    () => window.localStorage.setItem('palettes', JSON.stringify(palettes)
    ), [palettes])

  return (
    <Switch>
      <Route
        exact
        path="/palette/new"
        render={(routeProps) => <NewPaletteForm {...routeProps} palettes={palettes} savePalette={savePalette} />}
      />

      <Route
        exact
        path="/"
        render={(routeProps) => (
          <PaletteList palettes={palettes} deletePalette={deletePalette} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={({ match }) => (
          <Pallete palette={generatePallete(findPalette(match.params.id))} />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={({ match }) => (
          <SingleColorPalette
            colorId={match.params.colorId}
            palette={generatePallete(findPalette(match.params.paletteId))}
          />
        )}
      />
    </Switch>
  )
}

export default App
