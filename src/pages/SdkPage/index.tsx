import { Link } from '@/components/Link/Link';
import { Cell, List, Section } from '@telegram-apps/telegram-ui';
import { useMemo } from 'react';

export enum SdkPageTypeEnum {
  BackButton = 'BackButton',
  BiometryManager = 'BiometryManager',
  ClosingBehavior = 'ClosingBehavior',
  CloudStorageView = 'CloudStorageView',
  HapticFeedbackView = 'HapticFeedbackView',
  InitDataView = 'InitDataView',
  InvoiceView = 'InvoiceView',
  MainButtonView = 'MainButtonView',
  MiniAppView = 'MiniAppView',
}

export const SdkPage = () => {
  const renderList = useMemo(() => {
    return [
      SdkPageTypeEnum.BackButton,
      SdkPageTypeEnum.BiometryManager,
      SdkPageTypeEnum.ClosingBehavior,
      SdkPageTypeEnum.CloudStorageView,
      SdkPageTypeEnum.HapticFeedbackView,
      SdkPageTypeEnum.InitDataView,
      SdkPageTypeEnum.InvoiceView,
      SdkPageTypeEnum.MainButtonView,
      SdkPageTypeEnum.MiniAppView,
    ].map((type) => (
      <Link to={`/sdkDetail/${type}`} key={type}>
        <Cell subtitle={`sdk ${type}`}>{type.replace('view', '')}</Cell>
      </Link>
    ));
  }, []);
  return (
    <List>
      <Section header="Sdk" footer="sdk">
        {renderList}
      </Section>
    </List>
  );
};
