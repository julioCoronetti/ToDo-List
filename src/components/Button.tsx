import styles from "./Button.module.css";

type Props = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

export function Button({ children, ...props }: Props) {
    return (
        <button {...props} className={styles.container} onClick={props.onClick}>
            {children}
        </button>
    )
}