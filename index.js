const ioHook = require('iohook')
var robot = require("robotjs")

const screenSize = robot.getScreenSize()
robot.setKeyboardDelay(0)

let spell = null;
let champIconPos = null;
ioHook.on('keydown', evt => {

    let key = String.fromCharCode(evt.rawcode)
    if (['A', 'Z', 'E', 'R'].includes(key)) {
        spell = key.toLowerCase()
    }

    switch (key) {
        case 'a':
            champIconPos = {x: screenSize.width - 150, y: screenSize.height - 380}
            break
    }

    if (spell !== null && champIconPos !== null) {
        console.log('go')
        let mousePos = robot.getMousePos()

        robot.moveMouse(champIconPos.x, champIconPos.y)
        robot.keyTap(spell)

        robot.moveMouse(mousePos.x, mousePos.y)

        spell = null;
        champIconPos = null;
    }

})

ioHook.start()