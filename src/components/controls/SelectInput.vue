<template>
  <div class="select-container">
    <label :for="label">{{ label }}</label>
    <select class="form-control" v-model="input">
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.name"
        :selected="option.name === defaultValue"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "SelectInput",
  props: {
    options: Array,
    defaultValue: String,
    label: String,
  },
  setup(props, { emit }) {
    const input = ref(props.defaultValue);

    watch(input, (value) => {
      emit("handleselect", value);
    });

    return {
      input,
    };
  },
});
</script>

<style lang="scss" scoped>
.select-container {
  display: flex;
  align-items: center;
}
label {
  margin-bottom: 0px;
  margin-right: 12px;
}
</style>