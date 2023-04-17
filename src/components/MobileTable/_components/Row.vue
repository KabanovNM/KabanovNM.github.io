<template>
  <div class="row">
    <span class="row__name">{{ column.name }}</span>

    <template v-if="column.type === 'date'">
      <span class="row__value">{{ formatDate(row[column.key]) }}</span>
    </template>

    <template v-else-if="column.type === 'subject'">
      <span :class="['row__value', getSubjectClass(row[column.key])]">{{ row[column.key] }}</span>
    </template>

    <template v-else-if="column.type === 'total'">
      <span :class="['row__value', getTotalClass(row[column.key])]">{{ row[column.key] }}</span>
    </template>

    <template v-else-if="column.type === 'graph'">
      <span class="row__value">
        <ProgressBar :percentage="row[column.key]" />
      </span>
    </template>

    <span
      v-else
      class="row__value"
    >
      {{ row[column.key] }}
    </span>
  </div>
</template>

<script>
import ProgressBar from '@/components/Table/ProgressBar';
import { formatDate } from '@/helpers/date';
import { getSubjectClass, getTotalClass } from '@/helpers/progress';

export default {
  name: 'Row',
  components: {
    ProgressBar,
  },
  props: {
    column: {
      type: Object,
      required: true,
    },
    row: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
    getSubjectClass,
    getTotalClass,
  },
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  text-align: start;
  background-color: var(--color-white);
}

.row:nth-child(n + 2) {
  margin-top: 4px;
}

.row .row__name {
  width: 49%;
  font-weight: 700;
  font-size: 12px;
  color: var(--color-text-light);
}

.row .row__value {
  width: 49%;
  font-size: 14px;
}
</style>
