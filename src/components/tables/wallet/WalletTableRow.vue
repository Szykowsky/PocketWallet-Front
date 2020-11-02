<template>
  <tr>
    <td>{{ data.login }}</td>
    <td>{{ isPasswordExist(data.password) }}</td>
    <td>{{ data.webPage }}</td>
    <td>{{ data.description }}</td>
    <td v-if="!showPassword">
      <button type="button" class="btn" @click="handleShowPassword">
        <i class="far fa-eye"></i>
      </button>
    </td>
    <td v-if="showPassword">
      <button type="button" class="btn" @click="handleHidePassword">
        <i class="far fa-eye-slash"></i>
      </button>
    </td>
  </tr>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { PasswordWalletModel } from "@/models/PasswordWalletModel";

export default defineComponent({
  name: "WalletTableRow",
  props: {
    data: Object,
    isLoading: Boolean
  },
  setup(props, { emit }) {
    const showPassword = ref(false);
    const isPasswordExist = (password: string) => {
      return password === null ? "********" : password;
    };

    const handleShowPassword = () => {
      emit("handleshowpassword", props.data?.id);
      showPassword.value = true;
    };

    const handleHidePassword = () => {
      emit("handlehidepassword", props.data?.id);
      showPassword.value = false;
    };
    return {
      isPasswordExist,
      showPassword,
      handleShowPassword,
      handleHidePassword
    };
  }
});
</script>
<style lang="scss" scoped>
.btn {
  background-color: white;
}
</style>