export const login = credentials => {
    return new Promise((res, rej) => {
        const {username, password} = credentials;

        if (username === 'admin' && password === 'admin') {
            const user = {
                username, 
                token: '123abc'
            }
            localStorage.setItem('user', JSON.stringify(user))
            res(user)
        } else {
            rej({
                msg: 'Username and/or password are incorrect. Try again'
            })
        }
    })
}

export const logout = () => {
    localStorage.removeItem('user')
}

export const checkUser = () => {
    return JSON.parse(localStorage.getItem('user'))
}