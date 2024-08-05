import { initBiometryManager } from '@telegram-apps/sdk-react';
import { Button, List } from '@telegram-apps/telegram-ui';
import { useCallback, useEffect, useState } from 'react';

export const BiometryManagerView = () => {
  const [biometryManager] = initBiometryManager();
  const [token, setToken] = useState('');

  const authenticatingHandler = useCallback(async () => {
    try {
      const bm = await biometryManager;
      console.log(bm);
      bm.authenticate({ reason: 'Authorize to unlock the storage' })
        .then((token) => {
          console.log('Token received', token);
          setToken(`${token}`);
        })
        .finally(() => {
          console.log('Finally');
        });
    } catch (error) {
      console.log('Error', error);
    }
  }, [biometryManager]);

  const openSettingHandler = useCallback(async () => {
    const bm = await biometryManager;
    bm.openSettings();
  }, [biometryManager]);

  const requestAccessHandler = useCallback(async () => {
    const bm = await biometryManager;
    bm.requestAccess({ reason: 'Authorize to start using biometry' }).then(
      (accessGranted) => {
        console.log('Access granted', accessGranted);
      }
    );
  }, [biometryManager]);

  const updateTokenHandler = useCallback(async () => {
    const bm = await biometryManager;
    bm.updateToken({ token: 'My token' }).then((status) => {
      console.log('Token updated', status);
    });
  }, [biometryManager]);

  const defaultBmChangeHandler = useCallback(async () => {
    const bm = await biometryManager;

    bm.on('change:accessGranted', (state) => {
      console.log('change:accessGranted', state);
    });

    bm.on('change:accessRequested', (state) => {
      console.log('change:accessRequested', state);
    });

    bm.on('change:available', (state) => {
      console.log('change:available', state);
    });

    bm.on('change:deviceId', (state) => {
      console.log('change:deviceId', state);
    });

    bm.on('change:tokenSaved', (state) => {
      console.log('change:tokenSaved', state);
    });

    bm.on('change:token', (state) => {
      console.log('change:token', state);
    });

    bm.on('change:biometryType', (state) => {
      console.log('change:biometryType', state);
    });
  }, [biometryManager]);

  useEffect(() => {
    defaultBmChangeHandler();
  }, [defaultBmChangeHandler]);

  return (
    <List
      style={{
        background: 'var(--tgui--secondary_bg_color)',
        padding: '40px',
        width: 500,
      }}
    >
      <div>
        <span>{token}</span>
        <Button onClick={() => authenticatingHandler()}>Authenticating</Button>
      </div>
      <div>
        <Button onClick={() => openSettingHandler()}>Opening Settings</Button>
      </div>
      <div>
        <Button onClick={() => requestAccessHandler()}>
          Requesting Access
        </Button>
      </div>
      <div>
        <Button onClick={() => updateTokenHandler()}>updateToken</Button>
      </div>
    </List>
  );
};
