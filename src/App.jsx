import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages1/Home'

import Layout from './pages1/Layout'
import ErrorPage from './pages1/ErrorPage'
import Lesstalk from './pages1/Lesstalk'
import Contact from './pages1/Contact'
import HappyCustomer from './pages1/HappyCustomer'
import ServicesCategory from './pages1/ServicesCategory'
import UiContext from './context/UiContext'

export default function App() {

  return (
    <UiContext>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lesstalk" element={<Lesstalk />} />
          <Route path="servicescategory" element={<ServicesCategory />} />
          <Route path="contact" element={<Contact />} />
          <Route path="happycustomer" element={<HappyCustomer />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </UiContext>
  )
}
