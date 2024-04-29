import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Layout from './components/Layout'
import Header from './components/Header'
import Features from './components/Features'
import Users from './components/Users'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { NameProvider } from './contexts/NameContext';
import OrderDeliveryStatus from './components/OrderDeliveryStatus';
import OrderStatusDisplay from './components/OrderStatusDisplay';

function App() {

  return (
    <>
      <NameProvider>
        <Header />
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/order" element={<OrderDeliveryStatus />} />
            <Route path="/status" element={<OrderStatusDisplay />} />
            <Route path='/features' element={<Features />} />
            <Route path='/users' element={<Users />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
          </Routes >
        </Layout >
      </NameProvider>
    </>
  )
}

export default App
