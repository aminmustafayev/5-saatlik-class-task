import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDataContext } from '../../context/context';
import { Button } from '@mui/material';
const Basket = () => {
    const{basket,deleteToBasket,increaseBasket,decreaseBasket}=useDataContext()
  return (
    <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Decrease</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Increase</TableCell>
            <TableCell>TotalPrice</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((item,idx) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {idx}
              </TableCell>
              <TableCell>{item.product.name}</TableCell>
              <TableCell>{item.product.title}</TableCell>
              <TableCell>
                <img width={60} height={60} src={item.product.imgSrc} alt="" />
              </TableCell>
              <TableCell>
                {item.product.price}
              </TableCell>
              <TableCell>
                <Button disabled={item.count == 1} onClick={()=>{
                    decreaseBasket(item)
                }} variant='contained' color='warning'>
            -
                </Button>
              </TableCell>
              <TableCell>
                {item.count}
              </TableCell>
              <TableCell>
                <Button  onClick={()=>{
                    increaseBasket(item)
                }} variant='contained' color='success'>
            -
                </Button>
              </TableCell>
              <TableCell>
                {item.totalPrice}
              </TableCell>
              <TableCell>
                <Button  onClick={()=>{
                    deleteToBasket(item)
                }} variant='contained' color='error'>
            Delete
                </Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Basket