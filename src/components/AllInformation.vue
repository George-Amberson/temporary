<template>
<BModal v-model="getModal" centered hide-footer hide-header>
    <div class="d-block text-center">
        <div v-for="(value, name)  in this.person" style="font-weight: 500;">
            {{ name }} : {{ reWriteResult(value) }}
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
    </div>
</BModal>
</template>

<script>
import {BModal, BButton} from 'bootstrap-vue'
export default{
    props:{
        showModal:{
            type: Boolean
        },
        person:{
            type:Object
        }
    },
    components:{
        BModal,
        BButton
    },
    computed:{
        getModal(){
            return this.showModal
        }
    },
    methods:{
       hideModal() {
        this.$emit('closeModal')
       },
       reWriteResult(inp){
        console.log(inp)
        return(inp=="")?'Unknown':inp
       }
    }
}
</script>