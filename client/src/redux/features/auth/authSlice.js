import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from '../../../utils/axios'

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null
}

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async({ email, username, password }) => {
        try {
            const { data } = await axios.post('/auth/register', {
                email,
                username,
                password
            })

            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }

            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.isLoading = false
            state.status = null
        }
    },
    extraReducers: {
        // Register User
        [registerUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [registerUser.fulfilled]: (state, action) => {
            if (action.payload) {
                state.isLoading = false
                state.status = action.payload.message
                state.user = action.payload.user
                state.token = action.payload.token
            } else {
                state.isLoading = false
                state.status = 'Такой пользователь уже существует'
            }
        },
        [registerUser.rejected]: (state, action) => {
            if (action.payload) {
                state.status = action.payload.message
            } else {
                state.status = 'Такой пользователь уже существует'
            }
            state.isLoading = false
        },
    }
})

export const checkIsAuth = state => Boolean(state.auth.token)

export const { logout } = authSlice.actions
export default authSlice.reducer