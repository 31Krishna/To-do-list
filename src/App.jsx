import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setMainTask] = useState([]);
  const [isLightTheme, setIsLightTheme] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault()

    setTitle("")
    setDesc("")
    setMainTask([...maintask, { title, desc }]);
    console.log(maintask)
  }
  const deleteHandler = (i) => {
    let copyTask = [...maintask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  const toggleBackground = () => {
    setIsLightTheme(prevTheme => !prevTheme);
  };


  let renderTask = <h2 className='font-semibold text-xl text-black select-none  hover:text-zinc-500'>No task available</h2>
  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <li className='flex items-center justify-between mb-8 '>
          <div className='flex justify-between w-1/2  '>
            <h5 className='text-2xl font-medium capitalize select-none text-zinc-500 hover:text-black '>{t.title}</h5>
            <h6 className='text-2xl font-medium capitalize select-none text-zinc-500 hover:text-black'>{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i)
            }}
            className='bg-red-600 text-white px-3 py-1 rounded-xl  select-none hover:scale-[1.2] hover:bg-red-400 transistion-all ease-linear duration-200  '>Delete</button>
        </li>)
    })

  }

  return (
    <div className={`gap-3 pt-7 min-h-screen ${isLightTheme ? 'bg-white' : 'bg-black'}`}>
      <div className='text-center mt-6 flex max-w-screen-xl mx-auto w-2/3'>
        <h1 className=' text-zinc-500 text-center font-bold text-5xl  max-w-screen-xl mx-auto select-none hover:text-black  transition-all ease-linear duration-200 '>Todo List</h1>
        <button
          onClick={toggleBackground}
          className='px-3 py-1 rounded-xl select-none bg-indigo-600 text-white hover:scale-[1.2] hover:bg-indigo-400 transition-all ease-linear duration-200'>Badlooooo</button>
      </div>

      <form onSubmit={submitHandler}>
        <div className='mx-auto text-center mt-6 flex justify-center items-center flex-col'>
          <input
            className='text-2xl border-zinc-600 border-4 rounded-xl m-8 px-4 py-3 w-1/2 mt-6 select-none  '
            type='text' placeholder='Enter the task '
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}>

          </input>
          <input
            className='text-2xl border-zinc-600 border-4 rounded-xl m-8 px-4 py-3 w-1/2  items-center justify-between select-none tracking-tight leading-none'
            type='text' placeholder='Enter the Description '
            required
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value)
            }}>

          </input>
          <button className=' px-3 py-2 rounded-xl bg-sky-600 text-xl w-1/6 text-white items-center justify-between hover:scale-110 hover:bg-sky-400 transition-all ease-linear duration-200 select-none'>Add Task</button>

        </div>




      </form>

      <div className='p-8 bg-slate-200 mt-9 text-center capitalize rounded-xl max-w-screen-xl mx-auto w-1/2 '>
        <ul>
          {renderTask}
        </ul>

      </div>



    </div>
  )
}

export default App