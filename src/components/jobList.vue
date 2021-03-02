<template>
<div class="container">
  <ul class="jobList">
    <li class="jobCard" v-for="(job, index) in jobs" :key="index">
      <div class="jobLogo"><img :src="require(`@/assets${job.logo}`)" alt=""></div> 
      <!-- ?????????????????? -->
      <div class="jobInfo">
        <div class="row1">
          <div class="companyName">{{ job.company }}</div>
          <div class="badge newBadge" v-if="job.new">New!</div>
          <div class="badge featuredBadge" v-if="job.featured">Featured</div>
        </div>
        <div class="row2 jobPosition">{{ job.position }}</div>
        <div class="row3">
          <div class="timeAgo">{{ job.postedAt }}</div>
          <div class="jobContract">{{ job.contract }}</div>
          <div class="jobLocation">{{ job.location }}</div>
        </div>
      </div>
      <div class="jobTags" @click="filterTags($event.target)">
        <div class="tag" :id="job.role">{{ job.role }}</div>
        <div class="tag" :id="job.level">{{ job.level }}</div>
        <div class="tag" :id="language" v-for="(language, index) in job.languages" :key="language+index">{{ language }}</div>
        <div class="tag" :id="tool" v-for="(tool, index) in job.tools" :key="tool+index">{{ tool }}</div>
      </div>
      </li>
  </ul>
</div>
  
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'jobList',

  computed:{
    jobs(){
      // console.log(this.$store.getters.fakeFetch)
      return this.$store.getters.fakeFetch
    },
  },

    methods:{
      ...mapActions({filterTags: 'filterTags'}),
    },
}
</script>




<style scoped>
.container{
  width: min(1300px, 80%);
  margin: 0 auto;
}

.jobLogo{
  margin-right: 16px;
}

.jobContract::before, .jobContract::after{
  content: " \00b7";
  padding: 0 8px;
}

.jobList{
  padding-top: 64px;
  margin: 0 auto;
}

.jobInfo{
  align-self: center;
}

.jobCard{
  list-style-type: none;
  background-color: #fff;
  margin: 12px 0;
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
}

.row1,
.row2,
.row3{
  display: flex;
  flex-direction: row;
}

.companyName{
  color: var(--DesaturatedDarkCyan);
  font-weight: 700;
  align-self: center;
}

.jobTags{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  padding-left: 10px;
  flex-wrap: wrap;
  
}

.tag{
  color: var(--DesaturatedDarkCyan);
  font-weight: 700;
  font-size: 13px;
  padding: 8px 10px;
  margin: 4px 6px;
  background-color: var(--LightGrayishCyanBackground);
  cursor: pointer;
}
.badge{
  text-transform: uppercase;
  font-size: 10px;
  background-color: #000;
  color: white;
  border-radius: 12px;
  padding: 0 8px;
  line-height: 22px;
  height: 22px;
  margin-left: 8px;
}
.newBadge{
  background-color: var(--DesaturatedDarkCyan);
}

.jobPosition{
  font-size: 1.1rem;
  font-weight: 700;
  padding: 8px 0;
}

.row3{
  color: var(--DarkGrayishCyan);
  font-size: 13px;
  white-space: nowrap
}
</style>
