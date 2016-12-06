import {BaseLogger} from './base-logger';
import {Logger} from './logger';
import {Level} from './level';

export class ConsoleLogger extends BaseLogger implements Logger {
    constructor(protected level: Level) {
        super(level);
    }

    debug(message: string) {
        this.isDebugEnabled() && console.debug(message);
    }

    info(message: string) {
        this.isInfoEnabled() && console.info(message);
    }

    warn(message: string) {
        this.isWarnEnabled() && console.warn(message);
    }

    error(message: string) {
        this.isErrorEnabled() && console.error(message);
    }
}