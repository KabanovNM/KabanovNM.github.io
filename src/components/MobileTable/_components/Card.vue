<template>
  <div class="card">
    <Row
      v-for="column in columns"
      :key="`${column.key}_${row.id}`"
      :column="column"
      :row="row"
    />
  </div>
</template>

<script>
import Row from '@/components/MobileTable/_components/Row';

export default {
  name: 'Card',
  components: {
    Row,
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    row: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  min-width: 336px;
}

.card:nth-child(n + 2) {
  margin-top: 8px;
}
</style>
