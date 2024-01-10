import { BrowserRouter,Link, Route, Switch } from 'react-router-dom'
import PeopleContainer from './PeopleContainer'

function App() {
  return (<>
    <h1 className="underline">DETAILS OF VARIOUS USER</h1>
    <BrowserRouter>
      <Switch>
        <Route path="/people">
          <PeopleContainer />
        </Route>
        <Link to="/people">People</Link>
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App