<script>
    import {length} from "../stores.js";
    export let label
</script>

{label}
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