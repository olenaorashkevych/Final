import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'

import Layout from './pages/Layout'
import ErrorPage from './pages/ErrorPage'
import Lesstalk from './pages/Lesstalk'
import Contact from './pages/Contact'
import HappyCustomer from './pages/HappyCustomer'
import ServicesCategory from './pages/ServicesCategory'
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
