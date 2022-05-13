import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'
import './scss/main.scss';
import { useEffect, useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [textInput, setTextInput] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    const handleFilter = () => {
      switch (status) {
        case 'complete':
          setFilteredTodos(todos.filter(item => item.complete === true))
          break
        case 'active':
          setFilteredTodos(todos.filter(item => item.complete === false))
          break
        default:
          setFilteredTodos(todos)
      }
    }
    handleFilter()
  }, [todos, status])


  return (
    <div className={`wrapper ${isDarkMode ? 'dark' : 'light'}`}>
      <div className='container'>
        <Header 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode}
        />
        <Form 
          textInput={textInput}
          setTextInput={setTextInput}
          todos={todos}
          setTodos={setTodos}
          />
        <TodoList 
          todos={todos}
          setTodos={setTodos}
          status={status}
          setStatus={setStatus}
          filteredTodos={filteredTodos}
          />
      </div>
    </div>
  );
}

export default App;
