<template>
  <Form>
    <template v-slot:header>
      Sign up
    </template>
    <template v-slot:default>
      <form @submit.prevent="onSubmit">
        <CustomInput v-model="login" :label="'Login'" :type="'text'" />
        <CustomInput
          v-model="password"
          :label="'Password'"
          :type="'password'"
        />
        <CheckboxInput
          v-model="isPasswordKeptAsHash"
          :label="'Keep Password as hash'"
        />
        <PrimaryBytton
          :title="'Sign up'"
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
import CheckboxInput from "@/components/controls/CheckboxInput.vue";
import { checkInput } from "@/helpers/checkInput";
import { RegisterModel } from "@/models/RegisterModel";
import Form from "@/components/ui/Form.vue";
import PrimaryBytton from "@/components/buttons/PrimaryButton.vue";

export default defineComponent({
  name: "SignUpForm",
  components: {
    CustomInput,
    CheckboxInput,
    Form,
    PrimaryBytton
  },
  props: {
    isLoading: Boolean
  },
  setup(props, { emit }) {
    const login = ref("");
    const password = ref("");
    const isPasswordKeptAsHash = ref(false);

    const isValid = () => {
      if (checkInput(login.value) && checkInput(password.value)) {
        return true;
      }
      return false;
    };

    const disabled = computed(() => !isValid() || props.isLoading);

    const onSubmit = () => {
      const registerModel: RegisterModel = {
        login: login.value,
        password: password.value,
        isPasswordKeptAsHash: isPasswordKeptAsHash.value
      };

      emit("handlesignup", registerModel);
    };

    return {
      login,
      password,
      isPasswordKeptAsHash,
      onSubmit,
      disabled
    };
  }
});
</script>
