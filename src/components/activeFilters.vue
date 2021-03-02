<template>
<div class="container">
    <div class="filter-list">

        <ul class="roles">
            <li class="role"  v-for="role in roles" :key="role">
                <div class="role-name">{{ role }}</div>
                <div class="delete-filter" @click="deleteFilter(role)">X</div>
            </li>
        </ul>

        <button class="delete-all-filters" @click="deleteAllFilters">Clear</button>
    </div>
</div>
    
</template>

<script>
export default {
    name: 'activeFilters',
    computed: {
        roles(){
            return this.$store.state.activeTags
        }
    },
    methods:{
        deleteFilter(role){
            this.$store.dispatch('deleteFilter', role)
        },
        deleteAllFilters(){
            this.$store.commit('deleteAllFilters')
        }
    }
    
}
</script>


<style scoped>
.container{
  width: min(1300px, 80%);
  margin: 0 auto;
  position: relative;
}

.filter-list{
    position: absolute;
    width: 100%;
    top: -45px;
    background-color: #fff;
    padding: 16px 32px;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 0px 10px 20px -10px darkgray;
}

.roles{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.role{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px
}


.role-name, .filter-item{
    color: var(--DesaturatedDarkCyan);
    background-color: var(--LightGrayishCyanBackground);
    font-weight: bold;
    padding: 8px 12px;
    border-radius: 6px;
}

.delete-filter{
    padding: 8px 10px;
    background-color: var(--DesaturatedDarkCyan);
    color: white;
    font-weight: bold;
    vertical-align: middle;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    height: 100%;
}
.delete-filter:hover{
    cursor: pointer;
    background-color:var(--VeryDarkGrayishCyan);
}

.delete-all-filters{
    background-color: transparent;
    padding:8px;
    border: none;
    color: var(--DesaturatedDarkCyan);
    font-weight: bold;
    font-size: 1.2em;
}

.delete-all-filters:hover{
    cursor: pointer;
    text-decoration: underline;
}
</style>