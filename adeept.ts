//% weight=100 color=#59b4f0 icon="\uf2d5"
namespace Adeept {
    
    let digitals = [
        [1, 1, 1, 1, 1, 1, 0, 1],   // 0
        [0, 1, 1, 0, 0, 0, 0, 1],   // 1
        [1, 1, 0, 1, 1, 0, 1, 1],   // 2
        [1, 1, 1, 1, 0, 0, 1, 1],   // 3
        [0, 1, 1, 0, 0, 1, 1, 1],   // 4
        [1, 0, 1, 1, 0, 1, 1, 1],   // 5
        [1, 0, 1, 1, 1, 1, 1, 1],   // 6
        [1, 1, 1, 0, 0, 0, 0, 1],   // 7
        [1, 1, 1, 1, 1, 1, 1, 1],   // 8
        [1, 1, 1, 1, 0, 1, 1, 1]    // 9
    ]
 

    //% subcategory="Digital Tude"
    //% block="show Number %value"
    //% value.min=0 value.max=9
    export function Show_digit(value: number) {
        pins.digitalWritePin(DigitalPin.P0, digitals[value][0])
        pins.digitalWritePin(DigitalPin.P1, digitals[value][1])
        pins.digitalWritePin(DigitalPin.P2, digitals[value][2])
        pins.digitalWritePin(DigitalPin.P8, digitals[value][3])
        pins.digitalWritePin(DigitalPin.P12, digitals[value][4])
        pins.digitalWritePin(DigitalPin.P13, digitals[value][5])
        pins.digitalWritePin(DigitalPin.P14, digitals[value][6])
        pins.digitalWritePin(DigitalPin.P15, digitals[value][7])
    }
    
}