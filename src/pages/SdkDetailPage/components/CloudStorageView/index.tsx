import { initCloudStorage } from '@telegram-apps/sdk-react';
import { Button, Input, List, Multiselect } from '@telegram-apps/telegram-ui';
import { MultiselectOption } from '@telegram-apps/telegram-ui/dist/components/Form/Multiselect/types';
import { useCallback, useEffect, useState } from 'react';

export const CloudStorageView = () => {
  const cloudStorage = initCloudStorage();
  const [val, setVal] = useState('');
  const [key, setKey] = useState('');
  const [options, setOptions] = useState<MultiselectOption[]>([]);
  const [selected, setSelected] = useState<MultiselectOption[]>([]);
  const defaultKeyListHandler = useCallback(async () => {
    const keyList = await cloudStorage.getKeys();
    const _val = await cloudStorage.get(keyList);
    setOptions(
      Object.keys(_val).map((key) => ({
        label: `key: ${key}; value: ${_val[key]}`,
        value: _val[key],
        key: key,
      }))
    );
  }, [cloudStorage]);
  useEffect(() => {
    defaultKeyListHandler();
  }, []);
  return (
    <List
      style={{
        background: 'var(--tgui--secondary_bg_color)',
        padding: '40px',
        width: 500,
      }}
    >
      <div>
        <Input
          header="Input Value"
          placeholder="I am usual input, just leave me alone"
          onChange={(e) => setKey(e.target.value)}
          value={key}
        />
        <Input
          header="Input Value"
          placeholder="I am usual input, just leave me alone"
          onChange={(e) => setVal(e.target.value)}
          value={val}
        />
        <Button
          disabled={!key || !val}
          onClick={() => {
            cloudStorage.set(key, val);
            setVal('');
            setKey('');
            defaultKeyListHandler();
          }}
        >
          Upload File
        </Button>
      </div>

      <div>
        <Multiselect
          options={options}
          value={selected}
          onChange={(e) => setSelected(e)}
          // renderChip={(option) => {
          //   return <div>{`key:${option.children};value:${option.value}`}</div>;
          // }}
        />
        <Button
          onClick={() => {
            selected.forEach((item) => {
              cloudStorage.delete(`${item.label}`);
            });
            defaultKeyListHandler();
            setSelected([]);
          }}
        >
          delete
        </Button>
      </div>
    </List>
  );
};
