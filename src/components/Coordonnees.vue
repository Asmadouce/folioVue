<template>
    <div id="coordonnees">
        <v-container grid-list-sm>
            <v-flex text-xs-center>
                <h3 class="font-weight-thin">
                    asmae.elgueddari@gmail.com
                </h3>
            </v-flex>
            <v-flex text-xs-center>
                <h4 class="font-weight-thin">
                   +33622945803
                </h4>
            </v-flex>
            <v-flex d-flex text-xs-center >
                <a href="https://www.linkedin.com/in/asmae-el-gueddari-7030b0119/"><i class="fab fa-linkedin fa-5x"></i></a>
                <a href="https://github.com/Asmadouce"><i class="fab fa-github fa-5x"></i></a>
            </v-flex>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Coordonnees"
    }
</script>

<style scoped>
    #coordonnees{
        background-color: #41303f;
        font-family: Roboto, sans-serif;
        padding-top: 50px;
    }
    h3{
        font-size: 70px;
        color: white;
        padding: 45px 0;
    }
    h4{
        font-size: 35px;
        color: #ffffff;
    }
    .fab{
        color: #e4005e;
    }
    @media(max-width: 960px)  {
        h3{
            font-size: 27px;
        }
        h4{
            font-size: 30px;
            color: #ffffff;
        }

    }

</style>