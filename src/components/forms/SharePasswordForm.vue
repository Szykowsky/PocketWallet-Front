<template>
  <Form>
    <template v-slot:header> Share Password </template>
    <template v-slot:default>
      <form @submit.prevent="onSubmit">
        <CustomInput v-model="login" :label="'Type user login to share password'" :type="'text'" />
        <PrimaryBytton
          :title="'Share password'"
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
import { ChangePasswordModel } from "@/models/ChangePasswordModel";
import Form from "@/components/ui/Form.vue";
import PrimaryBytton from "@/components/buttons/PrimaryButton.vue";
import { SharePasswordModel } from "@/models/SharePasswordModel";

export default defineComponent({
  name: "SharePasswordForm",
  components: {
    CustomInput,
    Form,
    PrimaryBytton,
  },
  props: {
    isLoading: Boolean,
    passwordId: String,
  },
  setup(props, { emit }) {
    const login = ref("");

    const isValid = () => {
      if (checkInput(login.value)) {
        return true;
      }
      return false;
    };

    const disabled = computed(() => !isValid() || props.isLoading);

    const onSubmit = () => {
      const sharePasswordModel: SharePasswordModel = {
        passwordId: props.passwordId || '',
        login: login.value,
      };

      emit("handlesharepassword", sharePasswordModel);
    };

    return {
      login,
      onSubmit,
      disabled,
    };
  },
});
</script>
