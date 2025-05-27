/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "date1295612870",
    "max": "",
    "min": "",
    "name": "expirationDate_trash",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "date1295612870",
    "max": "",
    "min": "",
    "name": "expirationDate",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
