import { compose, lifecycle, withHandlers, branch, withState, renderComponent } from 'recompose';
import CriticalError from 'component/CriticalError';
import { withRouter } from 'react-router-dom';

export default compose(
  withRouter,
  withState('state', 'setState', { hasError: false }),
  lifecycle({
    shouldComponentUpdate: ({ state }) => state.hasError,
    componentDidCatch() {
      const { setState } = this.props;
      setState({ hasError: true });
    },
  }),
  branch(
    ({ state }) => state.hasError,
    renderComponent(CriticalError),
  ),
  withHandlers({
    // todo implement change url function
    goTo: () => () => true,
  }),
);
