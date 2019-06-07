<template>



    <div class="section1">
<!--            <v-container  fill-height>-->
                <v-layout >
                    <v-flex class="pa-5" text-xs-center>
                        <h1 class="asmae">Asmae </br> El Gueddari</h1>
                    </v-flex>
                </v-layout>
<!--            </v-container>-->
            <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "Section1",
    }

</script>

<style scoped>
    @font-face {
        font-family: AmaticFont;
        src: url(../assets/AmaticSC-Regular.ttf);
    }
    h1{
        font-family: AmaticFont,sans-serif;
        font-size: 100px;
        color: whitesmoke;
    }
    .asmae{
        padding-top: 35vh;
    }
    .section1{
        height:100vh;
        background-image: radial-gradient(circle at top left, #f8bbd0, #140e1c);
    }
    @media(max-width: 577px)  {
        .section1{
            font-family: AmaticFont,sans-serif;
            font-size: 1px;
            padding:4em;
        }

    }
    @media(max-width: 760px)  {
        h1{
            font-family: AmaticFont,sans-serif;
            font-size: 65px;
            color: whitesmoke;
        }
        .section1{
            padding: 10em;
        }
        .asmae{
            padding-top: 25vh;
        }
    }
    main > .container {
        height: 100vh;
    }

</style>