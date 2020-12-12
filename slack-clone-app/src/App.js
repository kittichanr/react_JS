import "./App.css"
import { useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Chat from "./components/Chat"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login"

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  )
}

export default App
