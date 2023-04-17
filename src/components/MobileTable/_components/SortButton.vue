<template>
  <button :class="['sort-button', direction, { active }]">
    <ArrowIcon />
  </button>
</template>

<script>
import ArrowIcon from '@/components/Icons/ArrowIcon';
export default {
  name: 'SortButton',
  components: {
    ArrowIcon,
  },
  props: {
    direction: {
      type: String,
      default() {
        return 'up';
      },
    },
    active: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
};
</script>

<style scoped>
.sort-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--color-primary);
  border-radius: 2px;
  background-color: transparent;
  cursor: pointer;
}

.sort-button.active {
  background-color: var(--color-primary);
}

.sort-button.active svg {
  color: var(--color-white);
}

.sort-button.down {
  transform: rotate(180deg);
}

.sort-button svg {
  width: 8px;
  height: 7px;
  color: var(--color-primary);
}
</style>
