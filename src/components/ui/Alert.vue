<template>
  <div class="alert" :class="styleClass" role="alert">
    {{ displayText }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {AlertType} from "@/models/AlertType";

export default defineComponent({
  name: "Alert",
  props: {
    type: String,
    displayText: String
  },
  setup(props) {
      const styleClass = props.type === AlertType.Error ? "alert-danger" : "alert-success";

      return {
          styleClass
      }
  }
});
</script>

<style>
</style>