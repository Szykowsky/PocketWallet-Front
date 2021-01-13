<template>
  <div v-if="isLoading">
    <Spinner />
  </div>
  <div v-if="!isLoading">
    <OperationTable
      :operations="operations"
      :isReadMode="isReadMode"
      @handleshowpreviousvalue="handleShowPreviousValue"
    />
  </div>
  <div v-if="isModalVisible">
        <VueJsonPretty :data="preValue" />
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
import Spinner from "@/components/ui/Spinner.vue";
import Alert from "@/components/ui/Alert.vue";
import OperationTable from "@/components/tables/operations/OperationsTable.vue";
import VueJsonPretty from "vue-json-pretty";
import 'vue-json-pretty/lib/styles.css';
import { AlertType } from "@/models/AlertType";
import { usePasswordOperationFacade } from "@/store/operations/PasswordOperationsFacade";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "PasswordOperations",
  components: {
    //Alert,
    Spinner,
    OperationTable,
    VueJsonPretty,
  },
  setup() {
    const {
      fetchPasswordOperation,
      resetMessages,
      getIsLoadingFlag,
      getSuccesMessage,
      getPasswordOperations,
    } = usePasswordOperationFacade();

    const { getReadMode } = useWalletFacade();

    const route = useRoute();

    const isModalVisible = ref(false);
    const preValue = ref();

    onMounted(() => {
      const id = route.params.id;
      fetchPasswordOperation(String(id));
    });

    const operations = computed(() => getPasswordOperations());
    const isLoading = computed(() => getIsLoadingFlag());
    const successMessage = computed(() => getSuccesMessage());
    const isReadMode = computed(() => getReadMode());

    const handleShowPreviousValue = (id: string) => {
      const op = operations.value.find((x) => x.id === id);
      preValue.value = JSON.parse(op?.currentValue || "");
      isModalVisible.value = true;

      console.log({ op, val: preValue.value });
    };

    onUnmounted(() => {
      resetMessages();
    });

    return {
      operations,
      isLoading,
      successMessage,
      isReadMode,
      isModalVisible,
      preValue,
      handleShowPreviousValue,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
