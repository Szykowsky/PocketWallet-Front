<template>
  <Alert
    v-if="successMessage"
    :displayText="successMessage"
    :type="alertType.Success"
  />
  <div class="wallet-container">
    <div>
      <div class="wallet-button-container">
        <PrimaryBytton
          class="add-button"
          :title="'Add password'"
          @handleclick="handleGoToAddPassword"
        />
      </div>
      <div class="wallet-content-container" v-if="!isLoading">
        <WalletTable
          v-if="passwordWallet.length > 0"
          :passwordWallet="passwordWallet"
          @handleshowpassword="handleShowPassword"
          @handlehidepassword="handleHidePassword"
          @handledeletepassword="handleDeletePassword"
        />
        <h3 v-if="passwordWallet.length === 0">No passwords found</h3>
      </div>
      <div class="wallet-content-container" v-if="isLoading">
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { useWalletFacade } from "@/store/wallet/WalletFacade";
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  watchEffect
} from "vue";
import WalletTable from "@/components/tables/wallet/WalletTable.vue";
import PrimaryBytton from "@/components/buttons/PrimaryButton.vue";
import Spinner from "@/components/ui/Spinner.vue";
import Alert from "@/components/ui/Alert.vue";
import { AlertType } from "@/models/AlertType";

export default defineComponent({
  name: "PasswordWallet",
  components: {
    WalletTable,
    PrimaryBytton,
    Spinner,
    Alert
  },
  setup() {
    const {
      getPasswordWallet,
      fetchPasswordWallet,
      getOriginalPassword,
      hidePassword,
      resetMessages,
      getIsLoadingFlag,
      getSuccesMessage,
      deletePassword
    } = useWalletFacade();
    onMounted(() => {
      fetchPasswordWallet();
    });

    const passwordWallet = computed(() => getPasswordWallet());
    const isLoading = computed(() => getIsLoadingFlag());
    const successMessage = computed(() => getSuccesMessage());

    const handleGoToAddPassword = () => {
      router.push("/main/add-password");
    };

    const handleShowPassword = (id: string) => {
      getOriginalPassword(id);
    };

    const handleHidePassword = (id: string) => {
      hidePassword(id);
    };

    const handleDeletePassword = (id: string) => {
        deletePassword(id);
        console.log(id);
    }

    const alertType = AlertType;

    onUnmounted(() => resetMessages());
    return {
      handleGoToAddPassword,
      passwordWallet,
      handleShowPassword,
      handleHidePassword,
      handleDeletePassword,
      isLoading,
      successMessage,
      alertType
    };
  }
});
</script>

<style lang="scss" scoped>
.wallet-container {
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 50px;
}
.wallet-content-container {
  width: 1200px;
}
.wallet-button-container {
  display: flex;
}
.add-button {
  max-width: 250px;
}
</style>
