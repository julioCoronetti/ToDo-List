import styles from "./List.module.css";

import { Item } from "./Item.tsx";
import { Empty } from "./Empty.tsx";

import { Task } from "../App.tsx";
import { useEffect, useState } from "react";

interface ListProps {
    tasks: Task[];
    toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
    removeTask: (id: number) => void;
}

export function List({ tasks, toggleTaskStatus, removeTask }: ListProps): JSX.Element {

    const [completedTasks, setCompletedTasks] = useState<number[]>([]);

    useEffect(() => {
        const completed = tasks.filter(task => task.isCompleted).map(task => task.id);
        setCompletedTasks(completed);
    }, [tasks]);

    const handleToggleTaskStatus = ({ id, value }: { id: number; value: boolean }) => {
        toggleTaskStatus({ id, value });
        if (value) {
            setCompletedTasks([...completedTasks, id]);
        } else {
            setCompletedTasks(completedTasks.filter(taskId => taskId !== id));
        }
    };

    const handleRemoveTask = (id: number) => {
        removeTask(id);
        setCompletedTasks(completedTasks.filter(taskId => taskId !== id));
    };

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
                    tasks.map(task => {
                        return <Item
                            key={task.id}
                            id={task.id}
                            textTask={task.text}
                            isCompleted={task.isCompleted}
                            toggleTaskStatus={handleToggleTaskStatus}
                            removeTask={handleRemoveTask}
                        />
                    }) :
                    <Empty />
                }
            </ul>
        </>
    )
}