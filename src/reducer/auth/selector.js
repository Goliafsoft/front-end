const getState = state => state.auth;

export default {
  isDone: state => getState(state).done,
  isAuthorise: state => getState(state).authorise,
  getInitials: (state) => {
    const authState = getState(state);
    return `${authState.name[0]}${authState.lastName[0]}`;
  },
};
