window.createDictionaryManager = function createDictionaryManager(options){
  const listEl = options?.listEl || null;
  const prevEl = options?.prevEl || null;
  const nextEl = options?.nextEl || null;
  const pageIndicatorEl = options?.pageIndicatorEl || null;
  const searchEl = options?.searchEl || null;
  const t = typeof options?.translate === 'function' ? options.translate : ((k)=>k);
  const storageKey = options?.storageKey || 'jtac_dict_view';

  let itemsByLang = {es: [], en: []};
  let currentLang = 'es';
  let loadError = false;

  let dictStartIndex = 0;
  let dictPageIndex = 0;
  let dictSearchQuery = '';
  let dictAnchorTerm = '';
  let dictFilterCache = {lang: '', query: '', sourceRef: null, items: []};
  let dictStartsCache = {key: '', starts: [0]};
  let initialized = false;

  function getTerminologyList(){
    const list = itemsByLang[currentLang] || itemsByLang.en || [];
    return Array.isArray(list) ? list : [];
  }

  function loadViewState(){
    try{
      const raw = localStorage.getItem(storageKey);
      if(!raw) return;
      const parsed = JSON.parse(raw);
      if(typeof parsed.search === 'string') dictSearchQuery = parsed.search;
      if(typeof parsed.anchor === 'string') dictAnchorTerm = parsed.anchor;
      if(Number.isInteger(parsed.start) && parsed.start >= 0) dictStartIndex = parsed.start;
      if(Number.isInteger(parsed.pageIndex) && parsed.pageIndex >= 0) dictPageIndex = parsed.pageIndex;
      if(searchEl) searchEl.value = dictSearchQuery;
    }catch(e){
      console.warn('loadDictionaryViewState', e);
    }
  }

  function saveViewState(){
    try{
      const payload = {
        search: dictSearchQuery,
        start: dictStartIndex,
        pageIndex: dictPageIndex,
        anchor: dictAnchorTerm
      };
      localStorage.setItem(storageKey, JSON.stringify(payload));
    }catch(e){
      console.warn('saveDictionaryViewState', e);
    }
  }

  function getFilteredItems(){
    const all = getTerminologyList();
    const q = (dictSearchQuery || '').trim().toLowerCase();
    if(
      dictFilterCache.lang === currentLang &&
      dictFilterCache.query === q &&
      dictFilterCache.sourceRef === all
    ){
      return dictFilterCache.items;
    }
    const items = !q ? all : all.filter(item=> String(item || '').toLowerCase().includes(q));
    dictFilterCache = {lang: currentLang, query: q, sourceRef: all, items};
    return items;
  }

  function findBestMatch(query){
    const q = String(query || '').trim().toLowerCase();
    if(!q) return null;
    const items = getTerminologyList();
    if(!items.length) return null;
    const normalized = items.map(item=> String(item || '').toLowerCase());
    let idx = normalized.findIndex(item=> item.startsWith(`${q}:`));
    if(idx >= 0) return items[idx];
    idx = normalized.findIndex(item=> item.startsWith(q));
    if(idx >= 0) return items[idx];
    idx = normalized.findIndex(item=> item.includes(q));
    return idx >= 0 ? items[idx] : null;
  }

  function measureItemHeight(text, width){
    const probe = document.createElement('div');
    probe.className = 'dict-item';
    probe.style.position = 'absolute';
    probe.style.visibility = 'hidden';
    probe.style.pointerEvents = 'none';
    probe.style.left = '-9999px';
    probe.style.top = '-9999px';
    probe.style.width = `${Math.max(120, Math.floor(width))}px`;
    probe.textContent = text;
    document.body.appendChild(probe);
    const h = probe.getBoundingClientRect().height || 24;
    document.body.removeChild(probe);
    return h;
  }

  function getAvailableHeight(){
    const nav = listEl?.parentElement?.querySelector('.dict-nav');
    if(!listEl || !nav) return 0;
    const listRect = listEl.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    const available = Math.floor(navRect.top - listRect.top - 8);
    return Math.max(0, available);
  }

  function getVisibleCountForStart(items, start){
    if(!listEl || !items.length || start >= items.length) return 0;
    const available = getAvailableHeight();
    if(available <= 0) return 1;
    const width = listEl.clientWidth || 260;
    const gap = 4;
    let used = 0;
    let count = 0;
    for(let i = start; i < items.length; i++){
      const h = measureItemHeight(items[i], width);
      const nextUsed = used + (count > 0 ? gap : 0) + h;
      if(nextUsed > available){
        break;
      }
      used = nextUsed;
      count++;
    }
    return Math.max(1, count);
  }

  function buildPageStarts(items){
    if(!Array.isArray(items) || !items.length) return [0];
    const width = listEl?.clientWidth || 0;
    const available = getAvailableHeight();
    const cacheKey = `${currentLang}|${dictSearchQuery}|${items.length}|${width}|${available}`;
    if(dictStartsCache.key === cacheKey) return dictStartsCache.starts;
    const starts = [0];
    let idx = 0;
    while(idx < items.length){
      const count = Math.max(1, getVisibleCountForStart(items, idx));
      const next = idx + count;
      if(next >= items.length) break;
      starts.push(next);
      idx = next;
    }
    dictStartsCache = {key: cacheKey, starts};
    return starts;
  }

  function getPageIndexFromStart(starts, start){
    if(!starts.length) return 0;
    let best = 0;
    for(let i = 0; i < starts.length; i++){
      if(starts[i] <= start) best = i;
      else break;
    }
    return best;
  }

  function render(){
    if(!listEl) return;
    listEl.innerHTML = '';
    if(loadError){
      const err = document.createElement('div');
      err.className = 'dict-item danger';
      err.textContent = t('terminology.load_error');
      listEl.appendChild(err);
      if(prevEl) prevEl.disabled = true;
      if(nextEl) nextEl.disabled = true;
      if(pageIndicatorEl) pageIndicatorEl.textContent = '!';
      saveViewState();
      return;
    }

    const filteredItems = getFilteredItems();
    if(!filteredItems.length){
      const empty = document.createElement('div');
      empty.className = 'dict-item small';
      empty.textContent = t('terminology.empty');
      listEl.appendChild(empty);
      if(prevEl) prevEl.disabled = true;
      if(nextEl) nextEl.disabled = true;
      if(pageIndicatorEl) pageIndicatorEl.textContent = '0 / 0';
      dictPageIndex = 0;
      dictStartIndex = 0;
      dictAnchorTerm = '';
      saveViewState();
      return;
    }

    const starts = buildPageStarts(filteredItems);
    const anchorIdx = dictAnchorTerm ? filteredItems.indexOf(dictAnchorTerm) : -1;
    if(anchorIdx >= 0){
      dictPageIndex = getPageIndexFromStart(starts, anchorIdx);
    } else if(dictPageIndex < 0 || dictPageIndex >= starts.length){
      dictPageIndex = getPageIndexFromStart(starts, dictStartIndex);
    }
    dictPageIndex = Math.max(0, Math.min(dictPageIndex, starts.length - 1));

    const start = starts[dictPageIndex];
    const nextStart = dictPageIndex + 1 < starts.length ? starts[dictPageIndex + 1] : filteredItems.length;
    const end = Math.min(filteredItems.length, nextStart);
    const pageItems = filteredItems.slice(start, end);
    const frag = document.createDocumentFragment();
    pageItems.forEach(item=>{
      const div = document.createElement('div');
      div.className = 'dict-item';
      div.textContent = item;
      frag.appendChild(div);
    });
    listEl.appendChild(frag);
    if(prevEl) prevEl.disabled = dictPageIndex <= 0;
    if(nextEl) nextEl.disabled = dictPageIndex >= (starts.length - 1);
    if(pageIndicatorEl){
      pageIndicatorEl.textContent = `${start + 1}-${end} / ${filteredItems.length}`;
    }
    dictStartIndex = start;
    dictAnchorTerm = filteredItems[start] || '';
    saveViewState();
  }

  function handleSearchInput(){
    const oldItems = getFilteredItems();
    const anchorItem = oldItems[dictStartIndex] || null;
    dictSearchQuery = searchEl?.value || '';
    if(anchorItem) dictAnchorTerm = anchorItem;
    render();
  }

  function handleSearchEnter(e){
    if(e.key !== 'Enter') return;
    e.preventDefault();
    const typed = searchEl?.value || '';
    const match = findBestMatch(typed);
    if(!match) return;
    dictSearchQuery = '';
    if(searchEl) searchEl.value = '';
    dictAnchorTerm = match;
    dictPageIndex = -1;
    render();
  }

  function init(){
    if(initialized) return;
    initialized = true;
    loadViewState();
    prevEl?.addEventListener('click', ()=>{
      if(dictPageIndex <= 0) return;
      dictPageIndex -= 1;
      dictAnchorTerm = '';
      render();
    });
    nextEl?.addEventListener('click', ()=>{
      dictPageIndex += 1;
      dictAnchorTerm = '';
      render();
    });
    searchEl?.addEventListener('input', handleSearchInput);
    searchEl?.addEventListener('keydown', handleSearchEnter);
    window.addEventListener('resize', render);
  }

  function setData(pool, errorFlag){
    itemsByLang = pool && typeof pool === 'object' ? pool : {es: [], en: []};
    loadError = !!errorFlag;
    dictFilterCache = {lang: '', query: '', sourceRef: null, items: []};
    dictStartsCache = {key: '', starts: [0]};
  }

  function setLanguage(lang){
    currentLang = lang || 'es';
    dictFilterCache = {lang: '', query: '', sourceRef: null, items: []};
    dictStartsCache = {key: '', starts: [0]};
  }

  return {init, render, setData, setLanguage};
};
