import '../App.css'

import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router'
import { useCountStore } from '../stores/countStore'

function Page2() {
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
      <h1>Vite + React - Page 2</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          <Link to="/page1">Go to Page 1</Link>
        </p>
      </div>
    </>
  )
}

export default Page2