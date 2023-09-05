## Modify ShopNotesItemsDisplay COMPONENT WITH CODE

1. The ShopNotesItemsDisplay will

- display a ShopNote item
- allow the user to perform several database operations (mutations).

### PROGRAMMING

2. Added mutation definitions
    1. Create Item
    2. Update Item urgent
    3. Update Item checked
    4. Update Item name
    4. Delete Item

3. Add handler functions
    1. onUpdateUrgent
    2. onUpdateChecked
    3. onUpdateName
    - note: this handler uses a call to debounce callback function to prevent too many calls to the database.
    4. onClickDeleteItem
    5. onClickAddItem
