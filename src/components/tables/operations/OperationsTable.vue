<template>
  <Table>
    <template v-slot:header>
      <OperationsHeaderRow />
    </template>
    <template v-slot:default>
      <OperationsRow
        v-for="operation in operations"
        :key="operation.id"
        :id="operation.id"
        :operation="operation.actionType"
        :time="operation.updatedAt"
        :value="operation.currentValue"
        :isReadMode="isReadMode"
        @handleshowpreviousvalue="handleShowPreviousValue"
      />
    </template>
  </Table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Table from "@/components/ui/Table.vue";
import OperationsRow from "@/components/tables/operations/OperationsTableRow.vue";
import OperationsHeaderRow from "@/components/tables/operations/OperationsTableHeaderRow.vue";

export default defineComponent({
  name: "OperationTable",
  components: {
    OperationsRow,
    OperationsHeaderRow,
    Table,
  },
  props: {
    operations: Array,
    isReadMode: Boolean,
  },
  setup(props, { emit }) {
    const handleShowPreviousValue = (id: string) => {
      emit("handleshowpreviousvalue", id);
    };
    return {handleShowPreviousValue};
  },
});
</script>

<style>
</style>
