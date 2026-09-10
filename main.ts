/**
 *   @filename: HelloWorld.js
 *     @author: kenzieraine
 *       @date: 09-09-2026
 *      @brief: Animates HELLO WORLD on the led panel of a micro:bit.
 */

//letters, two digit number encodes (x,y)
let h_led = [
    10, 11, 12, 22, 13, 32, 14, 31, 33, 30, 34,
]
let e_led = [
    10, 20, 11, 30, 12, 22, 13, 14, 24, 34,
]
let l_led = [
    10, 11, 12, 13, 14, 24, 34,
]
let o_led = [
    10, 20, 11, 30, 12, 31, 13, 32, 14, 33, 24, 34,
]
let w_led = [
    0, 1, 2, 3, 14, 23, 22, 34, 43, 42, 41, 40,
]
let r_led = [
    10, 20, 11, 30, 12, 31, 13, 22, 14, 33, 44,
]
let d_led = [
    10, 20, 11, 30, 12, 41, 13, 42, 14, 43, 24, 34,
]

//array of letters
let letters = [h_led, e_led, l_led, l_led, o_led, w_led, o_led, r_led, l_led, d_led]

//coordinate initialize
let x_coordinate = 0
let y_coordinate = 0

function hello_world() {

    // Letter grabber
    for (let current_letter of letters) {

        // inner loop through each pip of the letter
        for (let value of current_letter) {
            x_coordinate = Math.floor(value / 10)
            y_coordinate = value % 10
            led.plot(x_coordinate, y_coordinate)
            basic.pause(50) //pause after each pip
        }

        // hold letter, then reset for next
        basic.pause(1000)
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.A, function () {
    hello_world()
})
