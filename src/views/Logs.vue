<template>
  <Alert
    v-if="successMessage"
    :displayText="successMessage"
    :type="alertType.Success"
  />
  <div class="logs-container">
    <div>
      <div class="logs-content-container" v-if="!isLoading">
        <div>
          <SelectInput
            :options="functions"
            :defaultValue="selectedFunction"
            :label="'Action'"
            @handleselect="handleSelect"
          />
        </div>
        <LogsTable v-if="logs.length > 0" :logs="logs" />
        <h3 v-if="logs.length === 0">No logs found</h3>
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
  watchEffect,
  ref,
} from "vue";
import LogsTable from "@/components/tables/logs/LogsTable.vue";
import Spinner from "@/components/ui/Spinner.vue";
import Alert from "@/components/ui/Alert.vue";
import SelectInput from "@/components/controls/SelectInput.vue";
import { AlertType } from "@/models/AlertType";
import { useLogsFacade } from "@/store/logs/LogsFacade";

export default defineComponent({
  name: "Logs",
  components: {
    LogsTable,
    Spinner,
    Alert,
    SelectInput,
  },
  setup() {
    const {
      fetchLogs,
      fetchFunctions,
      getFunctions,
      resetMessages,
      getLogs,
      getIsLoadingFlag,
      getSuccesMessage,
      getSelectedFunction,
      setSlectedFunction,
    } = useLogsFacade();

    onMounted(() => {
      fetchLogs("All");
      fetchFunctions();
    });

    const logs = computed(() => getLogs());
    const functions = computed(() => getFunctions());
    const isLoading = computed(() => getIsLoadingFlag());
    const successMessage = computed(() => getSuccesMessage());
    const selectedFunction = computed(() => getSelectedFunction());

    const handleSelect = (name: string) => {
      setSlectedFunction(name);
      fetchLogs(name);
    };
    onUnmounted(() => {
      resetMessages();
      setSlectedFunction("All");
    });

    return {
      logs,
      isLoading,
      successMessage,
      functions,
      handleSelect,
      selectedFunction,
    };
  },
});
</script>

<style lang="scss" scoped>
.logs-container {
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 50px;
}
.logs-content-container {
  width: 1200px;
}
</style>
