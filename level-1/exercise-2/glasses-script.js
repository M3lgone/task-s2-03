db.createCollection("client", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "client",
      required: [
        "name",
        "adress",
        "telephone",
        "email",
        "registerDate",
        "glasses",
        "employee",
        "recomendedBy",
      ],
      properties: {
        name: {
          bsonType: "string",
        },
        adress: {
          bsonType: "string",
        },
        telephone: {
          bsonType: "int",
        },
        email: {
          bsonType: "string",
        },
        registerDate: {
          bsonType: "date",
        },
        glasses: {
          bsonType: "object",
          title: "object",
          required: [
            "brand",
            "graduation",
            "frame",
            "colorFrame",
            "colorLens",
            "supplier",
            "price",
            "boughtBy",
          ],
          properties: {
            brand: {
              bsonType: "string",
            },
            graduation: {
              bsonType: "object",
              title: "object",
              required: ["graduationRight", "graduationLeft"],
              properties: {
                graduationRight: {
                  bsonType: "decimal",
                },
                graduationLeft: {
                  bsonType: "decimal",
                },
              },
            },
            frame: {
              enum: ["plastic", "floating", "metal"],
            },
            colorFrame: {
              bsonType: "string",
            },
            colorLens: {
              bsonType: "object",
              title: "object",
              required: ["colorRight", "colorLeft"],
              properties: {
                colorRight: {
                  bsonType: "string",
                },
                colorLeft: {
                  bsonType: "string",
                },
              },
            },
            supplier: {
              bsonType: "object",
              title: "object",
              required: ["name", "address", "phone", "fax", "nif"],
              properties: {
                name: {
                  bsonType: "string",
                },
                address: {
                  bsonType: "object",
                  title: "object",
                  required: [
                    "street",
                    "number",
                    "flat",
                    "door",
                    "city",
                    "cp",
                    "country",
                  ],
                  properties: {
                    street: {
                      bsonType: "string",
                    },
                    number: {
                      bsonType: "int",
                    },
                    flat: {
                      bsonType: "int",
                    },
                    door: {
                      bsonType: "int",
                    },
                    city: {
                      bsonType: "string",
                    },
                    cp: {
                      bsonType: "int",
                    },
                    country: {
                      bsonType: "string",
                    },
                  },
                },
                phone: {
                  bsonType: "string",
                },
                fax: {
                  bsonType: "string",
                },
                nif: {
                  bsonType: "string",
                },
              },
            },
            price: {
              bsonType: "decimal",
            },
            boughtBy: {
              bsonType: "array",
              items: {
                bsonType: "array",
              },
            },
          },
        },
        employee: {
          bsonType: "object",
          title: "object",
          required: ["name"],
          properties: {
            name: {
              bsonType: "string",
            },
          },
        },
        recomendedBy: {
          bsonType: "string",
        },
      },
    },
  },
});
