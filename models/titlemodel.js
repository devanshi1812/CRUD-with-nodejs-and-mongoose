const mongoose = require('mongoose')

const titleSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required:[true,"Please enter the id:"]
        },
        title: {
            type: String,
            required: false,
    
        },
        description: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)

const Title = mongoose.model('Title',titleSchema);
module.exports = Title;