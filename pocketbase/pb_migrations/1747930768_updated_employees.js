/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // update field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "date3979766995",
    "max": "",
    "min": "",
    "name": "dataBorn_trash",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // update field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "date3979766995",
    "max": "",
    "min": "",
    "name": "dataBorn",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
