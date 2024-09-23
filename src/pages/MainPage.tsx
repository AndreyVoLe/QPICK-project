import { Container } from '@mui/material'
import Header from '../components/Header'
import MainContent from '../components/MainComponents/MainContent'
import Footer from '../components/Footer'

const MainPage = () => {
    return (
        <div className="bg-gr">
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    maxWidth: '1200px',
                    mx: 'auto',
                }}
            >
                <Header />
                <MainContent />
                <Footer />
            </Container>
        </div>
    )
}

export default MainPage
