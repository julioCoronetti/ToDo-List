import styles from "./Empty.module.css";

import { Clipboard } from "phosphor-react";

export function Empty() {
    return (
        <div className={styles.content}>
            <Clipboard size={56} color="#f59780" />
            <p className={styles.paragraphEmpty}>
                <span>Você ainda não tem tarefas cadastradas</span>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </p>
        </div>
    )
}