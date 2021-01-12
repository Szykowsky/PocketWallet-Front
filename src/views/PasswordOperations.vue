<template>
  <div v-if="isLoading">
    <Spinner />
  </div>
  <div v-if="!isLoading">
      <OperationTable
        :operations="operations"
        :isReadMode="isReadMode"
      />
  </div>
  <!-- <Alert
    v-if="successMessage"
    :displayText="successMessage"
    :type="alertType.Success"
  /> -->
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
import Spinner from "@/components/ui/Spinner.vue";
import Alert from "@/components/ui/Alert.vue";
import OperationTable from "@/components/tables/operations/OperationsTable.vue";
import { AlertType } from "@/models/AlertType";
import { usePasswordOperationFacade } from "@/store/operations/PasswordOperationsFacade";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "PasswordOperations",
  components: {
    //Alert,
    Spinner,
    OperationTable
  },
  setup() {
    const {
      fetchPasswordOperation,
      resetMessages,
      getIsLoadingFlag,
      getSuccesMessage,
      getPasswordOperations,
    } = usePasswordOperationFacade();

    const {
      getReadMode,
    } = useWalletFacade();

    const route = useRoute();

    onMounted(() => {
      const id = route.params.id;
      fetchPasswordOperation(String(id));
    });

    const operations = computed(() => getPasswordOperations());
    const isLoading = computed(() => getIsLoadingFlag());
    const successMessage = computed(() => getSuccesMessage());
    const isReadMode = computed(() => getReadMode());

    onUnmounted(() => {
      resetMessages();
    });

    return {
      operations,
      isLoading,
      successMessage,
      isReadMode
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
