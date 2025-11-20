import '../App.css'

import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router'

function NotFound() {
  return (
    <>
      <div>
        <Link to="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link to="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </div>
      <h1>Vite + React - 404 Not Found</h1>
      <p className="read-the-docs">
        The page you are looking for does not exist.
      </p>
      <div>
        <Link to="/page1">Go to Page 1</Link>
      </div>
      <div>
        <Link to="/page2">Go to Page 2</Link>
      </div>
    </>
  )
}

export default NotFound