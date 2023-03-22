<template>
<BCard :title="this.Person.Name" :sub-title="this.Person.Lname" class="subCard" @click="card">
    <b-card-text style="font-weight: bold">
       {{ getAge }}
    </b-card-text>
    <b-card-text>
        {{ this.Person.Sex }}
    </b-card-text>
    <b-card-text :style="{color:(this.Person.Survived!='0')?'green':'red'}">
        {{ getSurvival }}
    </b-card-text>
</BCard>
</template>

<script>
import {BCard} from 'bootstrap-vue'
export default{
    props:{
        Person:{
            type: Object
        },
        number:{
            type:Number
        }
    },
    data() {
    return { 
      correctNames:{
        
      }
    }
  },
    components:{
        BCard
    },
    computed:{
        getSurvival(){
            return (this.Person.Survived!="0")?'alive':'dead'
        },
        getAge(){
            return(this.Person.Age == "")? 'unknown': this.Person.Age+" years"
        }
    },
    methods:{
        card() {
            this.$emit("person", this.number)
        }
    }
}
</script>
<style>
p{
    margin-bottom: 10px !important;
}
.subCard{
    padding: 0;

}
.subCard:hover{
   background-color: #fafafa;
}
</style>