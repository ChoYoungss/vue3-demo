<template>
    <button
        v-if="type == 'draw'"
        class="draw"
        :class="customClass"
        :style="customStyle"
        @click="$emit('click')"
    >
        {{ text }}<slot />
    </button>
    <button
        v-if="type == 'meet'"
        class="draw meet"
        :class="customClass"
        :style="customStyle"
        @click="$emit('click')"
    >
        {{ text }}<slot />
    </button>
    <button
        v-if="type == 'center'"
        class="center"
        :class="customClass"
        :style="customStyle"
        @click="$emit('click')"
    >
        {{ text }}<slot />
    </button>
    <button
        v-if="type == 'spin'"
        class="spin"
        :class="customClass"
        :style="customStyle"
        @click="$emit('click')"
    >
        {{ text }}<slot />
    </button>
    <button
        v-if="type == 'circle'"
        class="spin circle"
        :class="customClass"
        :style="customStyle"
        @click="$emit('click')"
    >
        {{ text }}<slot />
    </button>
    <button
        v-if="type == 'thick'"
        class="spin thick"
        :class="customClass"
        :style="customStyle"
        @click="$emit('click')"
    >
        {{ text }}<slot />
    </button>
</template>

<script lang="ts">
export default {
    name: "bButoon",
    props: {
        type: {
            // 边框类型
            type: String,
            default: "draw",
        },
        borderColor:{
            // 边框颜色
            type:String,
            default:""
        },
        borderHoverColor: {
            // hover边框颜色
            type: String,
            default: "#627597",
        },
        textHoverColor: {
            // hover时文字颜色
            type: String,
            default: "#627597",
        },
        text: {
            // 按钮文字
            type: String,
            default: "button",
        },
        customClass: {
            type: String,
            default: "",
        },
        customStyle: {
            type: String,
            default: "",
        },
    },
};
</script>

<style scoped>
button {
    background: none;
    border: 0;
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px v-bind(borderColor);
    color: #f45e61;
    font-size: inherit;
    /* font-weight: 700; */
    padding: 10px 20px;
    text-align: center;
    /* text-transform: capitalize; */
    position: relative;
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
}
button::before,
button::after {
    box-sizing: border-box;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
}

.draw {
    -webkit-transition: color 0.25s;
    transition: color 0.25s;
}
.draw::before,
.draw::after {
    border: 2px solid transparent;
    width: 0;
    height: 0;
}
.draw::before {
    top: 0;
    left: 0;
}
.draw::after {
    bottom: 0;
    right: 0;
}
.draw:hover {
    /* color: #60daaa; */
    color:v-bind(textHoverColor)
}
.draw:hover::before,
.draw:hover::after {
    width: 100%;
    height: 100%;
}
.draw:hover::before {
    border-top-color: v-bind(borderHoverColor);
    border-right-color:  v-bind(borderHoverColor);
    -webkit-transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
    transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
}
.draw:hover::after {
    border-bottom-color: v-bind(borderHoverColor);
    border-left-color:  v-bind(borderHoverColor);
    -webkit-transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s,
        height 0.25s ease-out 0.75s;
    transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s,
        height 0.25s ease-out 0.75s;
}

.meet:hover {
    /* color: #fbca67; */
    color: v-bind(textHoverColor);
}
.meet::after {
    top: 0;
    left: 0;
}
.meet:hover::before {
    border-top-color:  v-bind(borderHoverColor);
    border-right-color:  v-bind(borderHoverColor);
}
.meet:hover::after {
    border-bottom-color:  v-bind(borderHoverColor);
    border-left-color:  v-bind(borderHoverColor);
    -webkit-transition: height 0.25s ease-out, width 0.25s ease-out 0.25s;
    transition: height 0.25s ease-out, width 0.25s ease-out 0.25s;
}

.center:hover {
    /* color: #6477b9; */
    color: v-bind(textHoverColor);
}
.center::before,
.center::after {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
}
.center::before {
    border-top: 2px solid  v-bind(borderHoverColor);
    border-bottom: 2px solid  v-bind(borderHoverColor);
    -webkit-transform: scale3d(0, 1, 1);
    transform: scale3d(0, 1, 1);
}
.center::after {
    border-left: 2px solid  v-bind(borderHoverColor);
    border-right: 2px solid  v-bind(borderHoverColor);
    -webkit-transform: scale3d(1, 0, 1);
    transform: scale3d(1, 0, 1);
}
.center:hover::before,
.center:hover::after {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
}

.spin {
    width: 6em;
    height: 6em;
    padding: 0;
}
.spin:hover {
    /* color: #0eb7da; */
    color: v-bind(textHoverColor);
}
.spin::before,
.spin::after {
    top: 0;
    left: 0;
}
.spin::before {
    border: 2px solid transparent;
}
.spin:hover::before {
    border-top-color:  v-bind(borderHoverColor);
    border-right-color:  v-bind(borderHoverColor);
    border-bottom-color:  v-bind(borderHoverColor);
    -webkit-transition: border-top-color 0.15s linear,
        border-right-color 0.15s linear 0.1s,
        border-bottom-color 0.15s linear 0.2s;
    transition: border-top-color 0.15s linear,
        border-right-color 0.15s linear 0.1s,
        border-bottom-color 0.15s linear 0.2s;
}
.spin::after {
    border: 0 solid transparent;
}
.spin:hover::after {
    border-top: 2px solid  v-bind(borderHoverColor);
    border-left-width: 2px;
    border-right-width: 2px;
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
    -webkit-transition: -webkit-transform 0.4s linear 0s,
        border-left-width 0s linear 0.35s;
    transition: transform 0.4s linear 0s, border-left-width 0s linear 0.35s;
}

.circle {
    border-radius: 100%;
    box-shadow: none;
}
.circle::before,
.circle::after {
    border-radius: 100%;
}

.thick {
    color: #f45e61;
}
.thick:hover {
    color: v-bind(textHoverColor);
    font-weight: 700;
}
.thick::before {
    border: 3em solid transparent;
    z-index: -1;
}
.thick::after {
    mix-blend-mode: color-dodge;
    z-index: -1;
}
.thick:hover::before {
    background:  v-bind(borderHoverColor);
    border-top-color:  v-bind(borderHoverColor);
    border-right-color:  v-bind(borderHoverColor);
    border-bottom-color:  v-bind(borderHoverColor);
    -webkit-transition: background 0s linear 0.4s, border-top-color 0.15s linear,
        border-right-color 0.15s linear 0.15s,
        border-bottom-color 0.15s linear 0.25s;
    transition: background 0s linear 0.4s, border-top-color 0.15s linear,
        border-right-color 0.15s linear 0.15s,
        border-bottom-color 0.15s linear 0.25s;
}
.thick:hover::after {
    border-top: 3em solid  v-bind(borderHoverColor);
    border-left-width: 3em;
    border-right-width: 3em;
}
</style>