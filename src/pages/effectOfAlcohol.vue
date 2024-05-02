<script setup>


import Box from "../components/box.vue";
function changeBackground() {
  document.getElementById("imageid").src="../../public/tunnelvision.jpeg";
  console.log("test")
}
</script>

<template>
  <box title="Effects of Alcohol" link-prev-page="addictiveSubstances" link-nextpage="/commuting">
    <div class="text">
      <h3>Alcohol already takes effect in small Doses</h3>
      <p>Starting at blood alcohol level of 0.2
        your vision is impeded, starting at a
        blood alcohol level of 0.3 <br>your
        Reactiontime is increased, and your
        dexterity is decreased, your ability to
        estimate<br> Distance is also impeded and
        your Risk of getting into an accident is
        doubled</p>
      <p>
        At a blood alcohol level of 1 you Field of
        Vision is drastically decreased <br>and you enter
        the so called tunnel vision
      </p>
      <p><b>Press the Icon to see the effects
        of “Tunnel Vision” on your field of
        View</b></p>
      <button @click="changeBackground()"> TunnelVision</button>
    </div>
    <div id="picture">
    <img id="imageid" src="../../public/tunnelvisionbefore.webp">
    </div>







  </box>
</template>

<style scoped>
.text{
  padding-left: 10%;
  float: left;
  text-align: left;
}
img{
  max-width: 20%;
  max-height: 50%;
  float: right;
  justify-content: center;
  padding-right: 8%;
}

</style>