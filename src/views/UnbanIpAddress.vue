<template>
  <div class="unban-container">
    <PrimaryBytton
      class="unban-button"
      :title="'Unban Ip address'"
      @handleclick="handleUnbanIpAddress"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useAuthFacade } from "@/store/auth/AuthFacade";
import PrimaryBytton from "@/components/buttons/PrimaryButton.vue";

export default defineComponent({
  name: "UnbanIpAddress",
  components: {
    PrimaryBytton,
  },
  setup() {
    const { unbanIpAddress } = useAuthFacade();

    const handleUnbanIpAddress = () => {
      unbanIpAddress();
    };
    return {
      handleUnbanIpAddress,
    };
  },
});
</script>

<style>
.unban-container {
    margin-top: 60px;
    display: flex;
    justify-content: center;
}
.unban-button {
  max-width: 550px;
}
</style>