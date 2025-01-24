// import { useSyncExternalStore } from "react";
import { create } from "zustand"
import { generateId } from "./helper";

interface Task {
  id: string,
  title: string,
  createdAt: number;
}

interface ToDoStore {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removTask: (id: string) => void;
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
  tasks: [{
    id: 'dklfkdlfjd',
    title: 'dfkldfdjf',
    createdAt: 556545
  }],
  createTask: (title) => {
    const { tasks } = get();
    const newTask = {
      id: generateId(),
      title,
      createdAt: Date.now(),
}
  set({
   tasks: [newTask].concat(tasks)
  })
  },
  updateTask: (id, title) => { },
  removTask: (id) => { },

}))
