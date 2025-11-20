import { BrowserRouter, Route, Routes } from "react-router"

import Page1 from "./pages/page1"
import Page2 from "./pages/page2"
import NotFound from "./pages/notFound"


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/page1" element={<Page1 />}/>
      <Route path="/page2" element={<Page2 />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </BrowserRouter>
}

export default App
