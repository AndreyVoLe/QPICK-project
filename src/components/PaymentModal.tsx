import { useEffect, useState } from 'react'
import { Modal, Box, Button, TextField, Typography } from '@mui/material'
interface IPay {
    onOpen: boolean
}

const PaymentModal = (props: IPay) => {
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardHolder: '',
    })

    const handleClose = () => setOpen(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(formData)
        handleClose()
    }
    useEffect(() => {
        if (props.onOpen) {
            setOpen(true)
        }
    }, [props.onOpen])

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="payment-modal-title"
                aria-describedby="payment-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography
                        id="payment-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Форма оплаты
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Номер карты"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Срок действия"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="CVV"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Имя держателя карты"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            name="cardHolder"
                            value={formData.cardHolder}
                            onChange={handleChange}
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Оплатить
                        </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default PaymentModal
