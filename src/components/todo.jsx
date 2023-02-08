
import React, { useState } from 'react'
import Palette from './palette'
import PaletteButton from './palettebutton.jsx'

const Todo = ({ todo, toggleComplete, deleteTodo, key, editText, colorChooser }) => {
  const [showPalette, setShowPalette] = useState(false)
  const [toggleEdit, setToggleEdit] = useState(false)
  const [input, setInput] = useState(todo.text)

  const handleShowPalette = () => {
    setShowPalette(!showPalette)
  }

  const handleToggleEdit = () => {
    setInput(todo.text)
    setToggleEdit(!toggleEdit)
  }

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleEditText = (e) => {
    const newTodo = { ...todo, text: input }
    editText(newTodo)
    setInput('')
    setToggleEdit(false)
  }

  return (
    <li key={key} className={todo?.completed ? 'flex text-sm justify-between p-2 mb-2 mt-2 ml-4 mr-4 bg-red-300/40 rounded-md backdrop-blur-sm' : 'flex text-sm justify-between p-2 mb-2 mt-2 ml-4 mr-4 bg-[#FFFFFF]/40 shadow-xl hover:bg-[#F5F5F5]/80 rounded-md backdrop-blur-sm'}>
      <div className='flex justify-center items-center'>
        <input onChange={() => toggleComplete(todo)} type='checkbox' className='ml-2' checked={todo?.completed ? 'checked' : ''} />
        {!toggleEdit
          ? (
            <p onClick={handleToggleEdit} className={todo?.completed ? 'ml-4 cursor-pointer line-through' : 'ml-4 cursor-pointer'}>
              {todo.text}
            </p>
            )
          : (
            <div className='flex ml-4'>
              <input
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleEditText()
                  }
                }}
                value={input}
                onChange={handleInput}
                className='flex border p-2 text-sm w-80'
                type='text'
                placeholder='Task need to contain something'
              />
              <button onClick={handleEditText} className='border p-2 ml-2 bg-slate-300 text-slate-100'>
                ✔
              </button>
              <button type='button' onClick={handleToggleEdit} className='border p-2 ml-2 bg-slate-300 text-slate-100'>
                ❌
              </button>
            </div>
            )}
      </div>
      <div className='flex gap-1'>
        <PaletteButton
          color={todo.color}
          handleClick={handleShowPalette}
        />
        <div className='relative'>
          <Palette showPalette={showPalette} handleShowPalette={handleShowPalette} todo={todo} colorChooser={colorChooser} />
        </div>
        <button className='mr-2' onClick={() => deleteTodo(todo.id)}>🗑</button>
      </div>
    </li>
  )
}

export default Todo
