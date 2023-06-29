// Archivo: mentionValidator.js

module.exports = {
    messageNoEmpty(value) {
        if (value.length <= 0) {
            throw new Error('MESSAGE_IS_EMPTY');
        }
    },
    messageLength(value) {
        if (value.length > 100) {
            throw new Error('MESSAGE_TOO_LONG');
        }
    },
    messageIncludes(value) {
        if (!value.includes("@")) {
            throw new Error('MESSAGE_CONTAINS_NO_MENTION');
        }
    }
};
