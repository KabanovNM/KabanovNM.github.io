<template>
  <tr class="table-row">
    <td
      v-for="(column, idx) in columns"
      :key="`column_${idx}`"
      :style="{ textAlign: column.align }"
    >
      <template v-if="column.type === 'date'">
        {{ formatDate(rowData[column.key]) }}
      </template>

      <template v-else-if="column.type === 'subject'">
        <span :class="['number-cell', getSubjectClass(rowData[column.key])]">
          {{ rowData[column.key] }}
        </span>
      </template>

      <template v-else-if="column.type === 'total'">
        <span :class="['number-cell', getTotalClass(rowData[column.key])]">
          {{ rowData[column.key] }}
        </span>
      </template>

      <template v-else-if="column.type === 'graph'">
        <span>
          <RadialBar :percentage="rowData[column.key]" />
        </span>
      </template>

      <template v-else>
        {{ rowData[column.key] }}
      </template>
    </td>
  </tr>
</template>

<script>
import RadialBar from '@/components/RadialBar.vue';
import { formatDate } from '@/helpers/date';
import { getSubjectClass, getTotalClass } from '@/helpers/progress';

export default {
  name: 'Row',
  components: { RadialBar },
  props: {
    rowData: {
      type: Object,
      required: true,
    },
    columns: {
      type: Array,
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
.table-row {
  height: 64px;
  background-color: var(--color-white);
}

.table-row:hover {
  background-color: var(--color-background);
  outline: 1px solid var(--color-border);
}

.table-row td {
  padding: 0 20px;
}

.table-row td:nth-child(n + 2) {
  border-left: 1px solid var(--color-border);
}

.table-row td:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.table-row td:last-child {
  border-radius: 0 4px 4px 0;
}

.number-cell {
  font-weight: 700;
  text-align: start;
}
</style>
