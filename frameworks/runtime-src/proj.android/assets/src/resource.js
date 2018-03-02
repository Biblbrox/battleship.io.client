const res = {
    HelloWorld_png : "res/HelloWorld.png",
    mainMenuFont: "res/armalite_rifle.ttf",
    battleShipField: "res/battleship.tmx"
};

const g_resources = [];
for (let i in res) {
    g_resources.push(res[i]);
}
