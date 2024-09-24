import { Container } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function PageLayout() {
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
                    <Outlet />
                    <Footer />
                </Container>
            </div>
        </>
    )
}

export default PageLayout
