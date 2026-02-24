// Shared fetch helpers with timeout and unified error details.
(function(){
  function withTimeout(ms){
    const ctrl = new AbortController();
    const id = setTimeout(()=> ctrl.abort('timeout'), ms);
    return {signal: ctrl.signal, cancel: ()=> clearTimeout(id)};
  }

  async function safeFetchJson(url, options){
    const timeoutMs = Number(options?.timeoutMs || 8000);
    const wt = withTimeout(timeoutMs);
    try{
      const res = await fetch(url, {
        cache: options?.cache || 'no-cache',
        headers: options?.headers || {},
        method: options?.method || 'GET',
        body: options?.body,
        signal: wt.signal
      });
      if(!res.ok){
        return {ok:false, status: res.status, error:`http_${res.status}`};
      }
      let data = null;
      try{
        data = await res.json();
      }catch{
        return {ok:false, status: res.status, error:'invalid_json'};
      }
      return {ok:true, status: res.status, data};
    }catch(e){
      const msg = String(e?.message || e || '');
      const isAbort = msg.includes('abort') || msg.includes('timeout');
      return {ok:false, status: 0, error:isAbort ? 'timeout' : 'network'};
    }finally{
      wt.cancel();
    }
  }

  window.safeFetchJson = safeFetchJson;
})();

