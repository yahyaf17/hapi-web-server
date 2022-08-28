const notes = require('../notes')

const deleteById = (request, h) => {
    const { id } = request.params;

    const idx = notes.findIndex((n) => n.id === id);

    if (idx === -1) {
        const response = h.response({
            status: 'fail',
            message: 'Catatan gagal dihapus. Id tidak ditemukan',
        });
        response.code(404);
        return response;
    }

    notes.splice(idx, 1);
    const response = h.response({
        status: 'success',
        message: 'Catatan berhasil dihapus',
    });
    response.code(200);
    return response;
};

module.exports = deleteById;
