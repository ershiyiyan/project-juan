<template>
  <div>
    <div class="box">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name:'hellow',
  computed:{
  },
  methods:{
  },
  mounted(){
  }
}
</script>


<style scoped>
.box{
  width: 70vh;
  height: 60vh;
  margin: 0 auto;
  margin-top: 15vh;
}

ul{
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  /* left: 10vh; */
}

ul li{
  /* margin-bottom: 2vh; */
  width: 20vh;
  height: 20vh;
  background-color: rgb(144, 143, 143);
  flex-shrink: 1;
  border-radius: 50%;
  /* position: absolute; */
}
ul li:nth-child(2){
  position: relative;
  top: -10vh;
}
ul li:nth-child(4){
  position: relative;
  left: -10vh;
}
ul li:nth-child(5){
  width: 30vh;
  height: 30vh;
}
ul li:nth-child(6){
  position: relative;
  left: 10vh;
}
ul li:nth-child(8){
  position: relative;
  top: 10vh;
}
ul li:hover{
  transition: 0.5s;
}
ul li:nth-child(1):hover{
  box-shadow: -5px -5px 10px 10px rgba(255, 179, 0, 0.5);
}
ul li:nth-child(2):hover{
  box-shadow: 0px -5px 10px 10px rgba(255, 179, 0, 0.5);
}
ul li:nth-child(3):hover{
  box-shadow: 5px -5px 10px 10px rgba(255, 179, 0, 0.5);
}
ul li:nth-child(4):hover{
  box-shadow: -5px 0px 10px 10px rgba(255, 179, 0, 0.5);
}
ul li:nth-child(5):hover{
  box-shadow: 00px 0px 30px 30px rgba(255, 179, 0, 0.7);
}
ul li:nth-child(6):hover{
  box-shadow: 5px 0px 10px 10px rgba(255, 179, 0, 0.5);
}
ul li:nth-child(7):hover{
  box-shadow: -5px 5px 10px 10px rgba(255, 179, 0, 0.5);
}
ul li:nth-child(8):hover{
  box-shadow: 0px 5px 10px 10px rgba(255, 179, 0, 0.5);
}
ul li:nth-child(9):hover{
  box-shadow: 5px 5px 10px 10px rgba(255, 179, 0, 0.7);
}
</style>