<template>
  <div>
    <h3>vue page</h3>
    <Button @click="goto">Go to js</Button>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {

    };
  },
  methods: {
    goto() {
      this.$router.push('/js')
    }
  }
};
</script>
