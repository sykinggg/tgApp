import { DisplayData } from '@/components/DisplayData/DisplayData';
import { initInitData } from '@telegram-apps/sdk-react';
import { List } from '@telegram-apps/telegram-ui';
import { useEffect, useMemo } from 'react';

export const InitDataView = () => {
  const initData = initInitData();
  useEffect(() => {
    console.log(initData);
  }, [initData]);

  const initDataRows = useMemo(() => {
    if (!initData) {
      return;
    }
    const {
      hash,
      queryId,
      chatType,
      chatInstance,
      authDate,
      startParam,
      canSendAfter,
      canSendAfterDate,
      user,
    } = initData;
    return [
      { title: 'auth_date', value: authDate.toLocaleString() },
      { title: 'auth_date (raw)', value: authDate.getTime() / 1000 },
      { title: 'hash', value: hash },
      { title: 'can_send_after', value: canSendAfterDate?.toISOString() },
      { title: 'can_send_after (raw)', value: canSendAfter },
      { title: 'query_id', value: queryId },
      { title: 'start_param', value: startParam },
      { title: 'chat_type', value: chatType },
      { title: 'chat_instance', value: chatInstance },
      { title: 'user_allows_write_to_pm', value: user?.allowsWriteToPm },
      { title: 'user_first_name', value: user?.firstName },
      { title: 'user_id', value: user?.id },
      { title: 'user_language_code', value: user?.languageCode },
      { title: 'user_last_name', value: user?.lastName },
    ];
  }, [initData]);

  return (
    <List>
      <DisplayData header={'Init Data'} rows={initDataRows || []} />
    </List>
  );
};
