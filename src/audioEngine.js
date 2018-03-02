class AudioEngine {

    constructor() {
        this.audioEngine = cc.audioEngine;
        this.soundEnabled = true;
    }


    playEffect(url, loop) {
        if (this.soundEnabled) {
            this.audioEngine.playEffect(url, loop);
        }
    }

}