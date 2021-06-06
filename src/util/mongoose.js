module.exports = {
    mulMongooseTO: function (mongooses){
        return mongooses.map(mongoose => mongoose.toObject())
    },
    mongooseTO: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}