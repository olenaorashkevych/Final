import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'

import Layout from './Pages/Layout'
import ErrorPage from './Pages/ErrorPage'
import Lesstalk from './Pages/Lesstalk'
import Contact from './Pages/Contact'
import HappyCustomer from './Pages/HappyCustomer'
import ServicesCategory from './Pages/ServicesCategory'
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
