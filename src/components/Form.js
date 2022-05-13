import { useState } from 'react';
import Button from './Button'
import { AiOutlinePlus } from 'react-icons/ai';

const Form = ({textInput, setTextInput, todos, setTodos}) => {
    const [inputAlert, setInputAlert] = useState('')

    const handleInputChange = (e) => {
        setTextInput(e.target.value)
    }

    const addTodo = (e) => {
        e.preventDefault()

        if (textInput === '') {
            setInputAlert('Please add a new todo')
        } else {
            setTodos(prevTodos => {
                return [
                    ...prevTodos, 
                    {
                        id: Math.floor(Math.random() * 1000).toString(),
                        text: textInput, 
                        complete: false
                    }
                ]
            })
            setTextInput('')
            setInputAlert('')
        }

        

    }


    return (
        <>
            <p className='input-alert'>{inputAlert === '' ? null : inputAlert}</p>
            <form className='form flex justify-between align-center p-sm' onSubmit={addTodo} >
                <div className='flex'>
                    <Button />
                    <input
                        type='text'
                        className='text-light-grey'
                        placeholder='Create a new todo...'
                        name='text'
                        value={textInput}
                        onChange={handleInputChange}
                    />
                </div>
                <button className='add-btn text-light-grey'>
                    <AiOutlinePlus />
                </button>
            </form>
        </>
    )
}

export default Form