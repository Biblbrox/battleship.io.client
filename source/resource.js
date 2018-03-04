const res = {
    battleShipField: { type: "tmx", src: "res/battleship.tmx"},
    backgroundSprite: { type: "jpg", src: "res/backgrounds/mainBackground.jpg"},
    backgroundOnWin: { type: "jpg", src: "res/backgrounds/on_win.jpg"},
    backgroundOnLost: { type: "jpg", src: "res/backgrounds/on_lost.jpg"},
    GameFont: {
        type:"font",
        name:"GameFont",
        srcs:["res/fonts/8-BIT_WONDER.ttf", "res/fonts/8-BIT_WONDER.ttf"]
    },
    battleship_4: { type: "png", src: "res/battleship_4.png"},
    fallSound: { type: "wav", src: "res/sounds/watersplash2.wav"},
    hitSound: { type: "wav", src: "res/sounds/DeathFlash.wav"},
    audioIcon: { type: "png", src: "res/sound_icon.png"},
    audioDisableIcon: { type: "png", src: "res/sound_disable_icon.png"}
};

export default res;
