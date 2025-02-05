# Client

## Folder structure

### `features/`

This directory follows a modular structure, where each feature is self-contained. The file conventions within a feature module are as follows:

- **`*.ts`** - Used for logic-based files such as schemas, hooks, and utility functions.
- **`*.tsx`** - Used for view components associated with the feature.

###  `routes/`

This directory adheres to the guidelines specified by [`@tanstack/router`](https://tanstack.com/router/latest), ensuring a structured approach to routing.

### `libs/`

A collection of reusable utilities, provider, and helper functions for the application.