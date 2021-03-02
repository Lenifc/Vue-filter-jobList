<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');

*, *::before, *::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root{
  --DesaturatedDarkCyan: hsl(180, 29%, 50%);
  --LightGrayishCyanBackground: hsl(180, 52%, 96%);
  --LightGrayishCyanFilter: hsl(180, 31%, 95%);
  --DarkGrayishCyan: hsl(180, 8%, 52%);
  --VeryDarkGrayishCyan: hsl(180, 14%, 20%);
}
body{
  font-family: 'Spartan', sans-serif;
  font-size: 15px;
  background-color: var(--LightGrayishCyanBackground);

}
</style>
