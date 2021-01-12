<template>
  <Alert v-if="error" :displayText="error" :type="alertType.Error" />
  <Alert
    v-if="successMessage"
    :displayText="successMessage"
    :type="alertType.Success"
  />
  <AddOrEditPasswordForm
    v-if="passwordValue"
    class="form"
    :passwordId="passwordValue.id"
    :isEdit="true"
    :isLoading="isLoading"
    :loginText="passwordValue.login"
    :webPageText="passwordValue.webPage"
    :descriptionText="passwordValue.description"
    @handleaddoreditpassword="handleEditPassword"
  />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted } from "vue";
import { RegisterModel } from "@/models/RegisterModel";
import AddOrEditPasswordForm from "@/components/forms/AddOrEditPasswordForm.vue";
import { useAuthFacade } from "@/store/auth/AuthFacade";
import Alert from "@/components/ui/Alert.vue";
import { AlertType } from "@/models/AlertType";
import { useWalletFacade } from "@/store/wallet/WalletFacade";
import { PasswordWalletModel } from "@/models/PasswordWalletModel";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "EditPassword",
  components: {
    AddOrEditPasswordForm,
    Alert,
  },
  setup() {
    const {
      getErrorMessage,
      getSuccesMessage,
      getFullSecurityPassword,
      fetchFullSecurityPasswordWallet,
      getIsLoadingFlag,
      editPassword,
      resetEditModel,
    } = useWalletFacade();
    const route = useRoute();

    onMounted(() => {
      const id = route.params.id;
      fetchFullSecurityPasswordWallet(String(id));
    });
    
    const handleEditPassword = (value: PasswordWalletModel) => {
      editPassword(value);
    };

    onUnmounted(() => {
      resetEditModel();
    });

    const passwordValue = computed(() => getFullSecurityPassword());
    const error = computed(() => getErrorMessage());
    const alertType = AlertType;
    const successMessage = computed(() => getSuccesMessage());
    const isLoading = computed(() => getIsLoadingFlag());

    return {
      handleEditPassword,
      error,
      alertType,
      successMessage,
      isLoading,
      passwordValue,
    };
  },
});
</script>

<style>
.form {
  margin-top: 60px;
}
</style>