import { Container } from '@mui/material'
import CartContent from '../components/CartComponents/CartContent'
import Footer from '../components/Footer'
import Header from '../components/Header'

const CartPage = () => {
    return (
        <div className="bg-gr">
            <Container
                maxWidth={'lg'}
                sx={{
                    display: 'grid',
                    gridTemplateRows: 'auto 1fr auto',
                    minHeight: '100vh',
                }}
            >
                <Header />

                <CartContent />

                <Footer />
            </Container>
        </div>
    )
}

export default CartPage
