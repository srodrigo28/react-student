import { useContext } from 'react'

import { ThemeContext } from '../../services/ThemeContext'



export function Home(){

    const { theme, toggleTheme } = useContext(ThemeContext)

    return(
        <div>
            <h1>Home</h1>
            <p>O tema atual é: { theme }</p>
        </div>
    )
}