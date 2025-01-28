import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Profile from './components/Profile'
import ProductList from './components/ProductList'

function App() {

  return (
    <>
      <Switch>
        <Route exact path='/' component={Profile}/>
        <Route path='/product' component={ProductList}/>
      </Switch>

    </>
  )
}

export default App
