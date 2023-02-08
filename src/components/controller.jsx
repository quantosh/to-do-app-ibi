import React, { useState, useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Todo from './todo'
import { db } from '../services/firebase'
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc
} from 'firebase/firestore'
import Spinner from './spinner'

const style = {
  container: '',
  heading: 'text-2xl font-bold text-center mt-2 mb-2',
  form: 'flex justify-between mt-2 ml-4 mr-4',
  input: 'border p-3 w-full text-sm mt-4 backdrop-blur-sm bg-white/40 border border-white/40 rounded-md',
  button: 'border p-2 ml-2 mt-4 mr-4 backdrop-blur-sm bg-white/40 border border-white/40 rounded-md',
  count: 'text-center text-xs p-2'
}

function Controller () {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault(e)
    if (input === '') {
      window.alert('Please enter a valid tasks title')
      return
    }
    setLoading(true)
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false
    })
    setLoading(false)
    setInput('')
  }

  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
        // console.log(doc)
      })
      setTodos(todosArr)
    })
    return () => unsubscribe()
  }, [])

  // Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

  const editText = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      text: todo.text
    })
  }

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  // Color Chooser
  const colorChooser = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      color: todo.color
    })
  }

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <form onSubmit={createTodo} className={style.form}>
          {
            loading
              ? (
                <Spinner />
                )
              : (
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className={style.input}
                  type='text'
                  placeholder='Add Task'
                />
                )
          }
          <button className={style.button}>
            <AiOutlinePlus size={20} />
          </button>
        </form>
        <ul className=' overflow-y-auto h-[63vh] '>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              editText={editText}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              colorChooser={colorChooser}
            />
          ))}
        </ul>
        {todos.length < 1
          ? null
          : (
            <p className={style.count}>{`You have ${todos.length} todos`}</p>
            )}
      </div>
    </div>
  )
}

export default Controller
