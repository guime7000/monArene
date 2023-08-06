// import { describe, expect, test } from '@jest/globals';
import { createLink } from '../../ll-create-link/index';

// const arrLength = require('./arrLength');

describe('createLinkhmodule', () => {

    it('data = 0', () => {
        const output = createLink(0)
        expect(output?.data).toBe(0);
        expect(output?.next).toBe(null);
    });

    it('data = "bla"', () => {
        const output = createLink("bla")
        expect(output?.data).toBe("bla");
        expect(output?.next).toBe(null);
    });

    it('data = {hello: true}', () => {
        const output = createLink({ hello: true })
        expect(output?.data).toStrictEqual({ hello: true });
        expect(output?.next).toBe(null);
    });

});