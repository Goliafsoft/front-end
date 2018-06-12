import authSelector from 'reducer/auth/selector';

import sideBarSelector from 'reducer/sideBar/selector';

export default function (state) {
  return {
    isSideBarOpen: sideBarSelector.isSideBarOpen(state),
    isAuthorise: authSelector.isAuthorise(state),
    initials: authSelector.getInitials(state),
  };
}
