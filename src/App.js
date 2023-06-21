import { Route, Switch } from 'react-router-dom'

import AllMeetUpPage from './pages/AllMeetups'
import NewMeetUpPage from './pages/NewMeetup'
import FavoritesPage from './pages/Favorites'
import Layout from './components/layout/Layout'

import Todo from './components/Todo'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetUpPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetUpPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
        <Route path='/todo'>
          <h1>My Todos</h1>
          <Todo title='t1' />
          <Todo title='t2' />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
