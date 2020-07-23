const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const db = new Sequelize('mysql://root:1234@localhost/crm_project')
// const moment = require('moment')


router.get('/clients', async function(req,res){
    try{
        const [clients] = await db.query(
            `SELECT clients.id AS _id, clients.name, firstContact, sold,
            e_type AS emailType, owners.name AS owner, countries.name AS country
            FROM clients, email_types, owners, countries
            WHERE clients.emailType=email_types.id
            AND owners.id=clients.c_owner
            AND countries.id=clients.country
            ORDER BY clients.name`)
        // console.log(clients)
        res.send(clients)
    }   
    catch (err){
        res.send(err)
    }
})

router.get('/countries', async function(req,res){
    const [countries] = await db.query(`SELECT name FROM countries`)
    res.send(countries)
})

router.post('/clients/:name/:country/:owner/:date', async function(req,res){
    try{
        const [country] = await db.query(`SELECT id FROM countries WHERE name='${req.params.country}'`)
        const [owner] = await db.query(`SELECT id FROM owners WHERE name='${req.params.owner}'`)
        await db.query(`INSERT INTO clients 
        VALUES(null,'${req.params.name}', '${req.params.date}', '5', 0, '${owner[0].id}', ${country[0].id})`)
        // .then(res => console.log(res))
        res.send({status:'success' })
        }
        catch (err) {
            res.send(`seems like there was an error with entering a new client:\n${err}`)
        }
})

router.put('/clients/:id/:name/:country', async function(req,res){
    try{
        const [country] = await db.query(`
        SELECT id FROM countries
        WHERE name='${req.params.country}'`)
        const countryID = country[0].id
        await db.query(`
                        UPDATE clients
                        SET name = '${req.params.name}', country = ${countryID}
                        WHERE id= ${req.params.id};`
                        )
        // console.log(newClient)
        res.send({status:'success',name:req.params.name, country:countryID, id:parseInt(req.params.id)})
        // res.send(`Updated client successfully!\n${req.params.name} from ${req.params.country}.\nID:${req.params.id}`)
    }
    catch (err){
        res.send(`seems like there was an error with the update:\n${err}`)
    }
})


router.delete('/clients/:id',async function(req,res){
    try{
        await db.query(`DELETE FROM clients WHERE id=${req.params.id}`)
        res.send({status:'success'})
    }
    catch(err){
        res.send(err)
    }

})

const getSurName = (fullName) => {
    const name = fullName.split(' ')
    let surname = ''
    for(let n of name){
        if(n !== name[0]){
          if(n!==name[1]){
            surname+=' '
          }
            surname+=n
          }
    }

    return surname
} 

router.put('/client/declareSell/:name',async function(req,res){
    // const name = req.params.name
    // const firstName = name.split(' ')[0]
    // const surName = getSurName(name)
    try{
        await db.query(`UPDATE clients
                    SET sold = 1
                    WHERE name= '${req.params.name}';`
                )
        res.send({status:'success'})
    }
    catch (err){
        res.send({status:'error', err})
    }
    
})

router.put('/client/updateOwner/:clientName/:newOwner',async function(req,res){
    try{
        const [owner] = await db.query(`SELECT id FROM owners WHERE name='${req.params.newOwner}'`)
        await db.query(`UPDATE clients
                    SET c_owner = ${owner[0].id}
                    WHERE name = '${req.params.clientName}';`
                )
        res.send({status:'success'})
    }
    catch (err){
        res.send({status:'error', err})
    }
})

router.put('/client/sendEmail/:clientName/:emailType',async function(req,res){
    try{
        const [email] = await db.query(`SELECT id FROM email_types WHERE e_type='${req.params.emailType}'`)
        await db.query(`UPDATE clients
                    SET emailType = ${email[0].id}
                    WHERE name = '${req.params.clientName}';`
                )
        res.send({status:'success'})
    }
    catch (err){
        res.send({status:'error', err})
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
