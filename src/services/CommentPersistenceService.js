/* The current implementation for UserDataPersistence relies on saving data in localStorage */

export const UserDataPersistenceService = {
  // Get an item from localStorage
  async get(key) {
    return new Promise((resolve, reject) => {
      try {
        const item = localStorage.getItem(key);
        const returnValue = item ? JSON.parse(item) : null;

        resolve(returnValue);
      } catch (error) {
        console.error("Error while getting item from localStorage:", error);
        reject(error);
      }
    });
  },

  // Set an item in localStorage
  async set(key, value) {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        resolve();
      } catch (error) {
        console.error("Error while setting item in localStorage:", error);
        reject(error);
      }
    });
  },

  // Remove an item from localStorage
  remove(key) {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem(key);
        resolve();
      } catch (error) {
        console.error("Error while removing item from localStorage:", error);
        reject(error);
      }
    });
  },

  // Clear all items from localStorage
  clear() {
    return new Promise((resolve, reject) => {
      try {
        localStorage.clear();
        resolve();
      } catch (error) {
        console.error("Error while clearing localStorage:", error);
        reject(error);
      }
    });
  },
};
