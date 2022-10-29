
// @ts-ignore
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
