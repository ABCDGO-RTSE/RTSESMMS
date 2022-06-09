<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card class="mx-auto">
            <v-card-text>
              <div>Moisture Data</div>
            </v-card-text>
            <PieChart :chart-data="barChartData" :height="400" />
            <v-card-actions>
              <v-card-text>
                <h1 class="text-center">Moisture Value: {{ sensor_data }}</h1>
              </v-card-text>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="mx-auto" max-width="344">
            <v-card-text>
              <div>Word of the Day</div>
              <p class="text-h4 text--primary">be•nev•o•lent</p>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.<br />
                "a benevolent smile"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="deep-purple accent-4"> Learn More </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import PieChart from "../components/PieChart.vue";
import { io } from "socket.io-client";

export default {
  name: "StaticsPage",
  head() {
    return {
      title: "Statics",
    };
  },
  components: { PieChart },
  data() {
    return {
      sensor_data: 0,
    };
  },
  mounted() {
   const socket = io(process.env.socket_url);
    socket.on("receive_data", (data) => {
      // console.log("data details: " + data);
      this.sensor_data = data;
    });

  },
  computed: {
    barChartData: function () {
      return {
        labels: ["Data", "Percent"],
        datasets: [
          {
            label: "Visualizaciones",
            data: [this.sensor_data, 100 - this.sensor_data],
            backgroundColor: ["#60d49a", "#fff"],
          },
        ],
      };
    },
  },
};
</script>
