<template>
  <div class="select-sorting">
    <DropdownList
      :value="sorting.by"
      :options="columns"
      placeholder="Сортировать по"
      @input="handleBy"
    />
    <div class="select-sorting__buttons">
      <SortButton
        :active="sorting.asc"
        direction="down"
        @click.native="handleAsc(true)"
      />
      <SortButton
        :active="!sorting.asc"
        @click.native="handleAsc(false)"
      />
    </div>
  </div>
</template>

<script>
import DropdownList from '@/components/MobileTable/_components/DropdownList.vue';
import SortButton from '@/components/MobileTable/_components/SortButton.vue';

export default {
  name: 'SelectSorting',
  components: {
    SortButton,
    DropdownList,
  },
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
    handleBy(by) {
      this.$emit('sort', {
        by,
        asc: this.sorting.asc,
      });
    },
    handleAsc(asc) {
      this.$emit('sort', {
        by: this.sorting.by,
        asc,
      });
    },
  },
};
</script>

<style scoped>
.select-sorting {
  display: flex;
  width: 100%;
}

.select-sorting__buttons {
  display: flex;
  margin-left: 12px;
}

.select-sorting__buttons button:nth-child(n + 2) {
  margin-left: 4px;
}
</style>
