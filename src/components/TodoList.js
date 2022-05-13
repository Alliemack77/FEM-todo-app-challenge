
import { useEffect, useState } from "react";
import Todo from "./Todo"

const TodoList = ({todos, setTodos, status, setStatus, filteredTodos}) => {
   const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
    }, [width])

    const clearComplete = () => {
        setTodos(prevTodos => {
            return prevTodos.filter(item => item.complete === false)
        })
    } 

    const handleStatusChange = (keyword) => {
        setStatus(keyword)
    }

    return (
        <>
            <div className='actions m-top-sm'>
                <ul>
                    {
                        filteredTodos.map(item => {
                            return <Todo 
                                        key={item.id}
                                        todo={item}
                                        todos={todos}
                                        setTodos={setTodos}
                                    />
                        })
                    }
                </ul>
                <div className='text-light-grey flex justify-between p-md'>
                    <p>{`${todos.length}`} items left</p>
                    { width > 768 &&
                            <div className='flex'>
                                <p className={`filter-btn ${status === "all" ? "active" : ""}`} onClick={() => handleStatusChange('all')}>All</p>
                                <p className={`filter-btn ${status === "active" ? "active" : ""}`} onClick={() => handleStatusChange('active')}>Active</p>
                                <p className={`filter-btn ${status === "complete" ? "active" : ""}`} onClick={() => handleStatusChange('complete')}>Complete</p>
                            </div>
                    }
                    <p className='clear-btn' onClick={clearComplete}>Clear Complete</p>
                </div>
            </div>
            { width < 768 &&
                <div className='filter text-light-grey flex justify-center p-md m-top-sm'>
                    <p className={`filter-btn ${status === "all" ? "active" : ""}`} onClick={() => handleStatusChange('all')}>All</p>
                    <p className={`filter-btn ${status === "active" ? "active" : ""}`} onClick={() => handleStatusChange('active')}>Active</p>
                    <p className={`filter-btn ${status === "complete" ? "active" : ""}`} onClick={() => handleStatusChange('complete')}>Complete</p>
                </div>
            }
        </>
    )
}

export default TodoList 