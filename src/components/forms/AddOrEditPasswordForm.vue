<template>
  <Form>
    <template v-slot:header>
      {{ isEdit ? "Edit password" : "Add new password" }}
    </template>
    <template v-slot:default>
      <form @submit.prevent="onSubmit">
        <CustomInput
          v-model="login"
          :label="'Login'"
          :type="'text'"
          :value="loginText"
        />
        <CustomInput
          v-model="password"
          :label="'Password'"
          :type="'password'"
        />
        <CustomInput
          v-model="webPage"
          :label="'Web page'"
          :type="'text'"
          :value="webPageText"
        />
        <CustomInput
          v-model="description"
          :label="'Description'"
          :type="'text'"
          :value="descriptionText"
        />
        <PrimaryBytton
          :title="isEdit ? 'Edit password' : 'Add password'"
          :isLoading="isLoading"
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
import { PasswordWalletModel } from "@/models/PasswordWalletModel";

export default defineComponent({
  name: "AddOrEditPasswordForm",
  components: {
    CustomInput,
    Form,
    PrimaryBytton,
  },
  props: {
    isLoading: Boolean,
    loginText: String,
    descriptionText: String,
    webPageText: String,
    passwordId: String,
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const login = ref(props.loginText);
    const password = ref("");
    const description = ref(props.descriptionText);
    const webPage = ref(props.webPageText);

    const onSubmit = () => {
      const submitModel = props.isEdit
        ? ({
            id: props.passwordId,
            login: login.value,
            password: password.value,
            description: description.value,
            webPage: webPage.value,
          } as PasswordWalletModel)
        : ({
            login: login.value,
            password: password.value,
            description: description.value,
            webPage: webPage.value,
          } as AddPasswordModel);

      emit("handleaddoreditpassword", submitModel);
    };

    return {
      login,
      password,
      description,
      webPage,
      onSubmit,
    };
  },
});
</script>
