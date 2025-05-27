/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "date4182447598",
    "max": "",
    "min": "",
    "name": "dateOfIssue_trash",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "date4182447598",
    "max": "",
    "min": "",
    "name": "dateOfIssue",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
