<template>
  <button
    @click="increment"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    {{ t('helloWorld.increment') }}
    {{ count }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCounter } from '../composables/useCounter.composable'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const counterStore = useCounter()
const increment = () => {
  counterStore.increment()
}
const count = computed(() => counterStore.count)
</script>
$
