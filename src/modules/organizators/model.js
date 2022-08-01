const {GETORGANIZATORS} = require('./query.js')
const {fetch, fetchAll} = require('../../lib/postgres.js')


const GET = async ({organizatorId}) =>{
    try {
        return await fetchAll(GETORGANIZATORS, organizatorId)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    GET
}