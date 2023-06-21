import { Link } from 'react-router-dom'
import { useContext } from 'react'
import classes from './MainNavigation.module.css'
import FavoritesContext from '../../stored/favorites-context'

function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All MeetUps</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New MeetUp</Link>
          </li>
          <li>
            <Link to='/favorites'>
              Favorites
              <span className={classes.badge}>
                {favoriteCtx.totalFavorites}
              </span>
            </Link>
          </li>
          <li>
            <Link to='/todo'>Todo</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
