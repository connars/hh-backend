const {fetch} =  require('../../lib/postgres.js')
const {GETLOGIN,GETREGISTER,PUTADMIN,GETUSER,PUTUSER}  = require('./query.js')

const GET = async () =>{
    try {
        let user = await fetch(GETUSER)
        return user 
    } catch (error) {
        console.log(error)
    }
}

const PUT_USER = async ({score},{userId}) =>{
    try {
        let putUser = await fetch(PUTUSER,score,userId)
        return putUser
    } catch (error) {
        console.log(error)
    }
}

const PUT = async ({adminname,password,status},{adminId}) =>{
    try {
       if(status === 'admin'){
        let admin = await fetch(PUTADMIN,adminname,password,adminId)
        return admin
       }else{
        return 'you are not admin!'
       }
    } catch (error) {
        console.log(error)
    }
}

const LOGIN = async ({username,password}) =>{
    try {
        let admin =  await fetch(GETLOGIN,username,password)
        return admin  
    } catch (error) {
        console.log(error)
    }
    
}

const REGISTER = async ({username,password,gender},{token}) =>{
        try {
            if(token && token !== null){
               let admin = await fetch(GETREGISTER,username,password,gender)
               return admin
            }
        } catch (error) {
            console.log(error)
        }
}

module.exports ={
   LOGIN ,REGISTER, GET , PUT ,PUT_USER
}