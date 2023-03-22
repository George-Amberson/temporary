<template>
  <div id="app" class="container">
    <b-row v-for="i in this.rows" style="margin-top:2em">
      <b-col v-for="j in [0,1,2,3]" cols="3"><Passenger @person="personNum" :number="i*4+j" :Person="persons[i*4+j]"/></b-col>
    </b-row>
    <AllInformation :show-modal="modal" @closeModal="close" :person="this.currentPerson"/>
  </div>
</template>

<script>
import Passenger from './components/Passenger.vue';
import AllInformation from './components/AllInformation.vue';
export default {
  name: 'App',
  components: {
    Passenger,
    AllInformation
  },
  data() {
    return { 
      modal: false,
      persons:[],
      rows: new Array(39).fill(0).map((cv, i)=> i),
      currentPerson:{}
    }
  },
  methods:{
    personNum(ev) {
      this.currentPerson = this.persons[ev]
      this.modal = true
    },
    close(){
      this.modal = false
    }
  },
  async created(){
    this.persons = await (await fetch('/persons')).json()
    console.log(this.persons)
    console.log(this.rows)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
