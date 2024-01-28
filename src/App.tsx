import React, { useState } from 'react'
import './App.css'
import { TaskType, TodoList } from './TodoList'
import { v1 } from 'uuid'

export type FilterValueType = 'all' | 'completed' | 'active'

function App() {
	let [tasks, setTasks] = useState<Array<TaskType>>([
		{ id: v1(), title: 'HTML&CSS', isDone: true },
		{ id: v1(), title: 'JS', isDone: true },
		{ id: v1(), title: 'ReactJS', isDone: false },
		{ id: v1(), title: 'Rest API', isDone: true },
		{ id: v1(), title: 'GraphQl', isDone: false },
	])

	let [filter, setFilter] = useState<FilterValueType>('all')

	function removeTask(id: string) {
		let filteredTasks = tasks.filter(t => t.id !== id)
		setTasks(filteredTasks)
	}

	function changeFilter(value: FilterValueType) {
		setFilter(value)
	}

	function addTask(title: string) {
		let newTask = { id: v1(), title: title, isDone: false }
		let newTasks = [newTask, ...tasks]
		setTasks(newTasks)
	}

	let taskForToDoList = tasks
	if (filter === 'completed') {
		taskForToDoList = tasks.filter(t => t.isDone === true)
	}
	if (filter === 'active') {
		taskForToDoList = tasks.filter(t => t.isDone === false)
	}
	return (
		<div className='App'>
			<TodoList
				title='What to learn'
				tasks={taskForToDoList}
				removeTask={removeTask}
				changeFilter={changeFilter}
				addTask={addTask}
			/>
		</div>
	)
}

export default App
