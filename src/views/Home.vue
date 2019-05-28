<template>
  <div class="home">

<!-------------------------Navigation----------->
    <Toolbar/>

<!--------------------------Section1------------->
    <Section1>
      <Animated enter="bounce" duration="3000" mode="in-out" appear>
        <div class="text-xs-center pa-5 box">
            <a id="fleche"  href="#cptence" v-smooth-scroll>
              <v-icon  x-large dark class="material-icons">
                expand_more
              </v-icon>
            </a>
            <div v-if="show" class="box"></div>
        </div>
      </Animated>
    </Section1>

<!--------------------------A propos-------------->
    <div id="cptence">
      <Apropos/>
    </div>
<!---------------------------Compétences----------->
      <Competences/>
<!-------------------Experiences-------------------->
    <Experiences/>
<!------------------------------------Footer----------------------------------------->
    <Footer/>
<!--------------------------------------Back to top---------------------------------------------->
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
import Section1 from "@/components/Section1";
import Apropos from "@/components/Apropos";
import Competences from "@/components/Competences";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import BackToTop from 'vue-backtotop'


export default {
  name: 'home',
  components: {
    Section1,
    Apropos,
    Toolbar,
    Competences,
    Experiences,
    Footer,
    BackToTop
  },
}

</script>

<style scoped>

</style>