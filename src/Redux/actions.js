export const increment = () => ({
    type: 'INCREMENT'
})

export const decrement = () => ({
    type: 'DECREMENT'
})


export const setName = name => ({
    type: 'SET_NAME',
    name
})