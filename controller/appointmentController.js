const userModel = require('../models/appointmentModels')

//CREATE-POST Method
const createAppointment = async (req, res) => {
    const {body} = req;
    try {
        await userModel.createAppointment(body);
        res.json({
            message: "Succesfully Add Data",
            data: body
        })
    } catch (error) {
        res.json({
            message: Error
        })
    }
}

//READ-GET Method
const getAllAppointment = async(req, res) => {
    const [data] = await userModel.getAllAppointment();
    try {
        res.json({
            message: "Succesfully Show Data",
            data: data
        })
    } catch (error) {
        res.json({
            message: Error
        })
    }
}

//UPDATE-PATCH Method
const updateAppointment = async(req, res) => {
    const {body} = req;
    const {idAppointment} = req.params;
    try {
        await userModel.updateAppointment(body, idAppointment);
        res.json({
            message: "Succesfully Update Data",
            data: body
        })
    } catch (error) {
        res.json({
            message: Error
        })
    }
}

//DELETE-PATCH Method
const deleteAppointment = async(req, res) => {
    const {idAppointment} = req.params;
    try {
        await userModel.deleteAppointment(idAppointment);
        res.json({
            message: "Succesfully Delete Data"
        })
    } catch (error) {
        res.json({
            message: Error
        })
    }
}

module.exports = {
    createAppointment,
    getAllAppointment,
    updateAppointment,
    deleteAppointment
}