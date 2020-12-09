<template>
  <!-- <Alert
      v-if="successMessage"
      :displayText="successMessage"
      :type="alertType.Success"
    /> -->

  <AddOrEditPasswordForm
    @handleaddoreditpassword="handleAddPassword"
    :isLoading="showSpinner"
    class="form"
  />
</template>

<script lang="ts">
import { computed, defineComponent, onUnmounted } from "vue";
import { RegisterModel } from "@/models/RegisterModel";
import AddOrEditPasswordForm from "@/components/forms/AddOrEditPasswordForm.vue";
import { useAuthFacade } from "@/store/auth/AuthFacade";
import Alert from "@/components/ui/Alert.vue";
import { AlertType } from "@/models/AlertType";
import { AddPasswordModel } from "@/models/AddPasswordModel";
import { useWalletFacade } from "@/store/wallet/WalletFacade";

export default defineComponent({
  name: "AddPassword",
  components: {
    AddOrEditPasswordForm
    // Alert
  },
  setup() {
    const {
      addNewPassword,
      getErrorMessage,
      getSuccesMessage
    } = useWalletFacade();

    const handleAddPassword = (value: AddPasswordModel) => {
      addNewPassword(value);
    };

    const error = computed(() => getErrorMessage());
    const showSpinner = computed(() => false);
    const alertType = AlertType;
    const successMessage = computed(() => getSuccesMessage());

    return {
      handleAddPassword,
      error,
      showSpinner,
      alertType,
      successMessage
    };
  }
});
</script>

<style>
.form {
  margin-top: 60px;
}
</style>