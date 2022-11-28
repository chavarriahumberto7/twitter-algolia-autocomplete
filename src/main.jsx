import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import algoliaSearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-hooks'

const INDEX_NAME = 'autocomplete_twitter_accounts'

const seachClient = algoliaSearch(
  'latency',
  'a4390aa69f26de2fd0c4209ff113a4f9'
)
ReactDOM.render(
  <InstantSearch
    searchClient={seachClient}
    indexName={INDEX_NAME}
    supressExperimentalWarning
  >
    <App />
  </InstantSearch>,
  document.getElementById('root')
)
