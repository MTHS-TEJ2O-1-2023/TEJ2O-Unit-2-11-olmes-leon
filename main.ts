/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Olmes
 * Created on: Oct 2023
 * This program chooses two numbers and tells which one is greater or less then
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variable
let number1: number = randint(0, 99)
let number2: number = randint(0, 99)

// random number
number1 = randint(0, 99)
number2 = randint(0, 99)

// 1th number
input.onButtonPressed(Button.A, function () {
    basic.showString('#')
    basic.showNumber(number1)
})

// 2th number
input.onButtonPressed(Button.B, function () {
    basic.showString('#')
    basic.showNumber(number2)
})

// when Shake show number1 < number2
input.onGesture(Gesture.Shake, function () {
    if (number1 < number2) {
        basic.showNumber(number1)
        basic.showString('<')
        basic.showNumber(number2)
        basic.showIcon(IconNames.Happy)

        // on Shake show number1 > number2
    } else {
        basic.showNumber(number1)
        basic.showString('>')
        basic.showNumber(number2)
        basic.showIcon(IconNames.Sad)
    }
})
