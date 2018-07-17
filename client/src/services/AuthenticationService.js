import Api from '@/services/api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//     email:'',
//     password:''
// })
