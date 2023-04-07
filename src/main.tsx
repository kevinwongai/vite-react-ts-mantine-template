import IntlProvider from './context/intl'
import LayoutWrapper from './layouts'
import QueryClientProvider from './queries'
import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
  <QueryClientProvider>
    <IntlProvider>
      <BrowserRouter>
        <LayoutWrapper />
      </BrowserRouter>
    </IntlProvider>
  </QueryClientProvider>
</React.StrictMode>)