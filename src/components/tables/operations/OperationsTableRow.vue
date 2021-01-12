<template>
  <tr>
    <td>{{ operation }}</td>
    <td>{{ moment(time).locale("pl").format("DD.MM.YYYY, HH:mm:ss") }}</td>
    <td>
      <Tooltip
        :content="
          isReadMode
            ? 'You are in read mode, change it to recover password'
            : 'Recover password'
        "
      >
        <button
          type="button"
          class="btn"
          :disabled="isReadMode"
          @click="handleRecoverPassword"
        >
          <i class="fas fa-history"></i>
        </button>
      </Tooltip>

      <Tooltip :content="'Show value'">
        <button type="button" class="btn" @click="handleShowPreviousPassword">
          <i class="fas fa-book-open"></i>
        </button>
      </Tooltip>
    </td>
  </tr>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { PasswordWalletModel } from "@/models/PasswordWalletModel";
import * as moment from "moment";
import Tooltip from "../../ui/Tooltip.vue";

export default defineComponent({
  name: "OperationsRow",
  components: {
    Tooltip,
  },
  props: {
    id: String,
    operation: String,
    time: String,
    value: String,
    isReadMode: Boolean,
  },
  setup(props, { emit }) {
    const handleRecoverPassword = () => {
      emit("handlerecoverpassword", props.id);
    };

    const handleShowPreviousPassword = () => {
      emit("handleshowpreviousvalue", props.id);
    };
    return {
      moment,
      handleShowPreviousPassword,
      handleRecoverPassword,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>