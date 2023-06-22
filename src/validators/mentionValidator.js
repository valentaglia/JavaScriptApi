module.exports = {

    naeNoEmpty(value) {
        if (value.length === 0) {
            throw new Error('NAME_IS_EMPTY')
        }
    },
    nameLength(value) {
        if (value.length > 100) {
            throw new Error('NAME_TOO_LONG')
        }
    },
    nameIncludes(value) {
        if (!value.includes("@")) {
            throw new Error('NAME_CONTAINS_NO_MENTION');
        }

    }
};

