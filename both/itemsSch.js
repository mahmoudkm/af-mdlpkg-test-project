Items = new Mongo.Collection('items');

// Items.helpers({

// });

// Items.before.insert(function (userId, doc) {
//   doc.createdAt = moment().toDate();
// });




this.AFormMDLTestGlobalObj = {};

this.AFormMDLTestGlobalObj.itemsSch = new SimpleSchema({    
  
  ItemCode: {
    type: String,
    label: "Item Code"
  },
  ItemName: {
    type: String,
    label: "Item Name",
    optional: true    

  },
  ItemDeliverToHome: {
    type: String,
    label: "Deliver to home?",
    optional: false,
    autoform: {
      type: "select-radio",
      options: function () {
        return [
          {label: "Yes", value: 'Yes'},
          {label: "No", value: 'No'}
        ];
      }
    }
  },
  ItemDeliverExtras: {
    type: String,
    label: "Extras?",
    optional: false,
    autoform: {
      type: "select-checkbox",
      options: function () {
        return [
          {label: "AUX Cable", value: 'AUX Cable'},
          {label: "Wifi Adaptor", value: 'Wifi Adaptor'},
          {label: "Extended Support", value: 'Extended Support'}
        ];
      }
    }
  },
  ItemIsCompound:{
    type: String,
    label: "Compound Item?",
    optional: false,
    autoform: {
      afFieldInput: {
        type: "boolean-checkbox"
      }
    }
  },
  memoField: {
    type: String,
    label: "Memo Field",
    optional: true,
    max: 1000,
    autoform: {
      rows: 8
    }
  }

});