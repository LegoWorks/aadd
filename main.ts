basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . # # # .
        . # . # .
        . . # . .
        `)
    if (36 == PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 32)
        neZha.setMotorSpeed(neZha.MotorList.M2, 0)
    } else if (36 == PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 0)
        neZha.setMotorSpeed(neZha.MotorList.M2, 32)
    } else {
        neZha.setMotorSpeed(neZha.MotorList.M1, 33)
        neZha.setMotorSpeed(neZha.MotorList.M1, 33)
    }
})
