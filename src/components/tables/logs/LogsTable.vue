<template>
  <Table>
    <template v-slot:header>
      <LogsHeaderRow />
    </template>
    <template v-slot:default>
      <LogsRow
        v-for="log in logs"
        :key="log.id"
        :name="log.name"
        :description="log.description"
        :time="log.dateTime"
      />
    </template>
  </Table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Table from "@/components/ui/Table.vue";
import LogsHeaderRow from "@/components/tables/logs/LogsHeaderRow.vue";
import LogsRow from "@/components/tables/logs/LogsRow.vue";

export default defineComponent({
  name: "LogsTable",
  components: {
    LogsHeaderRow,
    LogsRow,
    Table,
  },
  props: {
    logs: Array,
  },
});
</script>

<style>
</style>
