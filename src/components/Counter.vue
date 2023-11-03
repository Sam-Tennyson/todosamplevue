<template>
    <div>
        counter: {{ counter }}
    </div>
    <input type="text" v-model="name" />
    <input type="checkbox" v-model="fruits" value="Apple"> Apple
    <input type="checkbox" v-model="fruits" value="Pear"> Pear
    <input type="checkbox" v-model="fruits" value="Banana"> Banana
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    },
    data() {
        return {
            counter: 0,
            name: "jjkjk",
            fruits: []
        }
    }
})
</script>
