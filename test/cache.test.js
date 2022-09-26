import {Cache} from "../src/cache";

let cache = new Cache();

test('it fails', () => {
    expect(false).toBe(true);
});

test('Cache add', () => {
	expect(cache.test()).toBe(true);
});
