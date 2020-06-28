const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const db = new Sequelize('mysql://root:1234@localhost/crm_project')

const moment = require('moment')

router.get('/clients', async function(req,res){
    try{
        const [clients] = await db.query(
            `SELECT clients.id AS _id, clients.name, firstContact, sold,
            e_type AS emailType, owners.name AS owner, countries.name AS country
            FROM clients, email_types, owners, countries
            WHERE clients.emailType=email_types.id
            AND owners.id=clients.c_owner
            AND countries.id=clients.country`)
        console.log(clients)
        res.send(clients)
    }   
    catch (err){
        res.send(err)
    }
})

// const test = async (req,res) => {
//      try{
//         const [clients] = await db.query(`SELECT clients.id, clients.name, firstContact, sold,
//         e_type AS emailType, owners.name AS owner, countries.name AS country
//         FROM clients, email_types, owners, countries
//         WHERE clients.emailType=email_types.id
//         AND owners.id=clients.c_owner
//         AND countries.id=clients.country`)
//         console.log(clients)
//         // res.send(clients)
//         }   
//         catch (err){
//         res.send(err)
//         }
// }

// test()




module.exports = router
