const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')
//dataTransfer -> En firefox si, en chorme no (contiene toda la info del objeto arrastrado)
//setData: Establece la información que queremos compartir
//getData: Establece la información que queremos obtener
pendingTasks.addEventListener('dragstart', (e) => {
    //text plain es el formato que vamos a mover - 
    e.dataTransfer.setData('text/plain', e.target.id)
})

pendingTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

pendingTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

//OBLIGATORIO, SI NO, NO FUNCIONA
finishedTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})

finishedTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    //Capturamos el id del elemento que estamos moviendo
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    finishedTasks.appendChild(pendingTasks.removeChild(element))
})

//Mover tarea de finishedTasks a pendingTasks

finishedTasks.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
})

finishedTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
}) 

finishedTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

pendingTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})

pendingTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    //Capturamos el id del elemento que estamos moviendo
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    pendingTasks.appendChild(finishedTasks.removeChild(element))
})