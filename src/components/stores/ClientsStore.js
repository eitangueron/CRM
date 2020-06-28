import { observable, action, computed } from 'mobx'
import clientsData from '../../data'
const axios = require('axios')

export class ClientsStore {
    
    constructor() {
       this.clients = []
       this.filterCategory = 'name'
       this.filterVal = ''
    }

    @observable clients
    @observable filterCategory
    @observable filterVal

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
        client.name = clientNewInfo.name.split()[0]
        client.surName = getSurName(clientNewInfo.name)
        clients.country = clientNewInfo.country
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


 }

