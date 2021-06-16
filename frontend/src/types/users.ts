/* eslint-disable semi */
export default interface Users {
    token: string,
    refreshToken: string,
    user: {
        cart: Array<object>
        email: string,
        password: string,
        address: string,
        phone: number,
        name: string,
    }
}
