export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */

    let string = '';

    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'I':
                string += '1 ';
                break;
            case 'V':
                string += '5 ';
                break;
            case 'X':
                string += '10 ';
                break;
            case 'L':
                string += '50 ';
                break;
            case 'C':
                string += '100 ';
                break;
            case 'D':
                string += '500 ';
                break;
            case 'M':
                string += '1000 ';
                break;
        }
    }

    let numbers = string.trim().split(' ');

    for (let i = 0; i < numbers.length; ++i) {
        if (Number(numbers[i]) < Number(numbers[i + 1])) {
            result -= Number(numbers[i]);
        } else {
            result += Number(numbers[i]);
        }
    }
    return result;
}
