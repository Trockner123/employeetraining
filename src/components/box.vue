<script setup>
import NavigationButton from "./navigationButton.vue";

const props=defineProps({
  title: String,
  linkNextpage: String,
  linkPrevPage: String,
})
</script>

<template>
  <div id="frame">
    <h1>{{ title }}</h1>
    <slot></slot>
<navigation-button id="forward" :route="props.linkNextpage" image-path="../../public/triangleRight.svg"></navigation-button>
<navigation-button id="back" :route="props.linkPrevPage" image-path="../../public/triangleLeft.svg"></navigation-button>
  </div>

</template>

<style scoped>

#forward{
 background-color:  #005790;
  position: absolute;
  right: 4%;
  height: 40%;
  top: 30%;

  display: flex;
  justify-content: center;
  border-color: white;
}
#back{
  background-color:  #005790;
  position: absolute;
  left: 4%;
  height: 40%;
  top: 30%;
  display: flex;
  justify-content: center;
  border-color: white;
}
#frame {
  position: absolute;
  height: 90%;
  width: 94%;
  background: white;
  left: 3%;



}

</style>