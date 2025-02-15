import { useState } from "react";

import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header.tsx";
import { Input } from "./components/Input.tsx";
import { Button } from "./components/Button.tsx";
import { List } from "./components/List.tsx";

import styles from "./App.module.css";

import "./global.css";

export interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [newTaskText, setNewTaskText] = useState('');

  const toggleTaskStatus = ({ id, value }: { id: number; value: boolean }) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isCompleted: value } : task
    ));
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  function handleNewTask(event: React.FormEvent) {
    event.preventDefault();
    if (newTaskText.trim() === '') {
      alert("Insira um texto para a tarefa!");
      return;
    }
    const newTask = {
      id: tasks.length + 1,
      text: newTaskText,
      isCompleted: false
    }
    setTasks([...tasks, newTask]);
    setNewTaskText('');
    console.log(tasks);
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>

        <form onSubmit={handleNewTask} className={styles.newTaskContainer}>
          <Input onChange={handleNewTaskChange} value={newTaskText} />
          <Button type="submit">
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </form>

        <div>
          <List tasks={tasks} toggleTaskStatus={toggleTaskStatus} removeTask={removeTask} />
        </div>
      </section>
    </main>
  )
}
