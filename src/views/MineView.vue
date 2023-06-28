<template>
    <div>
        <div class="w-screen h-[500px] bg-orange-300 font-[80px] leading-[300px]">
            MineView
        </div>
        <button v-on:click="f1($event)" v-on:mouseleave="f2">click1</button>
        <input type="text" placeholder="测试" :value="value" class="border-[1px]" @input="(e) => (value = e.target.value)" v-model="value" />
        <input type="text"  />
        <input type="text" placeholder="测试" :value="value" class="border-[1px]" v-model="value" />
        <!-- <button v-on="{click:f1,mouseleave:f2}">click2</button>
        <a :href="href" id="id"> go to IndexView</a>
        <a v-bind="{href,id}" id="id"> go to IndexView</a> -->
    </div>
</template>
<script>
    export default {
        name:'Mine',
        data() {
            return {href:"#IndexView",id:"anchor",value:""};
        },
        methods:{
            inputHandle(e) {
                this.value = e.target.value;
            },
            f1(e) {
                console.log(e);
            },
            f2() {
                console.log(2);
            }
        },
        created() {
            window.mine = this
        }
    }
</script>
