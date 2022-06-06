<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="py-4 text-center">
        <v-card-title class="justify-center"> Group: ABCDGO </v-card-title>
        <v-card-subtitle> Member: </v-card-subtitle>
        <v-card-subtitle v-for="item in items" :key="item">
          {{ item.name }} - {{ item.matric }}
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      items: [
        {
          name: "Liow Zhi Hao (L)",
          matric: "B19EC0013",
        },
        {
          name: "Isaac Tan Yu Hao",
          matric: "B19EC0010",
        },
        {
          name: "Kang Chu Ning",
          matric: "B19EC0011",
        },

        {
          name: "Nur Atiqah Binti Mohd Fua’ad",
          matric: "B19EC0032",
        },
        {
          name: "Nur Afifah Binti Mohd Dali",
          matric: "B19EC0029",
        },
      ],
    };
  },
};
</script>
