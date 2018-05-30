import authSelector from 'reducer/auth/selector';

export default function (state) {
  return {
    isAuthDone: authSelector.isDone(state),
    isAuthorise: authSelector.isAuthorise(state),
    initials: authSelector.getInitials(state),
  };
}
