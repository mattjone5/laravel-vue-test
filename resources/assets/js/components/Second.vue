<template>
    <div>
        <h1>Test Second</h1>

        <input type="text" v-model="name">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Laracasts'
            };
        }
    };
</script>

<style>
    h1 {
        color: red;
    }
</style>
