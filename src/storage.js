const storage = {

    /** localStorage Start */
    setLocal(k, v) {
        return storage.setItem(window.localStorage, k, v);
    },

    getLocal(k) {
        return storage.getItem(window.localStorage, k);
    },

    removeLocal(k) {
        return storage.removeItem(window.localStorage, k);
    },

    clearLocal() {
        return storage.clear(window.localStorage);

    },
    /** localStorage End */

    /** sessionStorage Start */
    setSession(k, v) {
        return storage.setItem(window.sessionStorage, k, v);
    },

    getSession(k) {
        return storage.getItem(window.sessionStorage, k);
    },

    removeSession(k) {
        return storage.removeItem(window.sessionStorage, k);
    },

    clearSession() {
        return storage.clear(window.sessionStorage);

    },
    /** sessionStorage End */

    setItem(s, k, v) {
        if (!storage.test(s)) return false;

        s.setItem(k, v);

        return true;
    },

    getItem(s, k) {
        if (!storage.test(s)) return false;

        return s.getItem(k);
    },

    removeItem(s, k) {
        if (!storage.test(s)) return false;

        s.removeItem(k);

        return true;
    },

    clear(s) {
        if (!storage.test(s)) return false;

        s.clear();

        return true;
    },

    test(storage) {
        if (!!storage) {
            return true;
        } else {
            return false;
        }
    }
}

export default storage;
