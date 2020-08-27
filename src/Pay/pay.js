import React from 'react'
import "./pay.css"
import Button from '@material-ui/core/Button';
import md5 from 'md5';
import shopIcon from "./../Pic/shopIcon.png"
import hat from "./../Pic/hat.png"


export class Pay extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            //submit: false,
			//	time: '2020-08-20 17:35:22',
			order: '7944922900' + Math.floor(Math.random()*(999-100+1)+100).toString(),
			amount: 0.01,
			merchant_no: '901800000116',
			notify_url: "https://localhost:3000",
			return_url: "https://localhost:3000/pay",
			description: 'this is a test transaction'
        }
        this.send = this.send.bind(this)
		this.updateMerchant = this.updateMerchant.bind(this)
		this.updateOrder = this.updateOrder.bind(this)
		this.updateAmount = this.updateAmount.bind(this)
		this.updateDescription = this.updateDescription.bind(this)
    }

	async send(e) {
		var id = 'app_id=9f00cd9a873c511e' + '&' +
			'charset=UTF-8' + '&' +
			'description='+ `${this.state.description}` + '&' +
	        'format=JSON' + '&' +
			'merchant_no=' + `${this.state.merchant_no}` + '&' +
			'method=pay.webpay' + '&' +
			'out_order_no=' + `${this.state.order}` + '&' +
			'payment_method=ALIPAY' + '&' +
			'trans_amount=' + `${this.state.amount}` + '&' +
		    'version=1.0' +
			'7e2083699dd510575faa1c72f9e35d43'
		var app_id = md5(id).toLowerCase()
		var data = {
			"app_id": '9f00cd9a873c511e',
			"format": "JSON",
			"charset": "UTF-8",
			"sign_type": "MD5",
			"sign": app_id,
			"version": "1.0",
			"method": "pay.webpay",
			"merchant_no": this.state.merchant_no,
			"payment_method": "ALIPAY",
			"out_order_no": this.state.order,
			"trans_amount": this.state.amount,
			"description": this.state.description,
		}

		//test***********************
		console.log('id:')
		console.log(id)
		console.log('data:')
		console.log(data)
		var a = {
			"app_id": '9f00cd9a873c511e',
			"merchant_no": "901800002555",
			"out_order_no": "12345678"
		}
		var a_id = md5(a).toLowerCase()
		var actual = {
			"app_id": '9f00cd9a873c511e',
			"merchant_no": "901800002555",
			"out_order_no": "12345678",
			"sign": a_id,
			"sign_type": "MD5"
		}
		console.log(actual)
		//*************************

		const response = await fetch('https://open.snappay.ca/api/gateway', {
			method: 'POST',
			redirect: 'follow',
			headers: {"Content-Type": "application/json","Accept": "application/json"},
			body: JSON.stringify(data)
		})
		const d = await response.json()
		const b = d.data
		const c = b[0].webpay_url
		window.location.href = c
		console.log(d)
		console.log(b)
		console.log(c)
		var h = Math.floor(Math.random()*(999-100+1)+100).toString();
		console.log(h)
	}

	jump(e) {
        window.location.href = '/'
    }

	updateMerchant(evt) {
         this.setState({merchant_no: evt.target.value});
    }

	updateOrder(evt) {
         this.setState({order: evt.target.value});
    }

	updateAmount(evt) {
         this.setState({amount: evt.target.value});
    }

	updateDescription(evt) {
         this.setState({description: evt.target.value});
    }

	render() {

	return (
		<body>
		<div id="main">

			<div class="cashier-nav">
				<ol>
					<li>Website demo</li>
				</ol>
			</div>


			<form>
				<div id="body">
					<dl class="content">
						<dt> trans_amount: </dt>
						<dd>
							<span class="null-star">*</span> <input size="30" name="trans_amount" value={this.state.amount} onChange={evt => this.updateAmount(evt)}/>
							<span> </span>
						</dd>
						<dt>out_order_no: </dt>
						<dd>
							<span class="null-star">*</span> <input size="30" name="out_order_no"
																	value={this.state.order} onChange={evt => this.updateOrder(evt)}/> <span> out_order_no</span>
						</dd>
						<dt>description: </dt>
						<dd>
							<span class="null-star">*</span> <input size="30"
																	name="description" value={this.state.description} onChange={evt => this.updateDescription(evt)}/> <span> description</span>
						</dd>
						<dt>merchant_no: </dt>
						<dd>
							<span class="null-star">*</span> <input size="30" name="merchant_no" value={this.state.merchant_no} onChange={evt => this.updateMerchant(evt)}/> <span> merchant_no </span>
						</dd>
						<br/>
					</dl>
				</div>
			</form>
			<button id='B1' onClick={this.send.bind(this)}>Create</button>
			<br></br>
			<button id='B1' onClick={this.jump.bind(this)}>back</button>
		</div>
		</body>
		)
	}
}
export default Pay
