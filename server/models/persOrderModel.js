'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Item = mongoose.model('Order');  // using the external ordrModel Schema

var order_status_states = ["New", "Pending", "ReadyToPrint", "Approved", "OnHold", "Rejected", "ReadyToPrint", "Printed", "QA Verified", "QA Review", "Shipped", "Cancelled"];
// this sku is for ycc.sku or label_map.sku or
var sku = ["115174PE", "115504PE", "1010728PE", "1055974PE", "1073481PE", "1093707PE", "1106730PE", "1121349PE", "1121399PE", "1121402PE", "1121431PE", "1123214PE", "1123217PE", "1125728PE", "1129547PE", "1129548PE", "1129747PE", "1129749PE", "1162782PE", "1162786PE", "1162788PE", "1162790PE", "1162791PE", "1162793PE", "1162807PE", "1162813PE", "1168308PE", "1173563PE", "1205337PE"];
var sku_description = ["Clean Cotton&#174;", "Lemon Lavender", "Midnight Jasmine", "Vanilla Lime", "Midsummers Night&#174;", "Cinnamon Stick", "Vanilla Cupcake", "Soft Blanket&#153;", "Pink Sands&#153;", "Fluffy Towels&#153;", "Black Cherry", "Red Raspberry", "Christmas Cookie&#153;", "Vanilla", "All is Bright", "Warm Cashmere"];
var currency = ["Pound", "Euro"];

var countrys = [
    "AT", "BE", "BG", "CZ", "DK", "EE", "FI", "FR", "DE", "GG", "GR", "HU", "IE", "IM", "IW", "ISS",
    "IT", "JE", "LV", "LT", "LU", "NL", "NIR", "PL", "PT", "RO", "SCH", "SI", "SK", "ES", "SE", "GB", "AG"];
var countryArr = [{
    "AT": "Austria"}, {"BE": "Belgium"}, {"BG": "Bulgaria"}, {"CZ": "Czech Republic"}, {"DK": "Denmark"},
    {"EE": "Estonia"}, {"FI": "Finland"}, {"FR": "France"}, {"DE": "Germany"}, {"GG": "Gernsey"},
    {"GR": "Greece"}, {"HU": "Hungary"}, {"IE": "Ireland"}, {"IM": "Isle of man"}, {"IW": "Isle of Wight"},
    {"ISS": "Isles of Scilly"}, {"IT": "Italy"}, {"JE": "Jersey"}, {"LV": "Latvia"}, {"LT": "Lithuania"},
    {"LU": "Luxembourg"}, {"NL": "Netherlands"}, {"NIR": "Northern Ireland"}, {"PL": "Poland"},
    {"PT": "Portugal"}, {"RO": "Romania"}, {"SCH": "Scottish Highlands"}, {"SI": "Slovenia"},
    {"SK": "Slovakia"}, {"ES": "Spain"}, {"SE": "Sweden"}, {"GB": "Great Britain"}, {"AG": "Antigua and Barbuda"}];
var delivery_method = ["Express", "Parcel"];
var commodity =  ["Large", "Small", "Votives"];
var label_type = ["US LARGE JAR", "US SMALL TUMBLER", "US VOTIVES", "UK LARGE JAR", "UK SMALL TUMBLER", "UK VOTIVES"];
var source = ["US E-COM", "US STORE", "UK E-COM", "UK STORE"];
var destination = ["US DC SDMA", "US RT STORE", "UK DC BRUK", "UK RT STORE"];
var product_form = ["LARGE JAR", "SMALL TUMBLER", "VOTIVES"];
var product_fragrance = ["Clean Cotton&#174;", "Lemon Lavender", "Midnight Jasmine", "Vanilla Lime", "Midsummers Night&#174;", "Cinnamon Stick", "Vanilla Cupcake", "Soft Blanket&#153;", "Pink Sands&#153;", "Fluffy Towels&#153;", "Black Cherry", "Red Raspberry", "Christmas Cookie&#153;", "Vanilla", "All is Bright", "Warm Cashmere"];
var order_size = ["Single", "Multi item", "Multi item quantity"];



var trackingSchema = new Schema ({"tracking_number":{type: String}, "tracking_url":{type: String}});
var recepientSchema = new Schema ({"firstName":{type: String}, "lastName":{type: String},
    "company":{type: String},"address_line_1":{type: String}, "address_line_2":{type: String},
    "address_line_3":{type: String},"town":{type: String}, "county":{type: String},
    "state":{type: String},"country":{type: String},"postcode":{type: String}});
var reasonSchema = new Schema({"synced":{type: String, default:"N"},"reason_code": {type: String},
    "reason_description":{type: String}, "reason_comment":{type: String}});
var shippedDetailsSchema = new Schema ({"synced":{type: String, default:"N"},"line_item_quantity": {type: Number},
    "shipped_quantity":{type: Number}, "shipped_date":{type: Date},
    "tracking":[trackingSchema], "recepient":{recepientSchema} });

