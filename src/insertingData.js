const clientsData = require('./data')
const Sequelize = require('sequelize')
// const db = new Sequelize('mysql://root:1234@localhost/crm_project')
const db = new Sequelize('mysql://bf7de9fd81a34a:1d8826be@eu-cdbr-west-03.cleardb.net/heroku_026d942682a000c?reconnect=true')

const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands",
	"Central African Republic",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos Islands",
	"Colombia",
	"Comoros",
	"Congo",
	"Congo",
	"Cook Islands",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands",
	"Faroe Islands",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories",
	"Gabon",
	"Gambia",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia",
	"Moldova",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (UAE)",
	"United Kingdom of Great Britain and Northern Ireland",
	"United States of America (USA)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
];


const geCountryId = async (user) => {
  const [country] = await db.query(`SELECT id FROM countries WHERE name='${user.country}'`)
  const countryID = country[0].id
  return countryID
}
// // geCountryId(clientsData[11])

const getEmailType = async (user) => {
  const [email] = await db.query(`SELECT id FROM email_types WHERE e_type='${user.emailType}'`)
  const emailID = email[0].id
  return emailID
}

// // getEmailType(clientsData[0])
// // getEmailType(clientsData[1])

const getOwner = async (user) => {
  const [owner] = await db.query(`SELECT id FROM owners WHERE name='${user.owner}'`)
  const ownerID = owner[0].id
  return ownerID
}

// // getOwner(clientsData[1]).then(res => console.log(res))


// ///////////     inserting all:


const insertDummyData = async () => {
    
    let ownersINDB = await db.query(`SELECT * FROM owners`)
    let countriesINDB = await db.query(`SELECT * FROM countries`)
    let emailsINDB = await db.query(`SELECT * FROM email_types`)
    let clientsINDB = await db.query(`SELECT * FROM clients`)

    if(!ownersINDB){
        ////////////   inserting owners:
        
        const owners = {}
        clientsData.forEach( c => {
            if(!owners[c.owner]){
                owners[c.owner] = c.owner
            }
        })
        
        const ownersArr = Object.keys(owners)
        
        ownersArr.forEach(o => db.query(`INSERT INTO owners VALUES (null,'${o}')`))
    }

    if(!countriesINDB){
        //////////    inserting countries:

        countryList.forEach( async c => {
            await db.query(`INSERT INTO countries VALUES(null,"${c}");`)
          })
        
        // const countries = {}
        // clientsData.forEach( c => {
        //     if(!countries[c.country]){
        //         countries[c.country] = c.country
        //     }
        // })
        
        // const countriesArr = Object.keys(countries)
        
        // countriesArr.forEach(c => db.query(`INSERT INTO countries VALUES (null,'${c}')`))
    }    

    if(!emailsINDB){
        
        /////////    inserting emailtypes :
        
        const emailTypes = ['A', 'B', 'C', 'D', 'null']
        
        emailTypes.forEach( e => db.query(`INSERT INTO email_types VALUES (null, '${e}');`) )
        
        // db.query(`INSERT INTO email_types VALUES (null, 'null')`)

    }    

    if(!clientsINDB){
        clientsData.forEach( async c => {

            const ownerID = await getOwner(c)
            const emailID = await getEmailType(c)
            const countryID = await geCountryId(c)
            const date = dateFormat(c.firstContact,'isoDate')
            await db.query(`INSERT INTO clients VALUES(null, '${c.name}', '${date}', ${emailID}, ${c.sold}, ${ownerID}, ${countryID})`)
          })
          
    }

}        


