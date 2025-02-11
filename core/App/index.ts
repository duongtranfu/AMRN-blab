/* eslint-disable import/no-cycle */
import type { OnboardingStyleSheet } from './screens/Onboarding'

import { Agent } from '@aries-framework/core'
import AgentProvider from '@aries-framework/react-hooks'

import indyLedgers from '../configs/ledgers/indy'

import * as components from './components'
import LoadingIndicator from './components/animated/LoadingIndicator'
import Button, { ButtonType } from './components/buttons/Button'
import CheckBoxRow from './components/inputs/CheckBoxRow'
import InfoBox, { InfoBoxType } from './components/misc/InfoBox'
import ErrorModal from './components/modals/ErrorModal'
import NetInfo from './components/network/NetInfo'
import Record from './components/record/Record'
import InfoTextBox from './components/texts/InfoTextBox'
import { ToastType } from './components/toast/BaseToast'
import toastConfig from './components/toast/ToastConfig'
import HomeContentView from './components/views/HomeContentView'
import * as contexts from './contexts'
import { AuthProvider } from './contexts/auth'
import { NetworkProvider } from './contexts/network'
import { defaultConfiguration } from './defaultConfiguration'
import RootStack from './navigators/RootStack'
import AttemptLockout from './screens/AttemptLockout'
import Developer from './screens/Developer'
import OnboardingPages from './screens/OnboardingPages'
import Splash from './screens/Splash'
import Terms from './screens/Terms'
import UseBiometry from './screens/UseBiometry'
import * as types from './types'

export { LocalStorageKeys } from './constants'
export { initLanguages, initStoredLanguage, translationResources } from './localization'
export { ConfigurationProvider, useConfiguration } from './contexts/configuration'
export { defaultState, mergeReducers, StoreProvider, StoreContext, useStore } from './contexts/store'
export { default as Store, DispatchAction, reducer } from './contexts/reducers/store'

export { ThemeProvider, useTheme } from './contexts/theme'
export { ColorPallet } from './theme'
export { theme } from './theme'
export { useAuth } from './contexts/auth'
export { NavigationTheme } from './theme'
export { testIdWithKey } from './utils/testable'
export { Screens, Stacks } from './types/navigators'
export { createStyles } from './screens/OnboardingPages'
export { statusBarStyleForColor, StatusBarStyles } from './utils/luminance'
export { BifoldError } from './types/error'

export type { Theme } from './theme'
export type { ConfigurationContext } from './contexts/configuration'
export type { GenericFn } from './types/fn'
export type { AuthenticateStackParams } from './types/navigators'
export type { OnboardingStyleSheet }
export type { WalletSecret } from './types/security'
export type { ReducerAction } from './contexts/reducers/store'
export type {
  State,
  Onboarding as OnboardingState,
  LoginAttempt as LoginAttemptState,
  Preferences as PreferencesState,
} from './types/state'

export {
  LoadingIndicator,
  indyLedgers,
  Agent,
  AgentProvider,
  AuthProvider,
  NetworkProvider,
  Button,
  ButtonType,
  CheckBoxRow,
  ErrorModal,
  InfoTextBox,
  InfoBox,
  InfoBoxType,
  ToastType,
  toastConfig,
  RootStack,
  NetInfo,
  OnboardingPages,
  Splash,
  Developer,
  Terms,
  HomeContentView,
  UseBiometry,
  AttemptLockout,
  Record,
  defaultConfiguration,
  types,
  components,
  contexts,
}
