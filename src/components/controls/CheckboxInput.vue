<template>
  <div class="form-group form-check">
    <input
      type="checkbox"
      class="form-check-input"
      v-model="input"
      :name="label"
      :id="label"
    />
    <label :for="label">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useInputValidator } from "@/helpers/useInputValidator";

export default defineComponent({
  name: "CheckboxInput",
  props: {
    value: String,
    label: String
  },
  setup(props, { emit }) {
    const { input, errors } = useInputValidator(
      props.value,
      [],
      (value: string) => emit("update:modelValue", value)
    );

    return {
      input,
      errors,
    };
  }
});
</script>
