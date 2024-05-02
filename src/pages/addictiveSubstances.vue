<script setup>

import Box from "../components/box.vue";

function displayOne() {
  window.alert("Avoid " +
      "taking Medication with " +
      "Alcohol, this could lead to " +
      "dangerous interactions " +
      "changing the effect of the " +
      "medication and the effect " +
      "of Alcohol can e increased")
}

function displayTwo() {
  window.alert("If you take medication always studythe package insert.This applies espacally if you operate machinery or have a security task")
}
</script>

<template>
  <box title="Addictive Substances" link-prev-page="/defects" link-nextpage="/effectsOfAlcohol">
    <div id="text">
      <div class="para">
        You should be aware that the consumption of Alcohol,
        Drugs and specific Medication can impede your
        perception, which represents a Danger for the
        occupational safety
      </div>
      <div class="para">
        For this Reason, Alcohol and Drugs are strictly
        forbidden at the Workplace. Employees are strictly
        forbidden to come to work under the influence of
        Drugs or Alcohol. This Ban must be pronounced
        clearly
      </div>
      <div id="bold">
        <b>Click the Pictures to learn more</b>
      </div>
    </div>
    <div class="grid-container">
      <button @click="displayOne"><img src="../../public/koelsch.jpeg"></button>
      <button @click="displayTwo"><img src="../../public/pills.jpg"></button>
    </div>

  </box>
</template>

<style scoped>
.para {
  max-width: 100%;

  font-size: x-large;
  padding-bottom: 2.5%;
  padding-top: 2.5%;

}

#text {
  padding-top: 2%;
  float: left;
  max-width: 45%;
  padding-left: 10%;
  text-align: left;
}

#bold {

  padding-top: 5%;
  padding-left: 25%;
}

.grid-container {
  padding-top: 2%;
  float: right;
  display: grid;
  justify-content: center;
  align-items: center;
  max-width: 5%;
  padding-right: 15%;


}
button{

  max-width: 100%;
  max-height: 100%;
}

img {
  ;
  float: left;
  object-fit: cover;
  max-height: 400px;
  max-width: 300px;
}


</style>