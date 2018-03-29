import { compose, lifecycle, withHandlers, branch, withState, renderComponent } from 'recompose';
import { CriticalError } from '../component';

export default compose(
  withState('state', 'setState', {}),
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
    goTo: () => () => false,
  }),
);