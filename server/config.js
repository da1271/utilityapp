require('dotenv').config({path: '../.env'});

module.exports = {

    // 'tokenexp': 3600,
    'secret': 'takhir',

};

// Read/update Sku and sku description
// Read/update rejected+reason_description
// Read/update product_form, product_fragrance
//
//
// update currency, country, commodity,label_type, source, destination, product_form, product_fragrance, order_size, order_status, delivery_agent, delivery_method, rejected+reason_code,
//
// Screen with two modes, read-only and edit
// In Edit mode, we give the user options to update one or more fields
// WE willl have two sections -- ATG, Orchestrator.
// Also we will feature a file upload feature later on. that will update the ATG part.
//
// So accessing the form will just load the data.  AFter logging in, one can choose the Edit mode
// Need a form with Sku and Sku_description
