
export function toggleActive(state) {
    return {
        type: 'TOGGLE_ACTIVE',
        active: !state
    }
}