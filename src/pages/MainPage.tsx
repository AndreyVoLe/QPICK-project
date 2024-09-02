import { Container } from '@mui/material'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
// interface IMainPage {
//     open: boolean
//     handleOpen: () => void
//     handleClose: () => void
// }
const MainPage = () => {
    return (
        <div className="bg-gr">
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
        </div>
    )
}

export default MainPage
