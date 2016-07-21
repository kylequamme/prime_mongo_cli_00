// 1
db.bios.find({"awards" : {$exists : true}})
// 2
db.bios.find({"awards" : {$exists : false}})
// 3
db.bios.find({$or: [{"contribs" : "OOP"},{"contribs" : "UNIX"}]})
// 4
db.bios.find({"awards.award" : "Turing Award"})
// 5
db.bios.find({"_id" : { $gte: 3, $lte: 7}})
// 6
db.bios.find({"awards.year" : {$lt : 2000}})
// 7
db.bios.find({"birth" : {$exists : true}, "death" : {$exists : false}})
