import { create } from 'zustand'

export const useStore = create((set) => ({
  tasks:[
    {
        title:"TEST TASK",
        state:"ONGOING"
    },
  
],
addTask:(title,state)=>set((store)=>({tasks:[...store.tasks,{title,state}]})),
deleteTask:(title) => set((store)=>({
  tasks : store.tasks.filter((task) => task.title !== title)
})),

draggedTask: null,

setDraggedTask: (title) => set({ draggedTask: title }),
moveTask: (title, state) =>
  set((store) => ({
    tasks: store.tasks.map((task) =>
      task.title === title ? { title, state } : task
    ),
  })),


}))