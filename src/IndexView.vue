<template>
    <div class="w-screen h-screen text-[14px]">
        <div class="flex justify-between pl-[25px] mt-[20px] box-border">
            <Icon icon="ep:arrow-left" color="#333" width="30"/>
            <span class="text-[18px] font-bold">歌单广场</span>
            <span></span>
        </div>
        <ul class="h-[25.2px] mt-3 overflow-hidden text-center pl-[20px] box-border">
            <li v-for="item in menu" :key="item.id" class="mx-4 cursor-pointer decoration-gray-500 float-left" :class="{active:item.name === activeMenuItem}" @click="toggleMenu(item.name)">
                {{item.name}}
            </li>
        </ul>
        <ul class=" w-[450px] flex flex-wrap mt-6 m-auto">
            <li v-for="item in playlists" :key="item.id" class="w-[130px]  mb-5 ml-[10px] mr-[10px]">
                <div class="">
                    <img :src=item.coverImgUrl class="w-[130px] h-[130px] rounded-xl" alt="">
                </div>
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
        menu: [],
        playlists: [],
        activeMenuItem: '',
        }
    },
    methods: {
        toggleMenu(name) {
        this.activeMenuItem = name;
        this.fetchPlaylists(name);
        },
        fetchPlaylists(cat) {
        axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist', {
            params: {
            cat: cat
            }
        }).then(res => {
            console.log( res.data.playlists);
            this.playlists = res.data.playlists
        })
        }
    },
    created() {
        axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/hot')
        .then(res => {
            this.menu = res.data.tags;
            return this.activeMenuItem = this.menu[0].name;
        })
        .then((cat) => this.fetchPlaylists(cat))
        .catch(err => {console.log(err)})
    }
}
    
</script>
<style>
    .active {
        border-bottom: 5px solid red;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        font-weight: 700;
    }
</style>
