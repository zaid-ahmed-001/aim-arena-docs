# Exports

### Discord Server API

Exports various functions for interacting with Discord server and user information.

```lua
server_exports { 
    -- Retrieves the roles associated with a Discord user.
	"GetDiscordRoles",

    -- Retrieves the role ID from the role name.
	"GetRoleIdFromRoleName",

    -- Retrieves the avatar URL of a Discord user.
	"GetDiscordAvatar",

    -- Retrieves the username of a Discord user.
	"GetDiscordName",

    -- Retrieves the email of a Discord user.
	"GetDiscordEmail",

    -- Checks if the email of a Discord user is verified.
	"IsDiscordEmailVerified",

    -- Retrieves the nickname of a Discord user.
	"GetDiscordNickname",

    -- Retrieves the icon URL of a Discord server.
	"GetGuildIcon",

    -- Retrieves the splash URL of a Discord server.
	"GetGuildSplash",

    -- Retrieves the name of a Discord server.
	"GetGuildName",

    -- Retrieves the description of a Discord server.
	"GetGuildDescription",

    -- Retrieves the total member count of a Discord server.
	"GetGuildMemberCount",

    -- Retrieves the online member count of a Discord server.
	"GetGuildOnlineMemberCount",

    -- Retrieves a list of roles in a Discord server.
	"GetGuildRoleList",

    -- Resets the cache used for Discord data.
	"ResetCaches",

    -- Checks if two values are equal.
	"CheckEqual",

    -- Sets the nickname of a Discord user.
	"SetNickname",

    -- Sets the roles of a Discord user.
	"SetRoles",

    -- Adds a role to a Discord user.
	"AddRole",

    -- Removes a role from a Discord user.
	"RemoveRole",

    -- Changes the voice channel of a Discord user.
	"ChangeDiscordVoice",

    -- Clears the cache for a specific Discord user.
	"ClearCache",

    -- Fetches the role ID of a specified role.
	"FetchRoleID"
}

```