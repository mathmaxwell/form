/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // remove field
  collection.fields.removeById("date2963560774")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "date2963560774",
    "max": "",
    "min": "",
    "name": "passportIssued",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
