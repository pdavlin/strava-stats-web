<template>
  <b-table :data="data" :columns="columns"></b-table>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class StravaTable extends Vue {
  data() {
    return {
      data: [
        {
          id: 1,
          firstName: "a",
          distance: "5767.2",
          time: "337.7"
        },
        {
          id: 2,
          firstName: "b",
          distance: "3020.1",
          time: "180.2"
        },
        {
          id: 3,
          firstName: "c",
          distance: "2359.0",
          time: "141.2"
        },
        {
          id: 4,
          firstName: "d",
          distance: "1333.2",
          time: "90.0"
        },
        {
          id: 5,
          firstName: "e",
          distance: "1259.4",
          time: "89.3"
        }
      ],
      columns: [
        {
          field: "firstName",
          label: "First Name"
        },
        {
          field: "distance",
          label: "Distance (mi)"
        },
        {
          field: "time",
          label: "Time (hr)",
          centered: true
        }
      ]
    };
  }
}
</script>
