const res = {
    mainMenuFont: "res/fonts/armalite_rifle.ttf",
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
    water: { type: "png", src: "res/water.png"},
    water_boat: { type: "png", src: "res/water_boat.png"},
    water_falled: { type: "png", src: "res/water_falled.png"},
    water_hitted: { type: "png", src: "res/water_hitted.png"},
    fire: { type: "png", src: "res/fire.png"},
    fallSound: { type: "wav", src: "res/sounds/watersplash2.wav"},
    hitSound: { type: "wav", src: "res/sounds/DeathFlash.wav"},
    audioIcon: { type: "png", src: "res/sound_icon.png"},
    audioDisableIcon: { type: "png", src: "res/sound_disable_icon.png"}
};

const g_resources = [];
for (let i in res) {
    g_resources.push(res[i]);
}

