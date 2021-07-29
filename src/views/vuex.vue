<template>
    <div>默认count: {{ iState.count }}</div>
    <div>
        <button @click="increment">增加</button>
        <button @click="decrement">减少</button>
    </div>
    <div>默认num: {{ num }}</div>
</template>
  
  <script setup lang="ts">
import {
    ref,
    reactive,
    toRefs,
    computed,
    watch,
    onMounted,
    watchEffect,
    provide,
    inject,
} from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

// 定义数据类型
interface IState {
    count: number;
    double: number;
}
/**
 * 定义变量数据
 * ref - 简单数据类型
 * reactive - 复杂数据类型
 */
const count = ref(0);
const iState: IState = reactive({
    count,
    double: computed(() => iState.count * 2),
});
// 定义操作方法
const increment = () => iState.count++;
const decrement = () => iState.count--;

interface INum {
    num: number;
    dNum: number;
}
const iNum: INum = reactive({
    num: ref(0),
    dNum: computed(() => iNum.num * 2),
});
// 解构
const { num, dNum } = { ...toRefs(iNum) };
</script>
  
  <style></style>
