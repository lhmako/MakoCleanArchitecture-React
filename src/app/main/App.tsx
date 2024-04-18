import { Lazy } from '../../lib/Lazy'
import { Home } from '../../ui';
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { homePresenter } from '..';

const queryClient = new Lazy<QueryClient>(() => new QueryClient() )

function App() {
  return (
    <QueryClientProvider client={queryClient.value}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home presenter={homePresenter.value} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
