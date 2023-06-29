<template>
    <div>
        <img :src="every.iconUrl" alt="" class="w-[15vw] h-[15vw] red-image">
        <span>{{every.name}}</span>
    </div>
</template>
<script>
    export default {
        props:['every']
    }
</script>