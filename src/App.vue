<template>
<HeaderViews :key="$route.fullPath" />
  <router-view />
<FooterViews />
</template>

<script>
import FooterViews from "@/views/Footer";
import HeaderViews from "@/views/Header";
export default {
  name: 'App',
  components: {HeaderViews, FooterViews},
}
</script>

<style>
/*
 * Footer
 */
.blog-footer {
  padding: 2.5rem 0;
  color: #727272;
  text-align: center;
  background-color: #f9f9f9;
  border-top: .05rem solid #e5e5e5;
}
.blog-footer p:last-child {
  margin-bottom: 0;
}
body, html{height:100%;}

body{
  text-align:center;
}

footer{

  background:#ccc;
  position:absolute;
  bottom:0;
  width:100%;
  padding-top:50px;
  height:50px;
}
</style>
