<template>
  <Card title="测试iview组件">
    <Button @click="handleClick">确认</Button>
    <p class="button-result">{{ data_result }}</p>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      data_result: 1,
    };
  },
  methods: {
    handleClick() {
      this.data_result += 1
    }
  }
};
</script>

<style scoped lang="less">
.button-result {
  font-size: 14px;
  margin-top: 20px;
}
</style>
