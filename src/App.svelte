<script>
import PasswordWrapper from "./lib/password/PasswordWrapper.svelte";
import Password from "./lib/password/Password.svelte";
import SettingsWrapper from "./lib/settings/SettingsWrapper.svelte";
import Setting from "./lib/settings/Setting.svelte";
import Slider from "./lib/settings/Slider.svelte";
import Character from "./lib/settings/Character.svelte";
import {lowerCases, numbers, specials, upperCases} from "./lib/stores.js";
</script>

<main>
    <SettingsWrapper>
        <Setting>
            <Slider label="Length" />
        </Setting>
        <Setting>
            <Character label='Lower Case Letters' bind:characters={$lowerCases} />
        </Setting>
        <Setting>
            <Character label='Upper Case Letters' bind:characters={$upperCases} />
        </Setting>
        <Setting>
            <Character label='Numbers' bind:characters={$numbers} />
        </Setting>
        <Setting>
            <Character label='Special Characters' bind:characters={$specials} />
        </Setting>
    </SettingsWrapper>
    <PasswordWrapper>
        <Password />
    </PasswordWrapper>
</main>


<style>
    main {
        display: flex;
    }

</style>
