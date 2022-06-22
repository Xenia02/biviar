<template>
    <div class="aside" >
    <ul>
      <h3>Salon</h3>
      <router-link to="/dashboard">
        <li>
          &nbsp;&nbsp;&nbsp;<i class="fa fa-bar-chart" aria-hidden="true"></i
          >&nbsp;&nbsp;&nbsp; Dashboard
        </li>
      </router-link>
      <router-link to="/stock">
        <li>
          &nbsp;&nbsp;&nbsp;<i class="fa fa-list-alt" aria-hidden="true"></i
          >&nbsp;&nbsp;&nbsp; Stock
        </li>
      </router-link>
      <router-link to="/purchase_orders">
        <li>
          &nbsp;&nbsp;&nbsp;<i
            class="fa fa-shopping-basket"
            aria-hidden="true"
          ></i
          >&nbsp;&nbsp;&nbsp; Purchase Orders
        </li>
      </router-link>
      <router-link to="/sales_orders">
        <li>
          &nbsp;&nbsp;&nbsp;<i
            class="fa fa-check-square-o"
            aria-hidden="true"
          ></i
          >&nbsp;&nbsp;&nbsp; Sales Orders
        </li>
      </router-link>
      <router-link to="/shipping_and_receiving">
        <li>
          &nbsp;&nbsp;&nbsp;<i class="fa fa-truck" aria-hidden="true"></i
          >&nbsp;&nbsp;&nbsp; Shipping and Receiving
        </li>
      </router-link>
      <router-link to="/transfer_requests">
        <li>
          &nbsp;&nbsp;&nbsp;<i class="fa fa-exchange" aria-hidden="true"></i
          >&nbsp;&nbsp;&nbsp; Transfer Requests
        </li>
      </router-link>
      <router-link to="/repairs">
        <li>
          &nbsp;&nbsp;&nbsp;<i class="fa fa-reply-all" aria-hidden="true"></i
          >&nbsp;&nbsp;&nbsp; Repairs
        </li>
      </router-link>
      <router-link to="/rma_moving">
        <li>
          &nbsp;&nbsp;&nbsp;<i class="fa fa-arrows" aria-hidden="true"></i
          >&nbsp;&nbsp;&nbsp; RMA Moving
        </li>
      </router-link>
      <router-link to="/notifications">
        <li>
          &nbsp;&nbsp;&nbsp;<i class="fa fa-bell" aria-hidden="true"></i
          >&nbsp;&nbsp;&nbsp; Notifications
        </li>
      </router-link>
      <router-link to="/reports">
        <li>
          &nbsp;&nbsp;&nbsp;<i class="fa fa-file-text-o" aria-hidden="true"></i
          >&nbsp;&nbsp;&nbsp; Reports
        </li>
      </router-link>
      <router-link to="/staff">
        <li>
          &nbsp;&nbsp;&nbsp;<i class="fa fa-users" aria-hidden="true"></i
          >&nbsp;&nbsp;&nbsp; Staff
        </li>
      </router-link>
      <router-link to="/billing">
        <li>
          &nbsp;&nbsp;&nbsp;<i class="fa fa-usd" aria-hidden="true"></i
          >&nbsp;&nbsp;&nbsp; Billing
        </li>
      </router-link>
      <router-link to="/settings">
        <li>
          &nbsp;&nbsp;&nbsp;<i class="fa fa-cog" aria-hidden="true"></i
          >&nbsp;&nbsp;&nbsp; Settings
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sidebar"
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
