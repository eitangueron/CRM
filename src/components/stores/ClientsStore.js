import { observable, action, computed } from 'mobx'
import clientsData from '../../data'

export class ClientsStore {
    
    constructor() {
       this.clients = [...clientsData]
       this.filterCategory = 'name'
       this.filterVal = ''
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
         return this.clients.filter(c => c[this.filterCategory].includes(this.filterVal))
     }

 }