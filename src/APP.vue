<template>
  <div class="w-screen h-screen">
    <a href="#IndexView">IndexView</a>
    <br/>
    <a href="#HomeView">HomeView</a>
    <br/>
    <a href="#MineView">MineView</a>
    <IndexView v-if="visibleView === 'IndexView'"/>
    <HomeView v-else-if="visibleView === 'HomeView'"/>
    <MineView v-else-if="visibleView === 'MineView'"/>
    
  </div>
</template>
<script>
import IndexView from '@/views/IndexView.vue';
import HomeView from '@/views/HomeView/HomeView.vue';
export default {
    components: { RecommondPlaylistItem },
    data() {
        return {
            visibleView: 'IndexView',
            recommentPlaylist:[],
        };
    },
    beforeCreate() {
        window.onhashchange = () => {
            this.visibleView = location.hash.replace("#","");
        }
    },
    async created() {
        // this.recommentPlaylist = 
    },
};
</script>
<style>
    @tailwind base;
    @tailwind utilities;
    @tailwind components;
</style>