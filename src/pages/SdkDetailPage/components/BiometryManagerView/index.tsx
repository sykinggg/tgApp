import { initBiometryManager } from '@telegram-apps/sdk-react';
import { Button } from '@telegram-apps/telegram-ui';
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
    <div className="flex flex-col gap-y-2">
      <div className="flex px-2 items-center py-4">
        <span>{token}</span>
        <Button onClick={() => authenticatingHandler()} className="grow">
          Authenticating
        </Button>
      </div>
      <div className="flex px-2 items-center py-4">
        <Button onClick={() => openSettingHandler()} className="grow">
          Opening Settings
        </Button>
      </div>
      <div className="flex px-2 items-center py-4">
        <Button onClick={() => requestAccessHandler()} className="grow">
          Requesting Access
        </Button>
      </div>
      <div className="flex px-2 items-center py-4">
        <Button onClick={() => updateTokenHandler()} className="grow">
          updateToken
        </Button>
      </div>
    </div>
  );
};
