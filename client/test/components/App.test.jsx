import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from '../../src/App'
const queryClient = new QueryClient();

describe('App', () => {
  it('renders the App component', () => {
    
    render(
      <QueryClientProvider client={queryClient}>
        <App queryClient={queryClient}/>
      </QueryClientProvider>
    )
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})