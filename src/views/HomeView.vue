<template>
    <div>
        <h1 class="active">HomeView</h1>
        <MineView />
    </div>
</template>
<script>
import MineView from './MineView.vue';
// el配置项只存在根实例中
export default {
  components: { MineView },};
</script>
<style scoped>
.active {
  background-color: orange;
  color: #fff;
  text-align: center;
}
</style>