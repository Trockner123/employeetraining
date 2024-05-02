<script setup>

import Box from "../components/box.vue";
</script>

<template>
<box title="First Aid Book 1" link-prev-page="commuting" link-nextpage="/questioner">
<div class="text">
  <p>Since there is an obligation to document an injury that
    occurred during work,<br> the incident must be recorded in a
    first aid book</p>
  <p>However since it is “health data” the data
    cannot be<br> freely accessible due to the GDPR</p>
  <p>Therefor First Aid Book blako
    Templates are used, where you can
    register<br> Injuries, Accidents or First
    Aid services. The filled out Form will
    be archived <br>at a safe Place, where
    only authorised Personal has access</p>
  <p>The Form has to be stored for at
    least 5 years</p>
</div>
  <div id="firstAidCase">
    <img src="../../public/firstAidKit.png">
  </div>
</box>
</template>

<style scoped>
.text{
  padding-left: 8%;
  float: left;
  justify-content: left;
  text-align: left;
}
#firstAidCase{
  float: right;
  padding-right: 10%;
}
</style>