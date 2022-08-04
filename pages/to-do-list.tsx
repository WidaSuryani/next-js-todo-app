import React from "react";

const TodoList = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="bg-slate-50 rounded-xl shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-grey-darkest text-2xl font-bold">Todo List</h1>
                    <div className="flex mt-4">
                        <input className="shadow border rounded w-full py-2 px-3 mr-4" placeholder="Add Todo" type="text" id="new-todo" />
                        <button className="flex-no-shrink p-2 border-2 rounded border-cyan-400 hover:bg-cyan-400 hover:text-white">Add</button>
                    </div>
                </div>
                <div className="flex mb-4 items-center">
                    <p className="w-full text-gray-800">Cleaning my room</p>
                    <button className="flex-no-shrink p-2 mr-2 border-2 rounded border-green-300 hover:bg-green-300 hover:text-white">Done</button>
                    <button className="flex-no-shrink p-2 border-2 rounded border-red-400 hover:bg-red-400 hover:text-white">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default TodoList