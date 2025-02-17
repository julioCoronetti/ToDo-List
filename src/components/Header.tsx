import styles from "./Header.module.css";

import listChecks from "../assets/list-checks.svg";

export function Header() {
    return (
        <header className={styles.container}>
            <img src={listChecks} alt="Logo Todo List" />
            <h1>
                <span>To</span>
                <span>Do</span>
            </h1>
        </header>
    )
}