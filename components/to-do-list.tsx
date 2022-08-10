import React, { FormEvent, useState } from 'react'
import { useStore } from '../pages/api/store/store'
import styles from '../styles/Home.module.css'
import { useForm } from 'react-hook-form'

const TodoList = () => {
  const [newItem, setNewItem] = useState('')
  const { addItem } = useStore()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      example: '',
      exampleRequired: '',
    },
  })

  const addTodo = () => {
    // e.preventDefault()
    addItem({
      id: Date.now(),
      title: newItem,
      done: false,
      // dateCreate: Date.getDate(),
    })
    setNewItem('')
  }

  console.log(Date.now)

  // console.log(watch('exampleRequired'))

  return (
    <form onSubmit={handleSubmit(addTodo)}>
      <div className="w-full flex items-center justify-center">
        <div className="bg-slate-50 rounded-xl shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest text-2xl font-bold">Todo List</h1>
            <div className="flex mt-4 mb-4">
              <input
                className="shadow border rounded w-full py-2 px-3 mr-4"
                placeholder="Add Todo"
                type="text"
                id="new-todo"
                value={newItem}
                onInput={e => setNewItem(e.currentTarget.value)}
                {...register('exampleRequired', {
                  required: true,
                  maxLength: 10,
                })}
              />
              {errors.exampleRequired && <p>This field is required</p>}
              <button
                className="flex-no-shrink p-2 border-2 rounded border-cyan-400 hover:bg-cyan-400 hover:text-white"
                type="submit"
              >
                Add
              </button>
            </div>
            <List key="item"></List>
          </div>
        </div>
      </div>
    </form>
  )
}

const List = () => {
  const { items, removeItem, toggleItem } = useStore()

  return (
    <div>
      {items.map(item => (
        <div className="flex mb-4 items-center">
          <li className={item.done ? styles.item_done : ''}>
            <input
              className="mr-2 text-xl"
              type="checkbox"
              name=""
              id=""
              checked={item.done}
              onChange={() => toggleItem(item)}
            />
            <label className="text-lg" contentEditable="true">
              {item.title}{' '}
            </label>
            {/* <label>{item.dateCreate}</label> */}
            <button
              className="flex-no-shrink p-1  ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red border-red-600 hover:bg-red-600"
              onClick={() => removeItem(item)}
              disabled={!item.done}
            >
              Remove
            </button>
          </li>
        </div>
      ))}
    </div>
  )
}

export default TodoList
