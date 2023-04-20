import { useState } from 'react'
import SearchForm from './components/SearchForm'
import ContactList from './components/ContactList'

function App() {
  const [query, setQuery] = useState('')

  return (
    <main className="max-w-2xl mx-auto">
      <SearchForm
        onSearch={(value) => setQuery(value)}
      />
      <ContactList
        query={query}
      />
    </main>
  )
}

export default App
