/* globals describe test expect */

import adder from '../adder'

describe('Adder', () => {
    test('adds two numbers', () => {
        expect(adder(5, 3)).toEqual(8)
    })
})
