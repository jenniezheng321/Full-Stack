const mongoose=require("mongoose");

var comment_schema = new mongoose.Schema({ 
	author: {
		username: String,
		id: {
			type: mongoose.Schema.Types.ObjectId,
        	ref: "User"
		}
	},
	text: String,
	created:{type:Date, default: Date.now}
});

module.exports = mongoose.model("Comment",comment_schema);


