import {Level} from './level';

export class BaseLogger {
    constructor(protected level: Level = Level.Info) {
    }

    public isDebugEnabled() {
        return this.level <= Level.Debug;
    }

    public isInfoEnabled() {
        return this.level <= Level.Info;
    }

    public isWarnEnabled() {
        return this.level <= Level.Warn;
    }

    public isErrorEnabled() {
        return this.level <= Level.Error;
    }
}