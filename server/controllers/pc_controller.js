const pc_service = require('../service/pc_service')

class PcController {

    async GetAllPc(req, res, next) {
        try {
            res.json(await pc_service.GetAllPc())
        } catch (e) { 
            console.log(e)
        }
    }

    async AddPc(req, res, next) {
        try {
            res.json(await pc_service.AddPc(req))
        } catch (e) {
            console.log(e)
        }
    }
    async DeletePc(req, res, next) {
        try {
            res.json(await pc_service.DeletePc(req))
        } catch (e) {
            res.json({ "error": "EXCEPTION" })
        }
    }
    async UpdatePc(req, res, next) {
        try {
            res.json(await pc_service.UpdatePc(req))
        } catch (e) {
            res.json({ "error": "EXCEPTION" })
        }
    }
}



module.exports = new PcController()