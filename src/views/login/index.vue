<template>
    <!-- 星空背景 -->
    <starry />
    <!-- 星空背景 // -->

    <!-- sign up -->
    <el-row class="pd-20" justify="end">
        <el-col :span="2">
            <aButton
                type="both"
                borderColor="#f40"
                text="Sign up"
                custom-class="col-red"
                custom-style="box-shadow:inset 0 0 0 1px #fff;"
                @click="toRegister()"
            >
                <i class="el-icon-right el-icon--right"></i>
            </aButton>
        </el-col>
    </el-row>
    <!-- sign up // -->

    <div class="border-b col-red">123</div>

    <div class="box">
        <div class="font-20">Sign in to Polaris</div>
        <el-row>
            <el-col :span="18">
                <el-space
                    direction="vertical"
                    alignment="aling-items"
                    style="margin-top: 30px; width: 100%"
                >
                    <el-form
                        :model="ruleForm"
                        :rules="rules"
                        label-position="top"
                    >
                        <!-- email -->
                        <el-form-item
                            label="Username or email address"
                            prop="email"
                        >
                            <el-input
                                v-model="ruleForm.email"
                                name="email"
                                size="mini"
                            >
                                <template #prefix>
                                    <svg
                                        class="icon"
                                        aria-hidden="true"
                                        color="#ea4aaa"
                                        font-size="20"
                                    >
                                        <use xlink:href="#icon-xiangyou"></use>
                                    </svg>
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
                                    <svg
                                        class="icon"
                                        aria-hidden="true"
                                        color="#ea4aaa"
                                        font-size="20"
                                    >
                                        <use xlink:href="#icon-xiangyou"></use>
                                    </svg>
                                </template>
                            </el-input>
                        </el-form-item>
                        <!-- password // -->
                    </el-form>

                    <!-- login按钮 -->
                    <bButton :type="type" text="continue">
                        <i class="el-icon-right el-icon--right"></i>
                    </bButton>
                    <!-- login按钮 // -->
                </el-space>
            </el-col>
            <el-col> </el-col>
        </el-row>
        <bButton :type="type" text="continue" />
        <aButton type="both" />
    </div>
</template>

<script lang="ts" setup>
import starry from "@/components/starry/index.vue";
import bButton from "@/components/brightButton/index.vue";
import aButton from "@/components/brightButton/index2.vue";
import { ref, reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const toRegister = () => {
    console.log(1);
    console.log(router);
    router.push({ name: "register" });
};

let type = ref("draw");
const changeButton = () => {
    type.value = type.value == "draw" ? "meet" : "draw";
    console.log(type.value);
};

const val = ref(null);

let showPass = ref(false);
let emailStatus = ref(0);
let passwordStatus = ref(0);
const verifyEmail = () => {
    if (ruleForm.email.length < 5) {
        emailStatus.value = 2;
    } else {
        emailStatus.value = 1;
        showPass.value = !showPass.value;
    }
};

const verifyPassword = () => {
    if (ruleForm.password.length < 5) {
        passwordStatus.value = 2;
    } else {
        passwordStatus.value = 1;
    }
};

let ruleForm = reactive({
    email: ref(""),
    password: ref(""),
});

let rules = reactive({
    email: [
        {
            required: true,
            trigger: "blur",
            message: "Please enter your email address",
        },
        {
            min: 5,
            max: 15,
            trigger: "blur",
            message: "The length ranges from 5 to 15 characters",
        },
    ],
    password: [
        {
            required: true,
            trigger: "blur",
            message: "Please create your password",
        },
        {
            min: 5,
            max: 15,
            trigger: "blur",
            message: "The length ranges from 5 to 15 characters",
        },
    ],
});
</script>

<style scoped>
.sign-in {
    background: none;
    box-sizing: border-box;
    box-shadow: inset 0 0 0 1px #fff;
    color: #fff;
    border: 0;
    font-size: inherit;
    font-weight: 700;
    padding: 10px 15px;
    text-align: center;
    text-transform: capitalize;
    position: relative;
    vertical-align: middle;
}

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
.box >>> .el-form-item__label {
    color: #00cfc8 !important;
    font-weight: 600;
    font-size: 16px;
    padding: 0 !important;
}

.box >>> .el-input__inner {
    background-color: transparent !important;
    border: 0 !important;
    border-radius: 0 !important;
    border-bottom: 1px solid gray !important;
    text-indent: 10px !important;
    color: #ffffff;
    font-size: 18px;
}
.box >>> .el-input__prefix {
    display: flex;
    align-items: center;
}
</style>