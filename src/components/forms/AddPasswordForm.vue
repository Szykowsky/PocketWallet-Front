<template>
  <Form>
    <template v-slot:header>
      Add new password
    </template>
    <template v-slot:default>
      <form @submit.prevent="onSubmit">
        <CustomInput v-model="login" :label="'Login'" :type="'text'" />
        <CustomInput
          v-model="password"
          :label="'Password'"
          :type="'password'"
        />
        <CustomInput v-model="webPage" :label="'Web page'" :type="'text'" />
        <CustomInput
          v-model="description"
          :label="'Description'"
          :type="'text'"
        />
        <PrimaryBytton
          :title="'Add password'"
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
import { AddPasswordModel } from "@/models/AddPasswordModel";
import Form from "@/components/ui/Form.vue";
import PrimaryBytton from "@/components/buttons/PrimaryButton.vue";

export default defineComponent({
  name: "AddPasswordForm",
  components: {
    CustomInput,
    Form,
    PrimaryBytton
  },
  props: {
    isLoading: Boolean
  },
  setup(props, { emit }) {
    const login = ref("");
    const password = ref("");
    const description = ref("");
    const webPage = ref("");

    const isValid = () => {
      if (
        checkInput(login.value) &&
        checkInput(password.value) &&
        checkInput(description.value) &&
        checkInput(webPage.value)
      ) {
        return true;
      }
      return false;
    };

    const disabled = computed(() => !isValid() || props.isLoading);

    const onSubmit = () => {
      const changepasswordModel: AddPasswordModel = {
        login: login.value,
        password: password.value,
        description: description.value,
        webPage: webPage.value
      };

      emit("handleaddpassword", changepasswordModel);
    };

    return {
      login,
      password,
      description,
      webPage,
      onSubmit,
      disabled
    };
  }
});
</script>
