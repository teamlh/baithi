import firebase from './../firebase'

const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            }

        case 'DELETE':
            firebase.ref('danhsach/' + action.id).remove()
            return {
                ...state
            }

        case 'GET_ADMIN_SUCCESS':
            return {
                ...state,
                user: action.user
            }

        case 'GET_ADMIN_FAIL':
            console.log('admin fail')
            return {
                ...state,
            }

        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }

        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }

        default:
            return state
    }
};

export default authReducer;