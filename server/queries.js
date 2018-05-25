const database = require("./database-connection");

module.exports = {
    list(){
        return database("highs")
    },
    read(id){
        return database("highs").where("id", id)
    },
    create(high){
        return database("highs").insert(high).returning('*')
    },
    update(id, high){
        return database("highs").where("id", id).update(high)
    },
    delete(id){
        return database("highs").where("id", id).delete()
    }
};
