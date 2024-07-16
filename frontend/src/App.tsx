import './App.css'
import { useExampleQueryQuery } from '@state/api'
import { ErrorBoundary } from 'react-error-boundary'

function App() {

  const {
    data,
    isLoading,
    isError,
    isSuccess
   } = useExampleQueryQuery()


  return (
    <>
      <div> 
        <ErrorBoundary fallback={<div>Issue parsing</div>}>
        {
          isLoading ?
            'Loading...' :
            isError ? 'Error'
            : isSuccess && data ? `Message: ${data.message}` : 'hmmm... something is wrong here'
        }
        </ErrorBoundary>
      </div>

    </>
  )
}

export default App
