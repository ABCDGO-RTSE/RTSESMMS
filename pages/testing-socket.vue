<template>
  <v-row>
    <v-col cols="12" class="text-center">
      <v-row>
        <v-col> </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <h1>Socket Server Ticking: {{ latestTickId }}</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <h1>Data : {{ data }} %</h1>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { io } from "socket.io-client";

export default {
  head() {
    return {
      title: "Testing",
    };
  },
  data() {
    return {
      latestTickId: 0,
      data: "",
    };
  },
  mounted() {
    // server-side
    const socket = io(process.env.socket_url);
    // const socket = io("http://localhost:4000");

    console.log(process.env.socket_url);

    socket.on("connect", () => {
      console.log("socket id: " + socket.id); // ojIckSD2jqNzOqIrAGzL
    });

    socket.on("tick", (tick) => {
      this.latestTickId = tick;
    });

    socket.on("data_detail", (data) => {
      console.log("data details: " + data);
      this.data = data;
    });
  },
};
</script>

<style>
</style>