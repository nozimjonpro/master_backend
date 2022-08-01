const model = require('./model.js')


const GET = async (req, res) => {
    try {
        let organizators = await model.GET(req.params)
        if(organizators){
            res.status(200).json({
                status: 200,
                message: 'ok',
                data: organizators
            })
        }else{
            res.status(401).json({
                status: 401,
                message: 'client error',
                data: null
            })
        }
    } catch (error) {
      console.error(error);  
    }
}

module.exports = {
    GET
}