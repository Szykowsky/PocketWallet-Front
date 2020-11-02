<template>
  <button
    :disabled="disabled"
    class="btn btn-outline-secondary btn-block btn-lg"
    @click="handleButtonClick"
  >
    <span v-if="!isLoading">
      {{title}}
    </span>
    <Spinner v-if="isLoading" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Spinner from "@/components/ui/Spinner.vue";

export default defineComponent({
  name: "PrimaryBytton",
  props: {
    isLoading: Boolean,
    disabled: Boolean,
    title: String
  },
    components: {
    Spinner,
  },
  setup(props, { emit }) {
    const handleButtonClick = () => {
      emit("handleclick");
    };

    return{
        handleButtonClick
    }
  }
});
</script>