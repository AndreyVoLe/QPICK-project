import { Container } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LikeContent from '../components/LikeContent'

const LikePage = () => {
    return (
        <>
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

                    <LikeContent />

                    <Footer />
                </Container>
            </div>
        </>
    )
}

export default LikePage
