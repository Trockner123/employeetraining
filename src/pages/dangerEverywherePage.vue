<script setup>

import box from "../components/box.vue";
const props =defineProps({
  popupOne:Boolean(false),
  popupTwo:Boolean(false),
  popupThree:Boolean(false),
  popupFour:Boolean(false),
  popupFive:Boolean(false),
  popupSixe:Boolean(false),
})
function displayOne(){
  window.alert("If it must go Fast Miss Müller likes to use her office Chair since her Cast, she prefers to use the stepladder")
}
function  displayTwo(){
  window.alert("Miss Sorger used to suffer from\n" +
      "Neck Pain until her College showed her how an\n" +
      "ergonomic Workplace should look")
}

function  displayThree(){
  window.alert("Even though\n" +
      "Mister Manning got rid of his crutches\n" +
      "he started to take Warning signs\n" +
      "seriously")
}
function  displayFour(){
  window.alert("Miss Kaiser luckily only hurt\n" +
      "himself a little on the open drawer, from now\n" +
      "on he always Rembers to close every Drawer")
}
function  displayFive(){
  window.alert("Lifting with your Back can\n" +
      "have grave Consequences for the musculoskeletal\n" +
      "system, Miss Sanft had to learn that the hard way after\n" +
      "hurting herself lifting, but now she knows how it’s done\n" +
      "correctly")
}
function  displaySix(){
  window.alert("Mister Maier is vigilant about avoiding loose\n" +
      "Cables around him and his Colleagues\n" +
      "since he fell over one")
}
</script>

<template>
  <box title="Dangers behind every corner" link-nextpage="/defects" link-prev-page="/test">
    <p>Accidents at the Workplace often happen due to negligent Behaviour of the
    Employee. Danger of Accidents can lurk everywhere. The following Examples show
      how fast negligent Behaviour can have grave consequences.</p>

    <b>For more information click the Icons Below</b>
    <div class="grid-container">
      <button @click="displayOne"> <img src="../../public/standingOnChair.jpg"></button>
      <button @click="displayTwo"><img src="../../public/neckpain.jpg"></button>
      <button @click="displayThree"> <img src="../../public/wetfloor.jpg"></button>
      <button @click="displayFour"> <img src="../../public/opendrawer.jpg"></button>
      <button @click="displayFive"> <img src="../../public/liftingWithBack.jpg"></button>
      <button @click="displaySix"> <img src="../../public/manfallingOverCable.jpg"></button>
    </div>
  </box>

</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  align-items: center;
}
img {
  float: left;
  width:  400px;
  height: 250px;
  object-fit: cover;
}



</style>
