import React from 'react';
import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-google-pay-button' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';


//   case 0:
//     return LayoutInflater.from(reactContext).inflate(
//         R.layout.buy_with_googlepay_button, null);
// case 1:
//     return LayoutInflater.from(reactContext).inflate(
//         R.layout.book_with_googlepay_button, null);
// case 2:
//     return LayoutInflater.from(reactContext).inflate(
//         R.layout.checkout_with_googlepay_button, null);
// case 3:
//     return LayoutInflater.from(reactContext).inflate(
//         R.layout.donate_with_googlepay_button, null);
// case 4:
//     return LayoutInflater.from(reactContext).inflate(
//         R.layout.order_with_googlepay_button, null);
// case 5:
//     return LayoutInflater.from(reactContext).inflate(
//         R.layout.pay_with_googlepay_button, null);
// case 6:
//     return LayoutInflater.from(reactContext).inflate(
//         R.layout.plain_googlepay_button, null);
// case 7:
//     return LayoutInflater.from(reactContext).inflate(
//         R.layout.subscribe_with_googlepay_button, null);

export enum GooglePayButtonType {
  BUY_WITH_GOOGLEPAY,
  BOOK_WITH_GOOGLEPAY,
  CHECKOUT_WITH_GOOGLEPAY,
  DONATE_WITH_GOOGLEPAY,
  ORDER_WITH_GOOGLEPAY,
  PAY_WITH_GOOGLEPAY,
  SUBSCRIBE_WITH_GOOGLEPAY
}

type GooglePayButtonProps = {
  type: GooglePayButtonType;
  style: ViewStyle;
};

const ComponentName = 'GooglePayButtonView';

export const GooglePayButton =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<GooglePayButtonProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
