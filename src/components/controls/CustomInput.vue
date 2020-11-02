<template>
  <div class="form-group">
    <label :for="label">{{ label }}</label>
    <input
      v-model="input"
      :type="type"
      class="form-control"
      :name="label"
      :id="label"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useInputValidator } from "@/helpers/useInputValidator";

export default defineComponent({
  name: "CustomInput",
  props: {
    value: String,
    label: String,
    type: String
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
