const { addNoteHandler } = require('./handler/createNoteHandler');
const deleteById = require('./handler/deleteNoteHandler');
const editNote = require('./handler/editNoteHandler');
const { getAllNotesHandler } = require('./handler/getAllNotesHandler');
const getNoteById = require('./handler/getNotesByIdHandler');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteById,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNote,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteById,
    },
];

module.exports = routes;
