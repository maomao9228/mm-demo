<template>
  <div class="hello">
    <!-- <button>{{$t('login.login')}}</button>
    <div>{{$t('login.reset')}}</div>
    <button @click="change">切换</button> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
  },

  methods: {
    change () {
      console.log(this.$i18n.locale)
      if (this.$i18n.locale === 'CN') {
        this.$i18n.locale = 'EN'
      } else {
        this.$i18n.locale = 'CN'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
