<template>
    <section class="w-sreen h-screen mt-6 ">
        <!-- 头部 -->
        <header class="flex justify-around w-[100%]">
            <Icon icon="ph:list" color="#323" width="30" class=""/>
            <form action="" class="relative">
                <input type="text" name="" id="" placeholder="冷屁股" class="outline-none w-[73vw] rounded-2xl pl-4">
                <Icon icon="iconamoon:search-light" color="#ccc" width="20" class="absolute left-[26vw] top-[1vw] text-center"/>
            </form>
            <Icon icon="iconamoon:microphone-thin" color="#323" width="30" />
        </header>
        <!-- 轮播图 -->
        <div class="swiper mySwiper mt-[4.537vw]">
            <div class="swiper-wrapper">
                <div class="swiper-slide " v-for="item in banner" :key="item.id">
                    <img :src="item.pic" alt="" class="w h-[35.741vw] rounded-2xl m-auto">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <!-- 每日推荐 -->
        <main class="ml-[4.5vw] mt-[4.722vw] scroll-wrapper overflow-hidden "  ref="scroll">
            <ul class="flex justify-between scroll-content w-[193vw]">
                <li class="text-center scroll-item" v-for="item in commend" :key="item.id">
                    <img :src="item.iconUrl" alt="" class="w-[15vw] h-[15vw] red-image">
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </main>
        <!-- 推荐歌单 -->
        <main class="mt-[4.722vw]">
            <p class="ml-[4.5vw] mb-[4vw]">
                <span class="font-bold text-[18px]">推荐歌单</span>
                <Icon icon="ep:arrow-left-bold" color="#333" width="20" :horizontalFlip="true" :verticalFlip="true" class="inline-block"/>
                <Icon icon="ant-design:more-outlined" color="#333" width="30" :horizontalFlip="true" :verticalFlip="true" class="float-right"/>
            </p>
            <div class="ml-[4.5vw] mt-[4.722vw] scroll-wrapper overflow-hidden"  ref="sc">
                <ul class="flex justify-between scroll-content w-[200vw]">
                    <li class="scroll-item mr-[2.5vw] w-[32.13vw]" v-for="item in songSheet" :key="item.id">
                        <img :src="item.picUrl" alt="" class="w-[30vw] h-[30vw] rounded-2xl mb-[1.3vw]">
                        <span class="text-[0.5rem]">{{item.name}}</span>
                    </li>
                </ul>
            </div>
        </main>
    </section>
</template>
<script>
import axios from 'axios';
import BScroll from '@better-scroll/core'
export default {
    data() {
        return {
            menu: [],
            banner: [],
            activeMenuItem: '',
        }
    },
    mounted() {
        this.init(this.$refs.scroll);
        this.init(this.$refs.sc);
    },
    beforeDestroy() {
        this.bs.destroy()
    },
    methods: {
        init(name) {
        this.bs = new BScroll(name, {
          scrollX: true,
          probeType: 3 // listening scroll event
        })
      }
    },
    created() {
        // 轮播图
        axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page').then(res => {
            console.log(res);
            this.banner = res.data.data.blocks[0].extInfo.banners
        })
        // 每日推荐
        axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball').then(res => {
            // console.log(res);
            this.commend = res.data.data
            console.log(this.commend);
        })
        // 推荐歌单
        axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized?limit=6').then(res => {
            this.songSheet = res.data.result
            console.log(this.songSheet);
        })
    }
}
</script>
<style>
    body {
        background-color: rgb(237, 241, 245);
    }

    input {
        padding-left: 20px;
    }

    input::placeholder {
        text-align: center;
    }

    .swiper-pagination-bullet {
        background-color: #fff;
    }

    .swiper-horizontal>.swiper-pagination-bullets {
        bottom: 0px;
    }

    .w {
        width: 92.22vw;
    }

    img {
        max-width: none;
    }

    .red-image {
        filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
    }
    
</style>
