'use strict'

// CREATE es equivalente a POST
// READ es equivalente a GET
// UPDATE es equivalente a PUT
// DELETE es equivalente a DELETE

const d = document

const input_todo = d.getElementById('input-todo')

const btn_add = d.getElementById('btn-add')

const content_w = d.getElementById('content-wrapper')

const URL = 'http://localhost:3000/data/'

//crea los li en el DOM
const printTasks = (task, id) => {

    let li = d.createElement('li')
    li.dataset.id = id
    li.textContent = task

    const btn_1 = d.createElement('button')
    const btn_2 = d.createElement('button')
    btn_1.textContent = 'Editar'
    btn_2.textContent = 'Eliminar'

    btn_1.addEventListener('click', () => {
        updateData(input_todo.value, id)

        const validacion = () =>{
            if(input_todo.value){
                sendData(input_todo.value)
            } else{
                alert("Ingrese algo valido")
            }
        }
        
    })

    btn_2.addEventListener('click', () => {
        deleteData(id)
    })

    li.append(btn_1, btn_2)
    content_w.appendChild(li)

}

//hace una peticion GET a la ULR base y con ayuda de printTasks imprime en el DOM la info dinamica
const getData = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                printTasks(element.task, element.id)
            });
        })
        .catch(error => console.error(error))
}
getData()

// hace una peticion tipo POST, se ejecuta cuando creo un elemento nuevo recibe data como parametro y lo envia
const sendData = (data) => {
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            "task" : `${data}`
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

// hace una peticion tipo PUT, se ejecuta porque esta guardada en el boton de editar que se crea con la funcion print tasks recibe como parametros task, id
const updateData = (task, id) => {
    
    fetch(URL + id, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify ({'task' : `${task}`})
    })
    .then(response => response.json()
    .then(data => console.log(data)))
}

// hace una peticion DELETE, se ejecuta porque esta guardada en el boton elimar que se crea con la funcion de print tasks, elimina por medio de id que es el parametro que estoy pasando
const deleteData = (id) => {
    fetch(URL + id, {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response.json()
    .then(data => console.log(data)))
}

btn_add.addEventListener('click', (e) => {
    sendData(input_todo.value)
})