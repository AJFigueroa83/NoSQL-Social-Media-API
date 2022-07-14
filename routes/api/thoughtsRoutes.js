const router = require('express').Router();

const { getAllThoughts, getThoughtsById, createThoughts, updateThoughts, deleteThoughts, addReaction, deleteReaction } = require('../../controllers/thoughtsController');

router.route('/').get(getAllThoughts);
router.route('/:id/:userId').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts); 
router.route('/:userId').post(createThoughts);
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;