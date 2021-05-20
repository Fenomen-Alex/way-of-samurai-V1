export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

export const required = value => {
    if (value) return undefined;

    return 'Required'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength)
        return `Max length is ${maxLength} symbols`;
    return undefined;
}

