<template>
    <div>
        <div>
            <p class="flex items-center w-[47vw] mb-[1.3vw]">
                <Icon icon="solar:chat-round-like-linear" width="20" color="white" />
                <span class="text-[#fff]  ml-[1.3vw]">最令你感动的那首歌</span>
            </p>
            <p class="text-[#c9c9c9] ">484万热度</p>
        </div>
        <div class="flex justify-between w-[100%] mt-[5vw]">
            <div>
                <p class="text-[#ececec]">Saint_Denis:今日份的感动</p>
                <p class="text-[#ececec]">"我希望我们能永远真诚且热烈"</p>
            </div>
            <div>
                <img src="http://p1.music.126.net/JtMBJSd2ZFtarcVTAYjUFQ==/109951165550061432.jpg" alt="" class="w-[14vw] h-[14vw] rounded-xl">
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:['hot'],
    }
</script>