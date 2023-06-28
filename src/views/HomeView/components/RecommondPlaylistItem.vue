<template>
    <div>
        <div :style="`background-image:url(${$attrs.source})`" class="w-[32vw] h-[32vw] bg-cover bg-no-repeat">
        </div>
        <div>那就好好睡一觉吧</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            a:1
        }
    },
    // $attrs
    // $props  (被代理的)
    // 在组件封装属性时我们可选的属性类型：attr属性、prop属性
    // 两者都可以把数据从父组件传到子组件
    // 两者的区别：
    //      attr属性开箱即用 不需要额外配置 但是使用略显复杂 而且不具备属性值类型检测等功能
    //      prop属性需要现在对应组件中使用props配置项先行配置才能使用 使用简单 具备属性值类型检测等功能
    // props:['source'],
    props:{
        source:{
            // 属性值的类型，目前类型用对应数据的构造函数表达，如果约束为多种类型，用数组的
            type:Object,
            require:true
        }
    },
    mounted() {
        console.log(this.$attrs.source);
    }
}
</script>
