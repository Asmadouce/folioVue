<template>
    <div class="Apropos">
        <v-container  grid-list-sm>
            <v-layout row wrap>
                <v-flex d-flex xs12>
                    <v-layout fluid row wrap>
                            <v-flex d-flex>
                                <h3 data-aos="fade-right"
                                    data-aos-duration="1500"
                                    class="font-weight-thin" >
                                    A propos
                                </h3>
                            </v-flex>

                                <v-flex d-flex>
                                    <div>Passionnée d’informatique et de nouvelles technologies, j’ai choisi d’en faire mon métier.
                                        J’ai pour cela effectué une formation de développeur web et web mobile.
                                        <br/>J’ai pu réaliser de nombreux projets tel que la création d'une API, d'un blog, etc.
                                        Fort de cette expérience, j’ai pu monter en compétences de manière rapide et autodidacte. Je maîtrise maintenant plusieurs technologie et plus particulièrement PHP et Symfony.
                                        J’ai également acquis une forte capacité d’adaptation sur tout type de langage.</div>
                                </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Apropos",
    }
</script>

<style scoped>
    h3{
        font-family: Roboto, sans-serif;
        font-size: 70px;
        color: #705465;
        padding: 90px 0;
    }
    @media(max-width: 960px) {
        h3 {
            font-size: 50px;
        }
    }

</style>