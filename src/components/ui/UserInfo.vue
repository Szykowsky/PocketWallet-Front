<template>
  <div class="user-info-container">
    <div>
      Login: <span>{{ user }} </span>
    </div>
    <div>
      Successful sign in: <span>{{ moment(successFulSignIn).locale('pl').format('MMMM Do YYYY, HH:mm:ss') }} </span>
    </div>
    <div>
      Unsuccessful sign in: <span>{{ moment(unSuccessFulSignIn).locale('pl').format('MMMM Do YYYY, HH:mm:ss')  }} </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as moment from 'moment'

export default defineComponent({
  name: "UserInfo",
  props: {
    user: String,
    successFulSignIn: String,
    unSuccessFulSignIn: String,
  },
  setup(props) {
      return{
          moment
      }
  }
});
</script>

<style scoped>
.user-info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
span {
    font-weight: 600;
}
</style>