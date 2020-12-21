'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

// Menampilkan isi donatur
app.route('/isidonatur')
    .get(todoList.isidonatur);
// end menampilkan isi donatur

// Menambah data isi donatur
app.route('/tambah_donatur')
    .post(todoList.create_donatur);
// endMenambah data isi donatur

// Delete permanen donatur
app.route('/delete_donatur_permanen')
    .post(todoList.delete_donatur_permanen);
// end Delete permanen donatur

// Update donatur
app.route('/updateIsidonatur')
.post(todoList.updateIsidonatur);
// end Update donatur


    // app.route('/isidonatur/:id_donatur')
    //     .get(todoList.findIsidonatur);

    // app.route('/isidonatur')
    //     .post(todoList.createIsidonatur);

    // app.route('/isidonatur/update')
    //     .post(todoList.updateIsidonatur);
    
    // app.route('/isidonatur/delete')
    //     .post(todoList.deleteIsidonatur);
};