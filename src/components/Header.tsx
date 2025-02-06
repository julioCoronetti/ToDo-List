import styles from "./Header.module.css";

import rocketLogo from "../assets/rocket.svg";

export function Header() {
    return (
        <header className={styles.container}>
            <img src={rocketLogo} alt="Logo Todo List" />
            <h1>
                <span>to</span>
                <span>do</span>
            </h1>
        </header>
    )
}