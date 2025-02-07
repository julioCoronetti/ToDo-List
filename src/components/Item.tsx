import { Check, Trash } from "phosphor-react"

import styles from "./Item.module.css"

export function Item() {

    return (

        <li className={styles.container}>
            <label htmlFor="checkbox">
                <input type="checkbox" />
                <span className={`${styles.checkBox} ${styles['checkbox-checked']}`}>
                    {<Check size={12} />}
                </span>
            </label>
            <p className={`${styles.paragraph} ${styles['paragraph-checked']}`}>
                Item
            </p>
            <button>
                <Trash size={16} color="#808080" />
            </button>
        </li>
    )
}