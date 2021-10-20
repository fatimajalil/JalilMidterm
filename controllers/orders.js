var express = require('express');
var router = express.Router();

// add model ref
let Orders = require('../models/Order')
/* GET orders  page. */
router.get('/', (req, res) =>{
    Orders.find( (err, orders)=>{
        if (err){
            console.log(err)
            res.end(err)
        }
        else{
            res.render('orders/index', {
                orders: orders,
                title: 'Orders'
            });

        }
    })

});

module.exports = router;