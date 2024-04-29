import { Routes, Route, } from 'react-router-dom'
import { useState, useReducer } from 'react'
import Home from './components/Home'
import Layout from './components/Layout'
import Header from './components/Header'
import Features from './components/Features'
import Users from './components/Users'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

import OrderDeliveryStatus from './components/examples/OrderDeliveryStatus';
import OrderStatusDisplay from './components/examples/OrderStatusDisplay';
import UseReducerExample from './components/examples/UseReducerExample'
import ReduxExample from './components/examples/CounterReduxExample'
import NameReduxExample from './components/examples/NameReduxExample'
import NameReduxDisplay from './components/examples/NameReduxDisplay'
import UserButtonsUpdate from './components/examples/UserButtons'
import UserDisplay from './components/examples/UserDisplay'

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/order" element={<OrderDeliveryStatus />} />
          <Route path="/status" element={<OrderStatusDisplay />} />
          <Route path="/nameRedux" element={<NameReduxExample />} />
          <Route path="/nameDisplay" element={<NameReduxDisplay nameStatus={undefined} />} />
          <Route path="/userUpdate" element={<UserButtonsUpdate />} />
          <Route path="/userDisplay" element={<UserDisplay />} />
          <Route path="/useReducer" element={<UseReducerExample />} />
          <Route path="/reduxCounter" element={<ReduxExample />} />
          <Route path='/features' element={<Features />} />
          <Route path='/users' element={<Users />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
        </Routes >
      </Layout >
    </>
  )
}
export default App
