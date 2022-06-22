<template>
  <div class="repair">
    <table id="firstTable" class="table">
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
                <a href="#">RMA<br />#{{row.ticket}}</a>
              </td>
              <td>
                <a href="#">Wig<br />#{{row.wig }}</a>
              </td>
              <td>{{ row.received_date }}</td>
              <td>{{ row.serves_terms.display}}</td>
              <td>{{ row.status.display}}</td>
              <td>{{ row.return_to.display }}</td>
              <td>{{ row.receive_to_local.display }}</td>
              <td>{{ row.after_repair_destination.display }}</td>
              <td>{{ row.cost_approval_note }}</td>
              <td>{{ row.canceled_reason }}</td>
              <td>{{ row.created }}</td>
            </tr>
          </tbody>
        </table>
  </div>
</template>

<script>
const url = "/api/v1/rma-wig-status/";
new Vue({
  el: "#app",
  data: {
    rows: [],
  },
  mounted() {
    axios.get(url).then((response) => {
      this.rows = response.data.results;
    });
  },
});
export default {
  name: 'Repairs'
}
</script>