<template>
    <nav >

            <v-toolbar
                    flat
                    fixed
                    class="grey darken-3"

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
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route" class="white--text">
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
                    { icon: 'dashboard', text: 'Menu', route: '/' },
                    { icon: 'folder', text: 'Compétences', route: '/competences' },
                    { icon: 'folder', text: 'Expériences', route: '/experiences.js' },
                    { icon: 'email', text: 'Contact', route: '/contact' },
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
</style>