import tabSelector from 'reducer/tab/selector';

export default function (state) {
  return {
    tabs: tabSelector.getTabs(state),
    nextTab: tabSelector.getNextTab(state),
  };
}
