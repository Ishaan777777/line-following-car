input.onButtonPressed(Button.A, function () {
    if (pins.analogReadPin(AnalogPin.P0) <= Left - 30) {
        MotorDriver.MotorRun(Motor.Left, Dir.forward, 16)
        MotorDriver.MotorRun(Motor.Right, Dir.forward, 7)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 75)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 25)
        basic.pause(50)
    } else if (pins.analogReadPin(AnalogPin.P2) <= Right - 30) {
        MotorDriver.MotorRun(Motor.Right, Dir.forward, 16)
        MotorDriver.MotorRun(Motor.Left, Dir.forward, 7)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 75)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 25)
        basic.pause(50)
    } else {
        MotorDriver.MotorRun(Motor.Left, Dir.forward, 10)
        MotorDriver.MotorRun(Motor.Right, Dir.forward, 10)
    }
})
let Right = 0
let Left = 0
Left = pins.analogReadPin(AnalogPin.P0)
Right = pins.analogReadPin(AnalogPin.P2)
