<template>
  <thead class="table-head">
    <tr>
      <th
        v-for="(column, i) in columns"
        :key="i"
        class="cell"
        :style="{ width: column.width }"
        @click="toggleSort(column.key)"
      >
        <div
          class="cell__content"
          :style="{ justifyContent: column.align }"
        >
          <span>{{ column.name }}</span>
          <ArrowIcon
            v-if="sorting.by === column.key"
            :class="['arrow', { arrow_transform: sorting.asc }]"
          />
        </div>
      </th>
    </tr>
  </thead>
</template>

<script>
import ArrowIcon from '@/components/Icons/ArrowIcon';
export default {
  name: 'Head',
  components: { ArrowIcon },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    sorting: {
      type: Object,
      default() {
        return {
          by: null,
          asc: true,
        };
      },
    },
  },
  methods: {
    toggleSort(by) {
      this.$emit('sort', {
        by,
        asc: this.sorting.by !== by || !this.sorting.asc,
      });
    },
  },
};
</script>

<style scoped>
th {
  padding: 0 20px 6px;
}

.cell {
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: var(--color-primary);
}

.cell .cell__content {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.cell .cell__content:hover {
  color: var(--color-blue-dark);
}

.arrow {
  margin-left: 2px;
  width: 7px;
  height: 8px;
}

.arrow.arrow_transform {
  transform: rotate(180deg);
}
</style>
