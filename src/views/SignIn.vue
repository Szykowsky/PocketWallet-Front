<template>
  <div>
    <Alert v-if="error" :displayText="error" :type="alertType.Error" />
    <Alert
      v-if="successMessage"
      :displayText="successMessage"
      :type="alertType.Success"
    />

    <SignInForm
      @handlesignin="handleSignIn"
      :isLoading="showSpinner"
      class="form"
    />
    <div>
      <router-link to="/signup">
        Don't have an account yet? Sign up!
      </router-link>
    </div>
    <div>
      <router-link to="/unban">
        If account is banned, click there to unban.
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import SignInForm from "../components/forms/SignInForm.vue";
import { computed, defineComponent, onUnmounted } from "vue";
import { useAuthFacade } from "@/store/auth/AuthFacade";
import { LoginModel } from "@/models/LoginModel";
import Alert from "@/components/ui/Alert.vue";
import { AlertType } from "@/models/AlertType";
import { useWalletFacade } from "@/store/wallet/WalletFacade";

export default defineComponent({
  name: "SignIn",
  components: {
    SignInForm,
    Alert,
  },
  setup() {
    const {
      signIn,
      getErrorMessage,
      getIsLoadingFlag,
      getSuccesMessage,
      resetMessages,
    } = useAuthFacade();

    const {
        setReadMode
    } = useWalletFacade();

    const handleSignIn = (value: LoginModel) => {
      signIn(value);
      setReadMode(true);
    };

    const error = computed(() => getErrorMessage());
    const showSpinner = computed(() => getIsLoadingFlag());
    const successMessage = computed(() => getSuccesMessage());

    const alertType = AlertType;

    onUnmounted(() => resetMessages());

    return {
      handleSignIn,
      error,
      showSpinner,
      successMessage,
      alertType,
    };
  },
});
</script>
<style scoped>
.form {
  margin-top: 60px;
}
</style>
