import React from 'react'
import tw from 'twin.macro'

const Wrapper = tw.footer`max-w-full w-full bg-gray-700 flex items-center px-4 py-6`
const Content = tw.div`flex flex-wrap overflow-hidden max-w-screen-xl mx-auto w-full`
const Text = tw.p`text-gray-500 text-sm uppercase`
export function Footer() {
  return (
    <Wrapper>
      <Content>
        <Text>
          &copy; 2015 &mdash; {new Date().getFullYear()}{' '}
          {process.env.REACT_APP_SITENAME}
        </Text>
        <Text tw="ml-auto">
          Powered by Steam. Not affiliated with Valve Corp.
        </Text>
      </Content>
    </Wrapper>
  )
}
