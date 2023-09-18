<script>
import PasswordWrapper from "./lib/password/PasswordWrapper.svelte";
import Password from "./lib/password/Password.svelte";
import SettingsWrapper from "./lib/settings/SettingsWrapper.svelte";
import Setting from "./lib/settings/Setting.svelte";
import Slider from "./lib/settings/Slider.svelte";
import Character from "./lib/settings/Character.svelte";
import {lowerCases, upperCases, numbers, specials} from "./lib/stores.js";
</script>

<main>
    <SettingsWrapper>
        <Setting>
            <div slot="label">Letters</div>
            <svelte:fragment slot="setting">
                <Character bind:characters={$lowerCases} />
                <Character bind:characters={$upperCases} />
            </svelte:fragment>
        </Setting>
        <Setting>
            <div slot="label">Numbers</div>
            <Character slot="setting" bind:characters={$numbers} />
        </Setting>
        <Setting>
            <div slot="label">Special Characters</div>
            <Character slot="setting" bind:characters={$specials} />
        </Setting>
        <Setting>
            <div slot="label">Length</div>
            <Slider slot="setting" label="Length" />
        </Setting>
    </SettingsWrapper>
    <PasswordWrapper>
        <Password />
    </PasswordWrapper>
</main>


<style>
    main {
        display: flex;

        height: 100dvh;
        width: 100dvw;

        padding: 2rem;
        gap: 2rem;

        color: hsl(var(--lightColor));
        background-color: hsl(var(--darkColor));
    }
</style>