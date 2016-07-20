/**
 * CategoriesController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	list: function (req, res) {
        Categories.find().exec(function(err, records){
            var data = [];
            records.map((record) => {
                return data.push({name:record.name, imagePath:record.imagePath})
            })
            return res.json({data:data});
        });
    },
    create: function (req, res) {
        var body = {
            name: req.body.name,
            imagePath: req.body.imagePath
        }
        Categories.create(body).exec(function (err, record) {
            if(err){
                return res.json({err:err})
            }
            return res.json({data:record});
        });
    },
    update: function (req, res) {
         var body = {
            name: req.body.name,
            imagePath: req.body.imagePath
        }
        Categories.update({id:req.params.id}, body)
            .then((record) => {
                res.json({data:record});
            })
            .catch((error) => {
                res.json({error:error});
            })
    },
    remove: function (req, res) {
        Categories.destroy({id:req.params.id})
            .then((record) => {
                res.json({data:record});
            })
            .catch((error) => {
                res.json({error:error});
            })
    }
};

