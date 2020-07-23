import { observable, action, computed } from 'mobx'
import clientsData from '../../data'
const axios = require('axios')

export class ClientsStore {
    
    constructor() {
       this.clients = []
       this.countriesList = []
       this.filterCategory = 'name'
       this.filterVal = ''
    }

    @observable clients
    @observable filterCategory
    @observable filterVal
    @observable countriesList

    getSurName(fullName){
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
    
    modifyClients(arr){
        arr.forEach( c => {
            c['surName']=this.getSurName(c.name)
            c.name=c.name.split(' ')[0]
            c.sold===1 ? c.sold = true : c.sold=false
        })
        //arr.forEach( c => c.name=c.name.split(' ')[0])
        //arr.forEach(c => )
        return arr
    }
    
    @action async getClientsFromDB (){
        axios.get('http://localhost:4000/clients').then(res => {

            this.clients = this.modifyClients(res.data)
        })
    }

    @action setFilterCategory (category){
        this.filterCategory = category
    }
     
    @action setFilterVal (val){
        this.filterVal = val
    }

    @action updateClient (clientNewInfo){
        const client = this.clients.find(c => c._id === clientNewInfo.id)
        client.name = clientNewInfo.name.split(' ')[0]
        client.surName = this.getSurName(clientNewInfo.name)
        client.country = clientNewInfo.country
    }

    @action deleteClient(clientID){
        const clientIndex = this.clients.findIndex(c => c._id === clientID)
        this.clients.splice(clientIndex,1)
    }

// eslint-disable-next-line
     @computed get getFilteredClients(){
         const basic = ['name','surName','country']
         if(basic.includes(this.filterCategory)){
            //  console.log(this.filterCategory,this.clients[0][this.filterCategory],this.filterVal)
             return this.clients.filter(c => c[this.filterCategory].includes(this.filterVal))
         } else if(this.filterCategory==='sold'){
            return this.clients.filter(c => c.sold)
         } else if (this.filterCategory==='emailType'){
             if(!this.filterVal){
                return this.clients
            } else {
                return this.clients.filter( c => c.emailType===this.filterVal)
             }
         }
     }


     @computed get getOwners(){
        const owners = {}
        this.clients.forEach( c => !owners[c.owner] ? owners[c.owner]=c.owner : null)
        return Object.values(owners)
     }


    @computed get getOwnersSalesData(){
        const ownersSales = {}
        this.clients.forEach( c => {
            if(c.sold){
                if(ownersSales[c.owner]){
                    ownersSales[c.owner]++
                } else {
                    ownersSales[c.owner] = 1 
                }
            }
        })
        return ownersSales
     }


     @computed get getSalesByCountry(){
        const salesByCountry = {}
        this.clients.forEach( c => {
            if(c.sold){
                if(salesByCountry[c.country]){
                    salesByCountry[c.country]++
                } else {
                    salesByCountry[c.country] = 1 
                }
            }
        })
        return salesByCountry
     }

     @action async getCountries(){
        const countries = await axios.get('http://localhost:4000/countries')
        this.countriesList = countries.data
     }

     @computed get clientsNum(){
         return this.clients.length
     }

     @computed get getClientsFromMonth(){
         let numOfClientFromMonth = 0
         const d = new Date()
         const monthNow = d.getMonth() 
         const yearNow = d.getFullYear()
         this.clients.forEach( c => {
             const clientDate = new Date(c.firstContact)
             const month = clientDate.getMonth()
             const year = clientDate.getFullYear()
             if(month===monthNow && year===yearNow){
                numOfClientFromMonth++
             }
         })
         return numOfClientFromMonth
     }

     @computed get getEmailsNumber(){
         const clientsWhoGotAnEmail = this.clients.filter( c => c.emailType !== 'null')
         return clientsWhoGotAnEmail.length
     }


     @computed get getOutstandingClients(){
        const outstandingClients = this.clients.filter( c => !c.sold)
        return outstandingClients.length
     }

     @computed get getMostHotCountry(){
         const countriesCount = {}
         this.clients.forEach( c => {
             if(countriesCount[c.country]){
                countriesCount[c.country]++
             } else {
                countriesCount[c.country] = 1
             }
         })
         let maxCountry = Object.keys(countriesCount)[0]
         for(let c of Object.keys(countriesCount)){
             if(countriesCount[c] > countriesCount[maxCountry]){
                maxCountry=c
             }
         }
         return maxCountry

     }

 }

