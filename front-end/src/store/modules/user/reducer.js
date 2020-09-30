import produce from 'immer';

const INITIAL_STATE = {
  pofile: null,
};
const user = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGNIN_SUCCESS': {
        draft.profile = action.payload.user;
        draft.loading = false;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }

      default:
    }
  });
};

export default user;
