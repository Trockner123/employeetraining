<script setup>

import box from "../components/box.vue";
</script>


<template>
  <box title="Defect, Errors and Dangers" link-nextpage="/addictiveSubstances" link-prev-page="/">

    <h3>In most Cases the Dangers of
    Occupationalsafety are avoidable
    by prudent Behaviour</h3>

    <b>Avoid and Report:</b>
<div id="listOfDanger">
    <ul>
      <li><span>Inadequate Work supplies or facilities, like defective Cables or
        Devices</span></li>

    <li><span>Improperly packed, marked or labelled working materials</span></li>

    <li><span>Problematic procedures or processes</span></li>
      </ul>
</div>
   <div> Are you unable to Remove or Fix, report this immediately to your
    Supervisor. Using Work supplies or specific processes observe the
    respective User Guide. <br>
     If you have to work with hazardous
    substances always follow the operating instructions on working
    with hazardous substances.<br>
     More Information regarding Handling
    hazardous Substances can be obtained by consulting the safety
    data sheet, which your supervisor must provide.
   </div>
    <b>If applicable inform the Professional for Occupational
    Safety, the company doctor or the security officer</b>
<div id="stopSign">
 <img src="../../public/stop%20sign.png">
</div>
  </box>

</template>

<style scoped>
#stopSign{
  padding-top: 2%;
}
#listOfDanger{
  margin: auto;
  width: 50%;

}
li span {
  position: relative;

}
img{
  height: 100%;
}

</style>


<style scoped>

</style>