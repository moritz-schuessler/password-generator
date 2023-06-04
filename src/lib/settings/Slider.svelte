<script>
    import {length} from "../stores.js";
    export let label
</script>
<div>
    <label for='length'>
        {$length}
    </label>
    <input
            type="range"
            id='length'
            min='10'
            max='200'
            bind:value={$length}
    >
</div>

<style>
    div {
        display: flex;
        justify-content: space-between
    }
    input {
        width: 95%;
    }
</style>

