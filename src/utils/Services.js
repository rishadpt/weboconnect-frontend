const BASE_URL = process.env.REACT_APP_BASE_URL

export const weboServices = {

    userLogin: (data) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: data.Email,
                    password: data.Password
                })
            }).then(res => res.json())
                .then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                }
                )
        }
        )
    },

    getUser: (data) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}user/${data}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
                    }
                }).then(res => res.json())
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                }
                )
        }
        )

    },

    userSignup: (data) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}user/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: data.Email,
                    name: data.Name,
                    phone: data.Mobile,
                    gender: data.gender.join(''),
                    password: data.Password
                })
            }).then(res => res.json())
                .then(data => {
                    resolve(data)
                }
                ).catch(err => {
                    reject(err)
                })
        })
    },

    editUser: (data, id) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}user/edit/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
                },
                body: JSON.stringify({
                    name: data.Name,
                    phone: data.phone,
                    email: data.email
                })
            }).then(res => res.json()).then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    },

    userDelete: (data) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}user/delete/${data}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
                    },

                }).then(res => res.json()).then(data => {
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
        })
    },

    changePassword: (data, id) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}user/changepassword/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
                },
                body: JSON.stringify({
                    oldPassword: data["current password"],
                    password: data["new password"]
                })
            }).then(res => res.json()).then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    },

    renewAccessToken: (data) => {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}user/renew`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
                },
                body: JSON.stringify({
                    refresh: data
                })
            }).then(res => res.json()).then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}