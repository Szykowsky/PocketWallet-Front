<template>
  <Table>
    <template v-slot:header>
      <WalletTableHeaderRow />
    </template>
    <template v-slot:default>
      <WalletTableRow
        v-for="password in passwordWallet"
        :key="password.id"
        :data="password"
        :isReadMode="isReadMode"
        @handleshowpassword="handleShowPassword"
        @handlehidepassword="handleHidePassword"
        @handledeletepassword="handleDeletePassword"
        @handleeditpassword="handleEditPassword"
        @handlesharepassword="handleSharePassword"
      />
    </template>
  </Table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WalletTableHeaderRow from "@/components/tables/wallet/WalletTableHeaderRow.vue";
import WalletTableRow from "@/components/tables/wallet/WalletTableRow.vue";
import Table from "@/components/ui/Table.vue";

export default defineComponent({
  name: "WalletTable",
  components: {
    WalletTableHeaderRow,
    WalletTableRow,
    Table,
  },
  props: {
    passwordWallet: Array,
    isReadMode: Boolean
  },
  setup(props, { emit }) {
    const handleShowPassword = (id: string) => {
      emit("handleshowpassword", id);
    };

    const handleHidePassword = (id: string) => {
      emit("handlehidepassword", id);
    };

    const handleDeletePassword = (id: string) => {
      emit("handledeletepassword", id);
    };

    const handleEditPassword = (id: string) => {
      emit("handleeditpassword", id);
    };

    const handleSharePassword = (id: string) => {
      emit("handlesharepassword", id);
    };
    return {
      handleShowPassword,
      handleHidePassword,
      handleDeletePassword,
      handleEditPassword,
      handleSharePassword,
    };
  },
});
</script>

<style>
</style>
