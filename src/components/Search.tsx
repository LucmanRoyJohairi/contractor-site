import { SearchIcon } from 'lucide-react'
import React from 'react'

export default function Search() {
  return (
    <div className="flex flex-row items-center justify-center space-x-4 text-black">
      <SearchIcon color="black" />
      <input type="text" placeholder="Search" className="text-black focus:outline-none" />
    </div>
  )
}
