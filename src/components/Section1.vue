<template>
    <div>
        <div class="section1">
            <v-container fill-height>
                <v-layout align-center>
                    <v-flex text-xs-center>
                        <h1 >Asmae El Gueddari</h1>
                    </v-flex>
                </v-layout>
                <slot></slot>
            </v-container>
        </div>

    </div>
</template>

<script>

    import * as easings from 'vuetify/es5/util/easing-patterns'
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
    .section1{
        padding: 29em;
        background-image: radial-gradient(circle at top left, #f8bbd0, #140e1c);
    }
    @media(max-width: 577px)  {
        .section1{
            font-family: AmaticFont,sans-serif;
            font-size: 1px;
            padding:4em;
        }
    }
    @media(max-width: 800px)  {
        .section1{
            padding: 10em;
        }
    }


</style>