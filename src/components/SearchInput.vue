<template>
  <div class="search-input">
    <input
      :value="value"
      placeholder="Поиск"
      type="text"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style scoped>
.search-input {
  position: relative;
  width: 100%;
}

.search-input input {
  padding: 16.5px 16px 16.5px 40px;
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  outline: none;
}

.search-input input::placeholder {
  color: var(--color-text-light);
}

.search-input input:focus {
  border-color: var(--color-primary);
}

.search-input::after {
  content: '';
  position: absolute;
  top: calc(50% - 7px);
  left: 16px;
  width: 14px;
  height: 14px;
  background: url('../assets/img/icons/search.svg') center no-repeat;
  background-size: contain;
}
</style>
