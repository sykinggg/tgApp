import {
  initHapticFeedback,
  NotificationHapticFeedbackType,
} from '@telegram-apps/sdk-react';
import { Button, Section, Select } from '@telegram-apps/telegram-ui';
import { useState } from 'react';

export const HapticFeedbackView = () => {
  const hapticFeedback = initHapticFeedback();
  const [impactType, setImpactType] = useState('light');
  const [notificationType, setNotificationType] =
    useState<NotificationHapticFeedbackType>('success');
  return (
    <Section className="flex flex-col	gap-y-2">
      <div className="flex px-2 items-center">
        <div className="grow">
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
        </div>
        <Button
          onClick={async () => {
            console.log('hapticFeedback', hapticFeedback);
            hapticFeedback.impactOccurred('light');
          }}
        >
          impact
        </Button>
      </div>

      <div className="flex px-2 items-center">
        <div className="grow">
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
        </div>
        <Button
          onClick={async () => {
            console.log('hapticFeedback', hapticFeedback);
            hapticFeedback.notificationOccurred(notificationType);
          }}
        >
          notification
        </Button>
      </div>
      <div className="flex px-2 items-center py-4">
        <Button
          onClick={async () => {
            console.log('hapticFeedback', hapticFeedback);
            hapticFeedback.selectionChanged();
          }}
          className="grow"
        >
          selectionChanged
        </Button>
      </div>
    </Section>
  );
};
