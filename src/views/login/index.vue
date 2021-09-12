<template>
	<!-- 星空背景 -->
	<starry />
	<!-- 星空背景 // -->

	<div class="box">
		<div class="font-16 ing">Welcome to Polaris!</div>
		<div class="font-16 delay mt-15" v-if="showDelay">
			Let's begin the adventure
		</div>
		<el-row v-if="showBox">
			<el-col :span="18">
				<el-space
					direction="vertical"
					alignment="aling-items"
					style="margin-top: 30px; width: 100%"
				>
					<el-form :model="ruleForm" label-position="top">
						<!-- email -->
						<el-form-item label="Username or email address" prop="email">
							<el-input v-model="ruleForm.email" name="email" size="mini">
								<template #prefix>
									<vIcon name="xiangyou" color="#ea4aaa" font-size="20" />
								</template>
							</el-input>
						</el-form-item>
						<!-- email // -->

						<!-- password -->
						<el-form-item label="Password" prop="password">
							<el-input
								v-model="ruleForm.password"
								name="password"
								size="mini"
								show-password
							>
								<template #prefix>
									<vIcon name="xiangyou" color="#ea4aaa" font-size="20" />
								</template>
							</el-input>
						</el-form-item>
						<!-- password // -->
					</el-form>

					<!-- login按钮 -->
					<vButton
						text="continue"
						type="both"
						borderColor="#00cfc8"
						textHoverColor="#00cfc8"
						custom-style="color:#627597"
						@vButtonClick="login()"
					/>
					<!-- login按钮 // -->
				</el-space>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import starry from "@/components/starry/index.vue";
import vButton from "@/components/vButton/index2.vue";
import { ref, reactive, defineEmit } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
/**
 * 动画加载欢迎语和输入框
 */
let showDelay = ref(false);
let showBox = ref(false);
setTimeout(() => (showDelay.value = true), 1300);
setTimeout(() => (showBox.value = true), 3000);

/**
 * 验证登录
 */
const router = useRouter();
let ruleForm = reactive({
	email: ref(""),
	password: ref(""),
});
const login = () => {
	if (!ruleForm.email) {
		return ElMessage({ message: "请输入用户名或邮箱地址" });
	}

	if (!ruleForm.password) {
		return ElMessage({ message: "请输入密码" });
	}
	ElMessage({ message: "登录成功", type: "success" });
	router.push({ name: "home" });
};
</script>

<style scoped>
.box {
	width: 600px;
	padding: 24px;
	border-radius: 8px;
	border: 1px solid #202637;
	background-color: rgba(12, 22, 45, 0.3);
	color: #627597;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
.box :deep(.el-form-item__label) {
	color: #00cfc8 !important;
	font-weight: 600;
	font-size: 16px;
	padding: 0 !important;
}

.box :deep(.el-input__inner) {
	background-color: transparent !important;
	border: 0 !important;
	border-radius: 0 !important;
	border-bottom: 1px solid gray !important;
	text-indent: 10px !important;
	color: #ffffff;
	font-size: 18px;
}
.box :deep(.el-input__prefix) {
	display: flex;
	align-items: center;
}

.ing {
	width: 20ch;
	overflow: hidden;
	white-space: nowrap;
	animation: 1.2s ing steps(20);
}

@keyframes ing {
	from {
		width: 0ch;
	}
	to {
		width: 20ch;
	}
}

.delay {
	visibility: hidden;
	width: 25ch;
	overflow: hidden;
	white-space: nowrap;
	animation: 1.5s delaying steps(25);
	animation-fill-mode: forwards;
}

@keyframes delaying {
	from {
		visibility: visible;
		width: 0ch;
	}
	to {
		visibility: visible;
		width: 25ch;
	}
}
</style>
