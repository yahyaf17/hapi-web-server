const notes = require('../notes');

const editNote = (request, h) => {
    const { id } = request.params;
    const { title, tags, body } = request.payload;
    const updatedAt = new Date().toISOString();

    const idx = notes.findIndex((note) => note.id === id);

    if (idx === -1) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbarui catatan. Id tidak ditemukan',
        });
        response.code(404);
        return response;
    }

    notes[idx] = {
        ...notes[idx],
        title,
        tags,
        body,
        updatedAt,
    };

    const response = h.response({
        status: 'success',
        message: 'Catatan berhasil diperbarui',
    });
    response.code(200);
    return response;
};

module.exports = editNote;
