<template>
    <div id="experiences">
        <div >
            <v-container >
                <h3 data-aos="fade-right"
                    data-aos-duration="1500"
                    class="font-weight-thin"
                >
                    Experiences
                </h3>
                <v-timeline>
                    <v-timeline-item
                            v-for="experience in experiences"
                            class="pa-4 experience violet"
                            fill-dot
                            color="#41303f"
                            medium
                    >

                            <template v-slot:opposite >
                                <div data-aos="zoom-in-up"
                                     data-aos-duration="800"
                                     class="font-weight-light"
                                >
                                <div id="duree"> {{experience.duree}} </div>
                                </div>
                            </template>


                        <v-card
                                data-aos="flip-up"
                                data-aos-duration="800"
                                data-aos-easing="linear"
                                class="exp">
                            <v-card-title class="headline font-weight-light"> {{experience.entreprise}}    ||      {{experience.poste}} </v-card-title>
                            <v-card-text class="font-weight-light">
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
    /*@font-face {*/
    /*    font-family: AmaticFont;*/
    /*    src: url(../assets/AmaticSC-Bold.ttf);*/
    /*}*/
    #experiences{
        font-family: Roboto, sans-serif;
        background-image: url("../assets/img/asmaerigole.jpg");
        background-position: top left;
    }
    h3 {
        font-size: 70px;
        color: #705465;
        padding: 90px 0;
    }
    .experience{
        margin-top:100px;
    }
    .v-timeline-item .v-card::before, .v-timeline-item .v-card::after{
        border-right-color:#e4005e;

    }
    .v-timeline-item .v-card, .v-timeline-item .v-card{
        border: 1px solid #e4005e;
    }
    .exp{
        background-color: #f7f1f3;
    }
    #duree{
        color: #e4005e;
        font-size: 85px;
    }


</style>