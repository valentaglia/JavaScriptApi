module.exports = {
    keyIsEmpty(value) {
        if (value.length === 0) {
            throw new Error("KEY CAN NOT BE EMPTY");
        }
    },

    keyTooLong(value) {
        if (value.length > 10) {
            throw new Error("KEY TEXT IS TOO LONG");
        }
    },

    textIsEmpty(value) {
        if (value.length === 0) {
            throw new Error("TEXT CAN NOT BE EMPTY");
        }
    },

    textTooLong(value) {
        if (value.length > 144) {
            throw new Error("TEXT IS TOO LONG");
        }
    },

    sendDateIsEmpty(value) {
        if (value != null && value.length === 0) {
            throw new Error("SEND DATE CAN NOT BE EMPTY");
        }
    },

    readDateIsEmpty(value) {
        if (value != null && value.length === 0) {
            throw new Error("READ DATE CAN NOT BE EMPTY");
        }
    },

    compareDates(earlierDate, furtherDate) {
        let result = furtherDate - earlierDate;
        if (result < 0) {
            throw new Error("READ DATE CAN NOT BE PREVIOUS THAN SEND DATE");
        }
    }
}