var mongoose = require( 'mongoose' );
var searchDataList = require('../models/searchDataList')
var persOrder = require('../models/persOrderModel')
var config = require('../config');
var ObjectId = require('mongodb').ObjectID;

// READ/GET SKU, SKU DESCRIPTION, REJECTED, REASON DSCRIPTION, PRODUCT FORM, PRODCUT FRAGRANCE

exports.getSku = function(req, res, next) {
  var projectionStr = "datalist.sku datalist.sku_description datalist.product_fragrance";
  searchDataList.find({}, projectionStr).exec(function(err, sku) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }
    res.status(201).json({
      success: true,
      data: sku
    });
  });
}

exports.getSkuDescription = function(req, res, next) {
  var projectionStr = "datalist.sku_description";
  searchDataList.find({}, projectionStr).exec(function(err, sku_description) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }
    res.status(201).json({
      success: true,
      data: sku_description
    });
  });
}
exports.getCurrency = function(req, res, next) {
  var projectionStr = "datalist.currency";
  searchDataList.find({}, projectionStr).exec(function(err, currency) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }
    res.status(201).json({
      success: true,
      data: currency
    });
  });
}
exports.getCountry = function(req, res, next) {
  var projectionStr = "datalist.country";
  searchDataList.find({}, projectionStr).exec(function(err, country) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }
    res.status(201).json({
      success: true,
      data: country
    });
  });
}
exports.getCommodity = function(req, res, next) {
  var projectionStr = "datalist.commodity";
  searchDataList.find({}, projectionStr).exec(function(err, commodity) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }
    res.status(201).json({
      success: true,
      data: commodity
    });
  });
}
exports.getLabelType = function(req, res, next) {
  var projectionStr = "datalist.label_type";
  searchDataList.find({}, projectionStr).exec(function(err, label_type) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }
    res.status(201).json({
      success: true,
      data: label_type
    });
  });
}
exports.getSource = function(req, res, next) {
  var projectionStr = "datalist.source";
  searchDataList.find({}, projectionStr).exec(function(err, source) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }
    res.status(201).json({
      success: true,
      data: source
    });
  });
}
exports.getDestination = function(req, res, next) {
  var projectionStr = "datalist.destination";
  searchDataList.find({}, projectionStr).exec(function(err, destination) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }
    res.status(201).json({
      success: true,
      data: destination
    });
  });
}
exports.getProductForm = function(req, res, next) {
  var projectionStr = "datalist.product_form";
  searchDataList.find({}, projectionStr).exec(function(err, product_form) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }
    res.status(201).json({
      success: true,
      data: product_form
    });
  });
}
exports.getProductFragrance = function(req, res, next) {
  var projectionStr = "datalist.product_fragrance";
  searchDataList.find({}, projectionStr).exec(function(err, product_fragrance) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }
    res.status(201).json({
      success: true,
      data: product_fragrance
    });
  });
}
exports.getOrderSize = function(req, res, next) {
  var projectionStr = "datalist.order_size";
  searchDataList.find({}, projectionStr).exec(function(err, order_size) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }
    res.status(201).json({
      success: true,
      data: order_size
    });
  });
}
exports.getOrderStatus = function(req, res, next) {
  var projectionStr = "datalist.order_status";
  searchDataList.find({}, projectionStr).exec(function(err, order_status) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }
    res.status(201).json({
      success: true,
      data: order_status
    });
  });
}
exports.getDeliveryAgent = function(req, res, next) {
  var projectionStr = "datalist.delivery_agent";
  searchDataList.find({}, projectionStr).exec(function(err, delivery_agent) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }
    res.status(201).json({
      success: true,
      data: delivery_agent
    });
  });
}
exports.getDeliveryMethod = function(req, res, next) {
  var projectionStr = "datalist.delivery_method";
  searchDataList.find({}, projectionStr).exec(function(err, delivery_method) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }
    res.status(201).json({
      success: true,
      data: delivery_method
    });
      console.log(delivery_method.length)
  });
}
exports.getRejectedReasonCode = function(req, res, next) {
  var projectionStr = "datalist.rejected.reason_code datalist.rejected.reason_description";
  searchDataList.find({}, projectionStr).exec(function(err, reason_code) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }
    res.status(201).json({
      success: true,
      data: reason_code
    });
  });
}
exports.getRejectedReasonDesc = function(req, res, next) {
  var projectionStr = "datalist.rejected.reason_description";
  searchDataList.find({}, projectionStr).exec(function(err, reason_description) {
    if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }
    res.status(201).json({
      success: true,
      data: reason_description
    });
  });
}


