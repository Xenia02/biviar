import {createRouter, createWebHistory} from "vue-router";
import Repairs from '../views/Repairs.vue'
import Home from '../views/Home.vue';

const routes = [
  { path: '/', component: Home },
  {path: "/repairs", name:'Repairs', component: Repairs},
  {path: "/billing", name: "Billing", component: () => import( '../views/Billing.vue')},
  {path: "/dashboard", name: "Dashboard", component: () => import( '../views/Dashboard.vue')},
  {path: "/notifications", name: "Notifications", component: () => import( '../views/Notifications.vue')},
  {path: "/purchase_orders", name: "Purchase_orders", component: () => import( '../views/Purchase_Orders.vue')},
  {path: "/sales_orders", name: "Sales_orders", component: () => import( '../views/Shipping_and_Receiving.vue')},
  {path: "/shipping_and_receiving", name: "Shipping_and_receiving", component: () => import( '../views/Transfer_Requests.vue')},
  {path: "/transfer_requests", name: "Transfer_requests", component: () => import( '../views/Sales_Orders.vue')},
  {path: "/rma_moving", name: "Rma_moving", component: () => import( '../views/RMA_Moving.vue')},
  {path: "/reports", name: "Reports", component: () => import( '../views/Reports.vue')},
  {path: "/staff", name: "Staff", component: () => import( '../views/Staff.vue')},
  {path: "/stock", name: "Stock", component: () => import( '../views/Stock.vue')},
  {path: "/settings", name: "Settings", component: () => import( '../views/Settings.vue')}
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;