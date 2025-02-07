import styles from "./List.module.css";

import { Item } from "./Item.tsx";
import { Empty } from "./Empty.tsx";

export function List() {
    const tasks = [1, 2, 3, 4, 5, 6, 7];
    const completedTasks = []; // só pra testar

    return (
        <>
            <header className={styles.infoListContainer}>
                <div>
                    <span>Tarefas criadas</span>
                    <span>{tasks.length}</span>
                </div>

                <div>
                    <span>Concluídas</span>
                    <span>{
                        (tasks.length > 0 ?
                            `${completedTasks.length} de ${tasks.length}` :
                            tasks.length)}
                    </span>
                </div>
            </header>

            <ul className={styles.listContainer}>
                {tasks.length > 0 ?
                    tasks.map(() => {
                        return <Item />
                    }) :
                    <Empty />
                }
            </ul>
        </>
    )
}