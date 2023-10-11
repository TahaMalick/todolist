import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { removeTodo } from './features/todolist/todoSlice'

function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App