var cancelledSchema = new Schema({"synced":{type: String, default:"N"}, "line_item_quantity":{type: Number},
    "cancelled_quantity":{type: Number},"cancelled_date":{type: Date}, "request_id":{type: String},
    "retry_count":{type:Number}});

var ordStatusInfoSchema = new Schema({"rejected":reasonSchema, "shipped":shippedDetailsSchema, "cancelled":cancelledSchema});
// "rejected":reasonSchema, "shipped":{shippedDetailsSchema},"cancelled":{cancelledSchema}

// sku
var orderSchema = new Schema({

        "order_id":{type: String,  index: true }, "source_order_id":{type: String}, "order_submit_date":{type: Date},
        "sku": {type: String}, "sku_description":{type: String, enum:sku_description}, "line_item": {type: Number},
        "total_line_items":{type:Number}, "line_item_quantity":{type: Number},
        "line_item_price": {type:Number}, "currency": {type: String, enum:currency}, "recipe_id": {type: String},
        "shipment_group_id":{type: String}, "line_item_id":{type: String},  _id : {id:false}
    });

var customerSchema = new Schema({
       "firstName":{type: String}, "lastName":{type: String}, "address_line_1":{type: String},
        "address_line_2":{type: String}, "address_line_3":{type: String}, "town":{type: String},
        "county":{type: String}, "state": {type: String}, "country":{type: String, enum:countrys},
        "postcode":{type: String}, "email":{type: String}, "phone":{type: String}, _id : {id:false}
    });
var deliverySchema = new Schema(

        { "delivery_method":{type: String, enum:delivery_method}, "delivery_instructions":{type: String},
            "estimated_delivery_date":{type: Date}, "despatch_note_language":{type: String},
            "box_num":{type: String}, _id : {id:false}
        }
);
var shippingSchema = new Schema({
            "recipient":
                {
                    "firstName": {type: String}, "lastName": {type: String}, "company": {type: String},
                    "address_line_1": {type: String}, "address_line_2": {type: String},
                    "address_line_3": {type: String}, "town": {type: String}, "county": {type: String},
                    "state": {type: String}, "country": {type: String}, "postcode": {type: String}, _id : {id:false}
                },
            "delivery": deliverySchema, _id : {id:false}

    });

// var orderSchema = Schema({});
var fluidSchema = new Schema({
        "recipe_id":{type: String},
            "ycc" :
            { "sku" : {type: String},
                "quantity": {type: Number}, "unit_price": {type: Number},
                "thumbnail_img": {type: String},
                "label_img" : {type: String}, "preview_img" : {type: String},
                "print_img" : {type: String}, "label_text1":{type: String},
                "label_text2":{type: String},
                "label_map": { "sku" :{type: String},
                    "commodity" :{type: String}, "destination" :{type: String, enum:destination},
                    "label_type" :{type: String, enum:label_type}
                }, _id : {id:false}
            }, _id : {id:false}

    });
var orchestratorSchema = new Schema({
    "source":{type: String},
            "destination":{type: String},
            "product_form":{type: String, enum:product_form},
            "product_fragrance":{type: String, enum:product_fragrance},
            "order_size:":{type: String, enum:order_size},
            "label":
            { "label_print_type":{type: String},
                "printer_type":{type: String},
                "barcode_image":{type: String},
                "print_ready_image":{type: String}
            },
      "order_status" :/*
       { "order_status": {type: Schema.Types.ObjectId, ref: 'Tasks'}
       }, _id : {id:false}
    */
    { "order_status": {type: String, enum:order_status_states}, "entry_date_time":{type: Date},
        "user": {type: String},
        "info":{type:ordStatusInfoSchema},
    }, _id : {id:false}

            // find out how to get Schema from one file into another
});


/*
"info": {
        "rejected":
        {"reason_code":,
        "reason_description":,
        "reason_comment":
        },
        "shipped":
        {
        "line_item_quantity":,
        "shipped_quantity":,
        "shipped_date":,
        "tracking":
          [
            { "tracking_number":,
              "tracking_url":
            }
          ],
          "recepient":
            { "firstName":,
              "lastName":,
              "company": ,
              "address_line_1":,
              "address_line_2":,
              "address_line_3":,
              "town":,
              "county":,
              "state": ,
              "country":,
              "postcode":
          }
        },
        "cancelled":
        { "line_item_quantity":,
        "cancelled_quantity":,
        "cancelled_date":
        }
      }
 */


var persOrderSchema = new Schema({
    "order":orderSchema, "customer":customerSchema, "shipping":shippingSchema, "fluid":fluidSchema, "orchestrator":orchestratorSchema, _id : {id:false}
} ,{ collection : 'pers_orders' } );
module.exports = mongoose.model('pers_orders', persOrderSchema );
