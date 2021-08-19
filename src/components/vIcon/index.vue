<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script lang="ts">
import "./vIcon";
import { computed } from "vue";
export default {
    name: "vIconf",
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    setup(props: { name: string }) {
        let iconName = computed(() => {
            return "#icon-" + props.name;
        });

        return {
            iconName,
        };
    },
};
</script>

<style scoped>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>