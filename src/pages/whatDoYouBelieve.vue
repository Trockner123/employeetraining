<script setup>

import Box from "../components/box.vue";
function evaluate(){
  document.getElementById("correct2").style.color="lightgreen";
  document.getElementById("incorrect2").style.color="red";
}
</script>

<template>
<box title="What do you believe?" link-prev-page="firstAid" link-nextpage="/reporting">
  <div class="text">
    <h3> Is it correct, that only larger Injuries, like a broken Leg, must be recorded in in the First Aid book</h3>
    <b> What do you believe?</b>
    <div>
    <div>
    <input type="checkbox" id="correct" name="correct">
      <label id="correct2" for="correct">Yes the First aid Book is only for
        larger Injuries</label>
    </div>

    <div>
      <input type="checkbox" id="incorrect" name="incorrect">
      <label id="incorrect2" for="incorrect">No, every Injurie and First Aid
        service must be registered in
        the First Aid book</label>
    </div>
      <button @click="evaluate()"> Get Results</button>
    </div>
  </div>
</box>
</template>

<style scoped>
.text{
  float: left;
  justify-content: left;
  padding-left: 8%;
}
</style>