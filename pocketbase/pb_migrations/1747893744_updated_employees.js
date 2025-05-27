/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select3343321666",
    "maxSelect": 1,
    "name": "gender",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Мужской",
      "Женский"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3735627160")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select3343321666",
    "maxSelect": 1,
    "name": "gender",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "мужчина"
    ]
  }))

  return app.save(collection)
})
