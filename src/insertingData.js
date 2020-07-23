const clientsData = require('./data')
const Sequelize = require('sequelize')
const db = new Sequelize('mysql://root:1234@localhost/crm_project')


////////////   inserting owners:

// const owners = {}
// clientsData.forEach( c => {
//     if(!owners[c.owner]){
//         owners[c.owner] = c.owner
//     }
// })

// const ownersArr = Object.keys(owners)

// ownersArr.forEach(o => db.query(`INSERT INTO owners VALUES (null,'${o}')`))




//////////    inserting countries:

// const countries = {}
// clientsData.forEach( c => {
//     if(!countries[c.country]){
//         countries[c.country] = c.country
//     }
// })

// const countriesArr = Object.keys(countries)

// countriesArr.forEach(c => db.query(`INSERT INTO countries VALUES (null,'${c}')`))



/////////    inserting emailtypes :

// const emailTypes = ['A', 'B', 'C', 'D']

// emailTypes.forEach( e => db.query(`INSERT INTO email_types VALUES (null, '${e}')`) )

// db.query(`INSERT INTO email_types VALUES (null, 'null')`)

