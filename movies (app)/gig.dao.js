const Gig = require('./model');
var gigDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateGig: updateGig
}

function findAll() {
    return Gig.findAll();
}

function findById(id) {
    return Gig.findByPk(id);
}

function deleteById(id) {
    return Gig.destroy({ where: { id: id } });
}

function create(gig) {
    var newGig = new Gig(gig);
    return newGig.save();
}

function updateGig(gig, id) {
    var updateGig = {
        title: gig.title,
        info: gig.info,
        genres: gig.genres,
        language: gig.language,
    };
    return Gig.update(updateGig, { where: { id: id } });
}
module.exports = gigDao;