// Type definitions for @loadable/webpack-plugin 5.7
// Project: https://github.com/smooth-code/loadable-components
// Definitions by: Spencer Miskoviak <https://github.com/skovy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import * as webpack from "webpack";

interface PluginOptions {
    /**
     * The stats filename.
     *
     * @default loadable-stats.json
     */
    filename?: string | undefined;

    /**
     * Always write stats file to disk.
     *
     * @default false
     */
    writeToDisk?: boolean | { filename: string } | undefined;

    /**
     * @default true
     */
    outputAsset?: boolean | undefined;
}

declare class LoadablePlugin extends webpack.Plugin {
    constructor(options?: PluginOptions);
}

export default LoadablePlugin;
