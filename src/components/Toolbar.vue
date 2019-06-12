<template>
    <nav >

            <v-toolbar
                    flat
                    fixed
                    class="color grey darken-3"
                    scroll-off-screen
            >
                <v-toolbar-side-icon dark @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            </v-toolbar>

            <v-navigation-drawer
                    app
                    v-model="drawer"
                    temporary
                    class="violet"

            >
                <v-list >
                    <v-list-tile v-for="link in links" :key="link.text"  :href="link.href" class="white--text">
                        <v-list-tile-action>
                            <v-icon color="white">{{ link.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ link.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list >
            </v-navigation-drawer>
    </nav>

</template>

<script>
    export default {
        name: "Toolbar.vue",
        data() {
            return {
                drawer: null,
                links: [
                    { icon: 'home', text: 'Menu', href: '#home'},
                    { icon: 'folder', text: 'Competence', href: '#cptence'},
                    { icon: 'assignment_ind', text: 'A propos', href: "#Apropos"},
                    { icon: 'assignment_returned', text: 'Expériences', href: '#experience'},
                    { icon: 'email', text: 'Contact', href: '#contact'},
                    { icon: 'person_pin_circle', text: 'Coordonnees', href: '#Coordonnees'},
                ]
            }
        }
    }
</script>

<style scoped>
    .violet{
        background-color: #41303f;
        font-family: Lato,sans-serif;
    }
    #colorTool{
        background-color: #140e1c;
    }
</style>