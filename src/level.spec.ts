import {Level} from './level';

describe('Level', () => {
    it('all should be less than debug', () => {
        expect(Level.All).toBeLessThan(Level.Debug);
    });

    it('debug should be less than info', () => {
        expect(Level.Debug).toBeLessThan(Level.Info);
    });

    it('info should be less than warn', () => {
        expect(Level.Info).toBeLessThan(Level.Warn);
    });

    it('warn should be less than error', () => {
        expect(Level.Warn).toBeLessThan(Level.Error);
    });

    it('error should be less than none', () => {
        expect(Level.Error).toBeLessThan(Level.None);
    });
});