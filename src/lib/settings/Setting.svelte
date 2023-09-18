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
        display: flex;
        flex-direction: column;
        justify-content: space-between;;

        width: 100%;
        height: 100%;
        padding: 1rem;

        color: hsl(var(--lightColor));
        background-color: hsla(var(--lightColor), .1);

        border-radius: 4px;
    }

    .label {

    }

    .setting {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
    }

</style>