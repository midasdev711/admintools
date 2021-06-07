import fb from '../firebase/init';

export default {
  // register with email and password
  register(payload: any) {
    return fb.auth.createUserWithEmailAndPassword( payload.email, payload.password )
    .then((res: any) => {
      return res;
    }).catch((err: any) => {
      throw err
    })
  },

  login(user: any) {
    // signin with email and password
    return fb.auth
      .signInWithEmailAndPassword(
        user.email,
        user.password
      )
      .then((data: any) => {
        return data;
      })
      .catch((err: any) => {
        throw err;
      })
  },

  logout() {
    //sign current user out
    return fb.auth
      .signOut()
      .then(() => {
        return true;
      })
      .catch((err: any) => {
        throw err;
      });
  },

  sendVerificationEmail() {
    if (fb.auth.currentUser){
      return fb.auth.currentUser.sendEmailVerification();
    } 
  }
}
