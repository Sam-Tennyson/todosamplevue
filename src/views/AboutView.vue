<script setup lang="ts">
import CardSlot from '@/components/CardSlot.vue';
import CardSlotProps from '@/components/CardSlotProps.vue';
</script>
<template>
  <CardSlot>
    <template v-slot:header>
      <h3>Header</h3>
    </template>
    <template #default>
      <h3>Default</h3>
    </template>
    <template #footer>
      <h3>footer</h3>
    </template>
  </CardSlot>
  <hr>
  <CardSlotProps>
    <template v-slot:default="slotProps">
      <h2>
        Name:
        {{ slotProps.hero_name }}
      </h2>
      <h3>
        Super Hero Name:
        {{ slotProps.avenger_name }}
      </h3>
    </template>
  </CardSlotProps>
</template>





