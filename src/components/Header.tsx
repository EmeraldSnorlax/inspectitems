import React from 'react'
import tw from 'twin.macro'

const Container = tw.header`max-w-full w-full h-16 bg-gray-900 flex items-center px-4`
const Brand = tw.a`text-2xl text-gray-100 font-bold uppercase font-sans tracking-widest`
const Nav = tw.nav`mr-auto ml-6`
const Button = tw.a`appearance-none uppercase text-sm px-8 py-2 text-gray-100 focus:outline-none  rounded-md font-medium tracking-widest flex items-center bg-gradient-to-r from-indigo-500 to-purple-500`
const NavLink = tw(Brand)`text-sm hover:text-indigo-500 pr-4`

export const SteamIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6 fill-current text-gray-100  md:mr-2"
    viewBox="0 0 24 24"
  >
    <path d="M17.5 11.001c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zM7.498 20.003c-.446 0-.89-.101-1.304-.3a.499.499 0 11.436-.9 1.983 1.983 0 001.528.088 1.99 1.99 0 001.143-1.018 2.002 2.002 0 00-.931-2.671.5.5 0 11.436-.9 3.004 3.004 0 011.396 4.006 2.98 2.98 0 01-1.714 1.528 3.053 3.053 0 01-.99.167z" />
    <path d="M7.5 22.001c-2.119 0-4.019-1.375-4.709-3.376l-1.949-.65a.498.498 0 01-.342-.474v-6a.499.499 0 01.707-.455l3.702 1.683c.957-.583 2.019-.848 3.227-.683L11.5 7.933a6.008 6.008 0 016-5.932c3.309 0 6 2.691 6 6a6 6 0 01-5.501 5.973l-5.612 4.008A4.962 4.962 0 017.5 22.001zm-6-4.86l1.85.617a.499.499 0 01.322.337c.489 1.711 2.063 2.907 3.828 2.907a3.97 3.97 0 003.936-3.384.502.502 0 01.203-.33l5.894-4.209a.497.497 0 01.262-.092 5 5 0 004.706-4.985c0-2.757-2.243-5-5-5s-5 2.243-5 5c0 .115-.035.332-.108.421l-3.665 4.48a.494.494 0 01-.479.175 4.026 4.026 0 00-.747-.076c-.811 0-1.594.245-2.265.708a.496.496 0 01-.491.043L1.5 12.278v4.863z" />
  </svg>
)

export const Header: React.FC = () => {
  return (
    <Container>
      <Brand href="/">
        <span tw="text-indigo-500">inspect</span>items
      </Brand>
      <Nav>
        <NavLink href="/" tw="text-indigo-500">
          market
        </NavLink>
        <NavLink className="goAuth" href="/">
          inventory check
        </NavLink>
        <NavLink href="/" className="goAuth">
          inspect skins
        </NavLink>
      </Nav>
      <Button
        href="/"
        className="goAuth"
        tw="bg-gradient-to-r from-indigo-500 to-purple-500"
      >
        <SteamIcon />
        sign in with steam
      </Button>
    </Container>
  )
}
