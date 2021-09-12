<template>
	<!-- <div
        class="button bz-buttonAnimat"
        :class="[
            type,
            customClass,
            clockwise ? 'clockwise' : 'counterclockwise',
        ]"
        :style="customStyle"
        @click="vButtonClick"
    >
        {{ text }}<slot></slot>
    </div> -->

	<!-- 顺时针 -->
	<template v-if="clockwise">
		<div
			v-if="type == 'horizontal'"
			class="button bz-buttonAnimat clockwise horizontal"
			:class="customClass"
			:style="customStyle"
			@click="vButtonClick"
		>
			{{ text }}<slot></slot>
		</div>
		<div
			v-if="type == 'vertical'"
			class="button bz-buttonAnimat clockwise vertical"
			:class="customClass"
			:style="customStyle"
			@click="vButtonClick"
		>
			{{ text }}<slot></slot>
		</div>
		<div
			v-if="type == 'both'"
			class="button bz-buttonAnimat clockwise both"
			:class="customClass"
			:style="customStyle"
			@click="vButtonClick"
		>
			{{ text }}<slot></slot>
			<div class="inner"></div>
		</div>
	</template>
	<!-- 顺时针 // -->

	<!-- 逆时针 -->
	<template v-else>
		<div
			v-if="type == 'horizontal'"
			class="button bz-buttonAnimat counterclockwise horizontal"
			:class="customClass"
			:style="customStyle"
			@click="vButtonClick"
		>
			{{ text }}<slot></slot>
		</div>
		<div
			v-if="type == 'vertical'"
			class="button bz-buttonAnimat counterclockwise vertical"
			:class="customClass"
			:style="customStyle"
			@click="vButtonClick"
		>
			{{ text }}<slot></slot>
		</div>
		<div
			v-if="type == 'both'"
			class="button bz-buttonAnimat counterclockwise both"
			:class="customClass"
			:style="customStyle"
			@click="vButtonClick"
		>
			{{ text }}<slot></slot>
			<div class="inner"></div>
		</div>
	</template>
	<!-- 逆时针 // -->
</template>

