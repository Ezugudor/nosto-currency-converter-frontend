<template>
  <div>
    <h1>Currency Converter</h1>
    <form @submit.prevent="convertCurrency">
      <label for="from">From:</label>
      <select v-model="sourceCurrency" id="sourceCurrency" required>
        <option key="EUR" value="EUR" selected>EUR</option>
      </select>

      <label for="to">To:</label>
      <select v-model="targetCurrency" id="targetCurrency" required>
        <option v-for="currency in currencies" :key="currency.code" :value="currency.code">
          {{ currency.code }}
        </option>
      </select>

      <label for="amount">Amount:</label>
      <input type="number" v-model="amount" id="amount" required />

      <button type="submit">Convert</button>
    </form>

    <div v-if="result">
      <p>
        {{ amount }} {{ sourceCurrency }} = {{ result.data }}
        {{ targetCurrency }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { convertCurrency, getSupportedCurrencies, type ICurrency } from '../services/api'

export default {
  data() {
    return {
      sourceCurrency: 'EUR',
      targetCurrency: '',
      amount: 0,
      result: null as { data: number } | null,
      currencies: [] as ICurrency[]
    }
  },
  methods: {
    async convertCurrency() {
      try {
        const response = await convertCurrency(
          this.sourceCurrency,
          this.targetCurrency,
          this.amount
        )
        this.result = response.data
      } catch (error) {
        console.error('Error converting currency:', error)
      }
    },

    async getSupportedCurrencies() {
      try {
        const response = await getSupportedCurrencies()
        this.currencies = response.data.data
      } catch (error) {
        console.error('Error retrieving currencies:', error)
      }
    }
  },
  mounted() {
    this.getSupportedCurrencies()
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
form {
  margin-bottom: 20px;
}
label {
  margin-right: 10px;
}
input {
  margin-right: 10px;
}
</style>
