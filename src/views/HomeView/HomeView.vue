<template>
    <div>
        <h1 class="active">HomeView</h1>
        <MineView />
        <RecommondPlaylistItem v-for="playlist in recommentPlaylist" :key="playlist.id" :source="playlist" />
    </div>
</template>
<script>
import MineView from '../MineView.vue';
// el配置项只存在根实例中
export default {
  components: { RecommondPlaylistItem },

};
</script>
<style scoped>
.active {
  background-color: orange;
  color: #fff;
  text-align: center;
}
</style>