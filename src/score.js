
const Score = {
    _instance: null,

    get instance() {
        if (!this._instance) {
            this._instance = {
                hits:  0,
                misses:  0,
                result: "",
            };
        }

        return this._instance;
    }
};
