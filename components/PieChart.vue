<script>
import { Doughnut, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Doughnut,
  props: ["chartData", "options"],
  mixins: [reactiveProp],
  data() {
    return {
      sensor_data: this.chartData,
    };
  },
  mounted() {
    this.renderChart(this.chartData);
  },
  watch: {
    // chartData: {
    //   forceRerender() {
    //     console.log("updated");
    //     this.renderChart({
    //       labels: ["Data"],
    //       datasets: [
    //         {
    //           label: "Visual",
    //           data: [this.sensor_data],
    //           backgroundColor: ["#337958"],
    //         },
    //       ],
    //     });
    //   },
    // },
  },
};
</script>