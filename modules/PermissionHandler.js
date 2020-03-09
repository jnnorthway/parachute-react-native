import * as Permissions from 'expo-permissions';

const permissions = {
  "notifications": Permissions.NOTIFICATIONS,
  "contacts": Permissions.CONTACTS,
  "camera_roll": Permissions.CAMERA_ROLL,
};

async function permissionHandler(request) {
  // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
  const { status, permission } = await Permissions.askAsync(permissions[request]);
  if (status === 'granted') {
    return true;
  } else {
    throw new Error(request, ' permission not granted');
  }
}

export default function getPermissions() {
  for (var permission in permissions) {
    permissionHandler(permission);
  }
}
