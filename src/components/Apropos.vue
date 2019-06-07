<template>
    <div class="Apropos">
        <v-container  grid-list-sm>
            <v-layout row wrap>
                <v-flex d-flex xs12 sm9>
                    <v-layout fluid row wrap>
                            <v-flex d-flex>
                                <h3 >A propos</h3>
                            </v-flex>

                                <v-flex d-flex>
                                    <div>{{ lorem }}</div>
                                </v-flex>
                    </v-layout>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex d-flex xs12 sm3>
                    <v-img
                            :src="require('@/assets/img/asmaoui.png')"
                            aspect-ratio="0.7"
                            contain
                    ></v-img>
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
    h3 {
        font-family: AmaticFont, sans-serif;
        font-size: 50px;
        color: #705465;
        padding: 90px;
    }

</style>