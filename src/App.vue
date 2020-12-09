<template>
  <div class="wrapper">
    <Navbar
      :showButton="isLogin"
      @handlesignout="handleSignOut"
      @handlechangepassword="handleChangePassword"
      @handlegotowallet="handleGoToWallet"
      @handlechangeapplicationmode="handleChangeApplicationMode"
    />
    <router-view />
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Navbar from "@/components/ui/Navbar.vue";
import { useAuthFacade } from "./store/auth/AuthFacade";
import router from "./router";
import Footer from "@/components/ui/Footer.vue";
import { useWalletFacade } from "./store/wallet/WalletFacade";

export default defineComponent({
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const { getIsLoginFlag, signOut } = useAuthFacade();
    const { getReadMode, setReadMode } = useWalletFacade();

    const isLogin = computed(() => getIsLoginFlag());
    const isReadMode = computed(() => getReadMode());

    const handleSignOut = () => {
      signOut();
    };
    const handleChangePassword = () => {
      router.push("/main/change-password");
    };
    const handleGoToWallet = () => {
      router.push("/main");
    };
    const handleChangeApplicationMode = () => {
      setReadMode(!isReadMode.value);
      router.push("/main");
    };

    return {
      isLogin,
      handleSignOut,
      handleChangePassword,
      handleGoToWallet,
      handleChangeApplicationMode,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

.wrapper {
  min-height: calc(100vh - 40px);
}
footer {
  flex-shrink: 0;
}
</style>
