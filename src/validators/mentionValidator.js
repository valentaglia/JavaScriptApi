module.exports = {

    messageNoEmpty(value) {
        if (value.length === 0) {
            throw new Error('NAME_IS_EMPTY')
        }
    },
    messageLength(value) {
        if (value.length > 100) {
            throw new Error('NAME_TOO_LONG')
        }
    },
    messageIncludes(value) {
        if (!value.includes("@")) {
            throw new Error('NAME_CONTAINS_NO_MENTION');
        }

    }
};

