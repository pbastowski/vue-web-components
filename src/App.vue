<template>
    <div
        @input.stop="$emit('input', 'test')"
        @click="$emit('special-click', 'special data here')"
    >
        <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
            rel="stylesheet"
        />
        <link
            href="https://cdn.jsdelivr.net/npm/@mdi/font@3.x/css/materialdesignicons.min.css"
            rel="stylesheet"
        />
        <link
            href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css"
            rel="stylesheet"
        />
        <!--
        -->
        <v-app>
            <v-content>
                <v-container>
                    <v-card>
                        <v-card-title>
                            Vue Todos - Web Component
                        </v-card-title>

                        <v-card-text>
                            <pre>abc: {{ abc }}</pre>
                            <Renderless v-slot="props"
                                >Renderless data: {{ props }}</Renderless
                            >
                            <hr />
                        </v-card-text>

                        <v-card-text>
                            <form @submit.prevent="addText">
                                <v-text-field
                                    autofocus
                                    label="Task title"
                                    v-model="text"
                                />
                            </form>

                            <p
                                v-for="item in texts"
                                :key="item.id"
                                class="d-flex"
                            >
                                <span class="grow">{{ item }}</span>
                                <v-btn @click="removeItem(item)" small icon
                                    ><v-icon small color="red"
                                        >mdi-delete</v-icon
                                    ></v-btn
                                >
                            </p>
                        </v-card-text>
                    </v-card>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<style lang="sass" scoped>
@import '../node_modules/vuetify/dist/vuetify.min.css'
@import '../node_modules/@mdi/font/css/materialdesignicons.min.css'
@import '../node_modules/roboto-fontface-woff/css/roboto/roboto-fontface.css'
</style>

<script>
// import 'vuetify/dist/vuetify.min.css'
// import '@mdi/font/css/materialdesignicons.min.css'
// import 'roboto-fontface-woff/css/roboto/roboto-fontface.css'

import Vuetify from 'vuetify'
import Vue from 'vue'

import Renderless from './Renderless.vue'

Vue.use(Vuetify)

export default {
    props: {
        abc: String
    },
    components: { Renderless },

    vuetify: new Vuetify({
        // icons: {
        //     iconfont: 'mdi'
        // }
    }),

    data() {
        return {
            text: '',
            texts: []
        }
    },

    activated() {
        console.log('ACTIVATED:')
    },

    mounted() {
        //console.log('MOUNTED:', this.$el.test1, this.abc, this)

        window.addEventListener('load', () => {
            this.$emit('load')
            this.$emit('special-event')
            // this.domEvent(this.$el, 'load')
            // this.domEvent(this.$el, 'special-event')
        })
    },

    created() {
        this.texts.push('lalala')
    },

    methods: {
        test3() {
            window.alert(`It's working`)
        },

        addText() {
            if ('' === this.text.trim()) return
            this.texts.push(this.text)
            this.text = ''
        },

        removeItem(item) {
            this.texts = this.texts.filter(text => text !== item)
        }
    }
}
</script>
