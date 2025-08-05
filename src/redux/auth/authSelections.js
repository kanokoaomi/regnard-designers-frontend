export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const isLoading = (state) => state.auth.isLoading;
export const selectIsUserAdmin = (state) => state.auth.userData.isAdmin;