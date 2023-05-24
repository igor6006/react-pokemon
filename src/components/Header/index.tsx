import logo from "../../assets/logoPokemon.svg"
import styles from "./index.module.css"
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header className={styles.header}>
                <nav className={styles.navbar}>
                    <div className={styles.container}>
                        <div className={styles.logo}>
                            <img className={styles.img} src={logo} alt="Logo principal do sistema" />
                        </div>
                        <div className={styles.nav_elements}>
                            <ul>
                            <li><NavLink to="/"> Home</NavLink></li>
                            <li><NavLink to="/dsagh">Pokédex</NavLink></li>
                            <li><NavLink to="/dsadf">Legendaries</NavLink></li>
                            <li><NavLink to="/dsas">Documentation</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </header>
    )
}