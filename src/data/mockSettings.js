// Simple in-memory settings store for demo purposes
// Tracks current user and per-user settings

import { users } from './mockData'

export let currentUserId = users?.[0]?.id || 1

const defaultSettings = {
  emailNotifications: true,
  pushNotifications: false,
  darkMode: false,
  twoFactor: false,
  autoSave: true,
  cloudSync: true,
}

const settingsByUser = {}

export function getCurrentUserId() {
  return currentUserId
}

export function setCurrentUserId(id) {
  currentUserId = id
}

export function getSettingsForUser(userId) {
  if (!settingsByUser[userId]) {
    settingsByUser[userId] = { ...defaultSettings }
  }
  return { ...settingsByUser[userId] }
}

export function saveSettingsForUser(userId, settings) {
  settingsByUser[userId] = { ...defaultSettings, ...settings }
  return { ...settingsByUser[userId] }
}
