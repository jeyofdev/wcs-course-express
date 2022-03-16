export interface IProcessEnv {
    PORT: string;
    MONGO_URI: string;
}

declare global {
    namespace NodeJs {
        export interface ProcessEnv extends IProcessEnv {
            NODE_ENV: 'development' | 'production';
        }
    }
}
