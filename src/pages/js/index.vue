<template>
  <div>
    <h3>js page</h3>
    <Button @click="goto">Go to vue</Button>
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
      this.$router.push('/vue')
    }
  }
};
</script>
