# Configuration
## Simple Mouselock plugin - v2.0 - by Armaldio <img src='source\c2addon\files\armaldio_mouse_lock\PluginIcon.ico' alt='Icon'>
Property | Value
:---: | ---
Description | Allows native-like pointer locking for your projects and games.
Category | Input
Cordova | No
Flags | No
Help | https://www.scirra.com/forum/new-simple-native-like-mouselocking-plugin_t199484
Id | armaldio_mouse_lock
Rotatable | No
Type | object

# Actions
#### There are 7 actions available
**On/Off::Set Mouse Lock** : Manually enable/disable the mouse lock.

* **Set Mouse Lock:** : Enable/Disable Mouse Lock. (default value : undefined)
  * Enable
  * Disable

---

**Invert::Invert X Axis** : Set property Invert X Axis.

* **Invert X Axis:** : Invert X Axis. (default value : undefined)
  * False
  * True

---

**Invert::Invert Y Axis** : Set property Invert Y Axis.

* **Invert Y Axis:** : Invert Y Axis. (default value : undefined)
  * False
  * True

---

**Advanced::Set Cursor Speed** : Set property Cursor Speed.

* **Cursor Speed** : Set the cursor speed.

---

**Advanced::Mouse Lock on Custom Key** : Choose a custom key to activate mouse lock.
'Activate On' must be set to 'Custom Key' for this to work.

* **Custom Lock Activate Key** : Choose a custom key to activate mouse lock.
'Activate On' must be set to 'Custom Key' for this to work.

---

**Advanced::Set Locked Cursor X Position** : Set property Locked Cursor X Position.

* **X Position** : X Position

---

**Advanced::Set Locked Cursor Y Position** : Set property Locked Cursor Y Position.

* **Y Position** : Y Position

---

# Conditions
#### There are 5 conditions available
**Status Conditions::Is supported** : True if mouse locking is supported.


---

**Status Conditions::Is locked** : True if mouse is locked.


---

**Status Conditions::Is moving** : True if mouse is moving.


---

**Trigger Conditions::On Lock** : Triggered when mouse is locked.


---

**Trigger Conditions::On Unlock** : Triggered when mouse is unlocked.


---

# Expressions
#### There are 5 expressions available
**Raw Input::RawX** : (X axis) Raw mouse position change from last tick.


---

**Raw Input::RawY** : (Y axis) Raw mouse position change from last tick.


---

**Default Input::MouseLockX** : (X axis) Mouse position on current layer or layout.


---

**Default Input::MouseLockY** : (Y axis) Mouse position on current layer or layout.


---

**Default Input::MovementAngle** : Cursor's angle of movement. Computed from last two or three positions. If no movement, returns -1.


---

