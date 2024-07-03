
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TodoType } from './types'

// Define our single API slice object
export const apiSlice = createApi({

    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: 'api',

    // All of our requests will have URLs starting with '/fakeApi'
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),

    // Define the tag types
    tagTypes: [],

    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({

      exampleTodo: builder.query<TodoType, void>({
        query: () => 'https://jsonplaceholder.typicode.com/todos/1'
      })
    })
  })
  
  // Export the auto-generated hook for the `getPosts` query endpoint
  export const { useExampleTodoQuery } = apiSlice

  export default apiSlice