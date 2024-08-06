import { initMainButton, RGB } from '@telegram-apps/sdk-react';
import { Button } from '@telegram-apps/telegram-ui';
import { useEffect } from 'react';

export const MainButtonView = () => {
  const [mainButton] = initMainButton();
  const changeHandler = () => {
    console.log('change');
  };
  const clickHandler = () => {
    console.log('click');
  };
  const changeBgColorHandler = (value: RGB) => {
    console.log('change:bgColor', value);
  };
  const changeIsEnabledHandler = (value: boolean) => {
    console.log('change:isEnabled', value);
  };
  const changeIsLoaderVisibleHandler = (value: boolean) => {
    console.log('change:isLoaderVisible', value);
  };
  const changeIsVisibleHandler = (value: boolean) => {
    console.log('change:isVisible', value);
  };
  const changeTextHandler = (value: string) => {
    console.log('change:text', value);
  };
  useEffect(() => {
    mainButton.on('change', changeHandler);
    mainButton.on('click', clickHandler);
    mainButton.on('change:bgColor', changeBgColorHandler);
    mainButton.on('change:isEnabled', changeIsEnabledHandler);
    mainButton.on('change:isLoaderVisible', changeIsLoaderVisibleHandler);
    mainButton.on('change:isVisible', changeIsVisibleHandler);
    mainButton.on('change:text', changeTextHandler);
    return () => {
      mainButton.off('change', changeHandler);
      mainButton.off('click', clickHandler);
      mainButton.off('change:bgColor', changeBgColorHandler);
      mainButton.off('change:isEnabled', changeIsEnabledHandler);
      mainButton.off('change:isLoaderVisible', changeIsLoaderVisibleHandler);
      mainButton.off('change:isVisible', changeIsVisibleHandler);
      mainButton.off('change:text', changeTextHandler);
    };
  }, [mainButton]);
  return (
    <div className="flex flex-col gap-y-2 px-2 pt-3">
      <Button
        className="grow"
        onClick={() => {
          mainButton.show();
          console.log(mainButton.isVisible); // true
        }}
      >
        Button Visibility Show
      </Button>

      <Button
        className="grow"
        onClick={() => {
          mainButton.hide();
          console.log(mainButton.isVisible); // false
        }}
      >
        Button Visibility Hide
      </Button>

      <Button
        className="grow"
        onClick={() => {
          mainButton.showLoader();
          console.log(mainButton.isLoaderVisible); // true
        }}
      >
        Loader Show
      </Button>

      <Button
        className="grow"
        onClick={() => {
          mainButton.hideLoader();
          console.log(mainButton.isLoaderVisible); // true
        }}
      >
        Loader Hide
      </Button>

      <Button
        className="grow"
        onClick={() => {
          mainButton.enable();
          console.log(mainButton.isEnabled); // true
        }}
      >
        Active State Show
      </Button>

      <Button
        className="grow"
        onClick={() => {
          mainButton.disable();
          console.log(mainButton.isEnabled); // false
        }}
      >
        Active State Hide
      </Button>

      <Button
        className="grow"
        onClick={() => {
          mainButton.setBgColor('#ffffaa');
          console.log(mainButton.bgColor); // '#ffffaa'
        }}
      >
        Background Color
      </Button>

      <Button
        className="grow"
        onClick={() => {
          mainButton.setTextColor('#cca233');
          console.log(mainButton.textColor); // '#cca233'
        }}
      >
        Text Color
      </Button>

      <Button
        className="grow"
        onClick={() => {
          mainButton.setText('Submit');
          console.log(mainButton.text); // 'Submit'
        }}
      >
        Text
      </Button>

      <Button
        className="grow"
        onClick={() => {
          mainButton.setParams({
            bgColor: '#aa1388',
            text: 'Stop',
            isVisible: true,
          });
          setTimeout(() => {
            mainButton.setParams({
              isVisible: false,
            });
          }, 2000);
        }}
      >
        Setting Multiple Properties show
      </Button>
    </div>
  );
};
