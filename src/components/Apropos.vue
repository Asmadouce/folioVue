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
                                    <div>{{ lorem }}</div>
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
        data: () => ({
            lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad
            ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis
            iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.
            Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad
            ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis
            iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
        })
    }
</script>

<style scoped>
    h3{
        font-family: Roboto, sans-serif;
        font-size: 70px;
        color: #705465;
        padding: 90px 0;
    }

</style>