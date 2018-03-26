'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rejectedSchema = new Schema({
    "_id": false,
    "reason_code": [String],
    "reason_description": [String]
});

var search_datalistSchema = new Schema({
    datalist: {
        "sku": [String],
        "sku_description": [String],
        "currency": [String],
        "country": [Schema.Types.Mixed],
        "delivery_method": [{}],
        "delivery_agent": [String],
        "commodity": [String],
        "label_type": [String],
        "source": [String],
        "destination": [String],
        "product_form": [String],
        "product_fragrance": [String],
        "order_size": [String],
        "order_status": [String],
        "rejected": rejectedSchema
    }
},{ collection: 'DoyleTestSearch_datalist' },{ _id : false });

module.exports = mongoose.model('search_datalist', search_datalistSchema);
