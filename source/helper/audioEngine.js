let AudioEngine = {

    audioEngine: cc.audioEngine,
    soundEnabled: true,

    playEffect: function(url, loop) {
        if (this.soundEnabled) {
            this.audioEngine.playEffect(url, loop);
        }
    }
};

export default AudioEngine;
