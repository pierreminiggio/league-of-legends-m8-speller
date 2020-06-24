const ioHook = require('iohook')
var robot = require("robotjs")

const screenSize = robot.getScreenSize()

let spell = null;
ioHook.on('keydown', evt => {
    let key = String.fromCharCode(evt.rawcode)
    if (['A', 'Z', 'E', 'R'].includes(key)) {
        spell = key.toLowerCase()
    }
    if (key === 'L') {
        console.log('go')
        let mousePos = robot.getMousePos()

        robot.moveMouse(screenSize.width - 150, screenSize.height - 380)
        robot.keyTap(spell)

        robot.moveMouse(mousePos.x, mousePos.y)
    }
})

ioHook.start()