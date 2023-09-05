## Modify ShopNoteCard COMPONENT WITH CODE

1. The ShopNoteCard will

- display the ShopNote record
- allow the user to perform several database operations (mutations).

### PROGRAMMING

2. Added mutation definitions
    1. Create Item
    2. Update ShopNote name
      - we use this because we want to allow changing the name inline.
    3. Update ShopNote description
      - we use this because we want to allow changing the description inline.
    4. Delete ShopNote
    5. Delete Items
        - note: we have programmed this mutation to delete all items that have 'clicked' = ture
3. Add handler functions
    1. onClickAddItem
    2. onDeleteClick
    3. onClearClick
    4. onUpdateShopNoteName
    5. onUpdateShopNoteDescription
4. The component will loop through the items and display them using ShopNotesItemsDisplay component.
