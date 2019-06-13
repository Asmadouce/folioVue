<template>

    <div class="competences">
        <div class="img">
            <v-container >
                <v-flex xs12 sm9 md10>
                    <h3  data-aos="fade-right" data-aos-duration="1500" class="font-weight-thin">Compétences</h3>
                </v-flex>

                <v-container grid-list-sm fluid>
                    <v-layout row wrap>
                        <v-flex
                                v-for="competence in competences"
                                xs12
                                sm6
                                lg3
                                d-flex
                        >
                            <v-hover >
                                <v-card flat tile
                                        slot-scope="{ hover }"
                                        :class="`elevation-${hover ? 12 : 2}`"
                                        width="244"
                                        id="radius"
                                        class="ma-4"
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
                reviews: 413,
                value: 4.5
            }
        },

        mounted() {
            {
                axios
                    .get(`http://127.0.0.1:8000/api/v1/competences`)
                    .then(response => (this.competences = response.data))
            }
        },
    };

</script>


<style scoped>
    h3{
        font-size: 70px;
        color: #705465;
        padding: 90px 0;
    }
    #radius{
        border-width: 25px 4px;
        border-radius: 5px 40px;;
    }
    .competences{
        font-family: Roboto, sans-serif;
    }
    @media(max-width: 960px)  {
        h3{
            font-size: 50px;
        }
    }
</style>