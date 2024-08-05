import { Link } from '@/components/Link/Link';
import { Cell, List, Section } from '@telegram-apps/telegram-ui';

export const SdkPage = () => {
  return (
    <List>
      <Section header="Sdk" footer="sdk">
        <Link to="/sdkDetail/1111">
          <Cell subtitle="User data, chat information, technical data">
            sdk
          </Cell>
        </Link>
      </Section>
    </List>
  );
};
