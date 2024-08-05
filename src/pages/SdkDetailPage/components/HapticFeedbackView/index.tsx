import {
  initHapticFeedback,
  NotificationHapticFeedbackType,
} from '@telegram-apps/sdk-react';
import { Button, List, Select } from '@telegram-apps/telegram-ui';
import { useState } from 'react';

export const HapticFeedbackView = () => {
  const hapticFeedback = initHapticFeedback();
  const [impactType, setImpactType] = useState('light');
  const [notificationType, setNotificationType] =
    useState<NotificationHapticFeedbackType>('success');
  return (
    <List
      style={{
        background: 'var(--tgui--secondary_bg_color)',
        padding: '40px',
        width: 500,
      }}
    >
      <div>
        <Select
          header="Select"
          value={impactType}
          onChange={(e) => setImpactType(e.target.value)}
        >
          {['light', 'medium', 'heavy', 'rigid', 'soft'].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Button
          onClick={async () => {
            console.log('hapticFeedback', hapticFeedback);
            hapticFeedback.impactOccurred('light');
          }}
        >
          impact
        </Button>
      </div>
      <div>
        <Select
          header="Select"
          value={notificationType}
          onChange={(e) =>
            setNotificationType(
              e.target.value as NotificationHapticFeedbackType
            )
          }
        >
          {['error', 'success', 'warning'].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Button
          onClick={async () => {
            console.log('hapticFeedback', hapticFeedback);
            hapticFeedback.notificationOccurred(notificationType);
          }}
        >
          notification
        </Button>
      </div>
      <div>
        <Button
          onClick={async () => {
            console.log('hapticFeedback', hapticFeedback);
            hapticFeedback.selectionChanged();
          }}
        >
          selectionChanged
        </Button>
      </div>
    </List>
  );
};
