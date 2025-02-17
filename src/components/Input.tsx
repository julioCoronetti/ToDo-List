import { ChangeEvent } from "react";

import styles from "./Input.module.css"

interface InputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ value, onChange }: InputProps) {
    return (
        <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            className={styles.container}
            onChange={onChange}
            value={value}
            id="taskInput"
       />
    )
}