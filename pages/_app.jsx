import { Provider } from 'react-redux';
import 'styles/globals.scss';
import store from  '../src/store'

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App