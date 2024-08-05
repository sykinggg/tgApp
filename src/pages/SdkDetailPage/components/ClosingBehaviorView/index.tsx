import { initBackButton, initClosingBehavior } from '@telegram-apps/sdk-react';
import { List, SegmentedControl } from '@telegram-apps/telegram-ui';
import { useEffect, useState } from 'react';

const { Item: SegmentedControlItem } = SegmentedControl;

export const ClosingBehaviorView = () => {
  const [closingBehavior] = initClosingBehavior();
  const [backButton] = initBackButton();
  const [closingBehaviorVisible, setClosingBehaviorVisible] = useState(true);

  useEffect(() => {
    backButton.hide();
  }, [backButton]);

  const changeConfirmationHandler = (state: boolean) => {
    console.log('closingBehavior.isConfirmationNeeded', state);
    setClosingBehaviorVisible(state);
  };

  useEffect(() => {
    closingBehavior.on(
      'change:isConfirmationNeeded',
      changeConfirmationHandler
    );
    return () => {
      closingBehavior.off(
        'change:isConfirmationNeeded',
        changeConfirmationHandler
      );
    };
  }, [closingBehavior]);

  return (
    <List
      style={{
        background: 'var(--tgui--secondary_bg_color)',
        padding: '40px',
        width: 500,
      }}
    >
      <SegmentedControl>
        <SegmentedControlItem
          onClick={() => {
            closingBehavior.enableConfirmation();
            console.log('enableConfirmation');
          }}
          selected={closingBehaviorVisible}
        >
          enableConfirmation
        </SegmentedControlItem>
        <SegmentedControlItem
          onClick={() => {
            closingBehavior.disableConfirmation();
            console.log('disableConfirmation');
          }}
          selected={!closingBehaviorVisible}
        >
          disableConfirmation
        </SegmentedControlItem>
      </SegmentedControl>
    </List>
  );
};
