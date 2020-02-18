const {
    get
} = require('axios')

const URL = `https://swapi.co/api/people`

async function obterPessoas(nome) {
    const url = `${URL}/?serach=${nome}&format`
    const result = await get()
}