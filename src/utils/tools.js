export const listErrors = (err) => {
    let errors = {};

    if (err.errors) {
        Object.keys(err.errors).map((key) => {
            errors = { ...errors, [key]: err.errors[key].message };
        });
    } else {
        err.code === 11000 &&
            Object.keys(err.keyPattern).map((key) => {
                errors = { ...errors, [key]: `The ${key} already exist.` };
            });
    }

    return errors;
};
