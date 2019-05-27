<template>
  <div class="home">
    <Toolbar/>
    <Section1>
      <div id="example-2">
        <a id="fleche" href="#cptence">
              <v-icon  x-large dark class="material-icons">
                expand_more
              </v-icon>
        </a>
      </div>
    </Section1>
    <div id="cptence"><Competences/></div>
    <Experiences/>
    <Footer/>
    <back-to-top  bottom="50px" right="50px">
      <v-btn fab dark large class="grey darken-3" >
        <i class="material-icons">
        expand_less
      </i></v-btn>
    </back-to-top>

  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from '@/components/Toolbar.vue'
import Section1 from "../components/Section1";
import Competences from "../components/Competences";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import BackToTop from 'vue-backtotop'



export default {
  name: 'home',
  components: {
    Section1,
    Toolbar,
    Competences,
    Experiences,
    Footer,
    BackToTop
  },
}
</script>

<style scoped>
#fleche{
  position: absolute;
  top:90%;
  left:48%;
}

</style>