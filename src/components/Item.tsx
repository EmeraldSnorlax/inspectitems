import React from 'react'
import tw, { css } from 'twin.macro'

const Wrapper = tw.div`w-full h-full bg-gray-900 p-6 relative mb-12`

const Image = tw.img`w-full lg:w-9/12 object-cover object-center mx-auto`
const Price = tw.p`text-2xl font-bold text-gray-100`
const SuggestedPrice = tw.p`text-sm text-gray-600 pb-4`
const Title = tw.p`text-sm`
const Name = tw.p`text-lg text-gray-100`
const Text = tw(SuggestedPrice)`text-gray-600`
const Detail = tw.p`text-gray-200 uppercase`
const Tradable = tw.p`text-green-700 text-xs`
const Lock = tw.p`text-yellow-700 text-xs`
const Inspect = tw.a`text-indigo-600 uppercase text-xs hover:underline`
const Button = tw.a`appearance-none uppercase text-sm px-8 py-3 text-gray-100 focus:outline-none font-medium tracking-widest flex items-center bg-gradient-to-r from-indigo-500 to-purple-500 absolute bottom-0 inset-x-0 block text-center`
const Divider = tw.div`my-4 h-px w-full bg-gray-800`

type ItemProps = {
  lock: string | null
  classid: string
  price: number
  suggestedPrice: number
  title: string
  wear: number
  text: string
  name: string
  color: string
  inspect: string
  itemid: number
  pattern: number
}

type ItemDetailProps = {
  name: string
  value: number
}

const ItemDetail: React.FC<ItemDetailProps> = (props) => (
  <>
    <Text tw="text-xs uppercase pb-0">{props.name}</Text>
    <Detail tw="pb-1">{props.value}</Detail>
  </>
)

export const Item: React.FC<ItemProps> = (props) => (
  <Wrapper>
    {!props.lock ? (
      <Tradable>Tradable</Tradable>
    ) : (
      <Lock>Tradable at {getDateDiff(props.lock)}</Lock>
    )}
    <Image
      src={`https://steamcommunity-a.akamaihd.net/economy/image/class/730/${props.classid}/256x128`}
    />
    <Price>$ {convertCurrency(props.price)}</Price>
    <SuggestedPrice>
      Suggested Price ${convertCurrency(props.suggestedPrice)}
    </SuggestedPrice>
    <Title
      css={[
        css`
          color: ${props.color};
        `,
      ]}
    >
      {props.title}
    </Title>
    <Name>{props.name}</Name>
    <Text>{props.text}</Text>
    <Divider />
    <ItemDetail name="itemid" value={props.itemid} />
    <ItemDetail name="float" value={props.wear} />
    <ItemDetail name="pattern index" value={props.pattern} />
    <Inspect target="_blank" href={props.inspect}>
      Inspect item
    </Inspect>
    <Button
      target="_self"
      href={`/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=https%3A%2F%2F${window.location.origin}%2F%3Flogin&openid.realm=https%3A%2F%2F${window.location.origin}&openid.ns.sreg=http%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select`}
    >
      add to cart
    </Button>
  </Wrapper>
)

const convertCurrency = (salePrice: number) => {
  const price = String(salePrice * 1.18745).split('.')[0]
  const whole = price.length - 2
  return [price.substring(0, whole), price.substring(whole, price.length)].join(
    '.'
  )
}

const getDateDiff = (date: string) => {
  const tradable = new Date(date)
  return tradable.toLocaleDateString()
}
