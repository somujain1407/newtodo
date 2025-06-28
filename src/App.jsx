import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import headerbg from "./To-do list header img.jpg"
import todobackground from "./todo-background.jpg"
import whitebg2 from "./todo-list white bg.jpg"
import Todologinpage from './Todologinpage';



function App() {

  // function showurl(){
  //   alert("current url:" + window.location.href)
  // }

  // function realoadpage(){
  //   location.reload()
  // }

  // function redireactpage(){
  //   location.assign("hTtps://deepdataindia.com")
  // }

  // const [count, setCount] = useState(0)
  const [on, setOn] = useState("Pending")
  const [colo, setColo] = useState({ color: "red" })

  const [text, setText] = useState("")
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  const [st, setst] = useState(0)


  const [n1, setn1] = useState([])
  const [newbtn, setnewbtn] = useState("panding")
  const [trash1, settrash1] = useState([])

  const [arr, setarr] = useState([])




  const pp = () => {



    setText("")
    setTime("")
    const s = [...arr, { task: text, time, st }]


    setarr(s)
    localStorage.setItem("key", JSON.stringify(s))


  }


  const del = (item) => {
    console.log(`${item.task}and index is ${item.time}`)
    const sd = arr.filter((im) => (im.time || im.task) != (item.time || item.task))
    setarr(sd)


  }



  // ---------------------------
  function fn1(item) {
    const sd = [...n1, item]
    setn1(sd)


  }

  function fn2(item) {
    const st = n1.filter((ite) => ite.task != item.task)
    const sd = [...st]
    setn1(sd)
  }

  function final(item) {
    if (newbtn == "panding") {
      setnewbtn("complete")
      fn1(item)


    }

    else {
      setnewbtn("panding")
      fn2(item)
    }
  }

  function trash(item, index) {

    const arr1 = arr.filter((it) => it.task != item.task)
    const ar = [...arr1]
    setarr(ar)
    localStorage.setItem("key", JSON.stringify(ar))

  }

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("key"))

    if (auth) {

      setarr(auth)
    }
  });

  return (
    <div className='bg1'>

      {/* <div className="js-div">
        <button onClick={showurl}>show current url</button>
        <button onClick={realoadpage}>reload</button>
        <button onClick={redireactpage}>go to exaple.com</button>
      </div> */}





      <div className='md'>
        <div className="main-ToDo">

          <img id="img1" src={headerbg} alt="" />
          <h1 id='head'>ToDO List</h1>


          <div className="part-1">

            <input id='search' type="search" value={text} placeholder='What would you like to do?' onChange={(e) => setText(e.target.value)} />
            <input id='time' type="time" value={time} placeholder='Enter Your To-do Time' onChange={(e) => setTime(e.target.value)} />
            <button id='click' onClick={pp}>Add</button>
          </div>


          <div className="part-2">

            <div className="task">

              <h1 id='head-2'>Todo List</h1>




              <div className='list'>

                <ul class="list-group list-group-flush">


                  <li class="list-group-item ml"><div className='item-task'>Task</div>  <span>Time</span>   <span>Status</span>  <span>Delete</span> </li>



                  {arr.map((item, index) => <li class="list-group-item ml" style={{ backgroundColor: n1.some((ie) => ie.task == item.task) ? "red" : "green" }}><span className='abc'>{item.task}</span><span className='cd'>{item.time}</span><button className='de' onClick={() => { final(item) }}>{n1.some((ie) => ie.task == item.task) ? "panding" : "complete"} </button>
                    <button className='ef' onClick={() => trash(item, index)}>Delete</button>
                  </li>)}


                </ul>




              </div>

            </div>





          </div>


        </div>


      </div>



    </div>


  )
}

export default App
