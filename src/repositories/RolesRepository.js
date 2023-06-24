class RoleRepository {
    all() {
        return [
            {name: "HOST"},
            {name: "CO-HOST"},
            {name: "GUEST"},
        ]
    }

    save() {}

    findById(id) {
        if (isNaN(id)) {
            throw new Error('Invalid argument')
        }

        return {name: "HOST"}
    }
}

module.exports = RoleRepository
