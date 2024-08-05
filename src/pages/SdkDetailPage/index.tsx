import { useParams } from 'react-router-dom';
import { SdkPageTypeEnum } from '../SdkPage';
import {
  BackButtonView,
  BiometryManagerView,
  ClosingBehaviorView,
  CloudStorageView,
  HapticFeedbackView,
} from './components';

export const SdkDetailPage = () => {
  const { type } = useParams();
  const render = (type?: string) => {
    switch (type) {
      case SdkPageTypeEnum.BackButton:
        return <BackButtonView />;
      case SdkPageTypeEnum.BiometryManager:
        return <BiometryManagerView />;
      case SdkPageTypeEnum.ClosingBehavior:
        return <ClosingBehaviorView />;
      case SdkPageTypeEnum.CloudStorageView:
        return <CloudStorageView />;
      case SdkPageTypeEnum.HapticFeedbackView:
        return <HapticFeedbackView />;
      default:
        return <>none</>;
    }
  };
  return <>{render(type)}</>;
};
