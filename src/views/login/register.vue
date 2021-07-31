<template>
    <starry />

    <div class="box">
        <div>Welcome to here !!!</div>
        <div class="mt-10">Let’s begin the adventure</div>
        <el-space
            direction="vertical"
            alignment="aling-items"
            :size="40"
            style="margin-top: 40px; width: 100%"
        >
            <el-form :model="ruleForm" :rules="rules" label-position="top">
                <!-- email -->
                <el-form-item label="Enter your email" prop="email">
                    <el-row align="center" justify="center">
                        <el-col :span="1" class="flex-cc">
                            <svg
                                class="icon"
                                aria-hidden="true"
                                color="#ea4aaa"
                                font-size="20"
                                v-if="emailStatus == 0"
                            >
                                <use xlink:href="#icon-xiangyou"></use>
                            </svg>
                            <svg
                                class="icon"
                                aria-hidden="true"
                                color="#34d058"
                                font-size="20"
                                v-if="emailStatus == 1"
                            >
                                <use xlink:href="#icon-check"></use>
                            </svg>
                            <svg
                                class="icon"
                                aria-hidden="true"
                                color="#cb2431"
                                font-size="20"
                                v-if="emailStatus == 2"
                            >
                                <use xlink:href="#icon-close"></use>
                            </svg>
                        </el-col>
                        <el-col :span="14">
                            <el-input
                                v-model="ruleForm.email"
                                name="email"
                                size="mini"
                                class="ml-10"
                                style="background-color: transparent !important"
                            >
                            </el-input>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div
                                class="
                                    button
                                    bz-buttonAnimat
                                    clockwise
                                    both
                                    ml-20
                                    flex-cc
                                    pd-0
                                    font-14
                                    col-627597
                                "
                                @click="verifyEmail()"
                            >
                                continue
                                <div class="inner"></div>
                            </div>
                        </el-col>
                    </el-row>
                </el-form-item>
                <!-- email // -->

                <!-- password -->
                <el-form-item
                    label="Enter your password"
                    prop="password"
                    v-if="showPass"
                >
                    <el-row align="center" justify="center">
                        <el-col :span="1" class="flex-cc">
                            <svg
                                class="icon"
                                aria-hidden="true"
                                color="#ea4aaa"
                                font-size="20"
                                v-if="passwordStatus == 0"
                            >
                                <use xlink:href="#icon-xiangyou"></use>
                            </svg>
                            <svg
                                class="icon"
                                aria-hidden="true"
                                color="#34d058"
                                font-size="20"
                                v-if="passwordStatus == 1"
                            >
                                <use xlink:href="#icon-check"></use>
                            </svg>
                            <svg
                                class="icon"
                                aria-hidden="true"
                                color="#cb2431"
                                font-size="20"
                                v-if="passwordStatus == 2"
                            >
                                <use xlink:href="#icon-close"></use>
                            </svg>
                        </el-col>
                        <el-col :span="14">
                            <el-input
                                v-model="ruleForm.password"
                                name="password"
                                size="mini"
                                class="ml-10"
                                show-password
                            >
                            </el-input>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <div
                                class="
                                    button
                                    bz-buttonAnimat
                                    clockwise
                                    both
                                    ml-20
                                    flex-cc
                                    pd-0
                                    font-14
                                    col-627597
                                "
                                @click="verifyPassword()"
                            >
                                continue
                                <div class="inner"></div>
                            </div>
                        </el-col>
                    </el-row>
                </el-form-item>
                <!-- password // -->
            </el-form>
        </el-space>
    </div>
</template>

<script lang="ts" setup>
import starry from "@/components/starry/index.vue";
import { ref, reactive, toRefs } from "vue";
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
@import "@/style/border/lineAnimation.css";
.box {
    width: 600px;
    min-height: 200px;
    margin: 150px auto;
    padding: 24px;
    /* background-color: #0c162d; */
    background-color: rgba(12, 22, 45, 0.3);
    border: 1px solid #202637;
    border-radius: 8px;
    color: #627597;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
.item {
    display: flex;
}

.el-form-item__label {
    color: #00cfc8 !important;
    font-weight: 600;
    font-size: 16px;
    padding: 0 !important;
    /* margin-bottom: 10px; */
}

.el-input__inner {
    background-color: transparent !important;
    border: none !important;
}

.button {
    position: relative;
    cursor: pointer;
    color: white;
    font-family: "Lato";
    font-size: 1.5em;
    padding: 0.5em 1em 0.65em;
    margin: 0 10px;
}

.col-627597 {
    color: #627597 !important;
}
</style>