<template>
  <v-main class="mx-5">
    <h3>Платежи</h3>
    <payment-table/>
  </v-main>
</template>

<script>
import PaymentTable from "@/components/PaymentTable";

export default {
  name: "Payments",

  components:{
    PaymentTable
  }
}
</script>

<style scoped>

</style>
