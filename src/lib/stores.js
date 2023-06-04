import {derived, writable} from 'svelte/store';

export const length = writable(144);
export const lowerCases = writable('abcdefghijklmnopqrstuvwxyz');
export const upperCases = writable('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
export const numbers = writable('0123456789');
export const specials = writable('!#$%&()*+,-./:;=?@[\]^_{|}~');
export const characters = derived(
    [lowerCases, upperCases, numbers, specials],
    ([$lowerCases, $upperCases, $numbers, $specials]) => $lowerCases + $upperCases + $numbers + $specials
)

