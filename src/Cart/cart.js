import React from 'react';
import './cart.css';
import 'antd/dist/antd.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import shopIcon from "./../Pic/shopIcon.png"


export class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        }
        this.handleChange = this.handleChange.bind(this)
        this.createData = this.createData.bind(this)
    }

    handleChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({value: e.target.value});
   };

   jump1(e) {
       window.location.href = '/'
   }

   jump2(e) {
       window.location.href = '/pay'
   }



   createData(product, subtotal) {
       return { product, subtotal };
   }


   render() {
      var React = require('react');
      var QRCode = require('qrcode.react');

      const rows = [
          this.createData('Purple Cap', "$30.00"),
          this.createData('Green Cap', "$0.01"),
        ];

      const StyledTableCell = withStyles((theme) => ({
             head: {
               backgroundColor: 'rgba(0,0,0,0.1)',
             },
             body: {
               backgroundColor:'transparent',
             },
           }))(TableCell);

       const StyledTableRow = withStyles((theme) => ({
             root: {
               '&:nth-of-type(odd)': {
                 backgroundColor:'rgba(0,0,0,0.1)',
                 color:'transparent',
               },
             },
           }))(TableRow);

       const StyledTableContainer = withStyles((theme) => ({
                 backgroundColor:'rgba(0,0,0,0.1)',
                 color:'transparent',
           }))(TableContainer);

       const StyledTable = withStyles((theme) => ({
                 backgroundColor:'rgba(0,0,0,0.1)',
                 color:'transparent',
           }))(Table);

       const StyledTableHead = withStyles((theme) => ({
                 backgroundColor:'rgba(0,0,0,0.1)',
                 color:'transparent',
           }))(TableHead);

       const StyledTableBody = withStyles((theme) => ({
                 backgroundColor:'rgba(0,0,0,0.1)',
                 color:'transparent',
                 opacity:0.1,
           }))(TableBody);

      return (
        <body id='container1'>
        <div id="header">
            <img class='shopIcon' src={shopIcon} alt='Icon is not displayed properly'/>
            <h2 id="headContent1">FASHION SHOP</h2>
            <h4 id="headContent2">MAN</h4>
            <h4 id="headContent3">WOMEN</h4>
            <h4 id="headContent3">KID</h4>
            <h4 id="headContent3">SALE</h4>
        </div>
        <div id="banner1">
            <h1 id="content"> CHECKOUT</h1>
        </div>
        <hr className="hr1"/>
        <div id="container4">
        <div id="container5">
        <div id="container6">
              <h1>Billing Details</h1>
              <TextField required id="standard-required" label="Name" /> <span>&nbsp;&nbsp;</span>
              <TextField
                id="standard-password-input"
                label="Address"
                autoComplete="current-password"
              />
              <br/>
              <br/>
              <TextField
                id="standard-number"
                label="Age"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              /><span>&nbsp;&nbsp;</span>
              <TextField id="standard-search" label="Email" type="search" />
              <br/>
              <br/>
              <TextField required id="standard-required" label="Company name"/>
              <br/>
              <br/>
              <br/>
              <br/>
              <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={6}
                  label="Additional information"
                  helperText="Type your Additional requirement"
                  defaultValue="Say something"
                  variant="outlined"
                />
              <br/>
              <br/>
            </div>
            </div>
            <div id='box2'><Button variant="contained" color="secondary"  htmlType="back" onClick={this.jump1.bind(this)}>
              Go Back
            </Button>
        </div>
        </div>

        <div id="container3">
        <h1>Your Order</h1>
        <br/>
        <br/>
        <StyledTableContainer component={Paper}>
          <StyledTable aria-label="simple table">
            <StyledTableHead>
              <StyledTableRow>
                <StyledTableCell>Product</StyledTableCell>
                <StyledTableCell align="right">Subtotal</StyledTableCell>
              </StyledTableRow>
            </StyledTableHead>
            <StyledTableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.product}>
                  <StyledTableCell component="th" scope="row">
                    {row.product}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.subtotal}</StyledTableCell>
                </StyledTableRow>
              ))}
            </StyledTableBody>
          </StyledTable>
        </StyledTableContainer>
        <div id="container7">
        <RadioGroup aria-label="gender" name="gender1" value={this.state.value} onChange={this.handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Cash on delivery" />
          <FormControlLabel value="male" control={<Radio />} label="Alipay, WeChat Pay and UnionPay" />
          <FormControlLabel value="other" control={<Radio />} label="PayPal" />
        </RadioGroup>
        </div>
        <br/>
        <br/>
        <QRCode value="http://facebook.github.io/react/" />
        </div>
        <div id='box3'>
            <Button variant="contained" color="secondary"  htmlType="pay" onClick={this.jump2.bind(this)}>
              Pay
            </Button>
        </div>
        </body>
        )
    };

}

export default Cart
