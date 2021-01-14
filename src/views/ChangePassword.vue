<template>
  <div>
    <Alert v-if="error" :displayText="error" :type="alertType.Error" />
    <Alert
      v-if="successMessage"
      :displayText="successMessage"
      :type="alertType.Success"
    />

    <Alert
      :displayText="'If you change master password you will lose possibility of rollback passwords!!!'"
      :type="alertType.Error"
    />

    <ChangePasswordForm
      @handlechangepassword="handleChangePassword"
      :isLoading="showSpinner"
      class="form"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUnmounted } from "vue";
import { RegisterModel } from "@/models/RegisterModel";
import ChangePasswordForm from "@/components/forms/ChangePasswordForm.vue";
import { useAuthFacade } from "@/store/auth/AuthFacade";
import Alert from "@/components/ui/Alert.vue";
import { AlertType } from "@/models/AlertType";
import { ChangePasswordModel } from "@/models/ChangePasswordModel";

export default defineComponent({
  name: "ChangePassword",
  components: {
    ChangePasswordForm,
    Alert,
  },
  setup() {
    const {
      getErrorMessage,
      getIsLoadingFlag,
      changePassword,
      getSuccesMessage,
      resetMessages,
    } = useAuthFacade();

    const handleChangePassword = (value: ChangePasswordModel) => {
      changePassword(value);
    };

    const error = computed(() => getErrorMessage());
    const showSpinner = computed(() => getIsLoadingFlag());
    const alertType = AlertType;
    const successMessage = computed(() => getSuccesMessage());

    onUnmounted(() => resetMessages());
    return {
      handleChangePassword,
      error,
      showSpinner,
      alertType,
      successMessage,
    };
  },
});
</script>

<style>
.form {
  margin-top: 60px;
}
</style>