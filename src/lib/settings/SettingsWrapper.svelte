<div>
    <slot></slot>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        height: 100%;
        width: var(--settingsWidth);
        gap: 2rem;

        overflow: scroll;
        overscroll-behavior: none;
    }
</style>