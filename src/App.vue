<template>
  <div id="app">
    <ComButton class="com-wrapper"/>
    <ComChart class="com-wrapper"/>
  </div>
</template>

<script>
import ComButton from './components/custom-button.vue'
import ComChart from './components/custom-chart.vue'

export default {
  components: {
    ComButton,
    ComChart,
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped lang="less">
#app {
  width: 100%;
  height: 100%;
  padding: 16px; 
}
.com-wrapper {
  margin-bottom: 16px;
}
</style>
