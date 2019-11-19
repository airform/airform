<template>
  <form action="https://airform.io/" method="post">
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

type AirformInterface = {
  email?: string
} & Pick<
  React.FormHTMLAttributes<HTMLFormElement>,
  Exclude<keyof React.FormHTMLAttributes<HTMLFormElement>, 'action' | 'method'>
>

export default <AirformInterface>Vue.extend({
})
</script>
