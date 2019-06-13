<template>
    <div class="section1">
                <v-layout >
                    <v-flex class=" pa-5" text-xs-center color="#41303f">
                        <h1 class="asmae font-weight-thin" >
                            Asmae El Gueddari
                        </h1>
                    </v-flex>
                </v-layout>

                <v-layout>
                    <v-flex class="pa-5 font-weight-thin" text-xs-center>
                        <v-btn outline class="pa-4" color="#41303f">
                        <a  id="link" :href= "require('../assets/img/cvAsmaev.jpg')" download>Télécharger mon cv</a>
                        </v-btn>
                    </v-flex>
                </v-layout>
            <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "Section1",
    }

</script>

<style scoped>
    /*@font-face {*/
    /*    font-family: AmaticFont;*/
    /*    src: url(../assets/AmaticSC-Regular.ttf);*/
    /*}*/
    h1{
        font-size: 100px;
    }
    .asmae{
        padding-top: 52vh;
        color: #41303f;
    }
    #link{
        color: #41303f;
        text-decoration: none;
    }
    .section1{
        background-image: url("../assets/img/cvAsmae4.jpg") ;
        font-family: Roboto,sans-serif;
        background-position: top center;
        background-size: cover;
    }
    @media(max-width: 960px)  {
        .section1{
            background-image: url("../assets/img/cvAsmae4.jpg") ;
            font-family: Roboto,sans-serif;
            background-position: 67% 50%;
            background-size: cover;
        }
        h1{
            font-family: Roboto,sans-serif;
            font-size: 66px;
        }
    }
    main > .container {
        height: 100vh;
    }

</style>