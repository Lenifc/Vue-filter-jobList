<template>
  <div class="home">
    <div class="header">
      <img src="../assets/images/bg-header-desktop.svg">
    </div>
    <activeFilters v-if="$store.state.activeTags.length" />
    <jobList/>
  </div>
</template>

<script>
// @ is an alias to /src
import jobList from '@/components/jobList.vue'
import activeFilters from '@/components/activeFilters.vue'

export default {
  name: 'Home',
  components: {
    jobList,
    activeFilters
  }
}
</script>

<style scoped>
.header{
  background-color: var(--DesaturatedDarkCyan);
  height: 100px;
  overflow: hidden;
}
.header img{
  width: 100%;
  height: auto;
}
</style>