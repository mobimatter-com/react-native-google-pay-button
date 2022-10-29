# react-native-google-pay-button
A dead-simple Google Pay compliant button component for react native.

This is just the button component, no Gpay APIs. We recommend using [react-native-google-pay](https://github.com/sorokin0andrey/react-native-google-pay)

## Installation

```sh
yarn add react-native-google-pay-button
```

## Demo

![button demo](/assets/demo.gif)

## Usage

```js
import { GooglePayButtonView } from "react-native-google-pay-button";

// ...

<GooglePayButtonView type={GooglePayButtonType.SUBSCRIBE_WITH_GOOGLEPAY} />
```

### Props
| prop  | value               | description                                                                                                                                                                                    |
|-------|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| style | ViewStyle           | A react native View style, make sure to set height and width for the button to be visible.                                                                                                     |
| type  | GooglePayButtonType | The style of the button, a choice of: BUY_WITH_GOOGLEPAY, BOOK_WITH_GOOGLEPAY, CHECKOUT_WITH_GOOGLEPAY, DONATE_WITH_GOOGLEPAY,ORDER_WITH_GOOGLEPAY,PAY_WITH_GOOGLEPAY,SUBSCRIBE_WITH_GOOGLEPAY |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
