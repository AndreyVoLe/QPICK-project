import { Container } from '@mui/material'
import CartContent from '../components/CartContent'
import Footer from '../components/Footer'
import Header from '../components/Header'

const CartPage = () => {
    return (
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
    )
}

export default CartPage
