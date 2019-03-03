<template>
  <div>
    <h1>An error occurred, we're sorry.</h1>
    <button class="btn btn-primary btn-sm" @click="goback" >Go Back</button>
  </div>
</template>

<script>
export default {
    methods:{
        goback(){
            window.history.back()
        }
    }
}
</script>