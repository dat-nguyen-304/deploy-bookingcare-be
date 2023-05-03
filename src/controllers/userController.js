import db from "../models/index";
import userService from "../services/userService";


let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing input parameters'
        })
    }
    let userData = await userService.handleLogin(email, password);
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user
    })
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            users: []
        })
    }
    let users = await userService.getAllUsers(id);
    return res.status(200).json({
        errCode: 0,
        errorMessage: 'OK',
        users
    })
}

let handleCreateUser = async (req, res) => {
    let message = await userService.createUser(req.body);
    console.log(message);
    return res.status(200).json(message);
}

let handleEditUser = async (req, res) => {
    let message = await userService.updateUser(req.body);
    console.log(message);
    return res.status(200).json(message);
}

let handleDeleteUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(500).json({
            errCode: 1,
            errMessage: 'No input paramter'
        })
    }
    let message = await userService.deleteUser(req.body.id);
    return res.status(200).json(message);
}

let getAllCode = async (req, res) => {
    try {
        let allcodes = await userService.getAllCode(req.query.type);
        return res.status(200).json(allcodes);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Error from server'
        })
    }
}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handleCreateUser: handleCreateUser,
    handleEditUser: handleEditUser,
    handleDeleteUser: handleDeleteUser,
    getAllCode: getAllCode
}   