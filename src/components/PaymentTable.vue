<template>
  <v-data-table
      :headers="headers"
      :items="logs"
      class="elevation-1 mx-auto"
      style="max-width: 80%;"
  >

    <template v-slot:item.status="{ item }">
      <v-chip
          :color="getColor(item.statusID)"
          dark
      >
        {{ item.status }}

      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "PaymentTable",
  data() {
    return {
      headers: [
        {
          text: 'Референс',
          align: 'start',
          sortable: false,
          value: 'reference',
        },
        {text: 'Аккаунт', value: 'account'},
        {text: 'Банк', value: 'bank'},
        {text: 'Банк Код', value: 'bankId'},
        {text: 'Date', value: 'date'},
        {text: 'Статус', value: 'status'},
      ],
      logs: [
        {
          reference: '34232415',
          account:'1',
          bank: 'Qiwi Payment',
          bankId: 'QIWT',
          carbs: 24,
          date: 4.0,
          status: 'ERROR',
          statusID: 0
        },
        {
          reference: '15123415',
          account:'1',
          bank: 'Qiwi Payment',
          bankId: 'QIWT',
          carbs: 24,
          date: 4.0,
          status: '?',
          statusID: 2
        },
        {
          reference: '15123415',
          account:'1',
          bank: 'Qiwi Payment',
          bankId: 'QIWT',
          carbs: 24,
          date: 4.0,
          status: '?',
          statusID: 2
        },

        {
          reference: '15141215',
          account:'1',
          bank: 'Qiwi Payment',
          bankId: 'QIWT',
          carbs: 24,
          date: 4.0,
          status: 'NORMAL',
          statusID: 1
        },
        {
          reference: '15141215',
          account:'1',
          bank: 'Qiwi Payment',
          bankId: 'QIWT',
          carbs: 24,
          date: 4.0,
          status: 'NORMAL',
          statusID: 1
        },
        {
          reference: '34232415',
          account:'1',
          bank: 'Qiwi Payment',
          bankId: 'QIWT',
          carbs: 24,
          date: 4.0,
          status: 'ERROR',
          statusID: 0
        },
        {
          reference: '51232515',
          account:'1',
          bank: 'Qiwi Payment',
          bankId: 'QIWT',
          carbs: 24,
          date: 4.0,
          status: 'SUCCESS',
          statusID: 1
        },
        {
          reference: '34232415',
          account:'1',
          bank: 'Qiwi Payment',
          bankId: 'QIWT',
          carbs: 24,
          date: 4.0,
          status: 'ERROR',
          statusID: 0
        },
      ],
    }
  },
  methods: {
    getColor(id) {
      if (id===1) return 'green'
      else if (id===2) return 'orange'
      else if (id===0) return 'red'
      else return 'purple'
    },
  },
}
</script>

<style scoped>

</style>
