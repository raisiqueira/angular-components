# RsLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## How generate a Angular library?

run this command to generate a new library:

```bash
ng generate lib @raisiqueira/library --prefix rs
```

The `--prefix` option is applied to generate selectors.
After run the `generate lib` command, run this other command to generate a component to our new library:

```bash
ng generate component button --project=@raisiqueira/library
```

## Build the library

To build our new library, run this command:

```bash
ng build @raisiqueira/library
```

This command generate a folder caled `dist`.
