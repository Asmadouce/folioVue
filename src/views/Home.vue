<template>
  <div class="home" id="home">

<!-------------------------Navigation----------->
    <Toolbar/>
<!--------------------------Section1------------->
    <Section1>
      <Animated enter="bounce" duration="3000" mode="out-in" appear>
        <div class="text-xs-center pa-5 box">
            <a id="fleche"  href="#Apropos" v-smooth-scroll>
              <v-icon  x-large color="#e4005e" class="material-icons">
                expand_more
              </v-icon>
            </a>
        </div>
      </Animated>
    </Section1>
<!--------------------------A propos-------------->
     <div id="Apropos">
         <Apropos/>
     </div>
<!---------------------------Compétences----------->
    <div id="cptence">
      <Competences/>
    </div>
<!-------------------Experiences-------------------->
      <div id="experience">
          <Experiences/>
      </div>

<!------------------Contacts------------------------>
      <div id="contacts">
          <Contact/>
      </div>

      <div id="map">
          <v-layout >
              <v-flex text-xs-center >
                  <div id="radius">
                      <v-icon fab class="material-icons" color="#e4005e" x-large >
                          person_pin_circle
                      </v-icon>
                  </div>
              </v-flex>
          </v-layout>
      </div>
<!---------------------coordonnees--------------------->
      <div id="Coordonnees">
          <Coordonnees/>
      </div>

<!------------------------------------Footer----------------------------------------->
    <Footer/>
<!--------------------------------------Back to top---------------------------------------------->
    <back-to-top  bottom="45px" right="15px">
      <v-btn outline small fab color="pink accent-3" >
        <v-icon color="#705465" large class="material-icons">
            keyboard_arrow_up
      </v-icon>
        </v-btn>
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
import Contact from "@/components/Contact";
import Coordonnees from "../components/Coordonnees";
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
    Contact,
      Coordonnees,
    Footer,
    BackToTop
  },
}

</script>

<style scoped>
    h3{
        font-family: Roboto, sans-serif;
        font-size: 70px;
        color: #705465;
        padding: 90px 0;
    }
    #map{
        height: 40px;
        text-align: center;
        position: relative;
        left:calc(50% - 32.5px);
        z-index: 99;
    }
    #radius{
        width: 65px;
        height: 65px;
        border-radius: 50%;
        border: 2px #fff solid;
        line-height: 65px;
        text-align: center;
        color: #fff;
        font-size: 26px;
        cursor: pointer;
        background:  #705465;
        position:absolute
    }
    @media(max-width: 960px)  {

    }

</style>