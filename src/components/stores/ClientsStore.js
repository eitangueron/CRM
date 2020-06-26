import { observable, action, computed } from 'mobx'
import clientsData from '../../data'

export class ClientsStore {
    
    constructor() {
       this.clients = this.modifyClients(clientsData)
       this.filterCategory = 'name'
       this.filterVal = ''
    }

    modifyClients(arr){
        arr.forEach( c => c['surName']=this.getSurName(c.name))
        arr.forEach( c => c.name=c.name.split(' ')[0])
        return arr
    }
    
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

    @observable clients
    @observable filterCategory
    @observable filterVal

    @action setFilterCategory (category){
        this.filterCategory = category
    }
     
    @action setFilterVal (val){
        this.filterVal = val
    }

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