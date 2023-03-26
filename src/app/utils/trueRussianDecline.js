export function trueRussianDecline(isBirthYear) {
    const age = new Date().getFullYear() - isBirthYear;
    switch (age % 100) {
        case 11: case 12: case 13: case 14:return `${age} лет`;
        default:
            switch (age % 10) {
                case 0:case 5:case 6:case 7:case 8:case 9:return `${age} лет`;
                case 1: return `${age} год`;
                case 2:case 3:case 4: return `${age} года`;
            }
    }
}
