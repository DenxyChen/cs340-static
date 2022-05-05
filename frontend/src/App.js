import './App.css';

import { useState, React} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';

import HomePage from './pages/HomePage';
import CustomersPage from './pages/CustomersPage'
import DeliverersPage from './pages/DeliverersPage'
import OrdersPage from './pages/OrdersPage'
import OrderWatersPage from './pages/OrderWatersPage'
import WatersPage from './pages/WatersPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1>The Water Store Project</h1>
        </header>

        <Navigation />

        <main>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/deliverers" element={<DeliverersPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/order-waters" element={<OrderWatersPage />} />
            <Route path="/waters" element={<WatersPage />} />
          </Routes>
        </main>

    </BrowserRouter>
    </div>
  );
}

export default App;
