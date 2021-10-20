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
router.get('/create', (req,res)=>{
    res.render('orders/create',{
        title: 'Add'
    })
})
// post
router.post('/create', (req,res) =>
{
    Orders.create({
        firstName: req.body.firstName
    }, (err, newOrder)=>{
        if(err)
        {
            console.log(err)
            res.end(err)
        }
        else
        {
            res.redirect('/Orders')
        }
    })
})

// edit
router.get('/edit/:_id',(req, res) =>{
    let _id = req.params_id
    Orders.findById(_id,(err,order)=>{
        if(err)
        {
            console.log(err)
            res.end(err)
        }
        else
        {
            res.render('Orders',{
                title: 'order details',
                order: orders
            })
        }
        }
    )
})
module.exports = router;