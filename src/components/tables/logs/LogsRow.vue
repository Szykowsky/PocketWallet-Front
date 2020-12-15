<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ description }}</td>
    <td>{{ moment(time).locale("pl").format("DD.MM.YYYY, HH:mm:ss") }}</td>
  </tr>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { PasswordWalletModel } from "@/models/PasswordWalletModel";
import * as moment from "moment";

export default defineComponent({
  name: "LogsRow",
  props: {
    id: String,
    name: String,
    description: String,
    time: String,
  },
  setup(props) {
    return {
      moment,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>