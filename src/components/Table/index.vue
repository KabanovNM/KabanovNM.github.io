<template>
  <table
    ref="table"
    class="table"
  >
    <TableHead
      :columns="columns"
      :sorting="sorting"
      @sort="toggleSort"
    />
    <TableRow
      v-for="row in sortedRows"
      :key="row.id"
      :row-data="row"
      :columns="columns"
      class="row"
    />
  </table>
</template>

<script>
import TableRow from '@/components/Table/_components/TableRow.vue';
import TableHead from '@/components/Table/_components/TableHead.vue';
import { sorted } from '@/helpers/sorting';

export default {
  name: 'Table',
  components: {
    TableHead,
    TableRow,
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    rows: {
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
  computed: {
    sortedRows() {
      return sorted(this.rows, this.sorting);
    },
  },
  methods: {
    toggleSort({ by, asc }) {
      const sorting = { by, asc };
      this.$emit('toggle-sort', sorting);
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  margin-top: 20px;
  border-collapse: separate;
  border-spacing: 0 4px;
  font-size: 14px;
}

.row {
  margin-bottom: 4px;
}
</style>
