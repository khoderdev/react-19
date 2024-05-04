import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { store } from './redux/store'
import { Provider } from 'react-redux'
// import { api } from './components/posts/posts'
// import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { ChakraProvider } from '@chakra-ui/react'



  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        {/* <ApiProvider api={api}> */}
          <ChakraProvider>
            <DarkModeProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </DarkModeProvider>
          </ChakraProvider>
        {/* </ApiProvider> */}
      </Provider>
    </React.StrictMode>,
  )
// )