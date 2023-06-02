import { Icon } from '@iconify/react'
import React from 'react'
import "./NavBar.css"
const NavBar = () => {
  return (
    <div className='navBar-container'>
      <button>
        <Icon icon="solar:home-2-linear" />
      </button>
      <button>
        <Icon icon="solar:ticket-sale-outline" />
      </button>
      <button>
        <Icon icon="solar:star-linear" />
      </button>
      <button>
      <Icon icon="fluent:person-48-regular" />
      </button>
    </div>
  )
}

export default NavBar
