admin = db.getSiblingDB("admin");
admin.createUser({
    user: "admin",
    pwd: "admin",
    roles: [
        { role: "userAdminAnyDatabase", db: "admin" },
        { role: "readWriteAnyDatabase", db: "admin" },
        { role: "dbAdminAnyDatabase", db: "admin" },
        { role: "clusterAdmin", db: "admin" }
    ]
});
db.auth("admin","admin");

cd = db.getSiblingDB("climateData");
cd.createCollection("climateData");
cd.climateData.insert({"Test":"Test"});

admin = db.getSiblingDB("admin");
admin.auth("admin","admin");
admin.createUser({
    user:"user",
    pwd: "1234",
    roles: [
        {role: "dbOwner", db: "climateData"}
    ]
});

db.auth("user","1234");