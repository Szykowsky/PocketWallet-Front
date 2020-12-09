<template>
  <tr>
    <td>{{ data.login }}</td>
    <td>{{ isPasswordExist(data.password) }}</td>
    <td>{{ data.webPage }}</td>
    <td>{{ data.description }}</td>
    <td>
      <Tooltip :content="'Show password'">
        <button
          v-if="!showPassword"
          type="button"
          class="btn"
          @click="handleShowPassword"
        >
          <i class="far fa-eye"></i>
        </button>
      </Tooltip>
      <Tooltip :content="'Hide password'">
        <button
          v-if="showPassword"
          type="button"
          class="btn"
          @click="handleHidePassword"
        >
          <i class="far fa-eye-slash"></i>
        </button>
      </Tooltip>
      <Tooltip
        :content="
          !data.canDelete
            ? 'You have to be an owner to share password'
            : 'Share password'
        "
      >
        <button
          type="button"
          class="btn"
          :disabled="!data.canShare"
          @click="handleSharePassword"
        >
          <i class="far fa-share-square"></i>
        </button>
      </Tooltip>
      <Tooltip
        :content="
          isReadMode
            ? 'You are in read mode, change it to edit password'
            : !data.canDelete
            ? 'You have to be an owner to edit password'
            : 'Edit password'
        "
      >
        <button
          type="button"
          class="btn"
          :disabled="!data.canEdit || isReadMode"
          @click="handleEditPassword"
        >
          <i class="far fa-edit"></i>
        </button>
      </Tooltip>
      <Tooltip
        :content="
          isReadMode
            ? 'You are in read mode, change it to delete password'
            : !data.canDelete
            ? 'You have to be an owner to delete password'
            : 'Delete password'
        "
      >
        <button
          type="button"
          class="btn"
          :disabled="!data.canDelete || isReadMode"
          @click="handleDeletePassword"
        >
          <i class="far fa-trash-alt"></i>
        </button>
      </Tooltip>
    </td>
  </tr>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { PasswordWalletModel } from "@/models/PasswordWalletModel";
import Tooltip from "../../ui/Tooltip.vue";

export default defineComponent({
  name: "WalletTableRow",
  components: {
    Tooltip,
  },
  props: {
    data: Object,
    isLoading: Boolean,
    isReadMode: Boolean,
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

    const handleEditPassword = () => {
      emit("handleeditpassword", props.data?.id);
    };

    const handleSharePassword = () => {
      emit("handlesharepassword", props.data?.id);
    };
    return {
      isPasswordExist,
      showPassword,
      handleShowPassword,
      handleHidePassword,
      handleDeletePassword,
      handleEditPassword,
      handleSharePassword,
    };
  },
});
</script>
<style lang="scss" scoped>
.btn {
  background-color: white;
}
.cont {
  z-index: 1000;
}
</style>