// ADDTOSET FOR EACH FIELD'S ARRAY
exports.addSku = function(req, res, next){
  const sku = req.body.add_sku;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $addToSet: { "datalist.sku": sku } },{ upsert: true }
  ).exec(function(err, sku){
    console.log(sku)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (sku.nModified > 0 && sku.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.addSkuDescription = function(req, res, next){
  const sku_description = req.body.add_sku_description;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $addToSet: { "datalist.sku_description": sku_description } },{ upsert: true }
  ).exec(function(err, sku_description){
    console.log(req.body.sku_description)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (sku_description.nModified > 0 && sku_description.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.addCurrency = function(req, res, next){
  const currency = req.body.add_currency;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $addToSet: { "datalist.currency": currency } },{ upsert: true }
  ).exec(function(err, currenecy){
    console.log(currenecy)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (currency.nModified > 0 && currency.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}

exports.addCountry = function(req, res, next){
  const country = req.body.add_country;
  const country_code = req.body.add_country_code
  var key = "datalist.country.0." + country_code
  var tmp = { [key] : country }
  searchDataList.update(
    {},
    { $set:  tmp  }
  ).exec(function(err, country){
    console.log(country)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (country.nModified > 0 && country.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.addCommodity = function(req, res, next){
  const commodity = req.body.add_commodity;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $addToSet: { "datalist.commodity": commodity } },{ upsert: true }
  ).exec(function(err, commodity){
    console.log(commodity)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (commodity.nModified > 0 && commodity.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.addLabelType = function(req, res, next){
  const label_type = req.body.add_label_type;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $addToSet: { "datalist.label_type": label_type } },{ upsert: true }
  ).exec(function(err, label_type){
    console.log(label_type)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (label_type.nModified > 0 && label_type.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.addSource = function(req, res, next){
  const source = req.body.add_source;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $addToSet: { "datalist.source": source } },{ upsert: true }
  ).exec(function(err, source){
    console.log(source)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (source.nModified > 0 && source.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.addDestination = function(req, res, next){
  const destination = req.body.add_destination;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $addToSet: { "datalist.destination": destination } },{ upsert: true }
  ).exec(function(err, destination){
    console.log(destination)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (destination.nModified > 0 && destination.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.addProductFragrance = function(req, res, next){
  const product_fragrance= req.body.add_product_fragrance;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $addToSet: { "datalist.product_fragrance": product_fragrance } },{ upsert: true }
  ).exec(function(err, product_fragrance){
    console.log(product_fragrance)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (product_fragrance.nModified > 0 && product_fragrance.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}

exports.addProductForm = function(req, res, next){
  const product_form = req.body.add_product_form;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $addToSet: { "datalist.product_form": product_form } },{ upsert: true }
  ).exec(function(err, product_form){
    console.log(req.body.product_form)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (product_form.nModified > 0 && product_form.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.addOrderSize = function(req, res, next){
  const order_size = req.body.add_order_size;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $addToSet: { "datalist.order_size": order_size } },{ upsert: true }
  ).exec(function(err, order_size){
    console.log(req.body.order_size)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (order_size.nModified > 0 && order_size.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.addOrderStatus = function(req, res, next){
  const order_status = req.body.add_order_status;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $addToSet: { "datalist.order_status": order_status } },{ upsert: true }
  ).exec(function(err, order_status){
    console.log(req.body.order_status)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (order_status.nModified > 0 && order_status.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.addDeliveryAgent = function(req, res, next){
  const delivery_agent = req.body.add_delivery_agent;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $addToSet: { "datalist.delivery_agent": delivery_agent } },{ upsert: true }
  ).exec(function(err, delivery_agent){
    console.log(delivery_agent)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (delivery_agent.nModified > 0 && delivery_agent.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.addDeliveryMethod = function(req, res, next){
  const name = req.body.add_name;
  const description = req.body.add_description;

  searchDataList.update({}, { $push: { "datalist.delivery_method": {"name": name, "description": description} } },{ upsert: true }


  ).exec(function(err, delivery_method){
    console.log(delivery_method)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (delivery_method.nModified > 0 && delivery_method.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
  });
}

exports.addRejectedReasonCode = function(req, res, next){
  const rejected_reason_code = req.body.add_rejected_reason_code;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $addToSet: { "datalist.rejected.reason_code": rejected_reason_code } },{ upsert: true }
  ).exec(function(err, rejected_reason_code){
    console.log(rejected_reason_code)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (rejected_reason_code.nModified > 0 && rejected_reason_code.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.addRejectedReasonDesc = function(req, res, next){
  const rejected_reason_desc = req.body.add_rejected_reason_desc;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $addToSet: { "datalist.rejected.reason_description": rejected_reason_desc } },{ upsert: true }
  ).exec(function(err, rejected_reason_desc){
    console.log(rejected_reason_desc)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (rejected_reason_desc.nModified > 0 && rejected_reason_desc.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.removeSku = function(req, res, next){
  const sku = req.body.sku

  searchDataList.update(
    {},
    { $pull: { "datalist.sku": sku } }
  ).exec(function(err, sku1){

    if(err){
      res.status(400).json({ success: false, message:'Error processing request '+ err });
      console.log('dfdfs')
    }
    if (sku1.nModified > 0 && sku1.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
      console.log(sku1)
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.removeSkuDesc = function(req, res, next){
  const skuDesc = req.body.skuDesc;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $pull: { "datalist.sku_description": skuDesc } }
  ).exec(function(err, skuDesc){
    console.log(skuDesc)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (skuDesc.nModified > 0 && skuDesc.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.removeCurrency = function(req, res, next){
  const currency = req.body.currency;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $pull: { "datalist.currency": currency } }
  ).exec(function(err, currency){
    console.log(currency)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (currency.nModified > 0 && currency.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.removeCountry = function(req, res, next){
  const country = req.body.country;
  const country_code = req.body.country_code
  var key = "datalist.country.0." + country_code
  var tmp = { [key] : country }
  searchDataList.update(
    {},
    { $unset:  tmp  }
  ).exec(function(err, country){
    console.log(country)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (country.nModified > 0 && country.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.removeCommodity = function(req, res, next){
  const commodity = req.body.commodity;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $pull: { "datalist.commodity": commodity } }
  ).exec(function(err, commodity){
    console.log(commodity)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (commodity.nModified > 0 && commodity.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.removeLabelType = function(req, res, next){
  const label_type = req.body.label_type;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $pull: { "datalist.label_type": label_type } }
  ).exec(function(err, label_type){
    console.log(label_type)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (label_type.nModified > 0 && label_type.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.removeSource = function(req, res, next){
  const source = req.body.source;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $pull: { "datalist.source": source } }
  ).exec(function(err, source){
    console.log(source)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (source.nModified > 0 && source.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.removeDestination = function(req, res, next){
  const destination = req.body.destination;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $pull: { "datalist.destination": destination } }
  ).exec(function(err, destination){
    console.log(destination)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (destination.nModified > 0 && destination.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.removeProductForm = function(req, res, next){
  const product_form = req.body.product_form;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $pull: { "datalist.product_form": product_form } }
  ).exec(function(err, product_form){
    console.log(product_form)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (product_form.nModified > 0 && product_form.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.removeProductFragrance = function(req, res, next){
  const product_fragrance = req.body.product_fragrance;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $pull: { "datalist.product_fragrance": product_fragrance } }
  ).exec(function(err, product_fragrance){
    console.log(product_fragrance)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (product_fragrance.nModified > 0 && product_fragrance.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.removeOrderSize = function(req, res, next){
  const order_size = req.body.order_size;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $pull: { "datalist.order_size": order_size } }
  ).exec(function(err, order_size){
    console.log(order_size)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (order_size.nModified > 0 && order_size.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.removeOrderStatus = function(req, res, next){
  const order_status = req.body.order_status;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $pull: { "datalist.order_status": order_status } }
  ).exec(function(err, order_status){
    console.log(order_status)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (order_status.nModified > 0 && order_status.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.removeDeliveryAgent = function(req, res, next){
  const delivery_agent = req.body.delivery_agent;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $pull: { "datalist.delivery_agent": delivery_agent } }
  ).exec(function(err, delivery_agent){
    console.log(delivery_agent)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (delivery_agent.nModified > 0 && delivery_agent.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.removeDeliveryMethod = function(req, res, next){
  const name = req.body.name;
  const description = req.body.description;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213"), },
     { $pull: { "datalist.delivery_method": {"name": name, "description": description} } },
     { upsert: true }


  ).exec(function(err, delivery_method){
    console.log(delivery_method)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (delivery_method.nModified > 0 && delivery_method.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.removeRejectedReasonCode = function(req, res, next){
  const rejected_reason_code = req.body.rejected_reason_code;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $pull: { "datalist.rejected.reason_code": rejected_reason_code } }
  ).exec(function(err, rejected_reason_code){
    console.log(rejected_reason_code)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (rejected_reason_code.nModified > 0 && rejected_reason_code.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.removeRejectedReasonDesc = function(req, res, next){
  const rejected_reason_desc = req.body.rejected_reason_desc;

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213")},
    { $pull: { "datalist.rejected.reason_description": rejected_reason_desc } }
  ).exec(function(err, rejected_reason_desc){
    console.log(rejected_reason_desc)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (rejected_reason_desc.nModified > 0 && rejected_reason_desc.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}

// updates for datalist

exports.updateSku = function(req, res, next){
  const sku = req.body.sku;
  const newsku  = req.body.newsku
  searchDataList.updateOne(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213"), "datalist.sku": sku},
    { $set: { "datalist.sku.$": newsku } }
  ).exec(function(err, sku){
    console.log(sku)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (sku.nModified > 0 && sku.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.updateSkuDesc = function(req, res, next){
  const skuDesc = req.body.skuDesc;
  const newskuDesc  = req.body.newskuDesc
  searchDataList.updateOne(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213"), "datalist.sku_description": skuDesc},
    { $set: { "datalist.sku_description.$": newskuDesc } }
  ).exec(function(err, skuDesc){
    console.log(skuDesc)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (skuDesc.nModified > 0 && skuDesc.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.updateCurrency = function(req, res, next){
  const currency = req.body.currency;
  const newCurrency  = req.body.newCurrency
  searchDataList.updateOne(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213"), "datalist.currency": currency},
    { $set: { "datalist.currency.$": newCurrency } }
  ).exec(function(err, currency){
    console.log(currency)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (currency.nModified > 0 && currency.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.updateCountry = function(req, res, next){
  const country = req.body.country;
  const country_code = req.body.country_code
  const newCountry = req.body.newCountry;

  var key = "datalist.country.0." + country_code
  var tmp = { [key] : newCountry }

  searchDataList.update(
    {},
    { $set:  tmp  }
  ).exec(function(err, country){
    console.log(country)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (country.nModified > 0 && country.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}

exports.updateCommodity = function(req, res, next){
  const commodity = req.body.commodity;
  const newCommodity  = req.body.newCommodity
  searchDataList.updateOne(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213"), "datalist.commodity": commodity},
    { $set: { "datalist.commodity.$": newCommodity } }
  ).exec(function(err, commodity){
    console.log(commodity)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (commodity.nModified > 0 && commodity.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.updateLabelType = function(req, res, next){
  const label_type = req.body.label_type;
  const newLabelType  = req.body.newLabelType
  searchDataList.updateOne(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213"), "datalist.label_type": label_type},
    { $set: { "datalist.label_type.$": newLabelType } }
  ).exec(function(err, label_type){
    console.log(label_type)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (label_type.nModified > 0 && label_type.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.updateSource = function(req, res, next){
  const source = req.body.source;
  const newSource  = req.body.newSource
  searchDataList.updateOne(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213"), "datalist.source": source},
    { $set: { "datalist.source.$": newSource } }
  ).exec(function(err, source){
    console.log(source)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (source.nModified > 0 && source.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.updateDestination = function(req, res, next){
  const destination = req.body.destination;
  const newDestination  = req.body.newDestination
  searchDataList.updateOne(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213"), "datalist.destination": destination},
    { $set: { "datalist.destination.$": newDestination } }
  ).exec(function(err, destination){
    console.log(destination)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (destination.nModified > 0 && destination.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.updateProductForm = function(req, res, next){
  const product_form = req.body.product_form;
  const newProductForm  = req.body.newProductForm
  searchDataList.updateOne(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213"), "datalist.product_form": product_form},
    { $set: { "datalist.product_form.$": newProductForm } }
  ).exec(function(err, product_form){
    console.log(product_form)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (product_form.nModified > 0 && product_form.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.updateProductFragrance = function(req, res, next){
  const product_fragrance = req.body.product_fragrance;
  const newProductFragrance  = req.body.newProductFragrance
  searchDataList.updateOne(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213"), "datalist.product_fragrance": product_fragrance},
    { $set: { "datalist.product_fragrance.$": newProductFragrance } }
  ).exec(function(err, product_fragrance){
    console.log(product_fragrance)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (product_fragrance.nModified > 0 && product_fragrance.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.updateOrderSize = function(req, res, next){
  const order_size = req.body.order_size;
  const newOrderSize  = req.body.newOrderSize
  searchDataList.updateOne(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213"), "datalist.order_size": order_size},
    { $set: { "datalist.order_size.$": newOrderSize } }
  ).exec(function(err, order_size){
    console.log(order_size)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (order_size.nModified > 0 && order_size.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.updateOrderStatus = function(req, res, next){
  const order_status = req.body.order_status;
  const newOrderStatus  = req.body.newOrderStatus
  searchDataList.updateOne(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213"), "datalist.order_status": order_status},
    { $set: { "datalist.order_status.$": newOrderStatus } }
  ).exec(function(err, order_status){
    console.log(order_status)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (order_status.nModified > 0 && order_status.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.updateDeliveryAgent = function(req, res, next){
  const delivery_agent = req.body.delivery_agent;
  const newDeliveryAgent  = req.body.newDeliveryAgent
  searchDataList.updateOne(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213"), "datalist.delivery_agent": delivery_agent},
    { $set: { "datalist.delivery_agent.$": newDeliveryAgent } }
  ).exec(function(err, delivery_agent){
    console.log(delivery_agent)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (delivery_agent.nModified > 0 && delivery_agent.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.updateDeliveryMethod = function(req, res, next){
  const name = req.body.name;
  const description = req.body.description;
  const newName = req.body.newName;
  const newDescription = req.body.newDescription;
  // const formdata = req.body.formdata;
  console.log(newName)

  searchDataList.update(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213"), "datalist.delivery_method": {"name": name, "description": description}},
     { $set: { "datalist.delivery_method.$": {"name": newName, "description": newDescription} } },
     { upsert: true }


  ).exec(function(err, delivery_method){
    console.log(delivery_method)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (delivery_method.nModified > 0 && delivery_method.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}

exports.updateRejectReasonCode = function(req, res, next){
  const reject_reason_code = req.body.reject_reason_code;
  const newRejectedReasonCode  = req.body.newRejectedReasonCode
  searchDataList.updateOne(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213"), "datalist.rejected.reason_code": reject_reason_code},
    { $set: { "datalist.rejected.reason_code.$": newRejectedReasonCode } }
  ).exec(function(err, reject_reason_code){
    console.log(reject_reason_code)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (reject_reason_code.nModified > 0 && reject_reason_code.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.updateRejectReasonDesc = function(req, res, next){
  const reject_reason_desc = req.body.reject_reason_desc;
  const newRejectedReasonDesc  = req.body.newRejectedReasonDesc
  searchDataList.updateOne(
    {"_id" : ObjectId("5a733b206f8ab54ae3d36213"), "datalist.rejected.reason_description": reject_reason_desc},
    { $set: { "datalist.rejected.reason_description.$": newRejectedReasonDesc } }
  ).exec(function(err, reject_reason_desc){
    console.log(reject_reason_desc)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
    if (reject_reason_desc.nModified > 0 && reject_reason_desc.ok == 1) {
        //res.status(201).json(data)
        res.status(201).json({ success: true, message: 'Updated sucessfully' });
    } else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}
exports.persOrderQuery = function(req, res, next){
  const order_status = req.body.order_status;
  const synced  = req.body.synced
  persOrder.aggregate( [
                        {
                          $match: {
                            $or: [
                                    {"orchestrator.order_status.order_status": order_status},
                                    {"orchestrator.order_status.info.shipped.synced": synced},
                                    {"orchestrator.order_status.info.shipped.shipped_date":{$exists:false,  $eq: null} },
                                    {"orchestrator.order_status.info.shipped.shipped_quantity":{$exists:false,  $eq: null} },
                                    {"orchestrator.order_status.info.shipped.line_item_quantity":{$exists:false,  $eq: null} },
                                  ],
                                    "orchestrator.order_status.info.shipped.tracking" :
                                      { $elemMatch : {
                                        "tracking_url" : {$exists:false, $eq: null},
                                        "tracking_number" : {$exists:false, $eq: null},
                                        "ship_via":{$exists:false,  $eq: null},
                                        "weight":{$exists:false,  $eq: null}
                                      },
                                   }
                        }
                      },
                        { $group: { _id: "$order.shipment_group_id" } }
                      ] ).exec(function(err, reject_reason_desc){
    console.log(reject_reason_desc)
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err });
    }
 else {
        res.status(201).json({ success: true, message: 'No modifications are detected' });
    }
});
}


// db.articles.aggregate(
//     [ {
//       $match : { author : "dave" },
//                 { author : "dave" },
//                 { author : "dave" }
//       }
//     ]
// );
