rsconf = rs.conf();
rsconf.members = [
    { _id : 0, host : "cka-mongodb1:27017" },
    { _id : 1, host : "cka-mongodb2:27017" },
    { _id : 2, host : "cka-mongodb3:27017" }
];
rs.reconfig(rsconf, {force: true});