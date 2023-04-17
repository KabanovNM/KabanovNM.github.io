<template>
  <div class="mobile-table">
    <SelectSorting
      :columns="columns"
      :sorting="sorting"
      @sort="toggleSort"
    />
    <Card
      v-for="row in sortedRows"
      :key="row.id"
      :columns="columns"
      :row="row"
    />
  </div>
</template>

<script>
import Card from '@/components/MobileTable/_components/Card.vue';
import SelectSorting from '@/components/MobileTable/_components/SelectSorting.vue';
import { sorted } from '@/helpers/sorting';

export default {
  name: 'MobileTable',
  components: {
    SelectSorting,
    Card,
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
