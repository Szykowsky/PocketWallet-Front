<template>
  <nav class="navbar navbar-dark bg-secondary">
    <span>
      Pocket Wallet 2020
    </span>
  </nav>
</template>

<script lang="ts">
import router from "@/router";
import { computed, defineComponent, reactive, watch, watchEffect } from "vue";
import { RouteLocationNormalizedLoaded } from "vue-router";

export default defineComponent({
  name: "Footer"
});
</script>
<style scoped>
.navbar {
  color: #b5b5b5;
  display: flex;
  justify-content: center;
  font-size: 14px;
  height: 40px;
}
</style>