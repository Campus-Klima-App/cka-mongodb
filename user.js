// https://docs.mongodb.com/manual/reference/built-in-roles/

admin = db.getSiblingDB("admin")
admin.createUser({
    user: "admin",
    pwd: "admin",
    roles: [
        { role: "userAdminAnyDatabase", db: "admin" },
        { role: "readWriteAnyDatabase", db: "admin" },
        { role: "dbAdminAnyDatabase", db: "admin" },
        { role: "clusterAdmin", db: "admin" }
    ]
})
use climateData
db.createCollection("climateData")
db.climateData.insert({"Test":"Test"})
cd = db.getSiblingDB("climateData")
cd.createUser({
    user:"user",
    pwd: "1234",
    roles: [
        {role: "dbOwner", db: "theDatabase"}
    ]
})

db.auth("user","1234")