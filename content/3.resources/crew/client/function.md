# Functions

### Position Screen

Converts 3D world coordinates to 2D screen coordinates.

```lua
World3DToScreen2D(pos)
```

### Array Search

Searches for a value in an array and returns its index if found.

```lua
findValueinArray(table, value)
```

### Message Contains

Checks if a message contains a specific substring.

```lua
msgcontains(msg, what)
```

### JSON Data Management

These Lua functions seem to be used for managing data in JSON files within a FiveM resource. They provide functionality to get, add, delete, and replace items in a JSON file. Here's a summary of each function:

```lua
GetFile(filename) --Reads and returns the entire JSON file's contents as a Lua table.
GetItem(filename, itemname)-- Reads the JSON file and returns the value of a specific item.
AddItem(filename, itemname, itemcontent)-- Adds a new item to the JSON file or updates an existing one.
DeleteItem(filename, itemname)-- Deletes a specific item from the JSON file.
ReplaceItem(filename, itemname, itemcontent)-- Replaces the value of a specific item in the JSON file.
```
These functions are useful for dynamically managing data in a JSON format within a FiveM resource.