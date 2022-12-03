let body = document.body
let center = document.querySelector('center')
let tasks = document.createElement('div')
let h2 = document.createElement('h2')
let input = document.createElement('input')
let plus = document.createElement('button')
let hr = document.createElement('hr')
let search = document.createElement('div')
                                // classList //
tasks.classList.add('tasks')
h2.classList.add('header')
input.classList.add('input')
plus.classList.add('add')
search.classList.add('search')
plus.innerHTML = 'Add'
h2.innerHTML = 'Todo List'
// input.setAttribute('task')
 
                                 // append //
search.append(input, plus)
center.append(h2, search, hr)
body.append(center, tasks)
                                // createElement //
plus.onclick = () => {
    let boxs = document.createElement('div')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let i = document.createElement('i')
    let box = document.createElement('div')
                                 // classList //
    boxs.classList.add('content')
    i.classList.add('bx')
    i.classList.add('bxs-x-circle')
    box.classList.add('box')
   

    h3.innerHTML = input.value
    p.innerHTML = new Date();
                                  // append //
    box.append(h3, p)
    boxs.append(box, i)
    tasks.append(boxs)

    i.onclick = () => {
        boxs.remove()
    }
}
// input.oncubmit = (event) => {
//     event.preventDefault()
//     let task = {
//         id: Math.random(),
//         time: new Date(),
//         isDone: false
//     }
//     console.log(task);
// }

