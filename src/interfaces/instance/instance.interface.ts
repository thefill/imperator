/**
 * Basic instance interface
 */
export interface IInstance<Config = { [key: string]: any }> {
    // Has the instance been already initialised
    initialised: boolean;
    // Name of the instance - used e.g. for logging purposes
    name: string;

    /**
     * Initialise repository
     * @returns {Promise<void>}
     */
    init(...args: any): Promise<void>;

    /**
     * Apply config to the instance. If triggered after init requires
     * call to init method again.
     * @param {Config} config
     */
    applyConfig(config?: Config): void;
}
