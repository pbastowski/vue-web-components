<template>
    <div>
        <h1>Vue Web Component</h1>
        <hr />
        <form @submit.prevent="addText">
            <label>
                Name
                <input v-model="text" />
            </label>
        </form>

        <p v-for="item in texts">
            {{ item }}
            <button @click="removeItem(item)">delete</button>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: '',
                texts: []
            }
        },

        created() {
            this.texts.push('lalala')
        },

        methods: {
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
