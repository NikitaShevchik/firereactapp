export function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

export function isValidFullName(fullName) {
    return /\S{2,}/.test(fullName);
}

export function isValidPassword(password) {
    const withoutSpecialChars = /^[^-() /]*$/;
    const containsLetters = /^.*[a-zA-Z]+.*$/;
    const minimum8Chars = /^.{8,}$/;
    const minOneBigLetter = /^.*[A-Z]{1}.*$/;
    if (minimum8Chars.test(password)
        && withoutSpecialChars.test(password)
        && containsLetters.test(password)
        && minOneBigLetter.test(password)) {
        return true
    } else {
        return false
    }
}

export function isValidDay(day) {
    if (day > 0 && day <= 31) {
        return true
    } else {
        return false
    }
}

export function isValidYear(year) {
    if (year > 1900 && year <= 2010) {
        return true
    } else {
        return false
    }
}

export function mainValidator(email, fullName, password, day, year) {
    if (isValidEmail(email)
        && isValidFullName(fullName)
        && isValidPassword(password)
        && isValidDay(day)
        && isValidYear(year)) {
        return true
    } else {
        return false
    }
}
