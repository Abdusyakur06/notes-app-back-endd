const {addNoteHandler, getAllNotesHandler, getNoteByIdHandler, deleteNoteByIdHandler, editNoteByIdHandler} = require('./handler')
const routess = [{
    method: 'POST',
    path: '/notes',
    hendler: addNoteHandler,
},
{
    method: 'GET',
    path: '/notes',
    hendler: getAllNotesHandler,
 },
 {
     method: 'GET',
    path: '/notes/{id}',
    hendler: getNoteByIdHandler ,
 },
 {
    method:'PUT',
    path:'/notes/{id}',
    handler: editNoteByIdHandler,
 },
 {
    method:'DELETE',
    path:'/notes/{id}',
    handler: deleteNoteByIdHandler,
 }
]

 module.exports = routess

