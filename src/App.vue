<template>
<div class="main">
  <Sidebar></Sidebar>
  <router-view />
</div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "app",
  components: {
    Sidebar
  },
};
</script>

<style>
body {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 15px;
}
* {
  padding: 0;
  margin: 0;
}
.main {
  display: flex;
  height: 100vh;
  max-width: 100vw;
}
table {
  border-top: none;
  margin: 10px;
  border-collapse: collapse;
  width: 80vw;
  text-align: center;
  vertical-align: middle;
  word-break: break-all;
  font-size: 14px;
  white-space: nowrap;
  align-items: center;
  line-height: normal;
}
thead {
  text-align: center;
  vertical-align: middle;
}
thead th {
  background-color: rgb(64, 93, 144);
  color: rgb(255, 255, 255);
  text-align: center;
  vertical-align: middle;
}
.home {
  display: flex;
}
.repairs {
  display: flex;
}
tr:nth-child(odd) {
  background-color: #ffffff;
}
tr:nth-child(even) {
  background-color: #e1e1e1;
}
tr:hover {
  background-color: rgb(201, 207, 223);
}
.aside {
  background-color: rgb(52, 64, 83);
  width: 17vw;
}
a {
  color: rgb(52, 64, 83);
}
h3 {
  color: rgb(170, 170, 170);
  background-color: rgb(42, 51, 66);
  padding: 10px;
  font-size: 20px;
}
li {
  font-size: 15px;
  border: none;
  width: 100%;
  height: 7.14vh;
  background-color: rgb(52, 64, 83);
  color: rgb(255, 255, 255);
  padding-left: 3px;
  vertical-align: middle;
  line-height: 7.14vh;
}

li:hover {
  background-color: rgb(104, 115, 146);
}
</style>
