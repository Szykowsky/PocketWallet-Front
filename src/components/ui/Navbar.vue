<template>
  <nav class="navbar navbar-dark bg-secondary">
    <router-link to="/main" class="main"> Pocket Wallet </router-link>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button
        v-if="showButton && !reactiveValue.isChangePasswordRoute"
        class="btn btn-secondary"
        type="button"
        @click="handleChangePassword"
      >
        Change master password
      </button>
      <button
        v-if="showButton && reactiveValue.isChangePasswordRoute"
        class="btn btn-secondary"
        type="button"
        @click="handleGoToWallet"
      >
        Wallet
      </button>
      <button
        v-if="showButton"
        class="btn btn-secondary"
        type="button"
        @click="handleChangeApplicationMode"
      >
        Change mode
      </button>
      <button
        v-if="showButton"
        class="btn btn-secondary"
        type="button"
        @click="handleShowLogs"
      >
        Logs
      </button>
      <button
        v-if="showButton"
        class="btn btn-secondary"
        type="button"
        @click="handleSignOut"
      >
        Sign out
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import router from "@/router";
import { computed, defineComponent, reactive, watch, watchEffect } from "vue";
import { RouteLocationNormalizedLoaded } from "vue-router";

export default defineComponent({
  name: "Navbar",
  props: {
    showButton: Boolean,
  },
  setup(props, { emit }) {
    const handleSignOut = () => {
      emit("handlesignout");
    };
    const handleChangePassword = () => {
      emit("handlechangepassword");
    };
    const handleGoToWallet = () => {
      emit("handlegotowallet");
    };

    const handleChangeApplicationMode = () => {
      emit("handlechangeapplicationmode");
    };

    const reactiveValue = reactive({
      isChangePasswordRoute: false,
    });

    const handleShowLogs = () => {
        emit("handleshowlogs");
    }

    const watchChangePasswordRoute = (
      currentRoute: RouteLocationNormalizedLoaded
    ) => {
      reactiveValue.isChangePasswordRoute =
        currentRoute.name === "ChangePassword";
    };
    watch(router.currentRoute, watchChangePasswordRoute);

    return {
      handleSignOut,
      handleChangePassword,
      reactiveValue,
      handleGoToWallet,
      handleChangeApplicationMode,
      handleShowLogs
    };
  },
});
</script>
<style scoped>
.main {
  text-decoration: none;
  color: white;
  font-size: 20px;
}
.navbar {
  height: 60px;
}
</style>