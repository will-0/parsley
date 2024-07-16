import { Card, Grid, Stack } from '@mui/joy'
import './App.css'
import { ErrorBoundary } from 'react-error-boundary'
import { useState } from 'react'
import FileArea from '@components/FileArea'

function App() {

  const [visibility, setVisibility] = useState({
    fileExplorer: true,
    outputs: true,
    codeEditor: true,
    advisor: true
  })

  return (
    <ErrorBoundary fallback={<div>Fatal Error: Please Reload</div>}>
      <Stack direction="row" spacing={'1rem'} sx={{width: "100%", height: "100%", padding: '1rem', margin: 0, boxSizing: 'border-box', textAlign: 'center'}}>
        { 
          visibility.fileExplorer && visibility.outputs && 
            <Stack spacing={'1rem'} sx={{width: "100%", height: "100%"}} >
              { visibility.fileExplorer && <Card><FileArea /></Card> }
              { visibility.outputs && <Card sx={{flexGrow: 1}}>Outputs</Card> }
            </Stack>
          }
          { visibility.codeEditor && 
            <Stack sx={{width: "100%", height: "100%"}} >
              <Card sx={{flexGrow: 1, backgroundColor: 'black', color: 'white'}}>Code Editor</Card>
            </Stack>
          }
          { 
            visibility.advisor && 
            <Stack sx={{width: "100%", height: "100%"}} >
              <Card sx={{flexGrow: 1, backgroundColor: 'black', color: 'white'}}>Advisor</Card>
            </Stack>
          }
      </Stack>
    </ErrorBoundary>
  )
}

export default App
