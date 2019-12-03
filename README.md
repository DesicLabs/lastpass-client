# Lastpass Client

## Class Hierarchy

### Methods

- [addEntry](README.md#addaccount)
- [getEntries](README.md#getEntries)
- [getEntryCredentials](README.md#getaccountcredentials)
- [login](README.md#login)

## Methods

### addEntry

▸ **addEntry**(`entry`: [NewEntry]): _Promise‹string›_

**Parameters:**

| Name    | Type       |
| ------- | ---------- |
| `entry` | [NewEntry] |

**Returns:** _Promise‹boolean›_

---

### getEntries

▸ **getEntries**(): _Promise‹[Entry]_

**Returns:** _Promise_

---

### getEntryCredentials

▸ **getEntryCredentials**(`id`: string): _Promise‹[EntryCredentials]_

**Returns:** _Promise_

---

### login

▸ **login**(`password`: string, `username`: string): _Promise‹void›_

**Parameters:**

| Name       | Type   |
| ---------- | ------ |
| `password` | string |
| `username` | string |

**Returns:** _Promise‹void›_

## Type aliases

### FullEntry

Ƭ **RawEntry**: _Record‹[FullEntryFields](README.md#rawentryfields), string›_

---

### FullEntryFields

Ƭ **RawEntryFields**: \_"name" | "url" | "type" | "id" | "username" | "password" | "otp"

---

### Entry

Ƭ **Entry**: _Record‹[EntryFields](README.md#entryfields), string›_

---

### EntryFields

Ƭ **EntryFields**: \_"name" | "username" | "url" | "type" | "id"

---

### EntryCredentials

Ƭ **EntryCredentials**: _Record‹[EntryCredentialsFields](README.md#entrycredentialsfields), string›_

---

### EntryCredentialsFields

Ƭ **EntryCredentialsFields**: \_"username" | "password" | "otp";

---
