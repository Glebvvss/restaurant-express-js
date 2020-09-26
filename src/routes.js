const router            = require('express').Router();
const createReserve     = require('./action/reserve/createReserve.js');
const findAllTables     = require('./action/table/findAllTables.js');
const findTodayReserves = require('./action/reserve/findTodayReserves.js');
const deleteReserve     = require('./action/reserve/deleteReserve.js');

router.get('/tables', findAllTables)
router.post('/reserves', createReserve)
router.get('/reserves/today', findTodayReserves)
router.delete('/reserves/:id', deleteReserve)

module.exports = router