const ioHook = require('iohook')
var robot = require("robotjs")

const screenSize = robot.getScreenSize()

ioHook.on('keydown', evt => {
    let key = String.fromCharCode(evt.rawcode)
    if (key === 'L') {
        console.log('go')
        let mousePos = robot.getMousePos()

        robot.moveMouse(screenSize.width - 150, screenSize.height - 380)
        robot.mouseClick('left', false)
        robot.keyTap('e')

        robot.moveMouse(mousePos.x, mousePos.y)
    }
})

ioHook.start()