## MODIFY ShopNotesCell

1. modify the query in the ShopNotesCell to get the ShopNote records and their associated Items.

- note: the generated query will not have the related items.

```
export const QUERY = gql`
  query FindShopNotes {
    shopNotes {
      id
      name
      description
      updatedAt
      items {
        id
        name
        checked
        urgent
        noteId
      }
    }
  }
````
