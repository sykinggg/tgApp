import { initBackButton } from '@telegram-apps/sdk-react';
import { SegmentedControl } from '@telegram-apps/telegram-ui';
import { useEffect, useState } from 'react';

const { Item: SegmentedControlItem } = SegmentedControl;

export const BackButtonView = () => {
  const [backButton] = initBackButton();
  const [backButtonVisible, setBackButtonVisible] = useState(true);
  const changeVisibleHandler = (state: boolean) => {
    console.log('isVisible', state);
    setBackButtonVisible(state);
    // do something
  };
  useEffect(() => {
    backButton.on('change:isVisible', changeVisibleHandler);
    return () => {
      backButton.off('change:isVisible', changeVisibleHandler);
    };
  }, [backButton]);
  return (
    <SegmentedControl>
      <SegmentedControlItem
        onClick={() => {
          backButton.show();
        }}
        selected={backButtonVisible}
      >
        show
      </SegmentedControlItem>
      <SegmentedControlItem
        onClick={() => {
          backButton.hide();
        }}
        selected={!backButtonVisible}
      >
        hide
      </SegmentedControlItem>
    </SegmentedControl>
  );
};
