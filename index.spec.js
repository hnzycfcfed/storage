import storage from './src/storage';

test('test local storage', () => {
    storage.setLocal('test', 'haha');

    expect(storage.getLocal('test')).toBe('haha');
})

test('test remove local', () => {
    storage.removeLocal('test');

    expect(storage.getLocal('test')).toBe(null);
})

test('test clear local', () => {
    storage.setLocal('test', 'haha');
    storage.setLocal('key', 'value');

    expect(localStorage.length).toBe(2);

    storage.clearLocal();

    expect(localStorage.length).toBe(0);
})

test('test session storage', () => {
    storage.setSession('test', 'haha');

    expect(storage.getSession('test')).toBe('haha');
})

test('test remove session', () => {
    storage.removeSession('test');

    expect(storage.getSession('test')).toBe(null);
})

test('test clear session', () => {
    storage.setSession('test', 'haha');
    storage.setSession('key', 'value');

    expect(sessionStorage.length).toBe(2);

    storage.clearSession();

    expect(sessionStorage.length).toBe(0);
})
