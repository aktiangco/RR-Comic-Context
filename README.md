# RR-Comic-Context

## Use Context to pass styling properties to buttons in different components

Let's break down the components that we have in this app:

- The App parent component has some introductory text and it imports in the UserInterface component that houses the most important components in our app.
- The UserInterface component imports two components, CollectorButton (one of the components that we must pass data to through Context) and SubmitForm
- The SubmitForm component uses Context to modify the styling and display of the app's features.
