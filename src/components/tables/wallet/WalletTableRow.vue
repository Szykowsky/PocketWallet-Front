<template>
  <tr>
    <td>{{ data.login }}</td>
    <td>{{ isPasswordExist(data.password) }}</td>
    <td>{{ data.webPage }}</td>
    <td>{{ data.description }}</td>
    <td>
      <button
        v-if="!showPassword"
        type="button"
        class="btn"
        v-tooltip:top="'Show password'"
        @click="handleShowPassword"
      >
        <i class="far fa-eye"></i>
      </button>

      <button
        v-if="showPassword"
        type="button"
        class="btn"
        v-tooltip:top="'Hide password'"
        @click="handleHidePassword"
      >
        <i class="far fa-eye-slash"></i>
      </button>
      <button
        type="button"
        class="btn"
        v-tooltip:top="'Delete password'"
        @click="handleDeletePassword"
      >
        <i class="far fa-trash-alt"></i>
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
    isLoading: Boolean,
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

    const handleDeletePassword = () => {
      emit("handledeletepassword", props.data?.id);
    };
    return {
      isPasswordExist,
      showPassword,
      handleShowPassword,
      handleHidePassword,
      handleDeletePassword,
    };
  },
});
</script>
<style lang="scss" scoped>
.btn {
  background-color: white;
}
</style>