<script lang="ts">
export default {
	name: "aButoon",
	props: {
		type: {
			// 边框类型
			type: String,
			default: "",
		},
		borderColor: {
			// 边框颜色
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
		clockwise: {
			// 旋转方向
			type: Boolean,
			default: true,
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

    emits:['vButtonClick'],

	setup(props: any, { emit }: any) {
		console.log(props);

		const vButtonClick = () => {
			emit("vButtonClick");
		};

		return {
			vButtonClick,
		};
	},
};
</script>

<style scoped>
.button {
	display: inline-flex;
	align-items: center;
	position: relative;
	cursor: pointer;
	color: white;
	font-family: "Lato";
	font-size: 18px;
	padding: 10px 20px;
	/* box-shadow: 0 0 2px #fff; */
}

.button:hover {
	color: v-bind(textHoverColor) !important;
}
.bz-buttonAnimat {
	position: relative;
}
.bz-buttonAnimat .inner {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.bz-buttonAnimat:before,
.bz-buttonAnimat:after,
.bz-buttonAnimat .inner:before,
.bz-buttonAnimat .inner:after {
	background-color: v-bind(borderColor);
}
.bz-buttonAnimat:before,
.bz-buttonAnimat:after,
.bz-buttonAnimat .inner:before,
.bz-buttonAnimat .inner:after {
	position: absolute;
	content: "";
	display: block;
	-webkit-transition: -webkit-transform 0.3s;
	transition: -webkit-transform 0.3s;
	transition: transform 0.3s;
	transition: transform 0.3s, -webkit-transform 0.3s;
}
.bz-buttonAnimat.horizontal:before,
.bz-buttonAnimat.horizontal:after,
.bz-buttonAnimat.both:before,
.bz-buttonAnimat.both:after {
	left: 0;
	width: 100%;
	height: 2px;
	-webkit-transform: scaleX(0);
	transform: scaleX(0);
}
.bz-buttonAnimat.horizontal .inner:before,
.bz-buttonAnimat.horizontal .inner:after,
.bz-buttonAnimat.both .inner:before,
.bz-buttonAnimat.both .inner:after {
	top: 0;
	width: 2px;
	height: 100%;
	-webkit-transform: scaleY(0);
	transform: scaleY(0);
}
.bz-buttonAnimat.horizontal .inner:before,
.bz-buttonAnimat.both .inner:before {
	left: 0;
}
.bz-buttonAnimat.horizontal .inner:after,
.bz-buttonAnimat.both .inner:after {
	right: 0;
}
.bz-buttonAnimat.horizontal .inner:hover:before,
.bz-buttonAnimat.horizontal .inner:hover:after,
.bz-buttonAnimat.both .inner:hover:before,
.bz-buttonAnimat.both .inner:hover:after {
	-webkit-transform: scaleY(1);
	transform: scaleY(1);
}
.bz-buttonAnimat.horizontal:before,
.bz-buttonAnimat.both:before {
	top: 0;
}
.bz-buttonAnimat.horizontal:after,
.bz-buttonAnimat.both:after {
	bottom: 0;
}
.bz-buttonAnimat.horizontal:hover:before,
.bz-buttonAnimat.horizontal:hover:after,
.bz-buttonAnimat.both:hover:before,
.bz-buttonAnimat.both:hover:after {
	-webkit-transform: scaleX(1);
	transform: scaleX(1);
}
.bz-buttonAnimat.horizontal:hover .inner:before,
.bz-buttonAnimat.horizontal:hover .inner:after,
.bz-buttonAnimat.both:hover .inner:before,
.bz-buttonAnimat.both:hover .inner:after {
	-webkit-transform: scaleY(1);
	transform: scaleY(1);
}
.bz-buttonAnimat.horizontal.clockwise .inner:before,
.bz-buttonAnimat.both.clockwise .inner:before {
	-webkit-transform-origin: top center;
	transform-origin: top center;
}
.bz-buttonAnimat.horizontal.clockwise .inner:after,
.bz-buttonAnimat.both.clockwise .inner:after {
	-webkit-transform-origin: bottom center;
	transform-origin: bottom center;
}
.bz-buttonAnimat.horizontal.clockwise:before,
.bz-buttonAnimat.both.clockwise:before {
	-webkit-transform-origin: right center;
	transform-origin: right center;
}
.bz-buttonAnimat.horizontal.clockwise:after,
.bz-buttonAnimat.both.clockwise:after {
	-webkit-transform-origin: left center;
	transform-origin: left center;
}
.bz-buttonAnimat.horizontal.clockwise:hover .inner:before,
.bz-buttonAnimat.both.clockwise:hover .inner:before {
	-webkit-transform-origin: bottom center;
	transform-origin: bottom center;
}
.bz-buttonAnimat.horizontal.clockwise:hover .inner:after,
.bz-buttonAnimat.both.clockwise:hover .inner:after {
	-webkit-transform-origin: top center;
	transform-origin: top center;
}
.bz-buttonAnimat.horizontal.clockwise:hover:before,
.bz-buttonAnimat.both.clockwise:hover:before {
	-webkit-transform-origin: left center;
	transform-origin: left center;
}
.bz-buttonAnimat.horizontal.clockwise:hover:after,
.bz-buttonAnimat.both.clockwise:hover:after {
	-webkit-transform-origin: right center;
	transform-origin: right center;
}
.bz-buttonAnimat.horizontal.counterclockwise .inner:before,
.bz-buttonAnimat.both.counterclockwise .inner:before {
	-webkit-transform-origin: bottom center;
	transform-origin: bottom center;
}
.bz-buttonAnimat.horizontal.counterclockwise .inner:after,
.bz-buttonAnimat.both.counterclockwise .inner:after {
	-webkit-transform-origin: top center;
	transform-origin: top center;
}
.bz-buttonAnimat.horizontal.counterclockwise:before,
.bz-buttonAnimat.both.counterclockwise:before {
	-webkit-transform-origin: left center;
	transform-origin: left center;
}
.bz-buttonAnimat.horizontal.counterclockwise:after,
.bz-buttonAnimat.both.counterclockwise:after {
	-webkit-transform-origin: right center;
	transform-origin: right center;
}
.bz-buttonAnimat.horizontal.counterclockwise:hover .inner:before,
.bz-buttonAnimat.both.counterclockwise:hover .inner:before {
	-webkit-transform-origin: top center;
	transform-origin: top center;
}
.bz-buttonAnimat.horizontal.counterclockwise:hover .inner:after,
.bz-buttonAnimat.both.counterclockwise:hover .inner:after {
	-webkit-transform-origin: bottom center;
	transform-origin: bottom center;
}
.bz-buttonAnimat.horizontal.counterclockwise:hover:before,
.bz-buttonAnimat.both.counterclockwise:hover:before {
	-webkit-transform-origin: right center;
	transform-origin: right center;
}
.bz-buttonAnimat.horizontal.counterclockwise:hover:after,
.bz-buttonAnimat.both.counterclockwise:hover:after {
	-webkit-transform-origin: left center;
	transform-origin: left center;
}
.bz-buttonAnimat.vertical:before,
.bz-buttonAnimat.vertical:after {
	top: 0;
	width: 2px;
	height: 100%;
	-webkit-transform: scaleY(0);
	transform: scaleY(0);
}
.bz-buttonAnimat.vertical:before {
	left: 0;
}
.bz-buttonAnimat.vertical:after {
	right: 0;
}
.bz-buttonAnimat.vertical:hover:before,
.bz-buttonAnimat.vertical:hover:after {
	-webkit-transform: scaleY(1);
	transform: scaleY(1);
}
.bz-buttonAnimat.vertical.clockwise:before {
	-webkit-transform-origin: top center;
	transform-origin: top center;
}
.bz-buttonAnimat.vertical.clockwise:after {
	-webkit-transform-origin: bottom center;
	transform-origin: bottom center;
}
.bz-buttonAnimat.vertical.clockwise:hover:before {
	-webkit-transform-origin: bottom center;
	transform-origin: bottom center;
}
.bz-buttonAnimat.vertical.clockwise:hover:after {
	-webkit-transform-origin: top center;
	transform-origin: top center;
}
.bz-buttonAnimat.vertical.counterclockwise:before {
	-webkit-transform-origin: bottom center;
	transform-origin: bottom center;
}
.bz-buttonAnimat.vertical.counterclockwise:after {
	-webkit-transform-origin: top center;
	transform-origin: top center;
}
.bz-buttonAnimat.vertical.counterclockwise:hover:before {
	-webkit-transform-origin: top center;
	transform-origin: top center;
}
.bz-buttonAnimat.vertical.counterclockwise:hover:after {
	-webkit-transform-origin: bottom center;
	transform-origin: bottom center;
}
</style>
