# Dropdown Test

Test project to demonstrate warning regarding update on unmounted component:
```
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
at node_modules/react-native-element-dropdown/src/useDeviceOrientation.ts:28:18 in useCallback$argument_0
at node_modules/react-native-element-dropdown/src/useDeviceOrientation.ts:37:14 in Dimensions.addEventListener$argument_1
at node_modules/react-native/Libraries/vendor/emitter/_EventEmitter.js:135:10 in EventEmitter#emit
at node_modules/react-native/Libraries/Utilities/Dimensions.js:89:6 in set
at node_modules/react-native/Libraries/Utilities/Dimensions.js:134:6 in RCTDeviceEventEmitter.addListener$argument_1
at node_modules/react-native/Libraries/vendor/emitter/_EventEmitter.js:135:10 in EventEmitter#emit
```

To create warning:

- npm run ios to load emulator
  - Tested using IOS emulator iPhone 12 Pro and Android NExus 5C API 3.0
- click on show button to open modal
- click on close button to close modal
- rotate screen in emulator
- warning displayed in terminal window where app is running as well as in emulator