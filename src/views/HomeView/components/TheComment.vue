<template>
    <div>
        <img :src="comment.picUrl" alt="" class="w-[30vw] h-[30vw] rounded-2xl mb-[1.3vw]">
        <span class="text-[0.5rem]">{{comment.name}}</span>
    </div>
</template>
<script>
    export default {
        props:['comment']
    }
</script>