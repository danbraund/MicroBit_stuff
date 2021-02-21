input.onButtonPressed(Button.A, function () {
    images.iconImage(IconNames.Chessboard).showImage(0)
    control.waitMicros(360000)
})
basic.showIcon(IconNames.Umbrella)
basic.forever(function () {
    while (true) {
        if (50 > pins.analogReadPin(AnalogPin.P0)) {
            soundExpression.giggle.playUntilDone()
            led.plotBarGraph(
            pins.analogReadPin(AnalogPin.P0),
            100
            )
        }
        control.waitMicros(10000)
    }
})
