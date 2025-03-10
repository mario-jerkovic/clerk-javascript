# Change Log

## 5.0.0-beta.25

### Patch Changes

- Updated dependencies [[`fe356eebd`](https://github.com/clerk/javascript/commit/fe356eebd8ff527133e0818cf664e7def577cccc)]:
  - @clerk/types@4.0.0-beta.17

## 5.0.0-beta.24

### Patch Changes

- Updated dependencies [[`1834a3ee4`](https://github.com/clerk/javascript/commit/1834a3ee496ea27b9f7ceeb32ec5361f9de8ee30)]:
  - @clerk/shared@2.0.0-beta.17

## 5.0.0-beta.23

### Patch Changes

- Updated dependencies [[`db18787c4`](https://github.com/clerk/javascript/commit/db18787c4d9fa8ee1306db9b65f3b3f5e2fe2dad)]:
  - @clerk/shared@2.0.0-beta.16

## 5.0.0-beta.22

### Patch Changes

- Updated dependencies [[`6eab66050`](https://github.com/clerk/javascript/commit/6eab66050608a1bc5cb9aca6a234b1fea16106e5)]:
  - @clerk/shared@2.0.0-beta.15

## 5.0.0-beta.21

### Patch Changes

- Updated dependencies [[`12f3c5c55`](https://github.com/clerk/javascript/commit/12f3c5c55580f93a81df27851fbc92ce1312107e)]:
  - @clerk/shared@2.0.0-beta.14

## 5.0.0-beta.20

### Patch Changes

- Updated dependencies [[`5c239d973`](https://github.com/clerk/javascript/commit/5c239d97373ad2f2aa91ded1b84670f201f7db8f)]:
  - @clerk/types@4.0.0-beta.16

## 5.0.0-beta.19

### Patch Changes

- Rename beta-v5 to beta by [@nikosdouvlis](https://github.com/nikosdouvlis)

- Updated dependencies [[`2de442b24`](https://github.com/clerk/javascript/commit/2de442b2465cc5d424b8a0b21aa57c557f3aa2e7)]:
  - @clerk/shared@2.0.0-beta.13
  - @clerk/types@4.0.0-beta.15

## 5.0.0-beta-v5.18

### Patch Changes

- Properly fire onLoad event when clerk-js is already loaded. ([#2757](https://github.com/clerk/javascript/pull/2757)) by [@panteliselef](https://github.com/panteliselef)

- Export `EmailLinkErrorCode` from `/errors` module ([#2732](https://github.com/clerk/javascript/pull/2732)) by [@nikosdouvlis](https://github.com/nikosdouvlis)

- Replace semver with custom regex in versionSelector ([#2760](https://github.com/clerk/javascript/pull/2760)) by [@nikosdouvlis](https://github.com/nikosdouvlis)

- Updated dependencies [[`244de5ea3`](https://github.com/clerk/javascript/commit/244de5ea3a7641727cd85c544bb79fb04f2c0808), [`9737ef510`](https://github.com/clerk/javascript/commit/9737ef5104346821461972d31f3c69e93924f0e0), [`8b466a9ba`](https://github.com/clerk/javascript/commit/8b466a9ba93ca10315b534079b09fa5d76ffa305), [`8daf8451c`](https://github.com/clerk/javascript/commit/8daf8451cb564bc834dd856174ffc2cdfa932e37), [`7f751c4ef`](https://github.com/clerk/javascript/commit/7f751c4ef2d14410058cf65ea984a93b50c0b87e), [`be991365e`](https://github.com/clerk/javascript/commit/be991365e1c78d0f1dfc59bb33dd533b6fad223a)]:
  - @clerk/types@4.0.0-beta-v5.14
  - @clerk/shared@2.0.0-beta-v5.12

## 5.0.0-beta-v5.17

### Patch Changes

- Updated dependencies [[`d4ff346dd`](https://github.com/clerk/javascript/commit/d4ff346dd53bb3e1970e80bdc7b188c2dd344f12), [`7886ba89d`](https://github.com/clerk/javascript/commit/7886ba89d76bfea2d6882a46baf64bf98f1148d3)]:
  - @clerk/shared@2.0.0-beta-v5.11
  - @clerk/types@4.0.0-beta-v5.13

## 5.0.0-alpha-v5.16

### Minor Changes

- Apply the following changes to components with routing props: ([#2543](https://github.com/clerk/javascript/pull/2543)) by [@dimkl](https://github.com/dimkl)

  - default is `routing="path"` and `path` prop is required to be set via env or context
  - when `routing="hash"` or `routing="virtual"` is set the implicit (via env or context) `path` option is ignored
  - when `routing="hash"` or `routing="virtual"` then `path` prop is not allowed to be set

  Examples of components with routing props:

  - `<CreateOrganization />`
  - `<OrganizationProfile />`
  - `<SignIn />`
  - `<SignUp />`
  - `<UserProfile />`

### Patch Changes

- Allow dynamic values components props, even if these values change after the components are rendered. For example, a `SignIn` component with a `redirectUrl` prop passed in will always respect the latest value of `redirectUrl`. ([#2515](https://github.com/clerk/javascript/pull/2515)) by [@nikosdouvlis](https://github.com/nikosdouvlis)

- Updated dependencies [[`8cc45d2af`](https://github.com/clerk/javascript/commit/8cc45d2af98320ccced3768fb039b86576e424a5)]:
  - @clerk/shared@2.0.0-alpha-v5.10

## 5.0.0-alpha-v5.15

### Patch Changes

- Fixes error thrown for missing path & routing props when path was passed from context. ([#2514](https://github.com/clerk/javascript/pull/2514)) by [@dimkl](https://github.com/dimkl)

  This change affects components `<SignIn />`, `<SignUp />` from `@clerk/nextjs` and `@clerk/remix`.

- Fixes error when path is passed from context and a routing strategy other than `path` is passed as a prop. ([#2530](https://github.com/clerk/javascript/pull/2530)) by [@octoper](https://github.com/octoper)

  This change affects components `<SignIn />`, `<SignUp />` from `@clerk/nextjs` and `@clerk/remix`.

## 5.0.0-alpha-v5.14

### Patch Changes

- Updated dependencies [[`1dc28ab46`](https://github.com/clerk/javascript/commit/1dc28ab46f6930074334be183c637ce7a81bebf7), [`ea4933655`](https://github.com/clerk/javascript/commit/ea4933655863ce315324aa2a3be7d5f263c2b61f), [`38d8b3e8a`](https://github.com/clerk/javascript/commit/38d8b3e8a0387bcf0b9c8d16e3bbfcfe9b643ca2)]:
  - @clerk/shared@2.0.0-alpha-v5.9

## 5.0.0-alpha-v5.13

### Patch Changes

- Updated dependencies [[`7ecd6f6ab`](https://github.com/clerk/javascript/commit/7ecd6f6abb0e5bfb1a57c99cc11860de311c3e82)]:
  - @clerk/shared@2.0.0-alpha-v5.8

## 5.0.0-alpha-v5.12

### Major Changes

- Path-based routing is now the default routing strategy if the `path` prop is filled. Additionally, if the `path` and `routing` props are not filled, an error will be thrown. ([#2338](https://github.com/clerk/javascript/pull/2338)) by [@octoper](https://github.com/octoper)

  ```jsx

  // Without path or routing props, an error with be thrown
  <UserProfile />
  <CreateOrganization />
  <OrganizationProfile />
  <SignIn />
  <SignUp />

  // Alternative #1
  <UserProfile path="/whatever"/>
  <CreateOrganization path="/whatever"/>
  <OrganizationProfile path="/whatever"/>
  <SignIn path="/whatever"/>
  <SignUp path="/whatever"/>

  // Alternative #2
  <UserProfile routing="hash_or_virtual"/>
  <CreateOrganization routing="hash_or_virtual"/>
  <OrganizationProfile routing="hash_or_virtual"/>
  <SignIn routing="hash_or_virtual"/>
  <SignUp routing="hash_or_virtual"/>
  ```

- Consolidate `afterSignOutOneUrl` & `afterSignOutAllUrl` to `afterSignOutUrl` and drop usage of Dashboard settings in ClerkJS components. The Dashboard settings should only apply to the Account Portal application. ([#2414](https://github.com/clerk/javascript/pull/2414)) by [@dimkl](https://github.com/dimkl)

### Minor Changes

- Remove MemberRole Type`MemberRole` would always include the old role keys `admin`, `member`, `guest_member`. ([#2388](https://github.com/clerk/javascript/pull/2388)) by [@panteliselef](https://github.com/panteliselef)

  If developers still depend on them after the introduction of custom roles, the can provide them as their custom types for authorization.

  ```ts
  // clerk.d.ts
  export {};

  interface ClerkAuthorization {
    permission: '';
    role: 'admin' | 'basic_member' | 'guest_member';
  }
  ```

- Update `@clerk/clerk-js` and `@clerk/clerk-react` to support the following examples: ([#2412](https://github.com/clerk/javascript/pull/2412)) by [@dimkl](https://github.com/dimkl)

  ```typescript
  Clerk.signOut({ redirectUrl: '/' })

  <SignOutButton redirectUrl='/' />
  // uses Clerk.signOut({ redirectUrl: '/' })
  <UserButton afterSignOutUrl='/after' />
  // uses Clerk.signOut({ redirectUrl: '/after' })
  <ClerkProvider afterSignOutUrl='/after' />
  // uses Clerk.signOut({ redirectUrl: '/after' })
  ```

### Patch Changes

- Updated dependencies [[`fe2607b6f`](https://github.com/clerk/javascript/commit/fe2607b6fdeed83002db7e4a0c040ac0280e5ff7), [`2e4a43017`](https://github.com/clerk/javascript/commit/2e4a43017ef33b541949ba90e16bf5311ce8bc60)]:
  - @clerk/types@4.0.0-alpha-v5.12

## 5.0.0-alpha-v5.11

### Major Changes

- Replace the `signOutCallback` prop on the `<SignOutButton />` with `redirectUrl`. This aligns the API surface with other UI components provided by `@clerk/clerk-react`. ([#2348](https://github.com/clerk/javascript/pull/2348)) by [@LekoArts](https://github.com/LekoArts)

  If you previously used the `signOutCallback` prop to navigate to another page, you can migrate as shown below.

  Before:

  ```jsx
  import { SignOutButton } from '@clerk/clerk-react';

  export const Signout = () => {
    return (
      <SignOutButton
        signOutCallback={() => {
          window.location.href = '/your-path';
        }}
      >
        <button>Sign Out</button>
      </SignOutButton>
    );
  };
  ```

  After:

  ```jsx
  import { SignOutButton } from '@clerk/clerk-react';

  export const Signout = () => {
    return (
      <SignOutButton redirectUrl='/your-path'>
        <button>Sign Out</button>
      </SignOutButton>
    );
  };
  ```

- Remove hashing and third-party cookie functionality related to development instance session syncing in favor of URL-based session syncing with query parameters. ([#2367](https://github.com/clerk/javascript/pull/2367)) by [@tmilewski](https://github.com/tmilewski)

- - `buildUrlWithAuth` no longer accepts an `options` argument. ([#2367](https://github.com/clerk/javascript/pull/2367)) by [@tmilewski](https://github.com/tmilewski)

### Patch Changes

- Updated dependencies [[`5f58a2274`](https://github.com/clerk/javascript/commit/5f58a22746aba94f76bef5dbbc94fa93ea3b0b7e), [`a9fe242be`](https://github.com/clerk/javascript/commit/a9fe242be4dbaaa02c6643fea0688f1fb23f23e7), [`5f58a2274`](https://github.com/clerk/javascript/commit/5f58a22746aba94f76bef5dbbc94fa93ea3b0b7e), [`a9fe242be`](https://github.com/clerk/javascript/commit/a9fe242be4dbaaa02c6643fea0688f1fb23f23e7)]:
  - @clerk/types@4.0.0-alpha-v5.11
  - @clerk/shared@2.0.0-alpha-v5.7

## 5.0.0-alpha-v5.10

### Major Changes

- - Introduce `@clerk/clerk-react/errors` and `@clerk/clerk-react/internal` subpath exports to expose some internal utilities. Eg ([#2328](https://github.com/clerk/javascript/pull/2328)) by [@dimkl](https://github.com/dimkl)

    ```typescript
    // Before
    import { __internal__setErrorThrowerOptions } from '@clerk/clerk-react';
    // After
    import { setErrorThrowerOptions } from '@clerk/clerk-react/internal';

    // Before
    import { isClerkAPIResponseError, isEmailLinkError, isKnownError, isMetamaskError } from '@clerk/clerk-react';
    // After
    import {
      isClerkAPIResponseError,
      isEmailLinkError,
      isKnownError,
      isMetamaskError,
    } from '@clerk/clerk-react/errors';

    // Before
    import { MultisessionAppSupport } from '@clerk/clerk-react';
    // After
    import { MultisessionAppSupport } from '@clerk/clerk-react/internal';
    ```

  - Drop from the `@clerk/clerk-react` and all other clerk-react wrapper packages:
    - `__internal__setErrorThrowerOptions` internal utility (moved to /internal subpath)
    - `WithClerkProp` type
    - `MultisessionAppSupport` component (moved to /internal subpath)
    - `EmailLinkErrorCode` enum
  - Drop `StructureContext` and related errors to reduce to reduce code complexity since it seems that it was not being used.
  - Drop `withUser`, `WithUser`, `withClerk` HOFs and `WithClerk`, `withSession`, `WithSession` HOCs from the `@clerk/clerk-react`
    to reduce the export surface since it's trivial to implement if needed.

- Drop `redirectToHome` redirect method in favour of `redirectToAfterSignUp` or `redirectToAfterSignIn`. ([#2251](https://github.com/clerk/javascript/pull/2251)) by [@octoper](https://github.com/octoper)

  When the `<SignIn/>` and `<SignUp/>` components are rendered while a user is already logged in, they will now redirect to the configured `afterSignIn` and `afterSignUp` URLs, respectively. Previously, the redirect URL was set to the home URL configured in the dashboard.

- Align return types for redirectTo\* methods in ClerkJS [SDK-1037] ([#2316](https://github.com/clerk/javascript/pull/2316)) by [@tmilewski](https://github.com/tmilewski)

  Breaking Changes:

  - `redirectToUserProfile` now returns `Promise<unknown>` instead of `void`
  - `redirectToOrganizationProfile` now returns `Promise<unknown>` instead of `void`
  - `redirectToCreateOrganization` now returns `Promise<unknown>` instead of `void`
  - `redirectToHome` now returns `Promise<unknown>` instead of `void`

### Minor Changes

- Introduce Protect for authorization. ([#2170](https://github.com/clerk/javascript/pull/2170)) by [@panteliselef](https://github.com/panteliselef)

  Changes in public APIs:

  - Rename Gate to Protect
  - Support for permission checks. (Previously only roles could be used)
  - Remove the `experimental` tags and prefixes
  - Drop `some` from the `has` utility and Protect. Protect now accepts a `condition` prop where a function is expected with the `has` being exposed as the param.
  - Protect can now be used without required props. In this case behaves as `<SignedIn>`, if no authorization props are passed.
  - `has` will throw an error if neither `permission` or `role` is passed.
  - `auth().protect()` for Nextjs App Router. Allow per page protection in app router. This utility will automatically throw a 404 error if user is not authorized or authenticated.
    - inside a page or layout file it will render the nearest `not-found` component set by the developer
    - inside a route handler it will return empty response body with a 404 status code

### Patch Changes

- Add `useAssertWrappedByClerkProvider` to internal code. If you use hooks like `useAuth` outside of the `<ClerkProvider />` context an error will be thrown. For example: ([#2299](https://github.com/clerk/javascript/pull/2299)) by [@tmilewski](https://github.com/tmilewski)

  ```shell
  @clerk/clerk-react: useAuth can only be used within the <ClerkProvider /> component
  ```

- Updated dependencies [[`896cb6104`](https://github.com/clerk/javascript/commit/896cb610409f84c0ff7a4f502f0b4ccee1afc157), [`69ce3e185`](https://github.com/clerk/javascript/commit/69ce3e185b89283956cb711629bc61703166b1c9), [`ab4eb56a5`](https://github.com/clerk/javascript/commit/ab4eb56a5c34baf496ebb8ac412ad6171b9bd79c), [`46040a2f3`](https://github.com/clerk/javascript/commit/46040a2f34d0991072fca490e031c1994b2e2296), [`75ea300bc`](https://github.com/clerk/javascript/commit/75ea300bce16a0ce401a225263bb267ad2a217b8), [`844847e0b`](https://github.com/clerk/javascript/commit/844847e0becf20243fba3c659b2b77a238dd270a)]:
  - @clerk/shared@2.0.0-alpha-v5.6
  - @clerk/types@4.0.0-alpha-v5.10

## 5.0.0-alpha-v5.9

### Major Changes

- Drop `Clerk.isReady(). Use `Clerk.loaded` instead.` ([#2294](https://github.com/clerk/javascript/pull/2294)) by [@dimkl](https://github.com/dimkl)

### Patch Changes

- Updated dependencies [[`1db1f4068`](https://github.com/clerk/javascript/commit/1db1f4068466d967df0de39f032a476ca8163651), [`7bffc47cb`](https://github.com/clerk/javascript/commit/7bffc47cb71a2c3e026df5977c25487bfd5c55d7)]:
  - @clerk/types@4.0.0-alpha-v5.9

## 5.0.0-alpha-v5.8

### Patch Changes

- Set correct information on required Node.js and React versions in README ([#2264](https://github.com/clerk/javascript/pull/2264)) by [@LekoArts](https://github.com/LekoArts)

- Updated dependencies [[`6a33709cc`](https://github.com/clerk/javascript/commit/6a33709ccf48586f1a8b62216688ea300b7b5dfb), [`d30ea1faa`](https://github.com/clerk/javascript/commit/d30ea1faa45074e09c037530e8ba3ca2dbd50654)]:
  - @clerk/types@4.0.0-alpha-v5.8
  - @clerk/shared@2.0.0-alpha-v5.5

## 5.0.0-alpha-v5.7

### Minor Changes

- Fix `@clerk/clerk-react` bundle output to resolve issues with vite / rollup ESM module imports. ([#2216](https://github.com/clerk/javascript/pull/2216)) by [@dimkl](https://github.com/dimkl)

  We have also used the `bundle` output to export a single index.ts and dropped the unnecessary
  published files / folders (eg `__tests__`).

- Update the TypeScript types of `<ClerkProvider />`. If you use the `routerPush` prop you're now required to also provide the `routerReplace` prop (or other way around). You can also not provide them at all since both props are optional. ([#2227](https://github.com/clerk/javascript/pull/2227)) by [@dimkl](https://github.com/dimkl)

### Patch Changes

- Sync IsomorphicClerk with the clerk singleton and the LoadedClerk interface. IsomorphicClerk now extends from LoadedClerk. ([#2226](https://github.com/clerk/javascript/pull/2226)) by [@panteliselef](https://github.com/panteliselef)

- Updated dependencies [[`4b8bedc66`](https://github.com/clerk/javascript/commit/4b8bedc66d47dca5c6192148f4b31ae6d49ff733), [`c776f86fb`](https://github.com/clerk/javascript/commit/c776f86fb2a999dcae46fda9abb5005718c354b2), [`d6a7ea61a`](https://github.com/clerk/javascript/commit/d6a7ea61a8ae64c93877ec117e54fc48b1c86f16)]:
  - @clerk/shared@2.0.0-alpha-v5.4
  - @clerk/types@4.0.0-alpha-v5.7

## 5.0.0-alpha-v5.6

### Patch Changes

- Updated dependencies [[`5aab9f04a`](https://github.com/clerk/javascript/commit/5aab9f04a1eac39e42a03f555075e08a5a8ee02c), [`9a1fe3728`](https://github.com/clerk/javascript/commit/9a1fe37289c7606dc111913cb9f70f2a2efff6b7), [`9a1fe3728`](https://github.com/clerk/javascript/commit/9a1fe37289c7606dc111913cb9f70f2a2efff6b7)]:
  - @clerk/types@4.0.0-alpha-v5.6

## 5.0.0-alpha-v5.5

### Patch Changes

- Updated dependencies [[`12962bc58`](https://github.com/clerk/javascript/commit/12962bc58e2c9caad416ba4e6d52061d00bc2feb)]:
  - @clerk/types@4.0.0-alpha-v5.5

## 5.0.0-alpha-v5.4

### Minor Changes

- - By default, all the components with routing will have the `routing` prop assigned as `'path'` by default when the `path` prop is filled. ([#1957](https://github.com/clerk/javascript/pull/1957)) by [@octoper](https://github.com/octoper)

  - The `<UserButton />` component will set the default value of the `userProfileMode` prop to `'navigation'` if the `userProfileUrl` prop is provided.
  - The `<OrganizationSwitcher />` component will have the `organizationProfileMode` and `createOrganizationMode` props assigned with `'navigation'` by default if the `organizationProfileUrl` and `createOrganizationUrl` props are filled accordingly.

### Patch Changes

- Updated dependencies [[`7f6a64f43`](https://github.com/clerk/javascript/commit/7f6a64f4335832c66ff355f6d2f311f33a313d59)]:
  - @clerk/types@4.0.0-alpha-v5.4

## 5.0.0-alpha-v5.3

### Major Changes

- Upgrade React version to >=18 and add react-dom as peer dependency ([#2164](https://github.com/clerk/javascript/pull/2164)) by [@dimkl](https://github.com/dimkl)

  to fix issues with vite & rollup building.

### Minor Changes

- Breaking Changes: ([#2169](https://github.com/clerk/javascript/pull/2169)) by [@dimkl](https://github.com/dimkl)

  - Drop `isLegacyFrontendApiKey` from `@clerk/shared`
  - Drop default exports from `@clerk/clerk-js`
    - on headless Clerk type
    - on ui and ui.retheme `Portal`
  - Use `isProductionFromSecretKey` instead of `isProductionFromApiKey`
  - Use `isDevelopmentFromSecretKey` instead of `isDevelopmentFromApiKey`

  Changes:

  - Rename `HeadlessBrowserClerkConstrutor` / `HeadlessBrowserClerkConstructor` (typo)
  - Use `isomorphicAtob` / `isomorhpicBtoa` to replace `base-64` in `@clerk/expo`
  - Refactor merging build-time and runtime props in `@clerk/backend` clerk client
  - Drop `node-fetch` dependency from `@clerk/backend`
  - Drop duplicate test in `@clerk/backend`

### Patch Changes

- Introduces telemetry collection from Clerk's SDKs. Collected telemetry will be used to gain insights into product usage and help drive roadmap priority. For more information, see https://clerk.com/docs/telemetry. ([#2154](https://github.com/clerk/javascript/pull/2154)) by [@BRKalow](https://github.com/BRKalow)

- Updated dependencies [[`52ff8fe6b`](https://github.com/clerk/javascript/commit/52ff8fe6b6ff88ceb5e1246378b54b0565bede9d), [`4bb57057e`](https://github.com/clerk/javascript/commit/4bb57057e9af20fc433626ed178d97d3ca811362), [`40ac4b645`](https://github.com/clerk/javascript/commit/40ac4b645f449b546dae5b4c0d013c9d9ea6d09c), [`429d030f7`](https://github.com/clerk/javascript/commit/429d030f7b6efe838a1e7fec7f736ba59fcc6b61)]:
  - @clerk/shared@2.0.0-alpha-v5.3
  - @clerk/types@4.0.0-alpha-v5.3

## 5.0.0-alpha-v5.2

### Major Changes

- Change the minimal Node.js version required by Clerk to `18.17.0`. ([#2162](https://github.com/clerk/javascript/pull/2162)) by [@dimkl](https://github.com/dimkl)

### Patch Changes

- Updated dependencies [[`c2a090513`](https://github.com/clerk/javascript/commit/c2a0905132684a4a1e8d598b66caddf20062273e)]:
  - @clerk/shared@2.0.0-alpha-v5.2
  - @clerk/types@4.0.0-alpha-v5.2

## 5.0.0-alpha-v5.1

### Major Changes

- Drop default exports from all packages. Migration guide: ([#2150](https://github.com/clerk/javascript/pull/2150)) by [@dimkl](https://github.com/dimkl)

  - use `import { Clerk } from '@clerk/backend';`
  - use `import { clerkInstance } from '@clerk/clerk-sdk-node';`
  - use `import { Clerk } from '@clerk/clerk-sdk-node';`
  - use `import { Clerk } from '@clerk/clerk-js';`
  - use `import { Clerk } from '@clerk/clerk-js/headless';`
  - use `import { IsomorphicClerk } from '@clerk/clerk-react'`

- Drop deprecations. Migration steps: ([#2102](https://github.com/clerk/javascript/pull/2102)) by [@dimkl](https://github.com/dimkl)

  - use `EmailLinkError` instead of `MagicLinkError`
  - use `isEmailLinkError` instead of `isMagicLinkError`
  - use `EmailLinkErrorCode` instead of `MagicLinkErrorCode`
  - use `useEmailLink` instead of `useMagicLink`
  - use `buildRequestUrl` from `@clerk/backend` instead of `getRequestUrl` from `@clerk/shared`
  - use `OrganizationProvider` instead of `OrganizationContext`
  - use `userMemberships` instead of `organizationList` from `useOrganizationList`

- Drop deprecations. Migration steps: ([#2082](https://github.com/clerk/javascript/pull/2082)) by [@dimkl](https://github.com/dimkl)

  - use `publishableKey` instead of `frontendApi`
  - use `Clerk.handleEmailLinkVerification()` instead of `Clerk.handleMagicLinkVerification()`
  - use `isEmailLinkError` instead of `isMagicLinkError`
  - use `EmailLinkErrorCode` instead of `MagicLinkErrorCode`
  - use `useEmailLink` instead of `useMagicLink`
  - drop `orgs` jwt claim from session token
  - use `ExternalAccount.imageUrl` instead of `ExternalAccount.avatarUrl`
  - use `Organization.imageUrl` instead of `Organization.logoUrl`
  - use `User.imageUrl` instead of `User.profileImageUrl`
  - use `OrganizationMembershipPublicUserData.imageUrl` instead of `OrganizationMembershipPublicUserData.profileImageUrl`
  - use `useOrganizationList` instead of `useOrganizations`
  - use `userProfileProps` instead of `userProfile` in `Appearance`
  - use `Clerk.setActive()` instead of `Clerk.setSession()`
  - drop `password` param in `User.update()`
  - use `afterSelectOrganizationUrl` instead of `afterSwitchOrganizationUrl` in `OrganizationSwitcher`
  - drop `Clerk.experimental_canUseCaptcha` / `Clerk.Clerk.experimental_captchaSiteKey` / `Clerk.experimental_captchaURL` (were meant for internal use)
  - use `User.getOrganizationMemberships()` instead of `Clerk.getOrganizationMemberships()`
  - drop `lastOrganizationInvitation` / `lastOrganizationMember` from Clerk emitted events
  - drop `Clerk.__unstable__invitationUpdate` / `Clerk.__unstable__membershipUpdate`
  - drop support for string param in `Organization.create()`
  - use `Organization.getInvitations()` instead of `Organization.getPendingInvitations()`
  - use `pageSize` instead of `limit` in `OrganizationMembership.retrieve()`
  - use `initialPage` instead of `offset` in `OrganizationMembership.retrieve()`
  - drop `lastOrganizationInvitation` / `lastOrganizationMember` from ClerkProvider
  - use `invitations` instead of `invitationList` in `useOrganization`
  - use `memberships` instead of `membershipList` in `useOrganization`
  - use `redirectUrl` instead of `redirect_url` in `User.createExternalAccount()`
  - use `signature` instead of `generatedSignature` in `Signup.attemptWeb3WalletVerification()`

- Drop deprecations. Migration steps: ([#2109](https://github.com/clerk/javascript/pull/2109)) by [@dimkl](https://github.com/dimkl)

  - drop `orgs` jwt claim from session token
  - change type of `auth` param of `withServerAuth()` callback to `AuthObject` from `ServerSideAuth` in `gatsby-clerk-plugin`
    - use `auth.sessionClaims` instead of `auth.claims`
    - use `AuthObject` properties from `auth`
  - use `publishableKey` instead of `frontendApi`
  - use `ClerkProviderOptionsWrapper` type instead of `IsomorphicClerkOptions`

- Drop deprecations. Migration steps: ([#2151](https://github.com/clerk/javascript/pull/2151)) by [@dimkl](https://github.com/dimkl)

  - drop `formFieldLabel__emailAddress_phoneNumber` from localization keys
  - drop `formFieldLabel__phoneNumber_username` from localization keys
  - drop `formFieldLabel__emailAddress_phoneNumber_username` from localization keys
  - drop `formFieldInputPlaceholder__emailAddress_phoneNumber` from localization keys
  - drop `formFieldInputPlaceholder__phoneNumber_username` from localization keys
  - drop `formFieldInputPlaceholder__emailAddress_phoneNumber_username` from localization keys
  - use `title__connectionFailed` instead of `title__conectionFailed` from localization keys
  - use `actionLabel__connectionFailed` instead of `actionLabel__conectionFailed` from localization keys
  - use `headerTitle__members` instead of `headerTitle__active` from localization keys
  - use `headerTitle__invitations` instead of `headerTitle__invited` from localization keys
  - drop `createOrganization.subtitle` from localization keys
  - use `deDE` instead of `deDe` localization from `@clerk/localizations`

- Drop deprecations. Migration steps: ([#1993](https://github.com/clerk/javascript/pull/1993)) by [@dimkl](https://github.com/dimkl)

  - use `setActive` instead of `setSession` from `useSessionList | useSignUp | useSignIn` hooks
  - use `publishableKey` instead of `frontendApi`
  - use `handleEmailLinkVerification` instead of `handleMagicLinkVerification` from `IsomorphicClerk`
  - use `isEmailLinkError` instead of `isMagicLinkError`
  - use `EmailLinkErrorCode` instead of `MagicLinkErrorCode`
  - use `useEmailLink` instead of `useMagicLink`

### Patch Changes

- Use the errorThrower shared utility when throwing errors ([#1999](https://github.com/clerk/javascript/pull/1999)) by [@anagstef](https://github.com/anagstef)

- Updated dependencies [[`64d3763ec`](https://github.com/clerk/javascript/commit/64d3763ec73747ad04c4b47017195cf4114e150c), [`83e9d0846`](https://github.com/clerk/javascript/commit/83e9d08469e7c2840f06aa7d86831055e23f67a5), [`7f833da9e`](https://github.com/clerk/javascript/commit/7f833da9ebc1b2ec9c65513628c377d0584e5d72), [`492b8a7b1`](https://github.com/clerk/javascript/commit/492b8a7b12f14658a384566012e5807f0a171710), [`2a22aade8`](https://github.com/clerk/javascript/commit/2a22aade8c9bd1f83a9be085983f96fa87903804), [`f77e8cdbd`](https://github.com/clerk/javascript/commit/f77e8cdbd24411f7f9dbfdafcab0596c598f66c1), [`0d1052ac2`](https://github.com/clerk/javascript/commit/0d1052ac284b909786fd0e4744b02fcf4d1a8be6), [`5471c7e8d`](https://github.com/clerk/javascript/commit/5471c7e8dd0155348748fa90e5ae97093f59efe9), [`477170962`](https://github.com/clerk/javascript/commit/477170962f486fd4e6b0653a64826573f0d8621b), [`e0e79b4fe`](https://github.com/clerk/javascript/commit/e0e79b4fe47f64006718d547c898b9f67fe4d424)]:
  - @clerk/shared@2.0.0-alpha-v5.1
  - @clerk/types@4.0.0-alpha-v5.1

## 5.0.0-alpha-v5.0

### Major Changes

- Dropping support for Node 14 and 16 as they both reached EOL status. The minimal Node.js version required by Clerk is `18.18.0` now. ([#1864](https://github.com/clerk/javascript/pull/1864)) by [@dimkl](https://github.com/dimkl)

### Minor Changes

- Experimental support for `<Gate/>` with role checks. ([#1942](https://github.com/clerk/javascript/pull/1942)) by [@panteliselef](https://github.com/panteliselef)

### Patch Changes

- Ignore `.test.ts` files for the build output. Should result in smaller bundle size. ([#2005](https://github.com/clerk/javascript/pull/2005)) by [@LekoArts](https://github.com/LekoArts)

- Replace internal logic of determining package tag & major version with [semver](https://www.npmjs.com/package/semver) in order to have a more robust solution ([#2011](https://github.com/clerk/javascript/pull/2011)) by [@LekoArts](https://github.com/LekoArts)

- Updated dependencies [[`743c4d204`](https://github.com/clerk/javascript/commit/743c4d20423790b554e66923466081c0d3b0d9ed), [`d37d44a68`](https://github.com/clerk/javascript/commit/d37d44a68e83b8e895963415f000c1aaef66e87e), [`791c49807`](https://github.com/clerk/javascript/commit/791c49807c3c9e19964cbf621c935d237caeecf3), [`a68eb3083`](https://github.com/clerk/javascript/commit/a68eb3083ff68459cd33098e2df190a5ba26c841), [`0293f29c8`](https://github.com/clerk/javascript/commit/0293f29c855c9415b54867196e8d727d1614e4ca), [`ef2325dcc`](https://github.com/clerk/javascript/commit/ef2325dcc18729e9ce9ee5823e9a963efa51dbc1), [`71663c568`](https://github.com/clerk/javascript/commit/71663c568926b1d60b97aa7ccc5298d05b618af2), [`97407d8aa`](https://github.com/clerk/javascript/commit/97407d8aa481007d3262fe7a0772dea901ce0a8c), [`78fc5eec0`](https://github.com/clerk/javascript/commit/78fc5eec0d61c14d86204944c6aa9f341ae6ea98), [`c7e6d00f5`](https://github.com/clerk/javascript/commit/c7e6d00f56e73df4ed87712e74ad9d5bcaca8924), [`4edb77632`](https://github.com/clerk/javascript/commit/4edb7763271b80d93fcd52ece5f1e408bd75df6f), [`97407d8aa`](https://github.com/clerk/javascript/commit/97407d8aa481007d3262fe7a0772dea901ce0a8c), [`7644b7472`](https://github.com/clerk/javascript/commit/7644b74726ba73e615a1256f9ff3fa03b0f8bc30), [`f5d55bb1f`](https://github.com/clerk/javascript/commit/f5d55bb1fc6a87303fb8bf461c3a917ae4da4005), [`41ae1d2f0`](https://github.com/clerk/javascript/commit/41ae1d2f006a0e4657a97a9c83ae7eb0cc167834), [`48ca40af9`](https://github.com/clerk/javascript/commit/48ca40af97a7fa4f2e41cf0f071028767d1b0075), [`6f755addd`](https://github.com/clerk/javascript/commit/6f755addd0886b9ff8b0d5dbe48e37470049acad)]:
  - @clerk/shared@2.0.0-alpha-v5.0
  - @clerk/types@4.0.0-alpha-v5.0

## 4.27.0

### Minor Changes

- Introduce customization in `UserProfile` and `OrganizationProfile` ([#1822](https://github.com/clerk/javascript/pull/1822)) by [@anagstef](https://github.com/anagstef)

  The `<UserProfile />` component now allows the addition of custom pages and external links to the navigation sidebar. Custom pages can be created using the `<UserProfile.Page>` component, and external links can be added using the `<UserProfile.Link>` component. The default routes, such as `Account` and `Security`, can be reordered.

  Example React API usage:

  ```tsx
  <UserProfile>
    <UserProfile.Page
      label='Custom Page'
      url='custom'
      labelIcon={<CustomIcon />}
    >
      <MyCustomPageContent />
    </UserProfile.Page>
    <UserProfile.Link
      label='External'
      url='/home'
      labelIcon={<Icon />}
    />
    <UserProfile.Page label='account' />
    <UserProfile.Page label='security' />
  </UserProfile>
  ```

  Custom pages and links should be provided as children using the `<UserButton.UserProfilePage>` and `<UserButton.UserProfileLink>` components when using the `UserButton` component.

  The `<OrganizationProfile />` component now supports the addition of custom pages and external links to the navigation sidebar. Custom pages can be created using the `<OrganizationProfile.Page>` component, and external links can be added using the `<OrganizationProfile.Link>` component. The default routes, such as `Members` and `Settings`, can be reordered.

  Example React API usage:

  ```tsx
  <OrganizationProfile>
    <OrganizationProfile.Page
      label='Custom Page'
      url='custom'
      labelIcon={<CustomIcon />}
    >
      <MyCustomPageContent />
    </OrganizationProfile.Page>
    <OrganizationProfile.Link
      label='External'
      url='/home'
      labelIcon={<Icon />}
    />
    <OrganizationProfile.Page label='members' />
    <OrganizationProfile.Page label='settings' />
  </OrganizationProfile>
  ```

  Custom pages and links should be provided as children using the `<OrganizationSwitcher.OrganizationProfilePage>` and `<OrganizationSwitcher.OrganizationProfileLink>` components when using the `OrganizationSwitcher` component.

### Patch Changes

- Publish packages with [npm provenance](https://docs.npmjs.com/generating-provenance-statements) enabled ([#1891](https://github.com/clerk/javascript/pull/1891)) by [@LekoArts](https://github.com/LekoArts)

- Update imports of `@clerk/shared` to granular entrypoints. This addresses warnings during a Next.js build that are the result of unsupported APIs being included in the module graph of builds for the edge runtime. ([#1924](https://github.com/clerk/javascript/pull/1924)) by [@BRKalow](https://github.com/BRKalow)

- Consider `Clerk.setActive` as stable. ([#1917](https://github.com/clerk/javascript/pull/1917)) by [@dimkl](https://github.com/dimkl)

- Updated dependencies [[`3bf64107e`](https://github.com/clerk/javascript/commit/3bf64107e1d0f9fce55163276d157da7849a390f), [`52f8553d2`](https://github.com/clerk/javascript/commit/52f8553d22f9454ee1194fd162410db15da7a4be), [`92727eec3`](https://github.com/clerk/javascript/commit/92727eec39566278263ffa118a085493f964eb94), [`b09b66eec`](https://github.com/clerk/javascript/commit/b09b66eec6ed0fbf99d93cd6843826f19c911099), [`51861addf`](https://github.com/clerk/javascript/commit/51861addff911615035fdc74718a1deff3f5cd62), [`aa4cd7615`](https://github.com/clerk/javascript/commit/aa4cd761585b888706a36a6eed7436a8f0476dbf)]:
  - @clerk/shared@1.0.0
  - @clerk/types@3.57.0

## 4.26.6

### Patch Changes

- Updated dependencies [[`9ca215702`](https://github.com/clerk/javascript/commit/9ca215702d1b816217d2c06c812f7d653ec2da11)]:
  - @clerk/types@3.56.1

## 4.26.5

### Patch Changes

- Fix methods in clerk-js that consumede paginated endpoints in order to retrieve single resources. ([#1871](https://github.com/clerk/javascript/pull/1871)) by [@panteliselef](https://github.com/panteliselef)

- Updated dependencies [[`35be8709d`](https://github.com/clerk/javascript/commit/35be8709d88f1d1eef043acdba4d49b07578c7b2), [`e38488c92`](https://github.com/clerk/javascript/commit/e38488c929e437583296c34cde23f76218f78caf), [`a11f962bc`](https://github.com/clerk/javascript/commit/a11f962bcbcf225fb927122267de1e8f5faccf53), [`9b644d799`](https://github.com/clerk/javascript/commit/9b644d7991b8cba4b385e9443f87798cde5c9989), [`a9894b445`](https://github.com/clerk/javascript/commit/a9894b445bf1e463176b0442fb73c48f89d9fed8), [`834dadb36`](https://github.com/clerk/javascript/commit/834dadb36c30b2a8f052784de4ad1026b0083b4e), [`70f251007`](https://github.com/clerk/javascript/commit/70f2510074352206bbe7bdadf2c28ccf3c074c12), [`a46d6fe99`](https://github.com/clerk/javascript/commit/a46d6fe99bd9b80671b60347b4c35d558012200f)]:
  - @clerk/types@3.56.0
  - @clerk/shared@0.24.5

## 4.26.4

### Patch Changes

- Warn about _MagicLink_ deprecations: ([#1836](https://github.com/clerk/javascript/pull/1836)) by [@dimkl](https://github.com/dimkl)

  - `MagicLinkError`
  - `isMagicLinkError`
  - `MagicLinkErrorCode`
  - `handleMagicLinkVerification`
  - `createMagicLinkFlow`
  - `useMagicLink`

- Introduce a new property on the core Clerk singleton, `sdkMetadata`. This will be populated by each host SDK. This metadata will be used to make logging and debugging easier. ([#1857](https://github.com/clerk/javascript/pull/1857)) by [@BRKalow](https://github.com/BRKalow)

- Introduce new `*EmailLink*` helpers that will replace the `*MagicLink*` helpers. ([#1833](https://github.com/clerk/javascript/pull/1833)) by [@dimkl](https://github.com/dimkl)

  Also marked all the `*MagicLink*` as deprecated using JSDocs.

- Updated dependencies [[`977336f79`](https://github.com/clerk/javascript/commit/977336f793cd4ce5984f98dac3cedf9f5ec363f5), [`997b8e256`](https://github.com/clerk/javascript/commit/997b8e256c8f83d68d0ae4243c7ea5640573d1ae), [`91e9a55f4`](https://github.com/clerk/javascript/commit/91e9a55f4b9f1a8f8d843a788597026015ddeafd), [`91014880d`](https://github.com/clerk/javascript/commit/91014880df71c2618d0b1e513da4dd19ccd809e3), [`7f4d4b942`](https://github.com/clerk/javascript/commit/7f4d4b942e8834462cdc0976b106d9739c345f6b)]:
  - @clerk/shared@0.24.4
  - @clerk/types@3.55.0

## 4.26.3

### Patch Changes

- Make `types` the first key in all `exports` maps defined in our packages' `package.json`. The [TypeScript docs](https://www.typescriptlang.org/docs/handbook/esm-node.html#packagejson-exports-imports-and-self-referencing) recommends so, as the the `exports` map is order-based. by [@nikosdouvlis](https://github.com/nikosdouvlis)

- Apply deprecation warnings for @clerk/types: ([#1823](https://github.com/clerk/javascript/pull/1823)) by [@dimkl](https://github.com/dimkl)

  - `orgs` jwt claims
  - `apiKey`
  - `frontendApi`
  - `redirect_url`
  - `password`
  - `generateSignature`
  - `afterSwitchOrganizationUrl`
  - `profileImageUrl`

- Updated dependencies [[`1136c7c15`](https://github.com/clerk/javascript/commit/1136c7c15043ffe917b4918e9e33f55b496cd679), [`1e212c19d`](https://github.com/clerk/javascript/commit/1e212c19d1cbfbcf6bc6718f5aec0a3cb893b96f), [`1136c7c15`](https://github.com/clerk/javascript/commit/1136c7c15043ffe917b4918e9e33f55b496cd679), [`1136c7c15`](https://github.com/clerk/javascript/commit/1136c7c15043ffe917b4918e9e33f55b496cd679)]:
  - @clerk/shared@0.24.3

## 4.26.2

### Patch Changes

- Pins the internal dependency versions. This ensures that users installing our main framework SDKs will get consistent versions across all @clerk/ packages. ([#1798](https://github.com/clerk/javascript/pull/1798)) by [@BRKalow](https://github.com/BRKalow)

- Fix internal subpath imports by replacing them with top level imports. ([#1804](https://github.com/clerk/javascript/pull/1804)) by [@dimkl](https://github.com/dimkl)

- Updated dependencies [[`b59b6b75d`](https://github.com/clerk/javascript/commit/b59b6b75dc61bc4d7e61f7cca774f3731a2929b9), [`164f3aac7`](https://github.com/clerk/javascript/commit/164f3aac7928bc69301846130cc77986569d4e91), [`68259a2bb`](https://github.com/clerk/javascript/commit/68259a2bb8193befdde9101d4ec9bf305881d5e2), [`33e927c59`](https://github.com/clerk/javascript/commit/33e927c59fbf06436ff642ef9f846bd3b467e3e1), [`0636ff779`](https://github.com/clerk/javascript/commit/0636ff7799e126d1438d2738ce0e46c3b277f46a), [`9514618d6`](https://github.com/clerk/javascript/commit/9514618d65cfdde0ff011eabd41a992b61fc8dc1), [`c7c6912f3`](https://github.com/clerk/javascript/commit/c7c6912f34874467bc74104690fe9f95491cc10d), [`71bb1c7b5`](https://github.com/clerk/javascript/commit/71bb1c7b570f7b0bbc377c8104c9abcc1af4cacf)]:
  - @clerk/types@3.54.0
  - @clerk/shared@0.24.2

## 4.26.1

### Patch Changes

- Refactor our script loading logic to use a `versionSelector` helper function. No change in behavior should occur. This internal change allows versions tagged with `snapshot` and `staging` to use the exact corresponding NPM version of `@clerk/clerk-js`. ([#1780](https://github.com/clerk/javascript/pull/1780)) by [@LekoArts](https://github.com/LekoArts)

- Updated dependencies [[`cecf74d79`](https://github.com/clerk/javascript/commit/cecf74d79069662d25f73e4745aa01348d398afb)]:
  - @clerk/shared@0.24.1

## 4.26.0

### Minor Changes

- `<SignIn/>`, `<SignUp/>`, `<RedirectToSignin/>`, `<RedirectToSignUp/>`, `clerk.redirectToSignIn()` and `clerk.redirectToSignUp()` now accept the `initialValues` option, which will prefill the appropriate form fields with the values provided. ([#1701](https://github.com/clerk/javascript/pull/1701)) by [@desiprisg](https://github.com/desiprisg)

### Patch Changes

- Apply deprecation warnings for `@clerk/clerk-react`: ([#1788](https://github.com/clerk/javascript/pull/1788)) by [@dimkl](https://github.com/dimkl)

  - `setSession`

- Updated dependencies [[`7ffa6fac3`](https://github.com/clerk/javascript/commit/7ffa6fac3762f6fb130ba2f2fcaa28e52b36b3b4), [`5c8754239`](https://github.com/clerk/javascript/commit/5c8754239e9ef13656fb73f30c9c6a6187b9aa81), [`2f6a6ac99`](https://github.com/clerk/javascript/commit/2f6a6ac9991469bf8532019bb22ff50adecdb434), [`753f7bbda`](https://github.com/clerk/javascript/commit/753f7bbda9bbb7444f96222a3b6cae815a09058f), [`55c8ebd39`](https://github.com/clerk/javascript/commit/55c8ebd390dd88036aee06866009be6a50c63138)]:
  - @clerk/shared@0.24.0
  - @clerk/types@3.53.0

## 4.25.2

### Patch Changes

- Remove nested `package.json` files inside `dist/cjs` and `dist/esm` and move `sideEffects` property to top-level `package.json` file. This change won't change behavior. ([#1785](https://github.com/clerk/javascript/pull/1785)) by [@LekoArts](https://github.com/LekoArts)

- Updated dependencies [[`07ede0f95`](https://github.com/clerk/javascript/commit/07ede0f959f232f6cbecb596eb9352f8cb382cdc), [`0eb666118`](https://github.com/clerk/javascript/commit/0eb66611882e6c460cc6a6c5cfa1d9b086ec6917), [`3b85311c9`](https://github.com/clerk/javascript/commit/3b85311c9eb006f51a8642f193473a250de879fc), [`ffcc78c06`](https://github.com/clerk/javascript/commit/ffcc78c062d067738f617ea9b491c1d45677148c), [`c61ddf5bf`](https://github.com/clerk/javascript/commit/c61ddf5bf2664e38bbaba6572d421adac8a2eff7), [`0366e0b20`](https://github.com/clerk/javascript/commit/0366e0b208e9086896562af94f24cdbd401c702c)]:
  - @clerk/shared@0.23.1
  - @clerk/types@3.52.1

## 4.25.1

### Patch Changes

- Updated dependencies [[`6706b154c`](https://github.com/clerk/javascript/commit/6706b154c0b41356c7feeb19c6340160a06466e5), [`086a2e0b7`](https://github.com/clerk/javascript/commit/086a2e0b7e71a9919393ca43efedbf3718ea5fe4)]:
  - @clerk/shared@0.23.0

## 4.25.0

### Minor Changes

- Introduce the new brand-new component OrganizationList ([#1692](https://github.com/clerk/javascript/pull/1692)) by [@panteliselef](https://github.com/panteliselef)

  - Lists all the memberships, invitations or suggestions an active user may have
  - Powered by our `useOrganizationList` react hook

### Patch Changes

- Change `README` to include updated links to issue templates and update Discord link. ([#1750](https://github.com/clerk/javascript/pull/1750)) by [@LekoArts](https://github.com/LekoArts)

- Updated dependencies [[`e99df0a0d`](https://github.com/clerk/javascript/commit/e99df0a0de8ab91e9de4d32dfab46ad562f510d3), [`4327b91f9`](https://github.com/clerk/javascript/commit/4327b91f9ed65b440afaa5f76a6231aeacd3541a), [`8b9a7a360`](https://github.com/clerk/javascript/commit/8b9a7a36003f1b8622f444a139a811f1c35ca813), [`30bb9eccb`](https://github.com/clerk/javascript/commit/30bb9eccb95632fb1de02b756e818118ca6324f7), [`01b024c57`](https://github.com/clerk/javascript/commit/01b024c57c80ae00d83801fe90b2992111dc1a68)]:
  - @clerk/types@3.52.0
  - @clerk/shared@0.22.1

## 4.24.2

### Patch Changes

- Updated dependencies [[`463ff84f5`](https://github.com/clerk/javascript/commit/463ff84f5bfb7114102ca6cb5a2ea2fce705164c), [`1426e5eb3`](https://github.com/clerk/javascript/commit/1426e5eb3730bb79e2ec5341fa4347d7fa957739)]:
  - @clerk/types@3.51.0

## 4.24.1

### Patch Changes

- Support swapping the Clerk publishableKey at runtime to allow users to toggle the instance being used. ([#1655](https://github.com/clerk/javascript/pull/1655)) by [@BRKalow](https://github.com/BRKalow)

## 4.24.0

### Minor Changes

- Introduces userInvitations from `useOrganizationList` ([#1520](https://github.com/clerk/javascript/pull/1520)) by [@panteliselef](https://github.com/panteliselef)

  `userInvitations` is a paginated list of data. It can be used to create Paginated tables or Infinite lists.

### Patch Changes

- Updated dependencies [[`96cc1921c`](https://github.com/clerk/javascript/commit/96cc1921cac20442f19510137ee0100df5f8a0f4), [`8d1e7d76d`](https://github.com/clerk/javascript/commit/8d1e7d76de40c0ecb367c6745094dd0a75f764b3), [`435d2cff5`](https://github.com/clerk/javascript/commit/435d2cff5dfc86c58690d3f0d843f567ac4f3c04), [`8873841fc`](https://github.com/clerk/javascript/commit/8873841fcbb96f31aaeb8a12a0ce1d90512986d4), [`0a5f632f8`](https://github.com/clerk/javascript/commit/0a5f632f83bb4dae4cc82718dc86b7df3a125a56), [`34da40a50`](https://github.com/clerk/javascript/commit/34da40a5035b37eb365c6cb273e25c4d3bcf7161), [`3158752c7`](https://github.com/clerk/javascript/commit/3158752c73b9266775f954d3adaf43c66ba8b2e8), [`8538cd0c1`](https://github.com/clerk/javascript/commit/8538cd0c1e2ee2e38bd11079735a2ffc6738f71b), [`a412a5014`](https://github.com/clerk/javascript/commit/a412a501426f5d7a32284fda47efe48a04b5d38e), [`4ea30e883`](https://github.com/clerk/javascript/commit/4ea30e883a4f5c19cdde3424bf02afa99e2bc86d), [`86de584dd`](https://github.com/clerk/javascript/commit/86de584ddf1c22ec99852b983a92386e5542613c), [`e02a1aff2`](https://github.com/clerk/javascript/commit/e02a1aff2d4b1478601a2e7b598d600ab3902169), [`09bfb793e`](https://github.com/clerk/javascript/commit/09bfb793ee54d50eb54ef4e3a5eb385ea2f2fb54), [`b2296d630`](https://github.com/clerk/javascript/commit/b2296d6304e1ca31a35450e0c67a12555c0142f9), [`52ce79108`](https://github.com/clerk/javascript/commit/52ce79108fb5cb4fc84bf4f2df3e3dc748ee4eb3), [`4764e40c7`](https://github.com/clerk/javascript/commit/4764e40c7e858803fc6379dec20fcf687dcaed64), [`1e117beec`](https://github.com/clerk/javascript/commit/1e117beeca53f27d8e9f58f2a724fbc8a7d54021), [`89bc5de04`](https://github.com/clerk/javascript/commit/89bc5de04aafa9832d4d1b5f816af2340acd14d4)]:
  - @clerk/shared@0.22.0
  - @clerk/types@3.50.0

## 4.23.2

### Patch Changes

- Updated dependencies [[`ea95525a4`](https://github.com/clerk/javascript/commit/ea95525a423bcc89bc9e210c2d29c78e5a6c1210), [`24a46ae7e`](https://github.com/clerk/javascript/commit/24a46ae7e038b56197dc56a535c05e698c5bf249), [`d433b83b9`](https://github.com/clerk/javascript/commit/d433b83b92c61752917f62cc410a774813f38fd7), [`5e1a09df4`](https://github.com/clerk/javascript/commit/5e1a09df4e905ddd887d64c7e8cab10fb4beb3ec), [`0a59e122d`](https://github.com/clerk/javascript/commit/0a59e122d12b672f111a43ef3897061bfd9bdb52)]:
  - @clerk/types@3.49.0
  - @clerk/shared@0.21.0

## 4.23.1

### Patch Changes

- Updated dependencies [[`6fa4768dc`](https://github.com/clerk/javascript/commit/6fa4768dc6b261026d6e75d84c9ade1f389fe0d3)]:
  - @clerk/types@3.48.1

## 4.23.0

### Minor Changes

- Add unsafeMetadata prop to the SignUp component ([#1464](https://github.com/clerk/javascript/pull/1464)) by [@tmilewski](https://github.com/tmilewski)

### Patch Changes

- Updated dependencies [[`2a9d83280`](https://github.com/clerk/javascript/commit/2a9d8328011cb4c3e1a4c6c675cbd5a4edac4c5c)]:
  - @clerk/types@3.48.0

## 4.22.1

### Patch Changes

- Mark setSession as deprecated when it is re-exported within hooks ([#1486](https://github.com/clerk/javascript/pull/1486)) by [@panteliselef](https://github.com/panteliselef)

- Updated dependencies [[`73c9c1d0e`](https://github.com/clerk/javascript/commit/73c9c1d0e3c5f102a515e1ddda01a0a441b40d5b), [`ae9fc247a`](https://github.com/clerk/javascript/commit/ae9fc247aca5bf8211cc8e021706325a010ce9d3), [`1a151e701`](https://github.com/clerk/javascript/commit/1a151e701da80f2d5b1ba1447d6fd5f8612a4bb8), [`090bab66e`](https://github.com/clerk/javascript/commit/090bab66e295bff2358115d2cbd3ed0e603b5ff5), [`5ecbb0a37`](https://github.com/clerk/javascript/commit/5ecbb0a37e99fa2099629c573951c7735d5f0810), [`592911196`](https://github.com/clerk/javascript/commit/5929111966811ac578019a9c1dda03b09eda72a8)]:
  - @clerk/types@3.47.0
  - @clerk/shared@0.20.0

## 4.22.0

### Minor Changes

- Update IsomorphicClerk#addListener to correctly return an unsubscribe method ([#1452](https://github.com/clerk/javascript/pull/1452)) by [@dimkl](https://github.com/dimkl)

## 4.21.1

### Patch Changes

- Populate `openCreateOrganization` return from the `useClerk()` hook ([#1435](https://github.com/clerk/javascript/pull/1435)) by [@panteliselef](https://github.com/panteliselef)

## 4.21.0

### Minor Changes

- Fix `global is not defined` error when using Vite + React by [@anagstef](https://github.com/anagstef)

## 4.20.6

### Patch Changes

- Updated dependencies [[`30f8ad18a`](https://github.com/clerk/javascript/commit/30f8ad18a4f85ca2e3fda46e5c180b28bc8fb47c)]:
  - @clerk/types@3.46.1

## 4.20.5

### Patch Changes

- Updated dependencies [[`bfb3af28`](https://github.com/clerk/javascript/commit/bfb3af28eb69d47e31f2b846d1ecc309fd885704)]:
  - @clerk/types@3.46.0

## 4.20.4

### Patch Changes

- Updated dependencies [[`11954816`](https://github.com/clerk/javascript/commit/119548164a1757b878027019c20a688d312b1cfd), [`32148490`](https://github.com/clerk/javascript/commit/32148490b813028412af0467e342aa85227cb4d2)]:
  - @clerk/types@3.45.0

## 4.20.3

### Patch Changes

- Updated dependencies [[`17cc14ec`](https://github.com/clerk/javascript/commit/17cc14ec64ed292239ee782662171a4a8cbd9e87)]:
  - @clerk/types@3.44.0

## 4.20.2

### Patch Changes

- Updated dependencies [[`9651658c`](https://github.com/clerk/javascript/commit/9651658c2ab00108ffcb9679cd119488c41ec521), [`4e1bb2bd`](https://github.com/clerk/javascript/commit/4e1bb2bd1f3cc933b1e8422849119e0aa16fdaa6)]:
  - @clerk/types@3.43.0

## 4.20.1

### Patch Changes

- Updated dependencies [[`59bc649a`](https://github.com/clerk/javascript/commit/59bc649a92316f5d6ade00f3cd52a9b46dcdc401)]:
  - @clerk/shared@0.19.1

## 4.20.0

### Minor Changes

- Export error helpers from the shared package to the framework specific packages ([#1308](https://github.com/clerk/javascript/pull/1308)) by [@desiprisg](https://github.com/desiprisg)

### Patch Changes

- Resolve all reported ESM build issues by [@nikosdouvlis](https://github.com/nikosdouvlis)

- Updated dependencies [[`7af91bc3`](https://github.com/clerk/javascript/commit/7af91bc3ecc25cba04968b491e1e3c6ec32c18af), [`c42b4ac0`](https://github.com/clerk/javascript/commit/c42b4ac02d7ab7022a06b8f484e057999c6d7963), [`6f3d4305`](https://github.com/clerk/javascript/commit/6f3d43055690db1d69a356503a0a45dc948beaef)]:
  - @clerk/shared@0.19.0
  - @clerk/types@3.42.0

## 4.19.0

### Minor Changes

- ESM/CJS support for `@clerk/clerk-react` by [@nikosdouvlis](https://github.com/nikosdouvlis)

  Changes that should affect users and OS contributors:

  - Better source map support for `@clerk/clerk-react`, `@clerk/shared`. This affects anyone developing in our monorepo or anyone using a debugger with Clerk installed in their app.
  - Easier node_modules debugging as `@clerk/clerk-react`, `@clerk/shared` and `@clerk/nextjs` are no longer getting bundled as a single-file package. This also improves error logging in nextjs a lot, as nextjs usually logs the line that threw the error - a minified, single-file package, usually consists of a very long single-line module, so logging error in NextJS wasn't ideal.
  - Headless clerk-js bundle size reduced by ~10kb, normal clerk-ks by ~6kb
  - A new `clerkJSVersion` prop has been added on ClerkProvider allowing to fetch a specific clerk-js version.

### Patch Changes

- Updated dependencies [[`b66ea0a5`](https://github.com/clerk/javascript/commit/b66ea0a5aea0d6801e03a1426a0db69921b7b0e3), [`b66ea0a5`](https://github.com/clerk/javascript/commit/b66ea0a5aea0d6801e03a1426a0db69921b7b0e3), [`b66ea0a5`](https://github.com/clerk/javascript/commit/b66ea0a5aea0d6801e03a1426a0db69921b7b0e3), [`b66ea0a5`](https://github.com/clerk/javascript/commit/b66ea0a5aea0d6801e03a1426a0db69921b7b0e3)]:
  - @clerk/types@3.41.1
  - @clerk/shared@0.18.0

## [4.18.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.18.0-staging.1...@clerk/clerk-react@4.18.0) (2023-06-03)

**Note:** Version bump only for package @clerk/clerk-react

## [4.17.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.17.0-staging.0...@clerk/clerk-react@4.17.0) (2023-05-26)

**Note:** Version bump only for package @clerk/clerk-react

### [4.16.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.16.3-staging.2...@clerk/clerk-react@4.16.3) (2023-05-23)

**Note:** Version bump only for package @clerk/clerk-react

### [4.16.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.16.2-staging.0...@clerk/clerk-react@4.16.2) (2023-05-18)

**Note:** Version bump only for package @clerk/clerk-react

### [4.16.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.16.1-staging.1...@clerk/clerk-react@4.16.1) (2023-05-17)

**Note:** Version bump only for package @clerk/clerk-react

## [4.16.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.16.0-staging.2...@clerk/clerk-react@4.16.0) (2023-05-15)

**Note:** Version bump only for package @clerk/clerk-react

### [4.15.4](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.15.4-staging.5...@clerk/clerk-react@4.15.4) (2023-05-04)

**Note:** Version bump only for package @clerk/clerk-react

### [4.15.4-staging.5](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.15.4-staging.4...@clerk/clerk-react@4.15.4-staging.5) (2023-05-04)

**Note:** Version bump only for package @clerk/clerk-react

### [4.15.4-staging.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.15.4-staging.2...@clerk/clerk-react@4.15.4-staging.3) (2023-05-02)

**Note:** Version bump only for package @clerk/clerk-react

### [4.15.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.15.3-staging.0...@clerk/clerk-react@4.15.3) (2023-04-19)

**Note:** Version bump only for package @clerk/clerk-react

### [4.15.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.15.1...@clerk/clerk-react@4.15.2) (2023-04-19)

**Note:** Version bump only for package @clerk/clerk-react

### [4.15.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.15.1-staging.0...@clerk/clerk-react@4.15.1) (2023-04-12)

**Note:** Version bump only for package @clerk/clerk-react

## [4.15.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.15.0-staging.0...@clerk/clerk-react@4.15.0) (2023-04-11)

**Note:** Version bump only for package @clerk/clerk-react

### [4.14.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.14.2-staging.0...@clerk/clerk-react@4.14.2) (2023-04-06)

**Note:** Version bump only for package @clerk/clerk-react

### [4.14.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.14.1-staging.3...@clerk/clerk-react@4.14.1) (2023-03-31)

**Note:** Version bump only for package @clerk/clerk-react

### [4.14.1-staging.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.14.1-staging.2...@clerk/clerk-react@4.14.1-staging.3) (2023-03-31)

### Bug Fixes

- **clerk-react:** Check for window in isomorphicClerk ([fe82852](https://github.com/clerk/javascript/commit/fe828523c2bbdc2f3fc35ad5e30aea52b5438922))

## [4.14.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.14.0-staging.1...@clerk/clerk-react@4.14.0) (2023-03-29)

**Note:** Version bump only for package @clerk/clerk-react

### [4.12.4](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.12.4-staging.2...@clerk/clerk-react@4.12.4) (2023-03-10)

**Note:** Version bump only for package @clerk/clerk-react

### [4.12.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.12.3-staging.0...@clerk/clerk-react@4.12.3) (2023-03-09)

**Note:** Version bump only for package @clerk/clerk-react

### [4.12.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.12.2-staging.0...@clerk/clerk-react@4.12.2) (2023-03-07)

**Note:** Version bump only for package @clerk/clerk-react

### [4.12.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.12.1-staging.1...@clerk/clerk-react@4.12.1) (2023-03-03)

**Note:** Version bump only for package @clerk/clerk-react

## [4.12.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.12.0-staging.0...@clerk/clerk-react@4.12.0) (2023-03-01)

**Note:** Version bump only for package @clerk/clerk-react

### [4.11.6](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.11.6-staging.0...@clerk/clerk-react@4.11.6) (2023-02-25)

**Note:** Version bump only for package @clerk/clerk-react

### [4.11.5](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.11.5-staging.3...@clerk/clerk-react@4.11.5) (2023-02-24)

**Note:** Version bump only for package @clerk/clerk-react

### [4.11.5-staging.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.11.5-staging.1...@clerk/clerk-react@4.11.5-staging.2) (2023-02-22)

**Note:** Version bump only for package @clerk/clerk-react

### [4.11.4](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.11.4-staging.0...@clerk/clerk-react@4.11.4) (2023-02-17)

**Note:** Version bump only for package @clerk/clerk-react

### [4.11.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.11.3-staging.2...@clerk/clerk-react@4.11.3) (2023-02-15)

**Note:** Version bump only for package @clerk/clerk-react

### [4.11.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.11.2-staging.1...@clerk/clerk-react@4.11.2) (2023-02-10)

**Note:** Version bump only for package @clerk/clerk-react

### [4.11.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.11.1-staging.0...@clerk/clerk-react@4.11.1) (2023-02-07)

**Note:** Version bump only for package @clerk/clerk-react

### [4.11.1-staging.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.11.0-staging.1...@clerk/clerk-react@4.11.1-staging.0) (2023-02-07)

**Note:** Version bump only for package @clerk/clerk-react

## [4.11.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.11.0-staging.1...@clerk/clerk-react@4.11.0) (2023-02-07)

**Note:** Version bump only for package @clerk/clerk-react

## [4.10.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.10.0-staging.0...@clerk/clerk-react@4.10.0) (2023-02-01)

**Note:** Version bump only for package @clerk/clerk-react

## [4.9.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.9.0-staging.1...@clerk/clerk-react@4.9.0) (2023-01-27)

**Note:** Version bump only for package @clerk/clerk-react

### [4.8.4](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.8.4-staging.1...@clerk/clerk-react@4.8.4) (2023-01-24)

**Note:** Version bump only for package @clerk/clerk-react

### [4.8.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.8.2...@clerk/clerk-react@4.8.3) (2023-01-20)

### Bug Fixes

- **nextjs,types:** Make frontendApi or publishableKey mutually exclusive but optional ([953c276](https://github.com/clerk/javascript/commit/953c27622ba24054172d6f4178bd5af50f73fa36))

### [4.8.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.8.1...@clerk/clerk-react@4.8.2) (2023-01-19)

### Bug Fixes

- **clerk-react:** Do not throw missing key error if a Clerk instance is used ([a300016](https://github.com/clerk/javascript/commit/a3000164483e7ed947d448f7593e0ce4dd110db3))
- **clerk-react:** Do not throw missing key error in isomorphicClerk.load ([8b3b763](https://github.com/clerk/javascript/commit/8b3b763ed67d3af101573627fc7b00fb0a526b9b))

### [4.8.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.8.0...@clerk/clerk-react@4.8.1) (2023-01-17)

### Bug Fixes

- **clerk-react:** Add data-clerk-publishable-key attribute only when PK is available ([8d44f54](https://github.com/clerk/javascript/commit/8d44f54434754e2c31b4a77b58a28ae969ce5a09))

## [4.8.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.8.0-staging.4...@clerk/clerk-react@4.8.0) (2023-01-17)

**Note:** Version bump only for package @clerk/clerk-react

## [4.7.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.7.0-staging.1...@clerk/clerk-react@4.7.0) (2022-12-19)

**Note:** Version bump only for package @clerk/clerk-react

### [4.6.4](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.6.4-staging.0...@clerk/clerk-react@4.6.4) (2022-12-13)

**Note:** Version bump only for package @clerk/clerk-react

### [4.6.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.6.2...@clerk/clerk-react@4.6.3) (2022-12-12)

**Note:** Version bump only for package @clerk/clerk-react

### [4.6.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.6.2-staging.1...@clerk/clerk-react@4.6.2) (2022-12-09)

**Note:** Version bump only for package @clerk/clerk-react

### [4.6.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.6.0...@clerk/clerk-react@4.6.1) (2022-12-08)

### Reverts

- Revert "feat(clerk-js,types): Terse paths parameters (#572)" (#603) ([d535eac](https://github.com/clerk/javascript/commit/d535eace3d7733ce3b848bb05f1b0c02e5faf15d)), closes [#572](https://github.com/clerk/javascript/issues/572) [#603](https://github.com/clerk/javascript/issues/603)

## [4.6.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.6.0-staging.0...@clerk/clerk-react@4.6.0) (2022-12-08)

**Note:** Version bump only for package @clerk/clerk-react

### [4.5.5](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.5.5-staging.0...@clerk/clerk-react@4.5.5) (2022-12-02)

**Note:** Version bump only for package @clerk/clerk-react

### [4.5.4](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.5.4-staging.5...@clerk/clerk-react@4.5.4) (2022-11-30)

**Note:** Version bump only for package @clerk/clerk-react

### [4.5.4-staging.5](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.5.4-staging.4...@clerk/clerk-react@4.5.4-staging.5) (2022-11-29)

**Note:** Version bump only for package @clerk/clerk-react

### [4.5.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.5.3-staging.0...@clerk/clerk-react@4.5.3) (2022-11-25)

**Note:** Version bump only for package @clerk/clerk-react

### [4.5.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.5.2-staging.0...@clerk/clerk-react@4.5.2) (2022-11-25)

**Note:** Version bump only for package @clerk/clerk-react

### [4.5.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.5.0...@clerk/clerk-react@4.5.1) (2022-11-23)

**Note:** Version bump only for package @clerk/clerk-react

## [4.5.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.5.0-staging.3...@clerk/clerk-react@4.5.0) (2022-11-22)

**Note:** Version bump only for package @clerk/clerk-react

## [4.5.0-staging.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.5.0-staging.2...@clerk/clerk-react@4.5.0-staging.3) (2022-11-21)

### Bug Fixes

- **clerk-react:** Add HeadlessBrowserClerk ([4236147](https://github.com/clerk/javascript/commit/4236147201b32e3f1d60ebbe2c36de8e89e5e2f6))

## [4.5.0-staging.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.5.0-staging.1...@clerk/clerk-react@4.5.0-staging.2) (2022-11-21)

### Features

- **clerk-js:** Improve DX for headless import ([8d64310](https://github.com/clerk/javascript/commit/8d64310ab23c6e21f8a687e503521245acad8211))

### [4.4.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.4.3-staging.1...@clerk/clerk-react@4.4.3) (2022-11-18)

**Note:** Version bump only for package @clerk/clerk-react

### [4.4.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.4.2-staging.3...@clerk/clerk-react@4.4.2) (2022-11-15)

**Note:** Version bump only for package @clerk/clerk-react

### [4.4.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.4.1-staging.1...@clerk/clerk-react@4.4.1) (2022-11-10)

**Note:** Version bump only for package @clerk/clerk-react

## [4.4.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.4.0-staging.1...@clerk/clerk-react@4.4.0) (2022-11-05)

**Note:** Version bump only for package @clerk/clerk-react

### [4.3.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.3.3-staging.7...@clerk/clerk-react@4.3.3) (2022-11-03)

**Note:** Version bump only for package @clerk/clerk-react

### [4.3.3-staging.4](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.3.3-staging.3...@clerk/clerk-react@4.3.3-staging.4) (2022-11-02)

**Note:** Version bump only for package @clerk/clerk-react

### [4.3.3-staging.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.3.3-staging.1...@clerk/clerk-react@4.3.3-staging.3) (2022-11-02)

**Note:** Version bump only for package @clerk/clerk-react

### [4.3.3-staging.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.3.3-staging.1...@clerk/clerk-react@4.3.3-staging.2) (2022-11-02)

**Note:** Version bump only for package @clerk/clerk-react

### [4.3.3-staging.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.3.2...@clerk/clerk-react@4.3.3-staging.1) (2022-11-02)

### Bug Fixes

- **clerk-react:** Add frontendAPI on window as a fallback ([06f8b37](https://github.com/clerk/javascript/commit/06f8b3755cda83455e301591badaf16e1d59dd33))

### [4.3.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.3.2-staging.0...@clerk/clerk-react@4.3.2) (2022-10-24)

**Note:** Version bump only for package @clerk/clerk-react

### [4.3.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.3.0...@clerk/clerk-react@4.3.1) (2022-10-14)

**Note:** Version bump only for package @clerk/clerk-react

## [4.3.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.3.0-staging.2...@clerk/clerk-react@4.3.0) (2022-10-14)

**Note:** Version bump only for package @clerk/clerk-react

## [4.3.0-staging.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.2.6...@clerk/clerk-react@4.3.0-staging.1) (2022-10-13)

### Features

- **clerk-js,clerk-react,types:** Wire up `OrganizationSwitcher` and `OrganizationProfile` ([1e34e69](https://github.com/clerk/javascript/commit/1e34e6986ee49aeb9ca9f72cdc5d799d6611b53f))

### [4.2.6](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.2.6-staging.0...@clerk/clerk-react@4.2.6) (2022-10-07)

**Note:** Version bump only for package @clerk/clerk-react

### [4.2.5](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.2.5-staging.0...@clerk/clerk-react@4.2.5) (2022-10-05)

**Note:** Version bump only for package @clerk/clerk-react

### [4.2.4](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.2.4-staging.3...@clerk/clerk-react@4.2.4) (2022-10-03)

**Note:** Version bump only for package @clerk/clerk-react

### [4.2.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.2.3-staging.4...@clerk/clerk-react@4.2.3) (2022-09-29)

**Note:** Version bump only for package @clerk/clerk-react

### [4.2.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.2.1...@clerk/clerk-react@4.2.2) (2022-09-25)

**Note:** Version bump only for package @clerk/clerk-react

### [4.2.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.2.1-staging.2...@clerk/clerk-react@4.2.1) (2022-09-24)

**Note:** Version bump only for package @clerk/clerk-react

### [4.2.1-staging.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.2.1-staging.0...@clerk/clerk-react@4.2.1-staging.1) (2022-09-24)

**Note:** Version bump only for package @clerk/clerk-react

## [4.2.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.2.0-staging.0...@clerk/clerk-react@4.2.0) (2022-09-22)

**Note:** Version bump only for package @clerk/clerk-react

### [4.1.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.1.0-staging.4...@clerk/clerk-react@4.1.1) (2022-09-19)

**Note:** Version bump only for package @clerk/clerk-react

## [4.1.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.1.0-staging.4...@clerk/clerk-react@4.1.0) (2022-09-16)

**Note:** Version bump only for package @clerk/clerk-react

### [4.0.10](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.0.10-staging.0...@clerk/clerk-react@4.0.10) (2022-09-07)

**Note:** Version bump only for package @clerk/clerk-react

### [4.0.9](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.0.9-staging.0...@clerk/clerk-react@4.0.9) (2022-09-07)

**Note:** Version bump only for package @clerk/clerk-react

### [4.0.8](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.0.8-staging.0...@clerk/clerk-react@4.0.8) (2022-08-29)

**Note:** Version bump only for package @clerk/clerk-react

### [4.0.7](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.0.7-staging.2...@clerk/clerk-react@4.0.7) (2022-08-29)

**Note:** Version bump only for package @clerk/clerk-react

### [4.0.6](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.0.6-staging.0...@clerk/clerk-react@4.0.6) (2022-08-24)

**Note:** Version bump only for package @clerk/clerk-react

### [4.0.5](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.0.4...@clerk/clerk-react@4.0.5) (2022-08-18)

**Note:** Version bump only for package @clerk/clerk-react

### [4.0.4](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.0.4-staging.0...@clerk/clerk-react@4.0.4) (2022-08-18)

**Note:** Version bump only for package @clerk/clerk-react

### [4.0.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.0.2...@clerk/clerk-react@4.0.3) (2022-08-16)

**Note:** Version bump only for package @clerk/clerk-react

### [4.0.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.0.2-staging.0...@clerk/clerk-react@4.0.2) (2022-08-09)

**Note:** Version bump only for package @clerk/clerk-react

### [4.0.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.0.0...@clerk/clerk-react@4.0.1) (2022-08-07)

**Note:** Version bump only for package @clerk/clerk-react

## [4.0.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@4.0.0-staging.1...@clerk/clerk-react@4.0.0) (2022-08-05)

**Note:** Version bump only for package @clerk/clerk-react

### [3.5.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.5.0...@clerk/clerk-react@3.5.1) (2022-08-04)

**Note:** Version bump only for package @clerk/clerk-react

## [3.5.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.4.5...@clerk/clerk-react@3.5.0) (2022-07-13)

### Features

- **nextjs:** Add req.organization access on gssp ([d064448](https://github.com/clerk/javascript/commit/d0644489a71e06df0e751c615b0d03d77967aab2))
- **types,clerk-react,nextjs:** Add loadOrg option for Next.js withServerSideAuth middleware ([0889bde](https://github.com/clerk/javascript/commit/0889bde9bc7f9e1a5d4c1e706c49212e1f7b36f4))

### [3.4.5](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.4.5-staging.0...@clerk/clerk-react@3.4.5) (2022-07-11)

**Note:** Version bump only for package @clerk/clerk-react

### [3.4.4](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.4.3...@clerk/clerk-react@3.4.4) (2022-07-07)

**Note:** Version bump only for package @clerk/clerk-react

### [3.4.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.4.2...@clerk/clerk-react@3.4.3) (2022-07-06)

**Note:** Version bump only for package @clerk/clerk-react

### [3.4.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.4.1...@clerk/clerk-react@3.4.2) (2022-07-01)

**Note:** Version bump only for package @clerk/clerk-react

### [3.4.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.4.0...@clerk/clerk-react@3.4.1) (2022-06-24)

**Note:** Version bump only for package @clerk/clerk-react

## [3.4.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.4.0-staging.0...@clerk/clerk-react@3.4.0) (2022-06-16)

**Note:** Version bump only for package @clerk/clerk-react

## [3.3.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.3.0-staging.4...@clerk/clerk-react@3.3.0) (2022-06-06)

**Note:** Version bump only for package @clerk/clerk-react

## [3.3.0-staging.4](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.3.0-staging.3...@clerk/clerk-react@3.3.0-staging.4) (2022-06-03)

### Bug Fixes

- **clerk-react:** Correct annotations in isomorphicClerk for setSession ([56abc04](https://github.com/clerk/javascript/commit/56abc04e82ed4adf9f1c366620e08526d52da0f5))

## [3.3.0-staging.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.3.0-staging.2...@clerk/clerk-react@3.3.0-staging.3) (2022-06-03)

**Note:** Version bump only for package @clerk/clerk-react

## [3.3.0-staging.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.3.0-staging.1...@clerk/clerk-react@3.3.0-staging.2) (2022-06-02)

**Note:** Version bump only for package @clerk/clerk-react

## [3.3.0-staging.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.3.0-staging.0...@clerk/clerk-react@3.3.0-staging.1) (2022-06-01)

### Bug Fixes

- **clerk-js:** Emit changes in organization to listeners ([798ee62](https://github.com/clerk/javascript/commit/798ee622e7961d3aa7f8842184f5fadbcfed517f))

### [3.2.18](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.18-staging.1...@clerk/clerk-react@3.2.18) (2022-05-20)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.18-staging.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.17...@clerk/clerk-react@3.2.18-staging.1) (2022-05-18)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.18-staging.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.17...@clerk/clerk-react@3.2.18-staging.0) (2022-05-17)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.17](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.14...@clerk/clerk-react@3.2.17) (2022-05-13)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.16](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.14...@clerk/clerk-react@3.2.16) (2022-05-12)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.15](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.14...@clerk/clerk-react@3.2.15) (2022-05-12)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.14](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.14-staging.0...@clerk/clerk-react@3.2.14) (2022-05-11)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.13](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.12...@clerk/clerk-react@3.2.13) (2022-05-06)

### Bug Fixes

- **clerk-react:** Make getOrCreateInstance handle both SSR and CSR instantiation ([d22b808](https://github.com/clerk/javascript/commit/d22b808cf9eee2570be83f247fd25543a0202fd6))
- **clerk-react:** Make isomorphicClerk loading idempotent ([91b6217](https://github.com/clerk/javascript/commit/91b62175cadd82b38747cc6d7a0216f42c89b5fe))
- **clerk-react:** Pass initialState directly to ClerkContextProvider ([9e55b7c](https://github.com/clerk/javascript/commit/9e55b7c2cafdcbcf6d8c210e668a22e07580cdb6))

### [3.2.13-staging.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.12...@clerk/clerk-react@3.2.13-staging.0) (2022-05-05)

### Bug Fixes

- **clerk-react:** Make getOrCreateInstance handle both SSR and CSR instantiation ([8f9481c](https://github.com/clerk/javascript/commit/8f9481cf088c63b3cd3192cb1396596a98b11980))
- **clerk-react:** Make isomorphicClerk loading idempotent ([221919c](https://github.com/clerk/javascript/commit/221919ceab5ad1631073f8ba7564c869ebf7a890))
- **clerk-react:** Pass initialState directly to ClerkContextProvider ([cb777d4](https://github.com/clerk/javascript/commit/cb777d4651710fda248036fdc5398e0dac7aa337))

### [3.2.12](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.12-staging.0...@clerk/clerk-react@3.2.12) (2022-05-05)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.11](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.11-staging.0...@clerk/clerk-react@3.2.11) (2022-04-28)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.10](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.9...@clerk/clerk-react@3.2.10) (2022-04-27)

### Bug Fixes

- **clerk-react:** Define global in window if not defined ([48da3ac](https://github.com/clerk/javascript/commit/48da3ac087406a97380f28c4c9e1057e04eb106f))

### [3.2.9](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.8...@clerk/clerk-react@3.2.9) (2022-04-27)

### Bug Fixes

- **clerk-react:** Type updates for React 18 ([6d5c0bf](https://github.com/clerk/javascript/commit/6d5c0bf33e17885cacd97320c385cf06ca4f5adf))

### [3.2.8](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.8-staging.1...@clerk/clerk-react@3.2.8) (2022-04-19)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.8-staging.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.8-staging.0...@clerk/clerk-react@3.2.8-staging.1) (2022-04-19)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.7](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.7-alpha.0...@clerk/clerk-react@3.2.7) (2022-04-18)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.7-alpha.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.6...@clerk/clerk-react@3.2.7-alpha.0) (2022-04-15)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.6](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.5...@clerk/clerk-react@3.2.6) (2022-04-15)

### Bug Fixes

- **clerk-react:** Explicitly type children for React.FC components ([#199](https://github.com/clerk/javascript/issues/199)) ([9fb2ce4](https://github.com/clerk/javascript/commit/9fb2ce46e1e7f60fd31deae43fd1afaf5a1abc62))

### [3.2.5](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.5-staging.0...@clerk/clerk-react@3.2.5) (2022-04-15)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.4](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.4-staging.0...@clerk/clerk-react@3.2.4) (2022-04-13)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.2...@clerk/clerk-react@3.2.3) (2022-04-07)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.2-staging.0...@clerk/clerk-react@3.2.2) (2022-04-04)

**Note:** Version bump only for package @clerk/clerk-react

### [3.2.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.1-staging.0...@clerk/clerk-react@3.2.1) (2022-03-28)

**Note:** Version bump only for package @clerk/clerk-react

## [3.2.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.2.0-alpha.0...@clerk/clerk-react@3.2.0) (2022-03-24)

**Note:** Version bump only for package @clerk/clerk-react

## [3.2.0-staging.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.1.2-staging.0...@clerk/clerk-react@3.2.0-staging.0) (2022-03-24)

### Features

- **types,clerk-js,backend-core,clerk-react:** Replace thrown error with null return in getToken ([d972f93](https://github.com/clerk/javascript/commit/d972f93684a39abf3619c335cc012b61d5187100))

### [3.1.1-alpha.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.1.1-staging.0...@clerk/clerk-react@3.1.1-alpha.0) (2022-03-23)

**Note:** Version bump only for package @clerk/clerk-react

## [3.1.0-alpha.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.1.0-alpha.1...@clerk/clerk-react@3.1.0-alpha.2) (2022-03-23)

**Note:** Version bump only for package @clerk/clerk-react

## [3.1.0-alpha.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.0.1-alpha.3...@clerk/clerk-react@3.1.0-alpha.1) (2022-03-23)

### Features

- **clerk-js,types:** Rename UserButton params to afterSignOutUrl, afterMultiSessionSingleSignOutUrl ([c4cb76a](https://github.com/clerk/javascript/commit/c4cb76a1133fd2308b217cacaffb086b175f6347))

## [3.1.0-alpha.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.0.1-alpha.3...@clerk/clerk-react@3.1.0-alpha.0) (2022-03-22)

**Note:** Version bump only for package @clerk/clerk-react

### [3.0.1-alpha.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.0.1-alpha.2...@clerk/clerk-react@3.0.1-alpha.3) (2022-03-22)

**Note:** Version bump only for package @clerk/clerk-react

### [3.0.1-alpha.2](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.0.1-staging.0...@clerk/clerk-react@3.0.1-alpha.2) (2022-03-22)

### Bug Fixes

- **clerk-js,clerk-react:** Move error to getToken ([d5f6b26](https://github.com/clerk/javascript/commit/d5f6b264cf58ce40c68de298b4c7c564d472001f))
- **edge:** Align react getToken ([37a03de](https://github.com/clerk/javascript/commit/37a03de81148294909719d4476b0a2ac3642813c))

### [3.0.1-alpha.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.0.1-staging.0...@clerk/clerk-react@3.0.1-alpha.1) (2022-03-20)

### Bug Fixes

- **clerk-js,clerk-react:** Move error to getToken ([d5f6b26](https://github.com/clerk/javascript/commit/d5f6b264cf58ce40c68de298b4c7c564d472001f))
- **edge:** Align react getToken ([37a03de](https://github.com/clerk/javascript/commit/37a03de81148294909719d4476b0a2ac3642813c))

### [3.0.1-alpha.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@3.0.1-staging.0...@clerk/clerk-react@3.0.1-alpha.0) (2022-03-19)

### Bug Fixes

- **clerk-js,clerk-react:** Move error to getToken ([84d21ce](https://github.com/clerk/javascript/commit/84d21ceac26843a1caa9d9d58f9c10ea2da6395e))
- **edge:** Align react getToken ([37a03de](https://github.com/clerk/javascript/commit/37a03de81148294909719d4476b0a2ac3642813c))

## [3.0.0-alpha.10](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.12.3...@clerk/clerk-react@3.0.0-alpha.10) (2022-03-11)

### Features

- **clerk-react:** Add isLoaded to `useOrganizations` hook ([#92](https://github.com/clerk/javascript/issues/92)) ([a316c7a](https://github.com/clerk/javascript/commit/a316c7a9d66f356639038ce89b5853625e44d4b7))
- **clerk-remix:** Mark clerk-remix as side-effect free to fix Remix bundling ([c57a902](https://github.com/clerk/javascript/commit/c57a9024674a61aa3f2b7e359935e42fc034ffdd))

## [3.0.0-alpha.9](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.11.4...@clerk/clerk-react@3.0.0-alpha.9) (2022-02-28)

### Features

- **clerk-remix:** Mark clerk-remix as side-effect free to fix Remix bundling ([c57a902](https://github.com/clerk/javascript/commit/c57a9024674a61aa3f2b7e359935e42fc034ffdd))

## [3.0.0-alpha.8](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.11.4...@clerk/clerk-react@3.0.0-alpha.8) (2022-02-25)

### Features

- **clerk-remix:** Mark clerk-remix as side-effect free to fix Remix bundling ([287a438](https://github.com/clerk/javascript/commit/287a4381d7ebefdf8704e2e29a75ac93f57794c8))

## [3.0.0-alpha.7](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.11.1...@clerk/clerk-react@3.0.0-alpha.7) (2022-02-18)

### Features

- **clerk-remix:** Mark clerk-remix as side-effect free to fix Remix bundling ([0d22857](https://github.com/clerk/javascript/commit/0d22857197e5d1d2edc4d4df55916009f404dbdd))

### [2.12.6](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.12.6-staging.1...@clerk/clerk-react@2.12.6) (2022-03-17)

**Note:** Version bump only for package @clerk/clerk-react

### [2.12.6-staging.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.12.6-staging.0...@clerk/clerk-react@2.12.6-staging.1) (2022-03-17)

**Note:** Version bump only for package @clerk/clerk-react

### [2.12.4](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.12.3...@clerk/clerk-react@2.12.4) (2022-03-11)

**Note:** Version bump only for package @clerk/clerk-react

### [2.12.3](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.12.3-staging.0...@clerk/clerk-react@2.12.3) (2022-03-09)

**Note:** Version bump only for package @clerk/clerk-react

### [2.12.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.12.0...@clerk/clerk-react@2.12.1) (2022-03-04)

### Bug Fixes

- **clerk-react,clerk-js,types:** Crate of API feedback fixes ([721ce72](https://github.com/clerk/javascript/commit/721ce7228c37b012891b2bec8caf290239164d05))

## [2.12.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.11.7...@clerk/clerk-react@2.12.0) (2022-03-04)

### Features

- **clerk-js,clerk-react:** GetOrganization/s hook methods, fetching mechanism alignment ([fc11087](https://github.com/clerk/javascript/commit/fc110874f9a3e056cd43c773c267409dd9b318d6))
- **clerk-js:** Add useOrganization hook ([480c422](https://github.com/clerk/javascript/commit/480c422774472fc712afdfe6ded2677b458d3ef0))
- **clerk-react,clerk-js:** Add useOrganization hook using \_\_unstable attribute ([1635132](https://github.com/clerk/javascript/commit/16351321a99945d167cbf6e6ca0efdbbbf7efe5a))

### [2.11.7](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.11.6...@clerk/clerk-react@2.11.7) (2022-03-03)

**Note:** Version bump only for package @clerk/clerk-react

### [2.11.6](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.11.5...@clerk/clerk-react@2.11.6) (2022-03-02)

**Note:** Version bump only for package @clerk/clerk-react

### [2.11.5](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.11.4...@clerk/clerk-react@2.11.5) (2022-03-01)

**Note:** Version bump only for package @clerk/clerk-react

### [2.11.4](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.11.4-staging.0...@clerk/clerk-react@2.11.4) (2022-02-24)

**Note:** Version bump only for package @clerk/clerk-react

### [2.11.4-staging.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.11.3-staging.0...@clerk/clerk-react@2.11.4-staging.0) (2022-02-24)

**Note:** Version bump only for package @clerk/clerk-react

### [2.11.3-staging.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.11.2-staging.0...@clerk/clerk-react@2.11.3-staging.0) (2022-02-17)

**Note:** Version bump only for package @clerk/clerk-react

### [2.11.2-staging.0](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.11.1...@clerk/clerk-react@2.11.2-staging.0) (2022-02-15)

**Note:** Version bump only for package @clerk/clerk-react

### [2.11.1](https://github.com/clerk/javascript/compare/@clerk/clerk-react@2.11.1-staging.0...@clerk/clerk-react@2.11.1) (2022-02-14)

**Note:** Version bump only for package @clerk/clerk-react

### 2.11.1-staging.0 (2022-02-11)

### Features

- **clerk-sdk-node:** Deprecate Session named middleware, introduce withAuth, requireAuth ([4e69553](https://github.com/clerk/javascript/commit/4e695535e41fe7c135cbf303a0d021e7b7d30f7d))
