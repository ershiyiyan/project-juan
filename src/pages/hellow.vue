<template>
  <div>
    <p>hellow</p>
    <p>{{a}}</p>
    <p>{{b}}</p>
    <button @click="odd">+1</button>
  </div>

</template>

<script>
import api from"../api/index"

import { mapState ,mapMutations} from 'vuex';
export default {
  name:'hellow',
  computed:{
    ...mapState('mean',['a','b'])
  },
  methods:{
    ...mapMutations("mean",{odd:'JIA'}),
  },
  mounted(){
    api.img().then(res => {
      console.log(res);
    })
  }
}
</script>


<style scoped>

</style>