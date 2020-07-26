const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
// const db = new Sequelize('mysql://root:1234@localhost/crm_project')
const db = new Sequelize('mysql://bf7de9fd81a34a:1d8826be@eu-cdbr-west-03.cleardb.net/heroku_026d942682a000c?reconnect=true')

// const moment = require('moment')


router.get('/allClients', async function(req,res){
    try{
        const [clients] = await db.query(
            `SELECT clients.id AS _id, clients.name, firstContact, sold,
            e_type AS emailType, owners.name AS owner, countries.name AS country
            FROM clients, email_types, owners, countries
            WHERE clients.emailType=email_types.id
            AND owners.id=clients.c_owner
            AND countries.id=clients.country
            ORDER BY clients.name`)
        res.send(clients)
    }   
    catch (err){
        res.send(err)
    }
})

router.get('/owners', async function(req,res){
    const [owners] = await db.query(`SELECT name FROM owners`)
    res.send(owners)
})

router.get('/countries', async function(req,res){
    const [countries] = await db.query(`SELECT name FROM countries`)
    res.send(countries)
})

router.post('/clients', async function(req,res){
    try{
        const [country] = await db.query(`SELECT id FROM countries WHERE name='${req.body.country}'`)
        const [owner] = await db.query(`SELECT id FROM owners WHERE name='${req.body.owner}'`)
        await db.query(`INSERT INTO clients 
        VALUES(null,'${req.body.name}', '${req.body.date}', '5', 0, '${owner[0].id}', ${country[0].id})`)
        // .then(res => console.log(res))
        res.send({status:'success' })
        }
        catch (err) {
            res.send(`seems like there was an error with entering a new client:\n${err}`)
        }
})

router.put('/clients', async function(req,res){
    try{
        const [country] = await db.query(`
        SELECT id FROM countries
        WHERE name='${req.body.country}'`)
        const countryID = country[0].id
        await db.query(`
                        UPDATE clients
                        SET name = '${req.body.name}', country = ${countryID}
                        WHERE id= ${req.body.id};`
                        )
        res.send({status:'success',name:req.body.name, country:countryID, id:parseInt(req.body.id)})
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

router.put('/client/declareSell',async function(req,res){
    // const name = req.params.name
    // const firstName = name.split(' ')[0]
    // const surName = getSurName(name)
    try{
        await db.query(`UPDATE clients
                    SET sold = 1
                    WHERE name= '${req.body.clientName}';`
                )
        res.send({status:'success'})
    }
    catch (err){
        res.send({status:'error', err})
    }
    
})

router.put('/client/updateOwner',async function(req,res){
    try{
        const [owner] = await db.query(`SELECT id FROM owners WHERE name='${req.body.newOwner}'`)
        await db.query(`UPDATE clients
                    SET c_owner = ${owner[0].id}
                    WHERE name = '${req.body.clientName}';`
                )
        res.send({status:'success'})
    }
    catch (err){
        res.send({status:'error', err})
    }
})

router.put('/client/sendEmail',async function(req,res){
    try{
        const [email] = await db.query(`SELECT id FROM email_types WHERE e_type='${req.body.emailType}'`)
        await db.query(`UPDATE clients
                    SET emailType = ${email[0].id}
                    WHERE name = '${req.body.clientName}';`
                )
        res.send({status:'success'})
    }
    catch (err){
        res.send({status:'error', err})
    }
})



module.exports = router
