import React from "react"
import { Outlet } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { YoutubeApiProvider } from "./context/YoutubeApiContext"
import SearchHeader from "./components/SearchHeader"

const queryClient = new QueryClient()

function App() {
  return (
    <React.Fragment>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </React.Fragment>
  )
}

export default App
