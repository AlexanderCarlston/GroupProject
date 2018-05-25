const express = require('express');
const router = express.Router();
const queries = require('../queries');

router.get("/", (request, response, next) => {
    queries.list()
    .then(highs => {
        response.json({data:highs});
    })
    .catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id)
    .then(high => {
        high
            if (high.length == 0) {
                response.status(404).json({
                    message: 'Not found'
                })
            } else(response.json({
                high: high[0]
            }))
            // ? response.json({high})
            // : response.status(404).json({message: 'Not found'})
    })
    .catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body)
    .then(high => {
        response.status(201).json({data: high[0]});
    })
    .catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    })
    .catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body)
    .then(high => {
        response.json({high: high[0]});
    })
    .catch(next);
});

module.exports = router;
