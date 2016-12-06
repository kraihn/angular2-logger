import {BaseLogger} from './base-logger';
import {Level} from './level';

describe('BaseLogger', () => {
    let logger: BaseLogger;

    describe('level all', () => {
        beforeEach(() => {
            logger = new BaseLogger(Level.All);
        });

        it('validate', () => {
            expect(logger.isDebugEnabled()).toBeTruthy();
            expect(logger.isInfoEnabled()).toBeTruthy();
            expect(logger.isWarnEnabled()).toBeTruthy();
            expect(logger.isErrorEnabled()).toBeTruthy();
        });
    });

    describe('level debug', () => {
        beforeEach(() => {
            logger = new BaseLogger(Level.Debug);
        });

        it('validate', () => {
            expect(logger.isDebugEnabled()).toBeTruthy();
            expect(logger.isInfoEnabled()).toBeTruthy();
            expect(logger.isWarnEnabled()).toBeTruthy();
            expect(logger.isErrorEnabled()).toBeTruthy();
        });
    });

    describe('level info', () => {
        beforeEach(() => {
            logger = new BaseLogger(Level.Info);
        });

        it('validate', () => {
            expect(logger.isDebugEnabled()).toBeFalsy();
            expect(logger.isInfoEnabled()).toBeTruthy();
            expect(logger.isWarnEnabled()).toBeTruthy();
            expect(logger.isErrorEnabled()).toBeTruthy();
        });
    });

    describe('level warn', () => {
        beforeEach(() => {
            logger = new BaseLogger(Level.Warn);
        });

        it('validate', () => {
            expect(logger.isDebugEnabled()).toBeFalsy();
            expect(logger.isInfoEnabled()).toBeFalsy();
            expect(logger.isWarnEnabled()).toBeTruthy();
            expect(logger.isErrorEnabled()).toBeTruthy();
        });
    });

    describe('level error', () => {
        beforeEach(() => {
            logger = new BaseLogger(Level.Error);
        });

        it('validate', () => {
            expect(logger.isDebugEnabled()).toBeFalsy();
            expect(logger.isInfoEnabled()).toBeFalsy();
            expect(logger.isWarnEnabled()).toBeFalsy();
            expect(logger.isErrorEnabled()).toBeTruthy();
        });
    });

    describe('level none', () => {
        beforeEach(() => {
            logger = new BaseLogger(Level.None);
        });

        it('validate', () => {
            expect(logger.isDebugEnabled()).toBeFalsy();
            expect(logger.isInfoEnabled()).toBeFalsy();
            expect(logger.isWarnEnabled()).toBeFalsy();
            expect(logger.isErrorEnabled()).toBeFalsy();
        });
    });
});
