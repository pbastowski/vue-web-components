<template>
    <div
        @input.stop="$emit('input', 'test')"
        @click="$emit('special-click', 'special data here')"
    >
        <h1>Vue Web Component</h1>
        <pre>abc: {{ abc }}</pre>
        <Renderless v-slot="props">hello default slot: {{ props }}</Renderless>
        <hr />
        <form @submit.prevent="addText">
            <label>
                Name
                <input v-model="text" />
            </label>
        </form>

        <p v-for="item in texts" :key="item.id">
            {{ item }}
            <button @click="removeItem(item)">delete</button>
        </p>
    </div>
</template>

<script>
import Renderless from './Renderless.vue'

export default {
    props: {
        abc: String
    },
    components: { Renderless },

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
        console.log('MOUNTED:', this.$el.test1, this.abc, this)

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
