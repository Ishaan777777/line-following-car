input.onButtonPressed(Button.A, function () {
    if (pins.analogReadPin(AnalogPin.P0) <= LCal - 30) {
        MotorDriver.MotorRun(Motor.Left, Dir.backward, 16)
        MotorDriver.MotorRun(Motor.Right, Dir.forward, 10)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 75)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 25)
        basic.pause(50)
    } else if (pins.analogReadPin(AnalogPin.P2) <= RCal - 30) {
        MotorDriver.MotorRun(Motor.Right, Dir.backward, 16)
        MotorDriver.MotorRun(Motor.Left, Dir.backward, 16)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 75)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 25)
        basic.pause(50)
    } else {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 40)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 40)
    }
})
let RCal = 0
let LCal = 0
LCal = pins.analogReadPin(AnalogPin.P0)
RCal = pins.analogReadPin(AnalogPin.P2)
