<template>
  <div class="progress">
    <p>{{ percentage }}%</p>
    <div class="progress-bar">
      <div
        class="progress-thumb"
        :style="{ backgroundColor: progressColor(percentage), width: `${percentage}%` }"
      ></div>
    </div>
  </div>
</template>

<script>
import { progressColor } from '@/helpers/progress';

export default {
  name: 'ProgressBar',
  props: {
    percentage: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  methods: {
    progressColor,
  },
};
</script>

<style scoped>
.progress {
  display: flex;
  align-items: center;
}

.progress-bar {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 4px;
  margin-left: 4px;
  border-radius: 2px;
  background-color: var(--color-border);
}

.progress-thumb {
  position: absolute;
  height: 4px;
  border-radius: 4px 0 0 4px;
}
</style>
