import produce from 'immer';

const INITIAL_STATE = {
  pofile: null,
};
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@auth/SIGNIN_SUCCESS':
      return produce(state, (draft) => {
        draft.profile = action.payload.user;
        draft.loading = false;
      });
    default:
      return state;
  }
};

export default user;
