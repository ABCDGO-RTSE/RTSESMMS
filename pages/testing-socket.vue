<template>
  <v-row>
    <v-col cols="12" class="text-center">
      <v-row>
        <v-col> </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <h1>Ticking: {{ latestTickId }}</h1>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: "Testing",
    };
  },
  data() {
    return {
      latestTickId: 0,
      checking: "",
    };
  },
  mounted() {
    // use "main" socket defined in nuxt.config.js
    this.socket = this.$nuxtSocket({
      name: "main", // select "main" socket from nuxt.config.js - we could also skip this because "main" is the default socket
    });

    this.socket.on("tick", (tickId) => {
      this.latestTickId = tickId;
    });

    // server-side
    this.socket.on("connect", () => {
      console.log("socket id: " + this.socket.id); // ojIckSD2jqNzOqIrAGzL
    });

    function get_socket(id) {
      console.log("socket: " + id);
    }

    this.socket.on("socket id", get_socket);
  },
};
</script>

<style>
</style>