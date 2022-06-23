<template>
  <div class="main">
    <Sidebar></Sidebar>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "app",
  components: {
    Sidebar,
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
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(104, 115, 146);
}
* {
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}
.main {
  display: flex;
  white-space: nowrap;
  height: 100vh;
  width: 100%;
}
.content {
  position: relative;
  margin-left: 250px;
  padding-right: 10px;
  overflow-x: auto;
}
table {
  border-top: none;
  margin: 10px;
  border-collapse: collapse;
  text-align: center;
  vertical-align: middle;
  word-break: break-all;
  font-size: 14px;
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
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: rgb(52, 64, 83);
  min-width: 250px;
  overflow-y: auto;
}
a {
  color: rgb(52, 64, 83);
}
ul h3 {
  color: rgb(170, 170, 170);
  background-color: rgb(42, 51, 66);
  padding: 10px;
  padding-right: 20px;
  font-size: 20px;
}
li {
  padding-right: 20px;
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
