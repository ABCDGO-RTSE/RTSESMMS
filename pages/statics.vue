<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col cols="12" sm="4">
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
          <v-card class="mx-auto">
            <v-card-text>
              <div>Threshold Value</div>
              <p class="text-h4 text--primary">{{ threshold }}</p>
              <input
                type="hidden"
                name="threshold"
                id="threshold"
                :value="threshold"
              />
            </v-card-text>
          </v-card>
          <v-card class="mx-auto mb-2">
            <v-card-text>
              <div>Set Value</div>
            </v-card-text>
            <v-card-actions id="submit_threshold_value">
              <v-btn
                elevation="2"
                x-large
                value="minus"
                v-on:click="set_threshold('minus')"
                >-</v-btn
              >
              <v-btn
                elevation="2"
                x-large
                value="plus"
                v-on:click="set_threshold('plus')"
                >+</v-btn
              >
            </v-card-actions>
          </v-card>
          <v-card class="mx-auto">
            <v-card-text>
              <div>Motor Pump</div>
              <p class="text-h4 text--primary" v-if="color == '#23C48E'">
                Activated
              </p>
              <p class="text-h4" style="color: red" v-else>Deactivated</p>
            </v-card-text>
            <v-card-actions> </v-card-actions>
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
      threshold: 0,
      color: "",
    };
  },
  mounted() {
    const socket = io(process.env.socket_url);
    socket.on("receive_data", (data) => {
      // console.log("data details: " + data);
      this.sensor_data = data;
    });

    socket.on("threshold", (threshold) => {
      this.threshold = threshold;
      console.log(threshold);
    });

    socket.on("motor_stat", (motor) => {
      this.color = motor;
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
  methods: {
    set_threshold(e) {
      if (e == "plus") {
        if (this.threshold < 100) {
          this.threshold++;
        }
      } else {
        if (this.threshold > 0) {
          this.threshold--;
        }
      }

      this.$axios
        .$post(process.env.socket_url + "/set_threshold", {
          threshold: this.threshold,
        })
        .then((s) => {
          console.log(s);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
