<script>
    export let characters
</script>

<div>
    <input
            type="text"
            id='character'
            bind:value={characters}
    >
</div>

<style>
    input {
        color: rgb(25,25,25);
        background-color: rgb(25,25,25,0.4);

        border: none;
        border-radius: 3px;

        padding: 5px;

        width: 100%;
    }
</style>

