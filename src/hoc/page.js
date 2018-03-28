import { compose, lifecycle, withHandlers } from 'recompose';

export default compose(
  lifecycle({
    shouldComponentUpdate: () => false,
  }),
  withHandlers({
    // todo implement change url function
    goTo: () => () => false,
  }),
);
