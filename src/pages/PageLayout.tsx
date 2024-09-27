import { Container } from '@mui/material'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
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
