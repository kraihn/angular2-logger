import {Level} from './level';
import {ConsoleLogger} from './console-logger.service';

describe('ConsoleLogger', () => {
    let logger;

    beforeEach(() => {
        spyOn(console, 'debug');
        spyOn(console, 'info');
        spyOn(console, 'warn');
        spyOn(console, 'error');
    });

    describe('level all', () => {
        beforeEach(() => {
            logger = new ConsoleLogger(Level.All);
        });

        it('should call console.debug', () => {
            logger.debug();
            expect(console.debug).toHaveBeenCalled();
        });

        it('should call console.info', () => {
            logger.info();
            expect(console.info).toHaveBeenCalled();
        });

        it('should call console.warn', () => {
            logger.warn();
            expect(console.warn).toHaveBeenCalled();
        });

        it('should call console.error', () => {
            logger.error();
            expect(console.error).toHaveBeenCalled();
        });
    });

    describe('level debug', () => {
        beforeEach(() => {
            logger = new ConsoleLogger(Level.Debug);
        });

        it('should call console.debug', () => {
            logger.debug();
            expect(console.debug).toHaveBeenCalled();
        });

        it('should call console.info', () => {
            logger.info();
            expect(console.info).toHaveBeenCalled();
        });

        it('should call console.warn', () => {
            logger.warn();
            expect(console.warn).toHaveBeenCalled();
        });

        it('should call console.error', () => {
            logger.error();
            expect(console.error).toHaveBeenCalled();
        });
    });

    describe('level info', () => {
        beforeEach(() => {
            logger = new ConsoleLogger(Level.Info);
        });

        it('should not call console.debug', () => {
            logger.debug();
            expect(console.debug).not.toHaveBeenCalled();
        });

        it('should call console.info', () => {
            logger.info();
            expect(console.info).toHaveBeenCalled();
        });

        it('should call console.warn', () => {
            logger.warn();
            expect(console.warn).toHaveBeenCalled();
        });

        it('should call console.error', () => {
            logger.error();
            expect(console.error).toHaveBeenCalled();
        });
    });

    describe('level warn', () => {
        beforeEach(() => {
            logger = new ConsoleLogger(Level.Warn);
        });

        it('should not call console.debug', () => {
            logger.debug();
            expect(console.debug).not.toHaveBeenCalled();
        });

        it('should not call console.info', () => {
            logger.info();
            expect(console.info).not.toHaveBeenCalled();
        });

        it('should call console.warn', () => {
            logger.warn();
            expect(console.warn).toHaveBeenCalled();
        });

        it('should call console.error', () => {
            logger.error();
            expect(console.error).toHaveBeenCalled();
        });
    });

    describe('level error', () => {
        beforeEach(() => {
            logger = new ConsoleLogger(Level.Error);
        });

        it('should not call console.debug', () => {
            logger.debug();
            expect(console.debug).not.toHaveBeenCalled();
        });

        it('should not call console.info', () => {
            logger.info();
            expect(console.info).not.toHaveBeenCalled();
        });

        it('should not call console.warn', () => {
            logger.warn();
            expect(console.warn).not.toHaveBeenCalled();
        });

        it('should call console.error', () => {
            logger.error();
            expect(console.error).toHaveBeenCalled();
        });
    });

    describe('level none', () => {
        beforeEach(() => {
            logger = new ConsoleLogger(Level.None);
        });

        it('should not call console.debug', () => {
            logger.debug();
            expect(console.debug).not.toHaveBeenCalled();
        });

        it('should not call console.info', () => {
            logger.info();
            expect(console.info).not.toHaveBeenCalled();
        });

        it('should not call console.warn', () => {
            logger.warn();
            expect(console.warn).not.toHaveBeenCalled();
        });

        it('should not call console.error', () => {
            logger.error();
            expect(console.error).not.toHaveBeenCalled();
        });
    });
});
