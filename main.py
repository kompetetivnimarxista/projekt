def on_button_pressed_a():
    led.unplot(x, 2)
    led.plot(x - 1, 2)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    led.unplot(x, 2)
    led.plot(x + 1, 2)
input.on_button_pressed(Button.B, on_button_pressed_b)

x = 0
x = 2
led.plot(x, 2)