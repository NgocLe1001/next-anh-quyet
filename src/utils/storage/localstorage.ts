export class LocalStorageHelper {
    /**
     * Generates a storage key by appending the provided key to the application's base path if it exists in the environment variables.
     * If the base path is not defined, it returns the key unchanged. This ensures consistent key naming across different environments.
     *
     * @param {string} key The original key to be stored or retrieved from local storage.
     *
     * @returns {string} The generated storage key, potentially prefixed with the application's base path.
     */
    static generateStorageKey(key: string) {
        if (process.env.NEXT_PUBLIC_API_BASE_URL) {
            return `${process.env.NEXT_PUBLIC_API_BASE_URL}_${key}`;
        }

        return key;
    }

    /**
     * Retrieves an item from local storage using a generated storage key.
     * This method abstracts away the direct interaction with local storage, ensuring keys are consistently named.
     *
     * @param {string} key The key of the item to retrieve from local storage.
     *
     * @returns {string | null} The value associated with the key in local storage, or null if the key does not exist.
     */
    static getItem(key: string): string | null {
        return window.localStorage.getItem(LocalStorageHelper.generateStorageKey(key));
    }

    /**
     * Stores an item in local storage using a generated storage key.
     * This method simplifies setting items in local storage with a consistent key naming convention.
     *
     * @param {string} key The key under which to store the value in local storage.
     * @param {string} value The value to store in local storage.
     *
     * @returns {void}
     */
    static setItem(key: string, value: string) {
        window.localStorage.setItem(LocalStorageHelper.generateStorageKey(key), value);
    }

    /**
     * Removes an item from local storage using a generated storage key.
     * This method encapsulates the removal process, ensuring consistency in how keys are handled.
     *
     * @param {string} key The key of the item to remove from local storage.
     *
     * @returns {void}
     */
    static removeItem(key: string) {
        window.localStorage.removeItem(LocalStorageHelper.generateStorageKey(key));
    }
}
