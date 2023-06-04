<script>
    let items;
</script>
<div class="wrapper">
    <slot name="label"></slot>
    <div class="setting">
        <slot name="setting"></slot>
    </div>
</div>

<style>
    .wrapper {
        color: rgb(25,25,25);
        background-color: rgba(225,225,225, 1);

        border-radius: 5px;

        width: 100%;

        padding: 1rem;
        margin: 1rem;
    }

    .setting {
        display: flex;
        flex-direction: column;
    }

</style>