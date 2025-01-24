import { create } from 'zustand';
import styles from './index.module.scss';
import { useToDoStore } from '../../data/stories/useTodStore';
import { useEffect } from 'react';

export const App: React.FC = () => {
  // console.log(useToDoStore)

  const [
    tasks,
    createTask,
    updateTask,
    removTask,
  ] = useToDoStore(state => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removTask,
  ]);
  useEffect(()=> {
   console.log(24554545);
   createTask('dfjkdfkfdl')

  }, [])
  console.log(11, tasks);

  // createTask funksiyasini faqat bir marta chaqirish

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To do app</h1>
      <section className={styles.articleSection}>


      </section>
    </article>
  );
};
