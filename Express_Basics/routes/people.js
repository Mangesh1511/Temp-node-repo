const express=require('express');
const router=express.Router();
let {people}=require('../data');

const {getPeople,createPersonPostman,deletePersonPostman,updatePersonPostman}=require('../controllers/people');
const { create } = require('lodash');

// router.get('/',getPeople)
// router.post('/',createPersonPostman)
// router.post('/postman',createPersonPostman)
// router.put('/:id',updatePersonPostman)
// router.delete('/:id',deletePersonPostman)

router.route('/').get(getPeople).post(createPersonPostman)
router.route('/:id').put(updatePersonPostman).delete(deletePersonPostman)
router.route('/postman').post(createPersonPostman)

module.exports=router