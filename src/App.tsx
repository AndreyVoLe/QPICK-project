import MainPage from './pages/MainPage'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'
import LikePage from './pages/LikePage'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/like" element={<LikePage />} />
            </Routes>
        </>
    )
}

export default App
