<template>
    <section class="w-sreen h-screen mt-6 ">
        <!-- 头部 -->
        <header class="flex justify-around w-[100%]">
            <Icon icon="ph:list" color="#323" width="30" class=""/>
            <form action="" class="relative">
                <input type="text" name="" id="" :placeholder="defaultSearch.showKeyword" class="outline-none w-[73vw] rounded-2xl pl-[7vw] box-border" v-model="userSearchkeywords">
                <Icon icon="iconamoon:search-light" color="#ccc" width="20" class="absolute left-[1vw] top-[0.5vw] text-center" @click.native="searchHandler(userSearchkeywords)"/>
                <Icon icon="tabler:scan" color="#ccc" width="20" class="absolute right-[2vw] top-[0.5vw] text-center" />
                <ul v-if="SeachSuggestList" class="absolute top-[7vw] bg-[#fff] bg-opacity-[0.8] z-50 w-[73vw] rounded-2xl ">
                    <li v-for="item in SeachSuggestList" :key="item.id" @click="searchHandler(item.name)" class="pl-[7vw] box-border my-[3vw]">{{item.name}}</li>
                </ul>
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
        <main class="mt-[4.722vw] border-solid border-t border-b border-slate-[ebedf2] pt-[5.463vw] pb-[6.296vw] box-border">
            <p class="ml-[4.5vw] mb-[4vw]">
                <span class="font-bold text-[18px]">推荐歌单</span>
                <Icon icon="ep:arrow-left-bold" color="#333" width="20" :horizontalFlip="true" :verticalFlip="true" class="inline-block"/>
                <Icon icon="ant-design:more-outlined" color="#333" width="30" :horizontalFlip="true" :verticalFlip="true" class="float-right"/>
            </p>
            <div class="ml-[4.5vw] mt-[4.722vw] scroll-wrapper overflow-hidden"  ref="sc">
                <ul class="flex scroll-content w-[1000vw]">
                    <li class="scroll-item mr-[2.5vw] w-[32.13vw]" v-for="item in songSheet" :key="item.id">
                        <img :src="item.picUrl" alt="" class="w-[30vw] h-[30vw] rounded-2xl mb-[1.3vw]">
                        <span class="text-[0.5rem]">{{item.name}}</span>
                    </li>
                </ul>
            </div>
        </main>
        <!-- 新歌新碟 -->
        <main class="mt-[4.722vw] border-solid border-b border-slate-[ebedf2] pb-[6.296vw] box-border">
            <p class="ml-[4.5vw] mb-[6vw]">
                <span class="font-bold text-[18px]">新歌新碟\数字专辑</span>
                <Icon icon="ep:arrow-left-bold" color="#333" width="20" :horizontalFlip="true" :verticalFlip="true" class="inline-block"/>
                <Icon icon="ant-design:more-outlined" color="#333" width="30" :horizontalFlip="true" :verticalFlip="true" class="float-right"/>
            </p>
            <div class="ml-[4.5vw] mt-[4.722vw] scroll-wrapper"  ref="song">
                <ul class="flex justify-between scroll-content w-[714vw]">
                    <li class="scroll-item w-[88.819vw]" v-for="item in newSong" :key="item.id">
                        <div v-for="key in item.resources" :key="key.id" class="flex mb-[2.8vw]">
                            <div>
                                <img :src="key.uiElement.image.imageUrl" alt="" class="w-[18vw] h-[18vw] rounded-lg mr-5">
                            </div>
                            <div class="flex flex-col justify-around">
                                <p class="w-[65vw] font-bold">{{key.uiElement.mainTitle.title}}</p>
                                <p class="text-[12px]" style="color:#7a8490">{{key.uiElement.subTitle.title}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
        <!-- 排行榜 -->
        <main class="mt-[4.722vw] border-solid border-b border-slate-[ebedf2] pb-[6.296vw] box-border">
            <p class="ml-[4.5vw] mb-[6vw]">
                <span class="font-bold text-[18px]">排行榜</span>
                <Icon icon="ep:arrow-left-bold" color="#333" width="20" :horizontalFlip="true" :verticalFlip="true" class="inline-block"/>
                <Icon icon="ant-design:more-outlined" color="#333" width="30" :horizontalFlip="true" :verticalFlip="true" class="float-right"/>
            </p>
            <div class="ml-[4.5vw] mt-[4.722vw] scroll-wrapper"  ref="charts">
                <ul class="flex scroll-content w-[575vw]">
                    <li class="scroll-item w-[91vw] h-[54.4vw] mr-3 bg-stone-50 rounded-2xl shadow-lg p-[3.5vw] box-border" v-for="item in charts" :key="item.id">
                        <div>
                            <span class="text-[18px] font-bold">{{item.uiElement.mainTitle?.title}}</span>
                            <Icon icon="ep:arrow-left-bold" color="#333" width="10" :horizontalFlip="true" :verticalFlip="true" class="inline-block"/>
                            <span class="float-right text-[12px] leading-[8vw]">{{item.uiElement.mainTitle?.titleDesc}}</span>
                        </div>
                        <div v-for="(key,index) in item.resources" :key="key.id" class="flex justify-between mt-[2.8vw]">
                            <div class="flex w-[81vw]">
                                <div>
                                    <img :src="key.uiElement.image.imageUrl" alt="" class="w-[10vw] h-[10vw] rounded-lg mr-5">
                                </div>
                                <div class="mr-[4vw] leading-[11vw] font-bold" :style="{ 'color': getNodeColor(index) }">{{index + 1}}</div>
                                <div class="flex flex-col justify-around mr-[5vw] w-[51.875vw]">
                                    <p class="w-[51.875vw] font-bold text-ellipsis">{{key.uiElement.mainTitle.title}}</p>
                                    <p class="text-[12px]" style="color:#7a8490">{{key.resourceExtInfo?.artists[0].name}}</p>
                                </div>
                                <div class="flex items-center justify-center">
                                    <div class="text-[12px] text-center w-[5vw]" :style="{ 'color': getThemeColor(key.uiElement.labelText.text)}">{{key.uiElement.labelText.text}}</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
        <!-- 音乐日历 -->
        <main class="mt-[4.722vw] border-solid border-b border-slate-[ebedf2] pb-[6.296vw] box-border">
            <p class="ml-[4.5vw] mb-[6vw] overflow-hidden">
                <span class="font-bold text-[18px]">音乐日历</span>
                <span class="inline-block w-[13vw] h-[5.8vw] bg-[#ebedf2] rounded-2xl text-center leading-[6vw] text-[12px]">
                    更多
                    <Icon icon="ep:arrow-left-bold" color="#333" width="10" :horizontalFlip="true" :verticalFlip="true" class="inline-block"/>
                </span>
                <Icon icon="ant-design:more-outlined" color="#333" width="30" :horizontalFlip="true" :verticalFlip="true" class="float-right"/>
            </p>
            <div class="ml-[4.5vw] mt-[4.722vw] scroll-wrapper">
                <ul class="flex scroll-content w-[575vw]">
                    <li class="scroll-item w-[91vw] h-[54.4vw] mr-3 bg-stone-50 rounded-2xl shadow-lg p-[3.5vw] box-border">
                        <div v-for="item in date" :key="item.id" class="flex justify-between mt-[2.8vw]">
                            <div class="flex items-center justify-center">
                                <p></p>
                                <p>{{ item.title }}</p>
                            </div>
                            <div>
                                <img :src="item.imgUrl" alt="" class="w-[10vw] h-[10vw] rounded-lg mr-5">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
    </section>
</template>
<script>
import axios from 'axios';
import _ from 'lodash';
import BScroll from '@better-scroll/core';
import {fetchSearchDefault,fetchSearchResult,fetchSeachSuggest} from '@/request';
export default {
    data() {
        return {
            menu: [],
            banner: [],
            activeMenuItem: '',
            nodeValue:[0,1,2],
            theme:'新晋',
            defaultSearch:{},
            userSearchkeywords:'',
            SeachSuggestList:[]
        }
    },
    // async created() {
    //     const res = await fetchSearchDefault();
    //     this.defaultSearch = res.data.data
    //     console.log(this.defaultSearch);
    // },
    mounted() {
        this.init(this.$refs.scroll);
        this.init(this.$refs.sc);
        this.init(this.$refs.song);
        this.init(this.$refs.charts);
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
        },
        getNodeColor(index) {
            if(index === 0) {
                return "#c49125"
            }else if(index === 1) {
                return "#7eb2ab"
            }else {
                return "c67b4f"
            }
        },
        getThemeColor(name) {
            if(name !== '新晋') {
                return "red" 
            }else {
                return "#2eb784"
            }
        },
        async searchHandler(keywords) {
            const res = await fetchSearchResult({keywords:this.userSearchKeywords || this.defaultSearch.realkeyword})
            console.log(res);
        }
    },
    async created() {
        // 轮播图/新歌新碟/排行榜
        axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page').then(res => {
            // console.log(res);
            this.banner = res.data.data.blocks[0].extInfo.banners
            this.newSong = res.data.data.blocks[5].creatives
            this.charts = res.data.data.blocks[3].creatives
        })
        // 每日推荐
        axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball').then(res => {
            // console.log(res);
            this.commend = res.data.data
            // console.log(this.commend);
        })
        // 推荐歌单
        axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized?limit=6').then(res => {
            this.songSheet = res.data.result
            // console.log(this.songSheet);
        })
        // 音乐日历
        axios.get('https://neteasecloudmusicapi.vercel.app/#/?id=neteasecloudmusicapi').then(res => {
            this.date = res.data.data.calendarEvents.slice(0,2);
        })
        const res = await fetchSearchDefault();
        this.defaultSearch = res.data.data
        console.log(this.defaultSearch);
    },
    watch: {
        // async userSearchkeywords(keywords) {
        //     const res = await fetchSeachSuggest(keywords);
        //     console.log(res);
        //     this.SeachSuggestList = res.data.result.songs
        // }
        userSearchkeywords:_.debounce(async function(keywords) {
            const res = await fetchSeachSuggest(keywords);
            console.log(res);
            this.SeachSuggestList = res.data.result.songs
        },300) 
    }
}
</script>
<style>
    body {
        background: rgb(238,174,202);
        background: linear-gradient(90deg, rgba(238,174,202,0.7791491596638656) 29%, rgba(148,187,233,0.7987570028011204) 93%);
        /* background-color: #f7fafc; */
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

    .text-ellipsis {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
</style>
