import { initInvoice } from '@telegram-apps/sdk-react';
import { Button } from '@telegram-apps/telegram-ui';

export const InvoiceView = () => {
  const invoice = initInvoice();
  return (
    <div className="flex flex-col gap-y-2 px-2 pt-3">
      <Button
        className="grow"
        onClick={() => {
          invoice.open('abIIks213').then((status) => {
            // Output: 'paid'
            return console.log(status);
          });
        }}
      >
        Invoice
      </Button>
    </div>
  );
};
