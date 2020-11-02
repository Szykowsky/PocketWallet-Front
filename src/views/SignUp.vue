<template>
  <div>
    <Alert v-if="error" :displayText="error" :type="alertType.Error" />
    <SignUpForm
      @handlesignup="handleSignUp"
      :isLoading="showSpinner"
      class="form"
    />
    <router-link to="/">
      You already have an account, please sign in!
    </router-link>
  </div>
</template>

<script lang="ts">
import { RegisterModel } from "@/models/RegisterModel";
import { computed, defineComponent } from "vue";
import SignUpForm from "@/components/forms/SignUpForm.vue";
import { useAuthFacade } from '@/store/auth/AuthFacade';
import Alert from "@/components/ui/Alert.vue";
import { AlertType } from "@/models/AlertType";

export default defineComponent({
  name: "SignUp",
  components: {
    SignUpForm,
    Alert
  },
  setup() {
    const { getErrorMessage, getIsLoadingFlag, signUp } = useAuthFacade();

    const handleSignUp = (value: RegisterModel) => {
      signUp(value);
    };

    const error = computed(() => getErrorMessage());
    const showSpinner = computed(() => getIsLoadingFlag());
    const alertType = AlertType;

    return {
      handleSignUp,
      error,
      showSpinner,
      alertType
    };
  }
});
</script>

<style scoped>
.form {
  margin-top: 60px;
}
</style>