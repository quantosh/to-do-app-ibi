
import React, { useState } from 'react'
import Palette from './palette'
import PaletteButton from './palettebutton.jsx'

const Todo = ({ todo, toggleComplete, deleteTodo, editText, colorChooser }) => {
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

  const handleTextColor = () => {
    const options = ['bg-slate-900', 'bg-slate-700', 'bg-slate-500', 'bg-slate-400', 'bg-slate-300', 'bg-purple-700', 'bg-sky-900']
    if (options.includes(todo.color)) return 'text-white'
    return 'text-black'
  }

  return (
    <li className={todo?.completed ? 'flex text-sm justify-between p-2 mb-2 mt-2 ml-4 mr-4 bg-red-400 rounded-md border' : `flex text-sm justify-between p-2 mb-2 mt-2 ml-4 mr-4 rounded-md ${todo.color} border`}>
      <div className='flex justify-center items-center'>
        <input onChange={() => toggleComplete(todo)} type='checkbox' className='ml-2' checked={todo?.completed ? 'checked' : ''} />
        {!toggleEdit
          ? (
            <p
              onClick={handleToggleEdit} className={todo?.completed ? 'ml-4 cursor-pointer line-through' : `${handleTextColor()} ml-4 cursor-pointer`}
            >
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
