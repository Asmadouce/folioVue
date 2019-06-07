<template>
    <div>
        <div >
            <v-container >
                <h3> Experiences </h3>
                <v-timeline>
                    <v-timeline-item
                            v-for="experience in experiences"
                            class="experience violet my-5"
                            color="grey darken-5"
                            large
                    >

                            <template v-slot:opposite>
                                <div data-aos="fade-up"
                                     data-aos-anchor-placement="top-bottom"

                                >
                                <span>{{experience.duree}} </span>
                                </div>
                            </template>


                        <v-card data-aos="flip-up" data-aos-duration="800" data-aos-easing="linear" class="exp">
                            <v-card-title class="headline"> {{experience.entreprise}}    ||      {{experience.poste}}</v-card-title>
                            <v-card-text>
                                {{experience.descriptions}}
                            </v-card-text>
                        </v-card>

                    </v-timeline-item>
                </v-timeline>
            </v-container>
        </div>
    </div>
</template>

<script>
    const axios = require('axios');
    export default {
        data() {
            return {
                experiences:[] ,
                loading: true,
                errored: false,

            }
        },

        mounted() {
            {
                axios
                    .get(`http://127.0.0.1:8000/api/v1/experiences`)
                    .then(response => (this.experiences = response.data));
            }

        },
    };

</script>

<style scoped >
    @font-face {
        font-family: AmaticFont;
        src: url(../assets/AmaticSC-Bold.ttf);
    }
    h3 {
        font-family: AmaticFont, sans-serif;
        font-size: 50px;
        color: #705465;
        padding: 90px;
    }

</style>