const BASE_URL = process.env.REACT_APP_BASE_URL

export const Services = {

    userLogin: async () => {
        await fetch(`${BASE_URL}/user/login`).then(res => res.json()
        ).then(data => {
            return data
        }).catch(err => {
            return err
        }
        )
    }
}