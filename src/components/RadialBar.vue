<template>
  <div class="chart-wrapper">
    <highcharts
      ref="chart"
      :options="chartOptions"
    ></highcharts>
    <span class="percent">{{ percentage }}%</span>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue';
import { progressColor } from '@/helpers/progress';

export default {
  name: 'RadialBar',
  components: {
    highcharts: Chart,
  },
  props: {
    percentage: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  computed: {
    chartOptions() {
      return {
        colors: ['#F8F8F8', this.progressColor(this.percentage)],
        chart: {
          width: 48,
          height: 48,
          backgroundColor: null,
        },
        title: {
          text: '',
        },
        tooltip: {
          enabled: false,
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            center: ['50%', '60%'],
            size: 44,
            dataLabels: {
              enabled: false,
            },
            startAngle: -(100 - this.percentage) * 3.6,
            endAngle: 360 + (100 - this.percentage) * 3.6,
            enableMouseTracking: false,
            innerSize: '100%',
            borderWidth: 3,
            borderColor: null,
            slicedOffset: 0,
          },
        },
        series: [
          {
            type: 'pie',
            name: '',
            data: [[100 - this.percentage], [this.percentage]],
          },
        ],
      };
    },
  },
  methods: {
    progressColor,
  },
};
</script>

<style scoped>
.chart-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
}

.percent {
  position: absolute;
  top: calc(50% - 8.5px);
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
}
</style>
