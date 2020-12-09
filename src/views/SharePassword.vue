<template>
  <Alert v-if="error" :displayText="error" :type="alertType.Error" />
  <Alert
    v-if="successMessage"
    :displayText="successMessage"
    :type="alertType.Success"
  />
  <div class="share-container">
    <SharePasswordForm
      :isLoading="showSpinner"
      :passwordId="id"
      @handlesharepassword="handleSharePassword"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUnmounted } from "vue";
import SharePasswordForm from "../components/forms/SharePasswordForm.vue";
import { useRoute } from "vue-router";
import { useWalletFacade } from "@/store/wallet/WalletFacade";
import { SharePasswordModel } from "@/models/SharePasswordModel";
import { AlertType } from "@/models/AlertType";
import Alert from "@/components/ui/Alert.vue";

export default defineComponent({
  name: "SharePassword",
  components: {
    SharePasswordForm,
    Alert,
  },
  setup() {
    const route = useRoute();
    const {
      getErrorMessage,
      getIsLoadingFlag,
      sharePassword,
      getSuccesMessage,
      resetMessages,
    } = useWalletFacade();

    const id = route.params.id;

    const handleSharePassword = (sharePasswordModel: SharePasswordModel) => {
      sharePassword(sharePasswordModel);
    };

    const error = computed(() => getErrorMessage());
    const showSpinner = computed(() => getIsLoadingFlag());
    const alertType = AlertType;
    const successMessage = computed(() => getSuccesMessage());

    onUnmounted(() => resetMessages());
    return {
      id,
      handleSharePassword,
      showSpinner,
      successMessage,
      alertType,
      error,
    };
  },
});
</script>

<style scoped>
.share-container {
  margin-top: 60px;
}
</style>>
