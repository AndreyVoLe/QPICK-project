import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/')
        }, 5000)

        return () => clearTimeout(timer)
    }, [navigate])

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
            <p className="text-lg text-gray-500">
                Oops! The page you're looking for doesn't exist. You'll be
                redirected to the homepage in 5 seconds.
            </p>
        </div>
    )
}

export default NotFound
