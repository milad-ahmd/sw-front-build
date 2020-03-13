
abstract class BaseCtrl {

  abstract model: any;


  // Get all
  getAll = (req, res) => {
    this.model.find({ deleted: false }, (err, docs) => {
      if (err) { return res.send(err); }
      res.status(200).json({isSuccessful:true,data:docs});
    });
  }
  options = {
    page: 1,
    limit: 10
  };

  // Count all
  count = (req, res) => {
    this.model.count((err, count) => {
      if (err) { return res.send(err); }
      res.status(200).json({isSuccessful:true,count:count});
    });
  }

  // Insert
  insert = (req, res) => {
    const obj = new this.model(req.body);
    obj.save((err, item) => {
      // 11000 is the code for duplicate key error
      if (err && err.code === 11000) {
        res.sendStatus(400);
      }
      if (err) {
        return res.send(err);
      }
      res.status(200).json({isSuccessful:true,data:item});
    });
  }

  // Get by id
  get = (req, res) => {
    this.model.findOne({ _id: req.params.id, deleted: false }, (err, item) => {
      if (err) { return res.send(err); }
      res.status(200).json({isSuccessful:true,data:item});
    });
  }
  
  getMultiple = (req, res) => {
    this.model.find({ "_id": { "$in": req.body.components }, deleted: false }, (err, docs) => {
      if (err) { return res.send(err); }
      res.status(200).json(docs);
    });
  }

  // Update by id
  update = (req, res) => {
    this.model.findOneAndUpdate({ _id: req.body._id }, req.body, {new: true}, (err,doc) => {
      if (err) { return res.send(err); }
      res.status(200).json({isSuccessful:true,data:doc});
    });
  }
  getMulti = (req,res) => {
    this.model.find({
      '_id': { $in : req.body.ids }, deleted: false}, (err, docs) => {
      if (err) { return res.send(err); }
      res.status(200).json(docs);
    });
  }

  // Update all by list id
  updateAll = (req, res) => {

    let finalRes = {};
    let count = 0;
    let ids = req.body.id;
    let updatedDoc = []

    let updateById = (id, body) => {
      return new Promise((resolve, reject) => {
        this.model.findOneAndUpdate({ _id: id }, body, (err) => {
          if (err) { return res.send(err); }
          resolve(id);
        });
      })
    }

    let parseData = () => {
      if (ids.length > 0) {
        let id = ids[count];
        updateById(id, req.body.objects).then(data => {
          if (count < ids.length - 1) {
            count++;
            if (data) updatedDoc.push(data);
            parseData();
          } else {
            if (data) updatedDoc.push(data);
            finalRes['result'] = {
              list: updatedDoc
            }
            res.status(200).send(finalRes);
          }
        })

      } else {
        finalRes['message'] = 'Array is zero'
        res.status(200).send(finalRes);
      }
    }
    parseData();
  }

  // Delete by id
  delete = (req, res) => {
    this.model.findOneAndRemove({ _id: req.params.id }, (err) => {
      if (err) { return res.send(err); }
      res.sendStatus(200);
    });
  }


  getByFilter = (req, res) => {
    let query = req.query;
    if(!query['deleted']){
      query['deleted'] = false;
    }else if(query['deleted']=='none'){
      delete query['deleted']
    }
    if (query['count'] && query['count'] === "1") {
      delete query['count'];
      this.model.countDocuments(query, (err, docs) => {
        if (err) { return res.send(err); }
        res.status(200).json({isSuccessful:true,count:docs});
      });
    }else{
      this.model.find(query, (err, docs) => {
        if (err) { return res.send(err); }
        res.status(200).json({isSuccessful:true,data:docs});
      });
    }
  };
  getByStrongFilter=(req,res)=>{
    let fields=req.body;
    let query = {};
    for (let item of fields){
      if(item.type=='string'){
        query[item.name]=item.value;
      }else if(item.type=='array'){
        var regexp = new RegExp("\\b(?:" + item.value.join("|") + ")\\b", "i"); // "i" means case insensitive
        query[item.name]=regexp;
      }else if(item.type=='dateRange'){
        let fromDate=item.value.split('-')[0];
        let toDate=item.value.split('-')[1];
        query[item.name]={"$gte": new Date(fromDate.split(' ')[2],fromDate.split(' ')[1]-1,fromDate.split(' ')[0]), "$lt": new Date(toDate.split(' ')[2],toDate.split(' ')[1]-1,toDate.split(' ')[0])};

      }
    }
    // query['deleted'] = false;
    this.model.find(query, (err, docs) => {
      if (err) { return res.send(err); }
      res.status(200).json(docs);
    });
  };
  getByStrongFilterPagination=(req,res)=>{
    let fields=req.body;
    let query = {};
    if(fields){
      for (let item of fields){
        if(item.type=='string'){
          query[item.name]=item.value;
        }else if(item.type=='array'){
          var regexp = new RegExp("\\b(?:" + item.value.join("|") + ")\\b", "i"); // "i" means case insensitive
          query[item.name]=regexp;
        }else if(item.type=='dateRange'){
          let fromDate=item.value.split('-')[0];
          let toDate=item.value.split('-')[1];
          query[item.name]={"$gte": new Date(fromDate.split(' ')[2],fromDate.split(' ')[1]-1,fromDate.split(' ')[0]), "$lt": new Date(toDate.split(' ')[2],toDate.split(' ')[1]-1,toDate.split(' ')[0])};
        }
      }
    }

    query['deleted'] = false;
    this.options.page = parseInt(req.params.page);
    this.options.limit = parseInt(req.params.limit);
    this.model.paginate(query,this.options, (err, docs) => {
      if (err) { return res.send(err); }
      res.status(200).json(docs);
    });
  };

}

export default BaseCtrl;
