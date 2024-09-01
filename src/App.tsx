import MainPage from './pages/MainPage'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </>
    )
}

export default App
