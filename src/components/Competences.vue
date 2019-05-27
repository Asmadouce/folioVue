<template>
    <v-container>
        <h3>Compétences</h3>
            <div v-for="competence in competences"
            >
                <span class="headline">{{competence.name}}</span>
            </div>

    </v-container>
</template>

<script>
    const axios = require('axios');

    import bezierEasing from 'bezier-easing';

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
        color: #705465;
        padding: 90px;
    }

</style>