<script setup lang="ts">
import { api } from '~/api'
import { entryPath } from '~/utils'

useHead({ title: '登录' })
const router = useRouter()

const form = reactive({
  userName: '',
  password: '',
  graphCode: '',
})

const disabledSubmit = computed(() => {
  return !form.userName || !form.password
})

const { loading: codeLoading, data: codeData, start: updateCode } = api.login.getCode()
// updateCode()

const { isLoading: submitLoading, start: loginStart } = api.login.login()

const handlerSubmit = async({ values, errors } = {} as any) => {
  if (errors) return

  const { success } = loginStart({
    ...form,
    codeKey: codeData.value?.codeKey,
  })

  success((val) => {
    console.log('111', val)
    // router.push(entryPath())
  })
}
</script>

<template>
  <div class="loginContent h-[100vh]">
    <!-- {{ codeData?.img }} -->
    <div class="absolute w-[300px] left-1/2 p-8 bg-white top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md">
      <p class="text-xl mb-5 text-center w-full float-right">
        登录
      </p>
      <a-form :model="form" :style="{width: '100%'}" :label-col-props="{span: 0}" :wrapper-col-props="{span: 24}" @submit="handlerSubmit">
        <a-form-item
          hide-label
          hide-asterisk
          field="userName"
          :rules="[
            {required:true,message:'请输入用户名'},
          ]"
        >
          <a-input
            v-model.trim="form.userName"
            placeholder="请输入用户名"
            size="large"
          />
        </a-form-item>
        <a-form-item
          hide-label
          hide-asterisk
          field="password"
          :rules="[
            {required:true,message:'请输入密码'},
          ]"
        >
          <a-input v-model.trim="form.password" placeholder="请输入密码" size="large" />
        </a-form-item>
        <a-form-item
          hide-label
          hide-asterisk
          field="graphCode"
          :rules="[
            {required:true,message:'请输入图形码'},
          ]"
        >
          <a-input v-model.trim="form.graphCode" placeholder="请输入图形码" size="large" />
          <a-spin :loading="codeLoading">
            <a-image :src="codeData?.img" class="ml-1 h-[36px] w-[100px] whitespace-nowrap leading-[36px]" />
            <!-- <img :src="codeData?.img" class="ml-1 h-[36px] w-[100px] whitespace-nowrap leading-[36px]" alt="点击刷新" @click="updateCode"> -->
          </a-spin>
        </a-form-item>
        <a-form-item>
          <div class="footer flex items-center justify-between w-full">
            <a-checkbox>记住密码</a-checkbox>
            <p type="text" class="leading-6 cursor-pointer hover:text-$main">
              忘记密码
            </p>
          </div>
        </a-form-item>
        <a-form-item>
          <a-button
            :loading="submitLoading"
            html-type="submit"
            type="primary"
            :disabled="disabledSubmit"
            long
            size="large"
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>

<style lang="scss" scoped>
.loginContent{
  background-image: radial-gradient(rgba(0,0,0, .06) 10%,transparent 0);
  background-size:40px 40px;
}
</style>
