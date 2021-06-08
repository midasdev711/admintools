import fb from '../firebase/init';

export default {
  // register with email and password
  register(payload: any) {
    return fb.auth.createUserWithEmailAndPassword( payload.email, payload.password );
  },

  login(user: any) {
    // signin with email and password
    return fb.auth
      .signInWithEmailAndPassword(
        user.email,
        user.password
      );
  },

  logout() {
    //sign current user out
    return fb.auth
      .signOut();
  },

  sendVerificationEmail() {
    if (fb.auth.currentUser){
      return fb.auth.currentUser.sendEmailVerification();
    } 
  },

  loadCurrentUser() {
    return fb.auth.onAuthStateChanged(user => {
      return user;
    })
  }
}
