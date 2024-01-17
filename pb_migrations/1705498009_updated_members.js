/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vjb7w8wdzil5t6b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2eyq6y12",
    "name": "pfp",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vjb7w8wdzil5t6b")

  // remove
  collection.schema.removeField("2eyq6y12")

  return dao.saveCollection(collection)
})
