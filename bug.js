```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {$match: { /*some condition*/ }},
  {$group: {_id: "$field", sum: {$sum: "$anotherField"}}}, //Incorrect use of $sum operator
  {$sort: {sum: -1}},
  {$limit: 10}
]);
```