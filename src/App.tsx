import MainPage from './pages/MainPage'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'
import LikePage from './pages/LikePage'
import PageLayout from './pages/PageLayout'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="like" element={<LikePage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
