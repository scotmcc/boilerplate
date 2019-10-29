/* globals describe test expect global jest */

import logger from '../logger'

describe('Logger', () => {
    test('logs a message', () => {
        const log = jest.spyOn(global.console, 'log');
        logger('test')
        expect(log).toHaveBeenCalledWith('test')
    })
})
