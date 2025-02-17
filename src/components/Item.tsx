import { Check, Trash } from "phosphor-react"

import styles from "./Item.module.css"

interface ItemProps {
    id: number;
    textTask: string;
    isCompleted: boolean;
    toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
    removeTask: (id: number) => void
}

export function Item({ id, textTask, isCompleted, toggleTaskStatus, removeTask }: ItemProps): JSX.Element {

    function handleTaskToggle() {
        toggleTaskStatus({ id, value: !isCompleted })
    }

    const checkboxCheckedClassname = isCompleted
        ? styles['checkbox-checked']
        : styles['checkbox-unchecked'];
    const paragraphCheckedClassname = isCompleted
        ? styles['paragraph-checked']
        : '';

    function handleRemove() {
        removeTask(id);
    }

    return (

        <li className={styles.container} key={id}>
            <label htmlFor={`checkbox-${id}`}>
                <input
                    type="checkbox"
                    id={`checkbox-${id}`}
                    checked={isCompleted}
                    onChange={handleTaskToggle}
                />
                <span className={`${styles.checkBox} ${checkboxCheckedClassname}`}>
                    {isCompleted && <Check size={12} color="#ffffff" />}
                </span>
            </label>
            <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                {textTask}
            </p>
            <button onClick={handleRemove}>
                <Trash size={20} color="#e9532e" />
            </button>
        </li>
    )
}