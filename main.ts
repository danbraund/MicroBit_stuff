let Moist1 = 0
basic.showIcon(IconNames.Umbrella)
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
basic.forever(function () {
    Moist1 = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(
    Moist1,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("  ")
        basic.showNumber(Moist1)
    }
    if (Moist1 >= 650) {
        basic.showIcon(IconNames.Umbrella)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        basic.showString("  ")
        basic.showNumber(Moist1)
    }
    if (input.buttonIsPressed(Button.B)) {
        music.setVolume(0)
    }
    basic.pause(5000)
})
