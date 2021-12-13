import {SentinelOptions} from "./sentinel.options";

export interface ClientOptions {
    url?: string;
    host?: string;
    port?: number;
    db?: number;
    password?: string;
    sentinels? : SentinelOptions[];
}
