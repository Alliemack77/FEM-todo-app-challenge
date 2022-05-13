import Button from "./Button"
import closeIcon from '../images/icon-cross.svg'

const Todo = ({todo, todos, setTodos}) => {

    const handleComplete = () => {
        setTodos(prevTodos => {
            return prevTodos.map(item => item.id === todo.id ? {...item, complete: !item.complete} : item)
        })
    }

    const handleDelete = () => {
        setTodos(prevTodos => {
            return prevTodos.filter(item => item.id !== todo.id)
        })
    }

    return (
        <li className='list-item flex justify-between align-center p-md'>
            <div className='flex align-center' onClick={handleComplete} >
                <Button clickable checked={todo.complete} />
                <p className={`title fw-400 ${todo.complete ? 'complete' : ''}`}>{todo.text}</p>
            </div>
            <img className='close-btn' src={closeIcon} onClick={handleDelete} alt='delete task'/>
        </li>
    )
}

export default Todo