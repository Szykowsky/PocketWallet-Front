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
        <UserInfo
          :user="userInfo?.userLogin"
          :successFulSignIn="userInfo?.successFulSignIn"
          :unSuccessFulSignIn="userInfo?.unSuccessFulSignIn"
        />
      </div>
      <div class="wallet-content-container" v-if="!isLoading">
        <WalletTable
          v-if="passwordWallet.length > 0"
          :passwordWallet="passwordWallet"
          :isReadMode="isReadMode"
          @handleshowpassword="handleShowPassword"
          @handlehidepassword="handleHidePassword"
          @handledeletepassword="openModal"
          @handleeditpassword="handleEditPassword"
          @handlesharepassword="handleSharePassword"
          @handleshowactions="handleShowActions"
        />
        <h3 v-if="passwordWallet.length === 0">No passwords found</h3>
      </div>
      <div class="wallet-content-container" v-if="isLoading">
        <Spinner />
      </div>
    </div>
    <div>
      <Modal v-show="isModalVisible">
        <template v-slot:body>Are you sure to delete password?</template>
        <template v-slot:footer>
          <span>
            <PrimaryBytton
              :title="'Delete'"
              @handleclick="handleDeletePassword"
            />
          </span>
          <span>
            <PrimaryBytton :title="'Close'" @handleclick="handleCloseModal" />
          </span>
        </template>
      </Modal>
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
  watchEffect,
  ref,
} from "vue";
import WalletTable from "@/components/tables/wallet/WalletTable.vue";
import PrimaryBytton from "@/components/buttons/PrimaryButton.vue";
import Spinner from "@/components/ui/Spinner.vue";
import Alert from "@/components/ui/Alert.vue";
import UserInfo from "@/components/ui/UserInfo.vue";
import Modal from "@/components/ui/Modal.vue";
import { AlertType } from "@/models/AlertType";
import { useAuthFacade } from "@/store/auth/AuthFacade";

export default defineComponent({
  name: "PasswordWallet",
  components: {
    WalletTable,
    PrimaryBytton,
    Spinner,
    Alert,
    UserInfo,
    Modal,
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
      deletePassword,
      getReadMode,
    } = useWalletFacade();

    const { getUserInfo, fetchUserInfo } = useAuthFacade();

    onMounted(() => {
      fetchPasswordWallet();
      fetchUserInfo();
    });

    const passwordWallet = computed(() => getPasswordWallet());
    const isLoading = computed(() => getIsLoadingFlag());
    const successMessage = computed(() => getSuccesMessage());
    const userInfo = computed(() => getUserInfo());
    const isReadMode = computed(() => getReadMode());

    const isModalVisible = ref(false);
    let idToRemove = "";

    const handleGoToAddPassword = () => {
      router.push("/main/add-password");
    };

    const handleShowPassword = (id: string) => {
      getOriginalPassword(id);
    };

    const handleHidePassword = (id: string) => {
      hidePassword(id);
    };

    const handleDeletePassword = () => {
      deletePassword(idToRemove);
      isModalVisible.value = false;
    };

    const openModal = (id: string) => {
      idToRemove = id;
      isModalVisible.value = true;
    };

    const handleCloseModal = () => {
      isModalVisible.value = false;
    };

    const handleEditPassword = (id: string) => {
      router.push(`/main/edit-password/${id}`);
    };

    const handleSharePassword = (id: string) => {
      router.push(`/main/share-password/${id}`);
    };

    const handleShowActions = (id: string) => {
      router.push(`/main/operations/${id}`);
    };

    const alertType = AlertType;

    onUnmounted(() => resetMessages());
    return {
      handleGoToAddPassword,
      passwordWallet,
      handleShowPassword,
      handleHidePassword,
      handleDeletePassword,
      handleEditPassword,
      handleSharePassword,
      handleShowActions,
      isLoading,
      successMessage,
      alertType,
      userInfo,
      isReadMode,
      isModalVisible,
      handleCloseModal,
      openModal,
    };
  },
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
  justify-content: space-between;
}
.add-button {
  max-width: 250px;
  max-height: 60px;
}

.modal-button {
  max-height: 40px;
  max-width: 100px;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
}
</style>
