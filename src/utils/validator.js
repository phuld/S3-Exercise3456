const isSpecialCharacter = (value) => {
    const regex = /[!@#$%^&*()_+\-={};':"\\|,.<>?]+/;
    return regex.test(value)
}

export const checkValidation = (value, rules, compare) => {
    let isValid = true;
    let message = '';
    if (rules.required && value.trim() === '') {
        isValid = false;
        message = "Input field is required"
    }
    else if (rules.noSpecialCharacter && isSpecialCharacter(value)) {
        isValid = false;
        message = "Dont use special character in a username"
    }
    else if(rules.minLength && value.length < rules.minLength) {
        isValid = false;
        message = "Password at least 6 characters"
    }
    else if(rules.maxLength && value.length > rules.maxLength) {
        isValid = false;
        message = "Password maximum 25 characters"
    }
    else if(rules.comparePassword && value !== compare) {
        isValid = false;
        message = "Password must match"
    }
    return {
        isValid,
        message
    }
}