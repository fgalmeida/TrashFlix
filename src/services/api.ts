import axios, { AxiosError } from 'axios';
import { parseCookies } from 'nookies'
import { TMDB_URL } from '../../config';
import { signOut } from '../contexts/AuthContext';
import { AuthTokenError } from './errors/AuthTokenError';

export function setupApiClient(ctx = undefined) {
  const cookies = parseCookies(ctx)

  const api = axios.create({
    baseURL: `${TMDB_URL}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cookies['trashflix.auth.token']}`
    }
  })

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error: AxiosError) => {
      if (error.response.status === 401) {
        if (error.response.data?.code === 'token.expired') {
          if (process.browser) {
            signOut()
          } else {
            return Promise.reject(new AuthTokenError())
          }
        }
      }

      return Promise.reject(error)
    }
  )

  return api;
}
