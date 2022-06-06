<template>
  <v-row>
    <v-col cols="8" class="text-center">
      <v-row>
        <v-col>
          <h1>{{ checking }}</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <h1>Message: {{ latestTickId }}</h1>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
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
      console.log(this.socket.id); // ojIckSD2jqNzOqIrAGzL
    });
  },
};
</script>

<style>
</style>