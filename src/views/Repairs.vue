<template>
  <div class="repair">
    <v-app id="table_repairs">
      <v-data-table :headers="headers" :items="items">
        <!-- <template slot="items" slot-scope="props">
   
        </template> -->
      </v-data-table>
    </v-app>

    <!-- <table id="firstTable" class="table">
      <thead>
        <tr>
          <th>RMA</th>
          <th>Wig</th>
          <th>Due date</th>
          <th>Serves<br />Terms</th>
          <th>Status</th>
          <th>Return<br />To</th>
          <th>Receive<br />To Local</th>
          <th>After Repair<br />Destination</th>
          <th>Cost<br />Approval Note</th>
          <th>Canceled<br />Reason</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" v-bind:key="row">
          <td>
            <a href="#">RMA<br />#{{ row.ticket }}</a>
          </td>
          <td>
            <a href="#">Wig<br />#{{ row.wig }}</a>
          </td>
          <td>{{ row.received_date }}</td>
          <td>{{ row.serves_terms.display }}</td>
          <td>{{ row.status.display }}</td>
          <td>{{ row.return_to.display }}</td>
          <td>{{ row.receive_to_local.display }}</td>
          <td>{{ row.after_repair_destination.display }}</td>
          <td>{{ row.cost_approval_note }}</td>
          <td>{{ row.canceled_reason }}</td>
          <td>{{ row.created }}</td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
const url = "/api/v1/rma-wig-status/";
export default {
  name: "Repairs",
  data: () => ({
    rows: [],
    items: [],
    headers: [
      { text: "RMA", value: "ticket" },
      { text: "Wig", value: "wig" },
      { text: "Due date", value: "received_date" },
      { text: "Serves", value: "serves_terms.display" },
      { text: "Status", value: "status.display" },
      { text: "Return To", value: "return_to.display" },
      { text: "Receive To Local", value: "receive_to_local.display" },
      { text: "After Repair Destination",value: "after_repair_destination.display" },
      { text: "Cost Approval Note", value: "cost_approval_note" },
      { text: "Canceled Reason", value: "canceled_reason" },
      { text: "Created", value: "created" },
    ]
  }),
  mounted() {
    axios.get(url).then((response) => {
      // this.rows = response.data.results;
      this.items = response.data.results;
    });
    // axios.get(url).then((response) => {
    //   this.items = response.data.results;
    // });
  },
};
</script>
