<script>
    let items;
</script>
<div class="wrapper">
    <div class="label">
        <slot name="label"></slot>
    </div>
    <div class="setting">
        <slot name="setting"></slot>
    </div>
</div>

<style>
    .wrapper {
        color: rgb(25,25,25);
        background-color: rgba(225,225,225, 1);

        display: flex;
        flex-direction: column;
        justify-content: space-between;;

        border-radius: 4px;

        width: 100%;
        height: 100%;

        padding: 1rem;
        margin: 1rem;
    }

    .label {

    }

    .setting {
        display: flex;
        flex-direction: column;
    }

</style>