import { initCloudStorage } from '@telegram-apps/sdk-react';
import { Button, Input, Multiselect } from '@telegram-apps/telegram-ui';
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
  });
  return (
    <div className="flex flex-col gap-y-2 px-2 pt-3">
      <Input
        header="Input Value"
        placeholder="I am usual input, just leave me alone"
        onChange={(e) => setKey(e.target.value)}
        value={key}
        className="grow"
      />
      <Input
        header="Input Value"
        placeholder="I am usual input, just leave me alone"
        onChange={(e) => setVal(e.target.value)}
        value={val}
        className="grow"
      />
      <Button
        disabled={!key || !val}
        className="grow mb-3"
        onClick={() => {
          cloudStorage.set(key, val);
          setVal('');
          setKey('');
          defaultKeyListHandler();
        }}
      >
        Set Value
      </Button>

      <Multiselect
        options={options}
        value={selected}
        onChange={(e) => setSelected(e)}
        // renderChip={(option) => {
        //   return <div>{`key:${option.children};value:${option.value}`}</div>;
        // }}
      />
      <Button
        onClick={async () => {
          const _delList = Promise.all(
            selected.map((item) => cloudStorage.delete(item.key))
          );
          await _delList;
          defaultKeyListHandler();
          setSelected([]);
        }}
      >
        Delete
      </Button>
    </div>
  );
};
