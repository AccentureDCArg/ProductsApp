export function newVersion() {
    return {
        type: 'CHANGE_VERSION'
    };
}

export function eraseVersion() {
    return {
        type: 'ERASE_VERSION'
    };
}