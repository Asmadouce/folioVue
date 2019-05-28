<template>
    <div class="img" >
        <div >
            <h3>Compétences</h3>
            <v-container grid-list-sm fluid>
                    <v-layout row wrap>
                        <v-flex
                                v-for="competence in competences"
                                :key="competence"
                                xs12
                                sm6
                                lg3
                                d-flex
                        >
                            <v-hover >
                                <v-card flat tile
                                        slot-scope="{ hover }"
                                        :class="`elevation-${hover ? 14 : 3}`"
                                        width="244"
                                        id="radius"
                                >
                                    <v-img
                                            :aspect-ratio="1"
                                            width="150"
                                            :src="require(`@/assets/img/${competence.img}`)"
                                            class="mx-auto"
                                    ></v-img>
                                </v-card>
                            </v-hover>
                        </v-flex>
                    </v-layout>
            </v-container>
        </div>
    </div>

</template>

<script>
    const axios = require('axios');

    export default {
        data() {
            return {
                competences:[] ,
                loading: true,
                errored: false,
            }
        },

        mounted() {
            {
                axios
                    .get(`http://127.0.0.1:8000/api/v1/competences`)
                    .then(response => (this.competences = response.data))
                console.log(this.competences)
            }
        },
        methods: {
            shuffle: function () {
                this.items = _.shuffle(this.items)
            }
        }
    };

</script>


<style scoped>
    @font-face {
        font-family: AmaticFont;
        src: url(../assets/AmaticSC-Bold.ttf);
    }
    h3 {
        font-family: AmaticFont, sans-serif;
        font-size: 50px;
        color: antiquewhite;
        padding: 90px;
    }
    #radius{
        border-width: 25px 4px;
        border-radius: 5px 40px;;
    }
    .img{
        background-image: url("../assets/img/mac4.jpg");
        background-size: cover;


    }

</style>