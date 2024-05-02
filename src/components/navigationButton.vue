<script setup>
import router from "../../router.js";

const props=defineProps({
  route:String,
  imagePath:String,
})
function navigate(){
  router.push(props.route)
}

</script>

<template>
  <button @click="navigate()">
  <img :src="props.imagePath">
    </button>
</template>

<style scoped>
 img{
   position: absolute;
   top:45%;

 }
 button{
   width: 3%;

 }
</style>