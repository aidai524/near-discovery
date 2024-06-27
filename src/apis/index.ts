import * as http from '@/utils/http';

export const insertedAccessKey = (accessToken: string) => {
  const dbName = 'cacheDb';
  const tableName = 'cache-v1';

  const request = indexedDB.open(dbName, 1);

  request.onupgradeneeded = (event: any) => {
    const db = event?.target?.result;

    if (!db.objectStoreNames.contains(tableName)) {
      db.createObjectStore(tableName);
    }
  };

  request.onerror = (event: any) => {
    console.error('Failed to open database:', event.target?.error);
  };
  request.onsuccess = (event: any) => {
    const db = event.target?.result;
    const transaction = db.transaction(tableName, 'readwrite');
    const store = transaction.objectStore(tableName);

    const data = {
      key: '{"action":"LocalStorage","domain":{"src":"guessme.near/widget/ZKEVMWarmUp.add-to-quest-card","type":"public"},"key":"AccessKey"}',
      value: accessToken ? `Bearer ${accessToken}` : '',
    };

    const r = store.add(data.value, data.key);

    r.onsuccess = () => {
      console.log('Data inserted successfully.');
    };

    r.onerror = (event: any) => {
      store.put(data.value, data.key);
    };
  };
};

export const getAccessToken = async (address: string) => {
  const res = await http.post('/api/auth/access-token', {
    address,
  });
  window.sessionStorage.setItem(http.AUTH_TOKENS, JSON.stringify(res));
  insertedAccessKey(res.access_token);
};

export const refreshAccessToken = async () => {
  const tokens = JSON.parse(window.sessionStorage.getItem(http.AUTH_TOKENS) || '{}');
  const res = await http.post('/api/auth/refresh-access-token', {
    refresh_token: tokens.refresh_access_token,
  });
  window.sessionStorage.setItem(
    http.AUTH_TOKENS,
    JSON.stringify({
      ...tokens,
      access_token: res.access_token,
    }),
  );
};

export const checkAddressIsInvited = async (account: string) => {
  try {
    const res = await http.get(`/api/invite/check-address/${account}`);
    return !!res.data?.is_activated;
  } catch (error) {
    return false;
  }
};

export const inviteCodeActivate = async (account: string, code: string, source?: string) => {
  try {
    const res = await http.post(`/api/invite/activate`, {
      address: account,
      code,
      source,
    });
    return {
      isSuccess: !!res.data?.is_success,
      errorMsg: res.msg,
    };
  } catch (error) {
    return {
      isSuccess: false,
      errorMsg: '',
    };
  }
};

export const getBnsUserName = async (address: any) => {
  try {
    return http.get('https://resolver-api.basename.app/v1/addresses/' + address);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBnsDiscount = async () => {
  try {
    return await http.get('/api/quest/bns_discount');
  } catch (error) {
    return Promise.reject(error);
  }
};
