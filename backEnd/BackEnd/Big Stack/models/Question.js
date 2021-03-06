const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref:"myPerson"
    },
    textone:{
        type:String,
        require:true,
    },
    texttwo:{
        type:String,
        require:true,
    },
    name:{
        type:String,
    },
    upvotes:[
        {
            user:{
                type : Schema.Types.ObjectId,
                ref:'myPerson'
            },
        }
    ],
    answer:[{
        user:{
            type:Schema.Types.ObjectId,
            ref:"myPreson"
        },
        text:{
            type: String,
            require:true,
        },
        name:{
            type:String
        },
        Date:{
            type:Date,
            default:Date.now,
        }
    }],
    date:{
        type:Date,
        default:Date.now,
    }
   
});

module.exports = Questions = mongoose.model('myQuestion',QuestionSchema);