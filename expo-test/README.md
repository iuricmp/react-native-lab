# Welcome to your Expo app 👋

This is a simple Expo app that demonstrates how to handle deep links using the `expo-linking` library. The app has a Home screen with two counters, and it can respond to deep links that include a path.

The main goal is to keep the counters even when the app is opened via a deep link.


1. Run the app `npm run ios`
2. Increment the counters on Home screen
3. Send a deep link to the app using the command below
```bash
npx uri-scheme open "exp://127.0.0.1:8081/--/somepath" --ios
```