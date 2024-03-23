import React from 'react'
import { FloatingLogoutButton } from '../styles/SearchStyle'

type Props = {}

const LogoutButton = (props: Props) => {

    const handleLogout = () => {
        localStorage.setItem('isAuthanticated', 'false');
        window.location?.reload()
    }

    return (
        <FloatingLogoutButton onClick={handleLogout}>Logout</FloatingLogoutButton>
    )
}

export default LogoutButton