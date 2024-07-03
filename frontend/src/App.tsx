import './App.css'
import { useSelector } from 'react-redux'
import { ContentSelectors, appContent } from '@state/content'
import { useExampleTodoQuery } from '@state/api'
import { ErrorBoundary } from 'react-error-boundary'

function App() {

  const content = useSelector(ContentSelectors.selectContent) as appContent
  const {
    data: todo,
    isError,
    isSuccess
   } = useExampleTodoQuery()


  return (
    <>
      {content.data}
      <div>
        Todo:&nbsp;
        <ErrorBoundary fallback={<div>Issue parsing</div>}>
          {isSuccess ? todo.id : isError ? 'Error' : '...'}
        </ErrorBoundary>
      </div>

    </>
  )
}

export default App
