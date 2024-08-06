import { initMiniApp } from '@telegram-apps/sdk-react';
import { Button } from '@telegram-apps/telegram-ui';

export const MiniAppView = () => {
  const [miniApp] = initMiniApp();
  return (
    <div className="flex flex-col gap-y-2 px-2 pt-3">
      <Button
        onClick={() => {
          miniApp.setHeaderColor('secondary_bg_color');
        }}
      >
        Set secondary_bg_color
      </Button>
      <Button
        onClick={() => {
          miniApp.setHeaderColor('#aa1132');
        }}
      >
        Set #aa1132
      </Button>
      <Button></Button>
    </div>
  );
};
