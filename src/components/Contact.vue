<template  xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div id="contact">
        <v-container >
            <h3> Contact </h3>

            <form
                    @submit.prevent="submitForm"
            >
                <v-text-field
                        v-model="name"
                        v-validate="'required'"
                        :error-messages="errors.collect('name')"
                        box
                        label="Name"
                        data-vv-name="name"
                        dark
                        color="grey"
                ></v-text-field>

                <v-text-field
                        :error-messages="errors.collect('firstname')"
                        box
                        dark
                        color="grey"
                        data-vv-name="firstname"
                        label="Firstname"
                        v-model="firstname"
                        v-validate="'required'"
                ></v-text-field>

                <v-text-field
                        :error-messages="errors.collect('email')"
                        box
                        dark
                        color="grey"
                        data-vv-name="email"
                        label="E-mail"
                        v-model="email"
                        v-validate="'required|email'"
                ></v-text-field>

                <v-textarea
                        auto-grow
                        box
                        dark
                        color="grey"
                        data-vv-name="commentaire"
                        label="Commentaires"
                        rows="1"
                        v-model="commentaire"
                ></v-textarea>

                <v-dialog
                        v-model="dialog"
                        width="500"
                >
                    <template v-slot:activator="{ on }">
                        <v-btn
                                color="#705465"
                                dark
                                type="submit"
                                v-on="on"
                        >
                            Envoyer
                        </v-btn>
                    </template>

                    <v-card v-if="modalsend">
                        <v-card-text>
                            Envoyé!
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    @click="clearSend"
                                    color="deep-purple"
                                    flat
                            >
                                FERMER
                            </v-btn>
                        </v-card-actions>
                    </v-card>

                    <v-card v-else-if="modalerror">
                        <v-card-text>
                            Merci de renseigner le formulaire.
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    @click="dialog = false"
                                    color="deep-purple"
                                    flat
                            >
                                FERMER
                            </v-btn>
                        </v-card-actions>
                    </v-card>

                </v-dialog>

                <v-btn
                        @click="clear"
                        dark
                        color="#705465"
                >
                    Réinitialiser
                </v-btn>
            </form>
        </v-container>
    </div>
</template>

<script>

    const axios = require('axios');
    const qs = require('qs');

    export default {

        $_veeValidate: {
            validator: 'new'
        },

        data() {
            return {
                name: '',
                firstname: '',
                email: '',
                commentaire: '',
                dialog: false,
                modalsend:false,
                modalerror: false,

                dictionary: {
                    attributes: {
                        email: 'E-mail Adresse',
                        // custom attributes
                    },
                    custom: {
                        name: {
                            required: () => 'Merci de renseigner un Nom',
                        },
                        firstname: {
                            required: () => 'Merci de renseigner un Prénom',
                        },
                        email: {
                            required: () => 'Merci de renseigner une Adresse mail',
                        },
                    }
                }
            }
        },

        mounted() {
            {
                this.$validator.localize('fr', this.dictionary)
            }

        },

        methods: {
            submitForm() {
                this.$validator.validateAll().then(result=> {
                    if(result){
                    const options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            "Access-Control-Allow-Origin": "*"
                        },
                        data: qs.stringify( {
                            name           : this.name,
                            firstname      : this.firstname,
                            email          : this.email,
                            commentaire    : this.commentaire
                        }),
                        url:"http://127.0.0.1:8000/api/v1/contacts"
                    };
                    axios(options)

                    this.modalsend = true
                    return;
                }
                    this.modalerror = true;
                })
            },

            clear () {
                this.name           = ''
                this.firstname      = ''
                this.email          = ''
                this.commentaire   = ''
                this.$validator.reset()
            },

            clearSend (){
                this.dialog = false
                this.name           = ''
                this.firstname      = ''
                this.email          = ''
                this.commentaire   = ''
                this.$validator.reset()
            }
        }
    }
</script>

<style scoped>
    h3 {
        font-family: AmaticFont, sans-serif;
        font-size: 50px;
        color: antiquewhite;
        padding: 90px;
    }
    #contact{
        background-image: url("../assets/img/mac4.jpg");
        background-size: cover;
    }

</style>