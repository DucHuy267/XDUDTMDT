
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import HeaderComponent from './components/HeaderComponents/HeaderComponent'

function App() {

  return (
    <Fragment>
      <HeaderComponent />
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            return (
              <Route key={route.path} path={route.path} element={<Page />} />
            )
          })}
        </Routes>
      </Router>

    </Fragment>
  )
}

export default App;