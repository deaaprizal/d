/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import countReducer from './redux/customReducers/countReducers';
import SampleUserReducer from './redux/customReducers/sampleUserReducer'

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    countReducer,
    SampleUserReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
