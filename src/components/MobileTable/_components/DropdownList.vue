<template>
  <div
    v-click-outside="clickOutside"
    class="dropdown-list"
  >
    <div
      :class="{ active: optionsVisible }"
      class="dropdown-list__input"
      @click="toggleOptionsVisible"
    >
      <span
        :class="{ small: value }"
        class="dropdown-list__input-placeholder"
      >
        {{ placeholder }}
      </span>

      <span
        v-if="value"
        class="dropdown-list__input-value"
      >
        {{ selectedName }}
      </span>
    </div>

    <div
      v-show="optionsVisible"
      class="dropdown-list__options"
    >
      <div
        v-for="option in options"
        :key="option[optionKey]"
        :class="{ selected: option[optionKey] === value }"
        class="dropdown-list__option"
        @click="selectOption(option)"
      >
        {{ option[optionName] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownList',
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    optionName: {
      type: String,
      default: 'name',
    },
    optionKey: {
      type: String,
      default: 'key',
    },
    placeholder: {
      type: String,
      default: 'Выберите',
    },
  },
  data: () => ({
    optionsVisible: false,
  }),
  computed: {
    selectedName() {
      const selected = this.options.find((option) => option[this.optionKey] === this.value);

      return selected ? selected[this.optionName] : '';
    },
  },
  methods: {
    toggleOptionsVisible() {
      this.optionsVisible = !this.optionsVisible;
    },

    selectOption(option) {
      this.$emit('input', option.key);

      this.toggleOptionsVisible();
    },

    clickOutside() {
      if (this.optionsVisible) {
        this.toggleOptionsVisible();
      }
    },
  },
};
</script>

<style scoped>
.dropdown-list {
  position: relative;
  width: 100%;
}

.dropdown-list .dropdown-list__input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7px 29px 7px 12px;
  height: 44px;
  width: 100%;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
}

.dropdown-list .dropdown-list__input::after {
  content: '';
  position: absolute;
  top: calc((100% - 5px) / 2);
  right: 12px;
  width: 9px;
  height: 5px;
  background: url('../../../assets/img/icons/arrow-dropdown.svg') center no-repeat;
}

.dropdown-list .dropdown-list__input.active {
  border-color: var(--color-primary);
}

.dropdown-list .dropdown-list__input.active::after {
  transform: rotate(180deg);
}

.dropdown-list .dropdown-list__input-placeholder {
  font-size: 14px;
  line-height: 17px;
  color: var(--color-text-light);
}

.dropdown-list .dropdown-list__input-placeholder.small {
  font-size: 11px;
  line-height: 13px;
}

.dropdown-list .dropdown-list__input-value {
  font-size: 14px;
  line-height: 17px;
}

.dropdown-list .dropdown-list__options {
  position: absolute;
  top: 48px;
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  z-index: 10;
}

.dropdown-list .dropdown-list__option {
  padding: 9.5px 12px;
  background: var(--color-white);
  border-bottom: 1px solid var(--color-border);
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
}

.dropdown-list .dropdown-list__option.selected,
.dropdown-list .dropdown-list__option:hover {
  background-color: var(--color-background);
}
</style>
