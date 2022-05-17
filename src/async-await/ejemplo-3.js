'use strict'

const getData = async () => {
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
    } catch (error) {
        console.error(error);
    }
}

getData()