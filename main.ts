input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += -1
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += 1
    led.plot(x, y)
})

let x = 0
let y = 0
let pause2 = 400
let x2 = randint(0, 4)
let y2 = -1
y = 4
x = 2

basic.forever(function () {
    led.plot(x, y)
    x2 = randint(0, 4)
    led.plot(x2, y2)
    for (let index = 0; index < 6; index++) {
        led.unplot(x2, y2)
        basic.pause(100)
        y2 += 1
        led.plot(x2, y2)
        basic.pause(pause2)
        pause2 += -30
    }
})
