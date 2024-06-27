// pizzaModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    variants: {
        type: [String],
        required: true
    },
    prices: {
        small: {
            type: Number,
            required: function() {
                return this.variants.includes('small');
            }
        },
        medium: {
            type: Number,
            required: function() {
                return this.variants.includes('medium');
            }
        },
        large: {
            type: Number,
            required: function() {
                return this.variants.includes('large');
            }
        },
        regular: {
            type: Number,
            required: function() {
                return this.variants.includes('regular');
            }
        },
        family: {
            type: Number,
            required: function() {
                return this.variants.includes('family');
            }
        },
        jumbo: {
            type: Number,
            required: function() {
                return this.variants.includes('jumbo');
            }
        },
        'extra large': {
            type: Number,
            required: function() {
                return this.variants.includes('extra large');
            }
        }
    },
    category: {
        type: String,
        enum: ['veg', 'nonveg'],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;