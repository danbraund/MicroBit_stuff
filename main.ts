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
        basic.showNumber(Moist1)
    }
    if (Moist1 < 500) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Umbrella)
        basic.pause(5000)
    }
    basic.pause(1000)
})
