import { Container } from '@mui/material'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'

const MainPage = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Header />
            <MainContent />
            <Footer />
        </Container>
    )
}

export default MainPage
