import { useState } from 'react'
import { useQuery } from 'react-query'

//components
import Item from './components/Item'
import Cart from './components/Cart'
import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'

//styles
import { Wrapper, StyledButton } from './App.styles'

//types
export type CartItemType = {
  id: number
  category: string
  description: string
  image: string
  title: string
  price: number
  amount: number
}

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json()
}

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCatItems] = useState<CartItemType[]>([])

  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts)

  const getTotalItems = (items: CartItemType[]) => {
    return items.reduce((ack: number, item) => ack + item.amount, 0)
  }

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCatItems(prevState => {
      const isItemInCart = prevState.find(item => item.id === clickedItem.id)

      if (isItemInCart) {
        return prevState.map((item) => (
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        ))
      }
      return [...prevState, { ...clickedItem, amount: 1 }]
    })
  }

  const handleRemoveFromCart = (id: number) => {
    setCatItems(prevState =>
      prevState.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack
          return [...ack, { ...item, amount: item.amount - 1 }]
        }
        else {
          return [...ack, item]
        }
      }, [] as CartItemType[])
    )
  }

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong....</div>

  return (
    <Wrapper className="App">
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart} />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)} >
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
