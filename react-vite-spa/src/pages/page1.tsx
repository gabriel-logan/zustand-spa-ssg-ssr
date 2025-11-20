import '../App.css'

import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router'
import { useCountStore } from '../stores/countStore'

function Page1() {
  const { count, setCount } = useCountStore()

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
      <h1>Vite + React - Page 1</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          <Link to="/page2">Go to Page 2</Link>
        </p>
      </div>
    </>
  )
}

export default Page1
