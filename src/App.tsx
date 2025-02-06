import { PlusCircle } from "phosphor-react";

import { Header } from "./components/Header.tsx";
import { Input } from "./components/Input.tsx";
import { Button } from "./components/Button.tsx";
import { List } from "./components/List.tsx";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <main>
      <Header />
      <section className={styles.content}>

        <form className={styles.newTaskContainer}>
          <Input />
          <Button>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </form>

        <div>
          <List />
        </div>
      </section>
    </main>
  )
}
