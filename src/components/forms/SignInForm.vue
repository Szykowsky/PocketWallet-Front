<template>
  <Form>
    <template v-slot:header>
      Sign in
    </template>
    <template v-slot:default>
      <form @submit.prevent="onSubmit">
        <CustomInput v-model="login" :label="'Login'" :type="'text'" />
        <CustomInput
          v-model="password"
          :label="'Password'"
          :type="'password'"
        />
        <PrimaryBytton
          :title="'Sign in'"
          :isLoading="isLoading"
          :disabled="disabled"
        />
      </form>
    </template>
  </Form>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, watchEffect } from "vue";
import CustomInput from "@/components/controls/CustomInput.vue";
import { checkInput } from "@/helpers/checkInput";
import { LoginModel } from "@/models/LoginModel";
import Form from "@/components/ui/Form.vue";
import PrimaryBytton from "@/components/buttons/PrimaryButton.vue";

export default defineComponent({
  name: "SignInForm",
  components: {
    CustomInput,
    PrimaryBytton,
    Form
  },
  props: {
    isLoading: Boolean
  },
  setup(props, { emit }) {
    const login = ref("");
    const password = ref("");

    const isValid = () => {
      if (checkInput(login.value) && checkInput(password.value)) {
        return true;
      }
      return false;
    };

    const disabled = computed(() => !isValid() || props.isLoading);

    const onSubmit = () => {
      const loginModel: LoginModel = {
        login: login.value,
        password: password.value
      };
      emit("handlesignin", loginModel);
    };

    return {
      login,
      password,
      onSubmit,
      disabled
    };
  }
});
</script>
