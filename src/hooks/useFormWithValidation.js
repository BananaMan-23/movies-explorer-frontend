import { useCallback, useEffect, useState } from 'react';

const useFormWithValidation = (initialValues, validationRules) => {
    const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        const validationRuleList = validationRules[name];
        let customError = '';

        if (validationRuleList) {
            for (const validationRule of validationRuleList) {
                const regex = new RegExp(validationRule.regex);
                const isValidValue = regex.test(value);
                if (!isValidValue) {
                    customError = validationRule.message;
                    break;
                }
            }
        }

        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: customError });
        setIsValid(target.closest("form").checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    useEffect(() => {
        if (initialValues) {
            setValues(initialValues);
        }
    }, []);

    return { values, handleChange, errors, isValid, resetForm };
};

export default useFormWithValidation;