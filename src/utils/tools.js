export const listErrors = (err) => {
    let errors = {};

    if (err.errors) {
        Object.keys(err.errors).map((key) => {
            errors = { ...errors, [key]: err.errors[key].message };
        });
    }

    if (err.code === 11000) {
        Object.keys(err.keyPattern).map((key) => {
            errors = { ...errors, [key]: `The ${key} already exist.` };
        });
    }

    if (err.kind && err.kind === 'ObjectId') {
        errors = { ...errors, objectId: `The ObjectId is not valid` };
    }

    return errors;
};
