import './index.css'
import { Route, Routes } from 'react-router-dom'
import PageLayout from './pages/PageLayout'
import MainContent from './pages/MainContent'
import LikeContent from './pages/LikeContent'
import CartContent from './pages/CartContent'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<MainContent />} />
                    <Route path="cart" element={<CartContent />} />
                    <Route path="like" element={<LikeContent />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
