import { Provider } from 'react-redux'
import { store } from './store/store'
import Counter  from './Counter'

function App() {

  return (
    <Provider store={store}>
      <>
      <h1 className='text-center text-2xl mt-4'>Counter with Redux-Toolkit</h1>
     <Counter/>
     </>
    </Provider>
  )
}

export default App
