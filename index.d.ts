export as namespace Storage;

type Key = string;

type Value = string;

declare const storage: {
    /**
    *
    * @param k 存储键
    * @param v 存储值
    */
    setLocal(k: Key, v: Value): boolean;

    getLocal(k: Key): string | false | null;

    removeLocal(k: Key): boolean;

    clearLocal(): boolean;

    setSession(k: Key, v: Value): boolean;

    getSession(k: Key): string | false | null;

    removeSession(k: Key): boolean;

    clearSession(): boolean;

}

export default storage;
