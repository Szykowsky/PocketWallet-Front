<template>
  <table class="table">
    <thead class="thead-light">
      <slot name="header"></slot>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Table"
});
</script>

<style scoped>
.header-slot {
  margin-bottom: 20px;
}
table {
  margin-top: 20px;
  margin-left: 0;
  margin-right: 0;
}
</style>