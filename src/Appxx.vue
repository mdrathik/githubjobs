<template>
  <div class="sm:px-4 sm:py-4 md:px-20 px-5">
    <h2 class="text-2xl"><span class="font-bold">Github</span> Jobs</h2>
    <search-bar></search-bar>
  </div>
  <div class="md:grid grid-cols-12 sm:px-5 sm:py-5 md:px-20 px-5">
    <side-bar></side-bar>
  </div>
</template>

<script>
import SearchBar from './components/ui/SearchBanner.vue'
import SideBar from './components/ui/SideBar.vue'
import JobList from './components/jobs/joblist.vue'
//import axios from 'axios'
import json from './../src/data.json'
export default {
  components: {
    SearchBar,
    SideBar,
    JobList,
  },
}
</script>

<style></style>
