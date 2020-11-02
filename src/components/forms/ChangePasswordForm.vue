<template>
  <Form>
    <template v-slot:header>
      Change Password
    </template>
    <template v-slot:default>
      <form @submit.prevent="onSubmit">
        <CustomInput v-model="login" :label="'Login'" :type="'text'" />
        <CustomInput
          v-model="oldPassword"
          :label="'Old password'"
          :type="'password'"
        />
        <CustomInput
          v-model="newPassword"
          :label="'New password'"
          :type="'password'"
        />
        <CheckboxInput
          v-model="isPasswordKeptAsHash"
          :label="'Keep Password as hash'"
        />
        <PrimaryBytton
          :title="'Change password'"
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
import { ChangePasswordModel } from "@/models/ChangePasswordModel";
import Form from "@/components/ui/Form.vue";
import PrimaryBytton from "@/components/buttons/PrimaryButton.vue";

export default defineComponent({
  name: "ChangePasswordForm",
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
    const oldPassword = ref("");
    const newPassword = ref("");
    const isPasswordKeptAsHash = ref(false);

    const isValid = () => {
      if (
        checkInput(login.value) &&
        checkInput(oldPassword.value) &&
        checkInput(newPassword.value)
      ) {
        return true;
      }
      return false;
    };

    const disabled = computed(() => !isValid() || props.isLoading);

    const onSubmit = () => {
      const changepasswordModel: ChangePasswordModel = {
        login: login.value,
        oldPassword: oldPassword.value,
        newPassword: newPassword.value,
        isPasswordKeptAsHash: isPasswordKeptAsHash.value
      };

      emit("handlechangepassword", changepasswordModel);
    };

    return {
      login,
      oldPassword,
      newPassword,
      isPasswordKeptAsHash,
      onSubmit,
      disabled
    };
  }
});
</script>
