import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store/store'

const Header = () => {
    const cart = useSelector((state: RootState) => state.cart.cart)
    const totalQuantity = cart.reduce((total, item) => total + item.count, 0)

    const like = useSelector((state: RootState) => state.like.like)
    const totalLikes = like.reduce((total, item) => total + item.count, 0)

    return (
        <header>
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: '#EAEAEA',
                }}
            >
                <Container maxWidth={'lg'}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Link to={'/'}>
                            <Typography
                                content="h1"
                                data-text="QPICK"
                                className="qpick"
                                sx={{
                                    fontSize: 25,
                                }}
                            >
                                QPICK
                            </Typography>
                        </Link>
                        <Box sx={{ position: 'relative' }}>
                            <Link to={'/like'}>
                                <FavoriteBorderOutlinedIcon
                                    sx={{ color: '#838383' }}
                                />
                            </Link>
                            {like.length > 0 && (
                                <div className="circled likes">
                                    {totalLikes}
                                </div>
                            )}
                            <Link to={'/cart'}>
                                <ShoppingCartOutlinedIcon
                                    children={2}
                                    sx={{
                                        color: '#838383',
                                        ml: 2,
                                    }}
                                />
                            </Link>
                            {cart.length > 0 && (
                                <div className="sub circled">
                                    {totalQuantity}
                                </div>
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    )
}

export default Header
