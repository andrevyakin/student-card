export function validator(data, config) {
    const errors = {};
    function validate(validateMethod, data, config) {
        let statusValidate;
        switch (validateMethod) {
            case 'isRequired':
                statusValidate = String(data).trim() === '';
                break;
            case 'isBirthYear':
                statusValidate = data > new Date().getFullYear() || new Date().getFullYear() - data > 100;
                break;
            case 'isUrl': {
                const urlRegExp = /^https?:\/\/\S+$/;
                statusValidate = !urlRegExp.test(data);
                break;
            }
            default:
                break;
        }
        if (statusValidate) return config.message;
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
}
