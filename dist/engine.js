var engine = require('../app/crud');

module.exports.create = engine.create
module.exports.readById = engine.readById
module.exports.readByCondition = engine.readByCondition
module.exports.update = engine.update
module.exports.updateById = engine.updateById
module.exports.updateMultiple = engine.updateMultiple
module.exports.delete = engine.delete
module.exports.deleteById = engine.deleteById
module.exports.sort = engine.sort
module.exports.sortByLimit = engine.sortByLimit
module.exports.index = engine.index
module.exports.aggregate = engine.aggregate
module.exports.limit = engine.limit
