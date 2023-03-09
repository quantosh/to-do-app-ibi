import React, { useState, useEffect, useContext } from 'react'
import Todo from './todo'
import { db } from '../services/firebase'
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  orderBy,
  addDoc,
  deleteDoc,
  serverTimestamp
} from 'firebase/firestore'
import Spinner from './spinner'
import { AppContext } from '../Context/AppProvider'

const style = {
  container: '',
  heading: 'text-2xl font-bold text-center mt-2',
  form: 'flex justify-between ml-2 p-2',
  input: 'border p-3 w-full text-sm backdrop-blur-sm rounded-md mr-2 ',
  count: 'text-center text-xs p-2'
}

function Controller () {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const { appState } = useContext(AppContext)
  const { uid } = appState?.userData

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault(e)
    if (input === '') {
      window.alert('Please enter a valid tasks title')
      return
    }
    setLoading(true)
    await addDoc(collection(db, `${uid}/todos/todoList`), {
      text: input,
      completed: false,
      timestamp: serverTimestamp()
    })
    setLoading(false)
    setInput('')
  }

  // Read todo from firebase
  useEffect(() => {
    if (!uid) return
    const q = query(collection(db, `${uid}/todos/todoList`), orderBy('timestamp', 'desc'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
        // console.log(doc)
      })
      setTodos(todosArr)
    })
    return () => unsubscribe()
  }, [uid])

  // Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, `${uid}/todos/todoList`, todo.id), {
      completed: !todo.completed
    })
  }

  const editText = async (todo) => {
    await updateDoc(doc(db, `${uid}/todos/todoList`, todo.id), {
      text: todo.text
    })
  }

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, `${uid}/todos/todoList`, id))
  }

  // Color Chooser
  const colorChooser = async (todo) => {
    await updateDoc(doc(db, `${uid}/todos/todoList`, todo.id), {
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
                  placeholder='Write something'
                />
                )
          }
          <button className='mr-2 text-white text-sm bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded px-5 text-center'>Add task</button>
        </form>
        <ul className='h-[85vh] overflow-y-auto'>
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
