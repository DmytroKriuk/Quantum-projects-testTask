<template>
  <div id="app">
    <Header></Header>
    <Start></Start>
    <People></People>
    <Questions></Questions>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Start from './components/Start.vue'
import People from './components/People.vue'
import Questions from './components/Questions.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Start,
    People,
    Questions,
    Contact,
    Footer
  }
}
</script>



