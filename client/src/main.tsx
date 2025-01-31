import { QueryClientProvider, } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import "./style/global.css"
import queryClient from './config/queryClient'
import { Provider } from 'react-redux'
import { store } from './store'


createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </>
)
