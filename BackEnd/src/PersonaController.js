
const db_conection = require('../config/database.js');

exports.index = (req, res) => {
    db_conection.sql.connect(db_conection.config, function (err) {
        if (err) {
            console.log(err);
        } else {
            // create Request object
            var request = new db_conection.sql.Request();
            // query to the database and get the records
            request.query('SELECT * FROM Persona', function (err, result) {
                if (err) {
                    console.log(err)
                } else {
                    // send records as a response
                    res.json(result.recordsets[0]);
                }
            });
        }
    });
};

exports.insert = (req, res) => {
    const { cedula, nombre, apellidos } = req.body;
    db_conection.sql.connect(db_conection.config, function (err) {
        if (err) {
            console.log(err);
        } else {
            // create Request object
            var request = new db_conection.sql.Request();
            // query to the database and get the records
            request.query("INSERT INTO [dbo].[Persona] ([cedula],[nombre],[apellidos]) VALUES (N'" + cedula + "',N'" + nombre + "',N'" + apellidos + "')", function (err, result) {
                if (err) {
                    console.log(err)
                } else {
                    // send records as a response
                    res.json("Se insertó correctamente");
                }
            });
        }
    });
};
    
exports.update = (req, res) => {
    const { id, cedula, nombre, apellidos } = req.body;
    db_conection.sql.connect(db_conection.config, function (err) {
        if (err) {
            console.log(err);
        } else {
            // create Request object
            var request = new db_conection.sql.Request();
            // query to the database and get the records
            request.query("UPDATE [dbo].[Persona] SET [cedula] ='" + cedula + "', [nombre] = '" + nombre + "', [apellidos] = '" + apellidos + "' WHERE [idPersona] = '"+ id +"'", function (err, result) {
                if (err) {
                    console.log(err)
                } else {
                    // send records as a response
                    res.json("Se actualizó correctamente");
                }
            });
        }
    });
};

exports.delete = (req, res) => {
    const { id } = req.params;
    db_conection.sql.connect(db_conection.config, function (err) {
        if (err) {
            console.log(err);
        } else {
            // create Request object
            var request = new db_conection.sql.Request();
            // query to the database and get the records
            request.query("DELETE FROM [dbo].[Persona] WHERE [idPersona] =" + id, function (err, result) {
                if (err) {
                    console.log(err)
                } else {
                    // send records as a response
                    res.json("Se eliminó correctamente");
                }
            });
        }
    });
};