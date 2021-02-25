<template>
  <div>
    <h2>登录页 - by ctcode</h2>
    <a-form layout="inline" :model="formData" @finish="onFinish(formData)">
      <a-form-item>
        <a-input
          v-model:value="formData.username"
          placeholder="用户名"
        />
      </a-form-item>
      <a-form-item>
        <a-input 
        v-model:value="formData.password" 
        type="password"
        placeholder="密码" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit"> 登录 </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { message } from "ant-design-vue";

export default {
  setup() {
    const store = useStore();
    
    // 声明响应表单数据对象
    const formData = reactive({
      username: "",
      password: "",
    });

    /**
     * 请求登录函数
     * @param {object} data
     */
    async function onFinish(formData) {
      const result = await store.dispatch("user/login", formData);
      const { data, type } = result.data;

      // 登录后结果处理，这里要根据后台接口实际的返回进行处理
      if(type == "success") {
        message.success(`登录成功：欢迎${data.user.realname}`)
      } else {
        message.error("登录失败！")
      }
    }

    return {
      formData,
      onFinish,
    };
  }
};
</script>