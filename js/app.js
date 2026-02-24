// ====== Referencias de UI ======
const csJtac = document.getElementById('cs-jtac');
const csGround = document.getElementById('cs-ground');
const airPresentEls = [
  document.getElementById('air-present-0'),
  document.getElementById('air-present-1'),
  document.getElementById('air-present-2')
];
const airL1 = document.getElementById('air-l1');
const airL2 = document.getElementById('air-l2');
const airL3 = document.getElementById('air-l3');
const airL4 = document.getElementById('air-l4');
const airL5 = document.getElementById('air-l5');
const airL6 = document.getElementById('air-l6');
const airL7 = document.getElementById('air-l7');
const linerSelect = document.getElementById('liner-select');
const linerFields = document.getElementById('liner-fields');
const omitL1L3El = document.getElementById('omit-l1-l3');
const omitL1L3RowEl = document.getElementById('omit-l1-l3-row');
const attackMethodBlockEl = document.getElementById('attack-method-block');
const casRemarksEl = document.getElementById('cas-remarks');
const includeRemarksEl = document.getElementById('include-remarks');
const casOutput = document.getElementById('cas-output');
const remarksSection = document.querySelector('details.section[data-section="remarks"]');
const vectorFinalToggleEl = document.getElementById('vector-final-toggle');
const vectorFinalFieldsEl = document.getElementById('vector-final-fields');
const vectorFinalDegEl = document.getElementById('vector-final-deg');
const vectorFinalVarEl = document.getElementById('vector-final-var');
const extraMinutesToggleEl = document.getElementById('extra-minutes-toggle');
const extraMinutesFieldsEl = document.getElementById('extra-minutes-fields');
const extraMinutesInputEl = document.getElementById('extra-minutes-input');
const preauthToggleEl = document.getElementById('preauth-toggle');
const preauthRowEl = document.getElementById('preauth-row');
const preauthLabelEl = document.getElementById('preauth-label');
const alliesInAreaToggleEl = document.getElementById('allies-in-area-toggle');
const alliesInAreaLabelEl = document.getElementById('allies-in-area-label');
const killboxToggleEl = document.getElementById('killbox-toggle');
const killboxLabelEl = document.getElementById('killbox-label');
const killboxInputEl = document.getElementById('killbox-input');
const leftPanel = document.getElementById('left-panel');
const menuBtn = document.getElementById('menu-btn');
const menuBackdrop = document.getElementById('menu-backdrop');
const clearBtnEl = document.getElementById('clear-btn');
const dangerCloseToggleEl = document.getElementById('danger-close-toggle');
const dangerCloseDegEl = document.getElementById('danger-close-deg');
const dangerCloseDistEl = document.getElementById('danger-close-dist');
const dangerCloseRowEl = document.getElementById('danger-close-row');
const importExportTextEl = document.getElementById('import-export-text');
const exportBtnEl = document.getElementById('export-btn');
const importBtnEl = document.getElementById('import-btn');
const exportArmamentsBtnEl = document.getElementById('export-armaments-btn');
const importArmamentsBtnEl = document.getElementById('import-armaments-btn');
const commonArmamentsBodyEl = document.getElementById('common-armaments-body');
const missionPresentEls = [
  document.getElementById('mission-present-0'),
  document.getElementById('mission-present-1'),
  document.getElementById('mission-present-2')
];
const casModeRadioEl = document.getElementById('cas-mode-radio');
const casGenBtn = document.getElementById('cas-gen');
const casAuthorizeBtn = document.getElementById('cas-authorize');
const timeLimitDisplayEl = document.getElementById('time-limit-display');
const appTabBtnEls = [...document.querySelectorAll('[data-app-tab-btn]')];
const appTabPanelEls = [...document.querySelectorAll('[data-app-tab-panel]')];
const cpSpeedMinEl = document.getElementById('cp-speed-min');
const cpSpeedAvgEl = document.getElementById('cp-speed-avg');
const cpSpeedMaxEl = document.getElementById('cp-speed-max');
const cpSpeedMinLabelEl = document.getElementById('cp-speed-min-label');
const cpSpeedAvgLabelEl = document.getElementById('cp-speed-avg-label');
const cpSpeedMaxLabelEl = document.getElementById('cp-speed-max-label');
const cpColDistanceEl = document.getElementById('cp-col-distance');
const cpColCumulativeEl = document.getElementById('cp-col-cumulative');
const checkpointListEl = document.getElementById('checkpoint-list');
const checkpointSummaryEl = document.getElementById('checkpoint-summary');
const checkpointAddBtnEl = document.getElementById('checkpoint-add-btn');
const reqMunitionListEl = document.getElementById('req-munition-list');
const castypeEls = [...document.querySelectorAll('input[name="castype"]')];
const attackMethodEls = [...document.querySelectorAll('input[name="attackmethod"]')];
let pendingMunitionSelection = null;
const DEFAULT_COMMON_ARMAMENTS_CSV = [
  'name,type,dangerCloseM',
  'GBU-12,Bomba guiada,260',
  'GBU-38,Bomba guiada,310',
  'APKWS,Cohete guiado,150',
  'Rockets HE,Cohete HE,300',
  'Gun Run,Canon,95',
  'AGM-65,Misil,275'
].join('\n');
const ARMAMENTS_CSV_STORAGE_KEY = 'jtac_armaments_csv';
let commonArmamentsCsv = DEFAULT_COMMON_ARMAMENTS_CSV;
const langSelectEl = document.getElementById('lang-select');
const unitSelectEl = document.getElementById('unit-select');
const dictListEl = document.getElementById('dict-list');
const dictPrevEl = document.getElementById('dict-prev');
const dictNextEl = document.getElementById('dict-next');
const dictPageIndicatorEl = document.getElementById('dict-page-indicator');
const dictSearchEl = document.getElementById('dict-search');
const extraInfoToggleEl = document.getElementById('extra-info-toggle');
const visualModeSelectEl = document.getElementById('visual-mode-select');
const settingsResetBtnEl = document.getElementById('settings-reset-btn');
const creditsImageEl = document.getElementById('credits-image');
const creditsSubtextEl = document.getElementById('credits-subtext');
const welcomeOverlayEl = document.getElementById('welcome-overlay');
const welcomeCloseEl = document.getElementById('welcome-close');
const welcomeLangSelectEl = document.getElementById('welcome-lang-select');
const welcomeUnitSelectEl = document.getElementById('welcome-unit-select');
const welcomeThemeSelectEl = document.getElementById('welcome-theme-select');
const CREDITS_IMAGE_PATHS = ['img/creditos/1.png', 'img/creditos/2.png', 'img/creditos/3.png'];
const CREDITS_SUBTEXT_POOL_URL = 'data/subcredits.json';
const TERMINOLOGY_POOL_URL = 'data/terminology.json';
const CREDITS_SUBTEXT_FALLBACK = {
  es: [
    'SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT'
  ],
  en: [
    'SAMPLE TEXT SAMPLE TEXT SAMPLE TEXT'
  ]
};
let creditsSubtextPool = CREDITS_SUBTEXT_FALLBACK;
let terminologyPool = {es: [], en: []};
let terminologyLoadError = false;
let dictionaryManager = null;
const FIRST_VISIT_STORAGE_KEY = 'jtac_first_visit_done';
const APP_TAB_STORAGE_KEY = 'jtac_last_app_tab';
let checkpointSegmentsM = [''];
let checkpointNames = [''];

// ====== i18n ======
let translations = {};
let currentLang = 'es';
function t(key, vars){
  const hasKey = !!(translations && Object.prototype.hasOwnProperty.call(translations, key));
  const raw = hasKey ? translations[key] : key;
  if(!vars) return raw;
  return Object.keys(vars).reduce((acc,k)=> acc.replaceAll(`{${k}}`, vars[k]), raw);
}

function escapeHtml(value){
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getUnit(){
  return localStorage.getItem('jtac_unit') || 'm';
}

function setUnit(unit){
  const safe = (unit === 'ft') ? 'ft' : 'm';
  localStorage.setItem('jtac_unit', safe);
  applyUnitToUI();
}

function getAltThemeEnabled(){
  return getVisualMode() === 'stealth';
}

function applyAltTheme(enabled){
  applyVisualMode(enabled ? 'stealth' : 'default');
}

function setAltTheme(enabled){
  setVisualMode(enabled ? 'stealth' : 'default');
}

function getVisualMode(){
  const storedMode = localStorage.getItem('jtac_visual_mode');
  if(storedMode === 'stealth' || storedMode === 'bright' || storedMode === 'default') return storedMode;
  return localStorage.getItem('jtac_alt_theme') === '1' ? 'stealth' : 'default';
}

function applyVisualMode(mode){
  const safeMode = (mode === 'stealth' || mode === 'bright') ? mode : 'default';
  document.body.classList.toggle('stealth-theme', safeMode === 'stealth');
  document.body.classList.toggle('bright-theme', safeMode === 'bright');
  if(visualModeSelectEl) visualModeSelectEl.value = safeMode;
  if(welcomeThemeSelectEl) welcomeThemeSelectEl.value = safeMode;
}

function setVisualMode(mode){
  const safeMode = (mode === 'stealth' || mode === 'bright') ? mode : 'default';
  localStorage.setItem('jtac_visual_mode', safeMode);
  localStorage.setItem('jtac_alt_theme', safeMode === 'stealth' ? '1' : '0');
  applyVisualMode(safeMode);
}

function syncWelcomeSelections(){
  if(welcomeLangSelectEl) welcomeLangSelectEl.value = localStorage.getItem('jtac_lang') || getSystemDefaultLang();
  if(welcomeUnitSelectEl) welcomeUnitSelectEl.value = getUnit();
  if(welcomeThemeSelectEl) welcomeThemeSelectEl.value = getVisualMode();
  if(visualModeSelectEl) visualModeSelectEl.value = getVisualMode();
}

function closeWelcomeModal(markAsSeen=true){
  if(welcomeOverlayEl) welcomeOverlayEl.classList.add('hidden');
  if(markAsSeen) localStorage.setItem(FIRST_VISIT_STORAGE_KEY, '1');
}

function maybeShowWelcomeModal(){
  if(!welcomeOverlayEl) return;
  const seen = localStorage.getItem(FIRST_VISIT_STORAGE_KEY) === '1';
  if(seen) return;
  syncWelcomeSelections();
  welcomeOverlayEl.classList.remove('hidden');
}

// ====== Hints ======
const linerHints = {
  3: {
    1: "hint.3l.l1",
    2: "hint.3l.l2",
    3: "hint.3l.l3"
  },
  6: {
    1: "hint.6l.l1",
    2: "hint.6l.l2",
    3: "hint.6l.l3",
    4: "hint.6l.l4",
    5: "hint.6l.l5",
    6: "hint.6l.l6"
  },
  9: {
    1: "hint.9l.l1",
    2: "hint.9l.l2",
    3: "hint.9l.l3",
    4: "hint.9l.l4",
    5: "hint.9l.l5",
    6: "hint.9l.l6",
    7: "hint.9l.l7",
    8: "hint.9l.l8",
    9: "hint.9l.l9"
  }
};
const hintMap = {
  "air-l1": "hint.air_l1",
  "air-l2": "hint.air_l2",
  "air-l3": "hint.air_l3",
  "air-l4": "hint.air_l4",
  "air-l5": "hint.air_l5",
  "air-l6": "hint.air_l6",
  "air-l7": "hint.air_l7",
  "air-present-0": "hint.air_present_1",
  "air-present-1": "hint.air_present_2",
  "air-present-2": "hint.air_present_3",
  "mission-present-0": "hint.mission_present_1",
  "mission-present-1": "hint.mission_present_2",
  "mission-present-2": "hint.mission_present_3",
  "air-clear-0": "hint.air_clear",
  "air-clear-1": "hint.air_clear",
  "air-clear-2": "hint.air_clear",
  "mission-clear-0": "hint.mission_clear",
  "mission-clear-1": "hint.mission_clear",
  "mission-clear-2": "hint.mission_clear",
  "cs-jtac": "hint.cs_jtac",
  "req-munition": "hint.req_munition",
  "castype-1": "hint.castype_1",
  "castype-2": "hint.castype_2",
  "castype-3": "hint.castype_3",
  "attackmethod-bot": "hint.attack_bot",
  "attackmethod-boc": "hint.attack_boc",
  "omit-l1-l3": "hint.omit_l1_l3",
  "include-remarks": "hint.include_remarks",
  "preauth-toggle": "hint.preauth",
  "killbox-toggle": "hint.killbox_toggle",
  "killbox-input": "hint.killbox_input",
  "allies-in-area-toggle": "hint.allies_in_area",
  "danger-close-toggle": "hint.danger_close",
  "danger-close-deg": "hint.danger_deg",
  "danger-close-dist": "hint.danger_dist",
  "vector-final-toggle": "hint.vector_final",
  "vector-final-deg": "hint.vector_deg",
  "vector-final-var": "hint.vector_var",
  "extra-minutes-toggle": "hint.minutes_toggle",
  "extra-minutes-input": "hint.minutes_input",
  "cas-remarks": "hint.cas_remarks"
};

// ====== Estado ======
let airStore = [{},{},{}];
let airPresent = [false,false,false];
let currentAir = 0;
let missionStore = [null,null,null];
let missionPresent = [false,false,false];
let currentMission = 0;
let suppressSave = false;
let authorizeHoldTimer = null;
let authorizeTriggered = false;
let timeLimitTimer = null;
let timeLimitEndMs = 0;
let lastSavedStateJson = '';
let isApplyingHistory = false;
let historyDebounceTimer = null;
let undoStack = [];
let redoStack = [];
const LINER_INPUT_SELECTOR = 'input[data-line]';
const DETAIL_SECTION_SELECTOR = 'details.section[data-section]';

function getLinerInputs(){
  return [...(linerFields?.querySelectorAll(LINER_INPUT_SELECTOR) || [])];
}

function collectOpenSections(){
  const openSections = {};
  document.querySelectorAll(DETAIL_SECTION_SELECTOR).forEach((d)=>{
    openSections[d.getAttribute('data-section')] = !!d.open;
  });
  return openSections;
}

function applyOpenSections(openSections){
  if(!openSections || typeof openSections !== 'object') return;
  const prevSuppress = suppressSave;
  suppressSave = true;
  try{
    document.querySelectorAll(DETAIL_SECTION_SELECTOR).forEach((d)=>{
      const key = d.getAttribute('data-section');
      if(typeof openSections[key] === 'boolean') d.open = openSections[key];
    });
  }finally{
    suppressSave = prevSuppress;
  }
}

function collectMissionFromUI(){
  const lines = {};
  getLinerInputs().forEach((input)=>{
    lines[input.dataset.line] = input.value;
  });
  return {
    liner: linerSelect?.value || '9',
    remarks: casRemarksEl?.value || '',
    includeRemarks: includeRemarksEl?.checked || false,
    reqMunition: getSelectedMunitionList(),
    attackmethod: attackMethodEls.find((a)=>a.checked)?.value || '',
    preauth: preauthToggleEl?.checked || false,
    alliesInArea: alliesInAreaToggleEl?.checked || false,
    killbox: killboxToggleEl?.checked || false,
    killboxText: killboxInputEl?.value || '',
    dangerClose: dangerCloseToggleEl?.checked || false,
    dangerCloseDeg: dangerCloseDegEl?.value || '',
    dangerCloseDist: dangerCloseDistEl?.value || '',
    vectorFinalEnabled: vectorFinalToggleEl?.checked || false,
    vectorFinalDeg: vectorFinalDegEl?.value || '',
    vectorFinalVar: vectorFinalVarEl?.value || '',
    extraMinutesEnabled: extraMinutesToggleEl?.checked || false,
    extraMinutesValue: extraMinutesInputEl?.value || '',
    castype: castypeEls.find((c)=>c.checked)?.value || '',
    lines
  };
}

function applyMissionToUI(mission){
  const m = mission || {};
  if(m.liner) linerSelect.value = m.liner;
  getLinerInputs().forEach((input)=>{
    input.value = (m.lines && m.lines[input.dataset.line]) || '';
  });
  casRemarksEl.value = m.remarks || '';
  renderMunitionOptions();
  setSelectedMunitionList(Array.isArray(m.reqMunition) ? m.reqMunition : []);
  attackMethodEls.forEach((input)=>{
    input.checked = !!(m.attackmethod && input.value === m.attackmethod);
  });
  if(includeRemarksEl) includeRemarksEl.checked = !!m.includeRemarks;
  if(preauthToggleEl) preauthToggleEl.checked = !!m.preauth;
  if(alliesInAreaToggleEl) alliesInAreaToggleEl.checked = !!m.alliesInArea;
  if(killboxToggleEl) killboxToggleEl.checked = !!m.killbox;
  if(killboxInputEl) killboxInputEl.value = m.killboxText || '';
  if(dangerCloseToggleEl) dangerCloseToggleEl.checked = !!m.dangerClose;
  if(dangerCloseDegEl) dangerCloseDegEl.value = m.dangerCloseDeg || '';
  if(dangerCloseDistEl) dangerCloseDistEl.value = m.dangerCloseDist || '';
  if(vectorFinalToggleEl) vectorFinalToggleEl.checked = !!m.vectorFinalEnabled;
  if(vectorFinalDegEl) vectorFinalDegEl.value = m.vectorFinalDeg || '';
  if(vectorFinalVarEl) vectorFinalVarEl.value = m.vectorFinalVar || '';
  if(extraMinutesToggleEl) extraMinutesToggleEl.checked = !!m.extraMinutesEnabled;
  if(extraMinutesInputEl) extraMinutesInputEl.value = m.extraMinutesValue || '';
  castypeEls.forEach((input)=>{
    input.checked = !!(m.castype && input.value === m.castype);
  });
}

function getLegacyMissionFromState(parsed){
  if(!parsed || typeof parsed !== 'object') return null;
  const hasLegacyData =
    parsed.liner ||
    parsed.attackmethod ||
    parsed.castype ||
    parsed.casRemarks ||
    parsed.req_munition ||
    typeof parsed.includeRemarks === 'boolean';
  if(!hasLegacyData) return null;
  return {
    liner: parsed.liner || linerSelect?.value || '9',
    remarks: parsed.casRemarks || '',
    includeRemarks: !!parsed.includeRemarks,
    reqMunition: Array.isArray(parsed.req_munition) ? parsed.req_munition : [],
    attackmethod: parsed.attackmethod || '',
    castype: parsed.castype || ''
  };
}

function mergeMissions(baseMission, currentMissionData){
  const base = baseMission || {};
  const current = currentMissionData || {};
  return {
    ...base,
    ...current,
    lines: {
      ...(base.lines || {}),
      ...(current.lines || {})
    }
  };
}

// ====== Persistencia ======
function loadState(){
  try{
    const s = localStorage.getItem('jtac_helper_state');
    if(s){
      lastSavedStateJson = s;
      const parsed = JSON.parse(s);
      if(Array.isArray(parsed.airStore) && parsed.airStore.length>=3) {
        airStore = parsed.airStore.map(a=>{
          if(!a) return {};
          if(a.l1||a.l2||a.l3) return a;
          const migrated = {
            l1: a.cs||'',
            l2: a.type||'',
            l3: a.pos||'',
            l4: a.weap||'',
            l5: a.time||'',
            l6: a.abort||a.sens||'',
            l7: a.remarks||a.fuel||''
          };
          return migrated;
        });
      }
      if(typeof parsed.currentAir === 'number') currentAir = parsed.currentAir;
      if(parsed.csJtac) csJtac.value = parsed.csJtac;
      if(parsed.csGround && csGround) csGround.value = parsed.csGround;
      if(Array.isArray(parsed.airPresent)) airPresent = parsed.airPresent;
      if(Array.isArray(parsed.missionStore)) missionStore = parsed.missionStore;
      if(Array.isArray(parsed.missionPresent)) missionPresent = parsed.missionPresent;
      if(typeof parsed.currentMission === 'number') currentMission = parsed.currentMission;
      if(typeof parsed.casModeRadio === 'boolean' && casModeRadioEl){
        casModeRadioEl.checked = parsed.casModeRadio;
      }
      if(typeof parsed.omitL1L3 === 'boolean' && omitL1L3El){
        omitL1L3El.checked = parsed.omitL1L3;
      }
      const legacyMission = getLegacyMissionFromState(parsed);
      if(legacyMission){
        missionStore[currentMission] = mergeMissions(legacyMission, missionStore[currentMission]);
      }
      applyOpenSections(parsed.openSections);
    }
  }catch(e){console.warn('loadState error',e)}
}

function saveState(){
  try{
    const state = {
      airStore,
      airPresent,
      currentAir,
      missionStore,
      missionPresent,
      currentMission,
      csJtac: csJtac.value,
      csGround: csGround?.value || '',
      omitL1L3: omitL1L3El?.checked || false
    };
    state.casModeRadio = !!casModeRadioEl?.checked;
    state.openSections = collectOpenSections();
    const nextJson = JSON.stringify(state);
    if(nextJson === lastSavedStateJson) return;
    localStorage.setItem('jtac_helper_state', nextJson);
    lastSavedStateJson = nextJson;
  }catch(e){console.warn('saveState error',e)}
}

// ====== Guardar/Cargar misiï¿½n ======
function saveMission(){
  missionStore[currentMission] = collectMissionFromUI();
  saveState();
}

function loadMission(){
  applyMissionToUI(missionStore[currentMission] || {});
  updateAlliesInAreaColor();
  updateLiner();
  updateCasTypeEffects();
  updateRemarksVisibility();
  updateVectorFinalVisibility();
  updateExtraMinutesVisibility();
  updateDangerCloseVisibility();
  updatePreauthVisibility();
  updateTimeLimitDisplay(getTimeLimitSeconds(), false);
}

// ====== Guardar/Cargar aeronave ======
function saveAir(){
  airStore[currentAir] = {
    l1: airL1.value,
    l2: airL2.value,
    l3: airL3.value,
    l4: airL4.value,
    l5: airL5.value,
    l6: airL6.value,
    l7: airL7.value
  };
  saveState();
}

function parseWeaponsList(){
  const raw = (airL4?.value || '').trim();
  if(!raw) return [];
  const parts = raw.split(',').map(p=>p.trim()).filter(Boolean);
  return [...new Set(parts)];
}

function getSelectedMunitionList(){
  if(!reqMunitionListEl) return [];
  const boxes = [...reqMunitionListEl.querySelectorAll('input[type="checkbox"]')];
  return boxes.filter(b=>b.checked).map(b=>{
    const qtyEl = reqMunitionListEl.querySelector(`input[data-munition-qty="${CSS.escape(b.value)}"]`);
    return {name: b.value, qty: (qtyEl?.value || '').trim()};
  });
}

function setSelectedMunitionList(list){
  if(!reqMunitionListEl) return;
  const selected = normalizeMunitionSelection(list);
  const boxes = [...reqMunitionListEl.querySelectorAll('input[type="checkbox"]')];
  if(!boxes.length){
    pendingMunitionSelection = selected;
    return;
  }
  const selectedNames = new Set(selected.map(s=>s.name));
  boxes.forEach(b=>{ b.checked = selectedNames.has(b.value); });
  selected.forEach(s=>{
    const qtyEl = reqMunitionListEl.querySelector(`input[data-munition-qty="${CSS.escape(s.name)}"]`);
    if(qtyEl) qtyEl.value = s.qty || '';
  });
}

function renderMunitionOptions(){
  if(!reqMunitionListEl) return;
  const weapons = parseWeaponsList();
  const selected = getSelectedMunitionList();
  const selectedNames = new Set(selected.map(s=>s.name));
  reqMunitionListEl.innerHTML = '';
  weapons.forEach(w=>{
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'req-munition';
    input.value = w;
    if(selectedNames.has(w)) input.checked = true;
    input.addEventListener('change', saveMission);
    const qty = document.createElement('input');
    qty.type = 'number';
    qty.className = 'mun-qty';
    qty.setAttribute('data-munition-qty', w);
    qty.setAttribute('inputmode', 'numeric');
    qty.placeholder = 'No.';
    qty.addEventListener('input', saveMission);
    const span = document.createElement('span');
    span.textContent = w;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(qty);
    reqMunitionListEl.appendChild(label);
  });
  if(pendingMunitionSelection){
    const pending = pendingMunitionSelection;
    pendingMunitionSelection = null;
    setSelectedMunitionList(pending);
  } else if(selected.length){
    setSelectedMunitionList(selected);
  }
}

function normalizeMunitionSelection(list){
  if(Array.isArray(list)){
    return list.map(v=>{
      if(typeof v === 'string') return {name: v, qty: ''};
      if(v && typeof v === 'object') return {name: v.name || '', qty: v.qty || ''};
      return null;
    }).filter(v=>v && v.name);
  }
  if(typeof list === 'string'){
    return list.split('|').map(s=>s.trim()).filter(Boolean).map(name=>({name, qty:''}));
  }
  return [];
}

function getCommonArmaments(){
  const parsed = parseArmamentsCsv(commonArmamentsCsv, {resolveWithCatalog: false});
  return Array.isArray(parsed) ? parsed : [];
}

function loadCommonArmamentsCsv(){
  const raw = localStorage.getItem(ARMAMENTS_CSV_STORAGE_KEY);
  if(!raw) return DEFAULT_COMMON_ARMAMENTS_CSV;
  try{
    const parsed = parseArmamentsCsv(raw, {resolveWithCatalog: false});
    if(Array.isArray(parsed) && parsed.length) return buildArmamentsCsvFromList(parsed);
  }catch(e){
    console.warn('loadCommonArmamentsCsv', e);
  }
  return DEFAULT_COMMON_ARMAMENTS_CSV;
}

function saveCommonArmamentsCsv(raw){
  const safeRaw = String(raw || '').trim();
  if(!safeRaw) return;
  localStorage.setItem(ARMAMENTS_CSV_STORAGE_KEY, safeRaw);
}

function findCommonArmamentByName(name){
  const norm = String(name || '').trim().toLowerCase();
  if(!norm) return null;
  return getCommonArmaments().find(a=> a.name.toLowerCase() === norm) || null;
}

function getSuggestedDangerCloseFor(list){
  if(!Array.isArray(list) || !list.length) return null;
  const distances = list.map(item=>{
    if(item && Number.isFinite(Number(item.dangerCloseM))) return Number(item.dangerCloseM);
    const common = findCommonArmamentByName(item?.name);
    return common ? common.dangerCloseM : null;
  }).filter(v=> Number.isFinite(v) && v > 0);
  if(!distances.length) return null;
  return Math.min(...distances);
}

function parseCsvRow(line){
  const out = [];
  let field = '';
  let inQuotes = false;
  for(let i=0;i<line.length;i++){
    const ch = line[i];
    if(ch === '"'){
      if(inQuotes && line[i+1] === '"'){
        field += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if(ch === ',' && !inQuotes){
      out.push(field.trim());
      field = '';
    } else {
      field += ch;
    }
  }
  out.push(field.trim());
  return out;
}

function escapeCsvValue(value){
  const raw = String(value ?? '');
  if(/[",\n]/.test(raw)) return `"${raw.replace(/"/g, '""')}"`;
  return raw;
}

function parseArmamentsCsv(raw, options = {}){
  const resolveWithCatalog = options.resolveWithCatalog !== false;
  const cleanRaw = String(raw || '').replace(/^\uFEFF/, '');
  const lines = cleanRaw.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
  if(!lines.length) return [];
  const rows = lines.map(parseCsvRow).filter(cols=> cols.some(c=> c));
  if(!rows.length) return [];

  let startIdx = 0;
  let hasTypeColumn = false;
  const first = rows[0].map(v=>v.toLowerCase());
  if(first[0] === 'name' || first[0] === 'armamento' || first[0] === 'weapon'){
    if(first.includes('qty') || first.includes('cantidad')){
      throw new Error('legacy armaments csv format not supported');
    }
    startIdx = 1;
    hasTypeColumn = first.includes('type') || first.includes('tipo');
  }

  const parsed = [];
  for(let i=startIdx; i<rows.length; i++){
    const cols = rows[i];
    const name = String(cols[0] || '').trim();
    if(!name) continue;
    const type = hasTypeColumn ? String(cols[1] || '').trim() : '';
    const dcCol = hasTypeColumn ? 2 : 1;
    const dcRaw = Number(String(cols[dcCol] || '').trim());
    const common = resolveWithCatalog ? findCommonArmamentByName(name) : null;
    const resolvedType = type || (common?.type || '');
    const dangerCloseM = Number.isFinite(dcRaw) && dcRaw > 0 ? dcRaw : (common ? common.dangerCloseM : null);
    parsed.push({name, type: resolvedType, dangerCloseM});
  }
  return parsed;
}

function buildArmamentsCsvFromList(list){
  const header = 'name,type,dangerCloseM';
  const rows = (Array.isArray(list) ? list : []).filter(v=>v && v.name).map(item=>{
    const name = String(item.name || '').trim();
    const type = String(item.type || '').trim();
    const dc = Number.isFinite(Number(item.dangerCloseM)) ? String(Number(item.dangerCloseM)) : '';
    return `${escapeCsvValue(name)},${escapeCsvValue(type)},${escapeCsvValue(dc)}`;
  });
  return [header, ...rows].join('\n');
}

function buildArmamentsCsv(){
  return buildArmamentsCsvFromList(getCommonArmaments());
}

function applyImportedArmaments(list){
  const clean = Array.isArray(list) ? list.filter(v=>v && v.name) : [];
  if(!clean.length) throw new Error('empty armaments');

  const names = [...new Set(clean.map(a=> a.name))];
  if(airL4) airL4.value = names.join(', ');
  renderMunitionOptions();
  setSelectedMunitionList(clean.map(a=>({name: a.name, qty: ''})));

  const suggested = getSuggestedDangerCloseFor(clean);
  if(Number.isFinite(suggested) && dangerCloseToggleEl && dangerCloseDistEl){
    dangerCloseToggleEl.checked = true;
    dangerCloseDistEl.value = String(suggested);
    if(dangerCloseDegEl && !(dangerCloseDegEl.value || '').trim()){
      dangerCloseDegEl.value = '000';
    }
  }

  updateDangerCloseVisibility();
  saveAir();
  saveMission();
  saveState();
}

function renderCommonArmamentsList(){
  if(!commonArmamentsBodyEl) return;
  commonArmamentsBodyEl.innerHTML = '';
  const items = getCommonArmaments();
  items.forEach(item=>{
    const tr = document.createElement('tr');
    const weaponTd = document.createElement('td');
    weaponTd.textContent = item.name;
    const typeTd = document.createElement('td');
    typeTd.textContent = item.type || '-';
    const dcTd = document.createElement('td');
    dcTd.textContent = `${item.dangerCloseM} m`;
    tr.appendChild(weaponTd);
    tr.appendChild(typeTd);
    tr.appendChild(dcTd);
    commonArmamentsBodyEl.appendChild(tr);
  });
}

function loadAir(){
  const a = airStore[currentAir] || {};
  airL1.value = a.l1 || '';
  airL2.value = a.l2 || '';
  airL3.value = a.l3 || '';
  airL4.value = a.l4 || '';
  airL5.value = a.l5 || '';
  airL6.value = a.l6 || '';
  airL7.value = a.l7 || '';
}

// ====== Configurar inputs del liner segï¿½n 3/6/9 ======
function updateLiner(){
  const l = parseInt(linerSelect.value,10) || 9;
  const placeholders = {
    3: [
      'liner.3.1',
      'liner.3.2',
      'liner.3.3'
    ],
    6: [
      'liner.6.1',
      'liner.6.2',
      'liner.6.3',
      'liner.6.4',
      'liner.6.5',
      'liner.6.6'
    ],
    9: [
      'liner.9.1',
      'liner.9.2',
      'liner.9.3',
      'liner.9.4',
      'liner.9.5',
      'liner.9.6',
      'liner.9.7',
      'liner.9.8',
      'liner.9.9'
    ]
  };
  linerFields.querySelectorAll('input').forEach(i=>{
    i.classList.remove('hidden');
    const line = parseInt(i.dataset.line,10);
    if(!isNaN(line)) i.id = `${l}L-L${line}`;
    if(!isNaN(line) && linerHints[l] && linerHints[l][line]){
      i.dataset.hint = linerHints[l][line];
      i.title = t(linerHints[l][line]);
    }
    if(!isNaN(line) && line>l) i.classList.add('hidden');
    if(!isNaN(line) && line<=l){
      const key = (placeholders[l] && placeholders[l][line-1]) || '';
      const label = key ? t(key) : i.placeholder;
      i.placeholder = `L${line} ${label}`;
      i.setAttribute('aria-label', `L${line} ${label}`);
    }
    if(line === 3){
      i.type = (l === 3) ? 'text' : 'number';
    }
    if(omitL1L3El && omitL1L3El.checked && line >= 1 && line <= 3){
      i.disabled = true;
    } else {
      i.disabled = false;
    }
  });
  if(omitL1L3RowEl){
    const hideOmit = l === 6 || l === 3;
    omitL1L3RowEl.classList.toggle('hidden', hideOmit);
    if(hideOmit && omitL1L3El) omitL1L3El.checked = false;
  }
  applyUnitToUI();
  applyHoverHints();
  syncDangerCloseFromLine8();
}

function syncDangerCloseFromLine8(){
  const line8El = linerFields?.querySelector('input[data-line="8"]');
  if(!line8El || !dangerCloseDegEl || !dangerCloseDistEl) return;
  const raw = String(line8El.value || '').trim();
  if(!raw) return;
  // Accept radials like "090", "090/500", "90 500", "090-500"
  const m = raw.match(/^\s*(\d{1,3})(?:\s*[/\-\s]\s*(\d+))?\s*$/);
  if(!m) return;
  const deg = Number(m[1]);
  if(Number.isNaN(deg) || deg < 0 || deg > 360) return;
  dangerCloseDegEl.value = String(deg).padStart(3, '0');
  if(m[2]){
    dangerCloseDistEl.value = String(m[2]);
  }
  saveMission();
}

function getSystemDefaultLang(){
  const langCandidates = (navigator.languages && navigator.languages.length)
    ? navigator.languages
    : [navigator.language || ''];
  const hasSpanish = langCandidates.some(l => String(l).toLowerCase().startsWith('es'));
  return hasSpanish ? 'es' : 'en';
}

function setRandomCreditsImage(){
  if(!creditsImageEl || !Array.isArray(CREDITS_IMAGE_PATHS) || !CREDITS_IMAGE_PATHS.length) return;
  const idx = Math.floor(Math.random() * CREDITS_IMAGE_PATHS.length);
  creditsImageEl.src = CREDITS_IMAGE_PATHS[idx];
}

async function loadCreditsSubtextPool(){
  try{
    const res = await window.safeFetchJson(CREDITS_SUBTEXT_POOL_URL, {timeoutMs: 6000});
    if(!res.ok) throw new Error(`credits pool ${res.error}`);
    const data = res.data;
    if(!data || typeof data !== 'object') throw new Error('invalid credits pool');
    const es = Array.isArray(data.es) ? data.es.filter(Boolean).map(String) : [];
    const en = Array.isArray(data.en) ? data.en.filter(Boolean).map(String) : [];
    creditsSubtextPool = {
      es: es.length ? es : CREDITS_SUBTEXT_FALLBACK.es,
      en: en.length ? en : CREDITS_SUBTEXT_FALLBACK.en
    };
  }catch(e){
    console.warn('loadCreditsSubtextPool', e);
    creditsSubtextPool = CREDITS_SUBTEXT_FALLBACK;
  }
  setRandomCreditsSubtext();
}

function setRandomCreditsSubtext(){
  if(!creditsSubtextEl) return;
  const pool = creditsSubtextPool[currentLang] || creditsSubtextPool.en || [];
  if(!pool.length){
    creditsSubtextEl.textContent = '';
    return;
  }
  const idx = Math.floor(Math.random() * pool.length);
  creditsSubtextEl.textContent = pool[idx];
}

creditsSubtextEl?.addEventListener('click', ()=>{
  setRandomCreditsSubtext();
});

if(window.createDictionaryManager){
  dictionaryManager = window.createDictionaryManager({
    listEl: dictListEl,
    prevEl: dictPrevEl,
    nextEl: dictNextEl,
    pageIndicatorEl: dictPageIndicatorEl,
    searchEl: dictSearchEl,
    translate: t,
    storageKey: 'jtac_dict_view'
  });
}else if(dictListEl){
  const err = document.createElement('div');
  err.className = 'dict-item danger';
  err.textContent = 'Dictionary module unavailable';
  dictListEl.innerHTML = '';
  dictListEl.appendChild(err);
}

async function loadTerminologyPool(){
  terminologyLoadError = false;
  try{
    const res = await window.safeFetchJson(TERMINOLOGY_POOL_URL, {timeoutMs: 6000});
    if(!res.ok) throw new Error(`terminology pool ${res.error}`);
    const data = res.data;
    if(!data || typeof data !== 'object') throw new Error('invalid terminology pool');
    const es = Array.isArray(data.es) ? data.es.filter(Boolean).map(String) : [];
    const en = Array.isArray(data.en) ? data.en.filter(Boolean).map(String) : [];
    if(!es.length && !en.length) throw new Error('empty terminology pool');
    terminologyPool = {es, en};
  }catch(e){
    console.warn('loadTerminologyPool', e);
    terminologyPool = {es: [], en: []};
    terminologyLoadError = true;
  }
  dictionaryManager?.setData(terminologyPool, terminologyLoadError);
  dictionaryManager?.setLanguage(currentLang);
  dictionaryManager?.render();
}

// ====== Inicializaciï¿½n ======
loadState();
dictionaryManager?.init();
commonArmamentsCsv = loadCommonArmamentsCsv();
setRandomCreditsImage();
loadCreditsSubtextPool();
loadTerminologyPool();
const storedLang = localStorage.getItem('jtac_lang');
const defaultLang = getSystemDefaultLang();
const initialLang = storedLang || defaultLang;
if(!storedLang) localStorage.setItem('jtac_lang', initialLang);
if(langSelectEl) langSelectEl.value = initialLang;
loadLang(initialLang);
const storedUnit = localStorage.getItem('jtac_unit') || 'm';
if(unitSelectEl) unitSelectEl.value = storedUnit;
applyUnitToUI();
applyVisualMode(getVisualMode());
langSelectEl?.addEventListener('change', ()=> loadLang(langSelectEl.value));
unitSelectEl?.addEventListener('change', ()=> setUnit(unitSelectEl.value));
visualModeSelectEl?.addEventListener('change', ()=> setVisualMode(visualModeSelectEl.value || 'default'));
welcomeLangSelectEl?.addEventListener('change', ()=>{
  const lang = welcomeLangSelectEl.value || 'es';
  if(langSelectEl) langSelectEl.value = lang;
  loadLang(lang);
});
welcomeUnitSelectEl?.addEventListener('change', ()=>{
  setUnit(welcomeUnitSelectEl.value || 'm');
});
welcomeThemeSelectEl?.addEventListener('change', ()=>{
  setVisualMode(welcomeThemeSelectEl.value || 'default');
});
welcomeCloseEl?.addEventListener('click', ()=> closeWelcomeModal(true));
maybeShowWelcomeModal();
settingsResetBtnEl?.addEventListener('click', ()=>{
  const confirmed = window.confirm(t('settings.reset_confirm'));
  if(!confirmed) return;
  const systemDefaultLang = getSystemDefaultLang();
  if(extraInfoToggleEl) extraInfoToggleEl.checked = false;
  if(unitSelectEl) unitSelectEl.value = 'm';
  setUnit('m');
  if(langSelectEl) langSelectEl.value = systemDefaultLang;
  commonArmamentsCsv = DEFAULT_COMMON_ARMAMENTS_CSV;
  saveCommonArmamentsCsv(commonArmamentsCsv);
  renderCommonArmamentsList();
  setVisualMode('default');
  loadLang(systemDefaultLang);
});
updateLiner();
loadAir();
renderMunitionOptions();
  updateRemarksVisibility();
  updateVectorFinalVisibility();
  updateExtraMinutesVisibility();
  updateDangerCloseVisibility();
updateCasTypeEffects();
updateAlliesInAreaColor();
updateKillboxVisibility();
updateTimeLimitDisplay(getTimeLimitSeconds(), false);
attachAuthorizeHold();
updateAuthorizeLabel(false);
pushHistorySnapshot();

// ====== Aplicar estado de secciones abiertas ======
// ====== Visibilidad de remarks y subcampos ======
function updateRemarksVisibility(){
  if(!remarksSection) return;
  if(includeRemarksEl && includeRemarksEl.checked){
    remarksSection.classList.remove('hidden');
  } else {
    remarksSection.classList.add('hidden');
  }
}

function updateVectorFinalVisibility(){
  if(!vectorFinalFieldsEl) return;
  const show = !!(vectorFinalToggleEl && vectorFinalToggleEl.checked);
  vectorFinalFieldsEl.classList.toggle('hidden', !show);
}

function updateExtraMinutesVisibility(){
  if(!extraMinutesFieldsEl) return;
  const showFields = !!(extraMinutesToggleEl && extraMinutesToggleEl.checked);
  const totEnabled = showFields && getTimeLimitSeconds() > 0;
  extraMinutesFieldsEl.classList.toggle('hidden', !showFields);
  if(!totEnabled) stopTimeLimitCountdown();
  if(casAuthorizeBtn) casAuthorizeBtn.classList.toggle('hidden', !totEnabled);
  if(timeLimitDisplayEl) timeLimitDisplayEl.classList.toggle('hidden', !totEnabled);
}

function formatTimer(totalSeconds){
  const safe = Math.max(0, Math.floor(totalSeconds));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

function getTimeLimitSeconds(){
  const raw = (extraMinutesInputEl?.value || '').trim();
  if(raw === '') return 0;
  if(raw.includes(':')){
    const parts = raw.split(':').map(s=>s.trim());
    if(parts.length !== 2) return 0;
    const mins = Number(parts[0]);
    const secs = Number(parts[1]);
    if(Number.isNaN(mins) || Number.isNaN(secs)) return 0;
    if(mins < 0 || secs < 0) return 0;
    return Math.round((mins * 60) + secs);
  }
  const num = Number(raw);
  if(Number.isNaN(num) || num <= 0) return 0;
  return Math.round(num * 60);
}

function getEngagementWindowText(){
  if(!extraMinutesToggleEl?.checked) return '';
  const total = getTimeLimitSeconds();
  if(total <= 0) return '';
  const mikes = Math.max(1, Math.ceil(total / 60));
  return t('cas.engagement_window', {mikes});
}

function formatKillboxDisplay(rawName){
  const name = (rawName || '').trim();
  if(!name) return '';
  const cleaned = name.replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ').trim();
  const m = cleaned.match(/^(.*?)(\d+)$/);
  if(m){
    const kbName = (m[1] || '').trim() || cleaned;
    return `Killbox ${kbName} cuadrante ${m[2]}`.trim();
  }
  return `Killbox ${cleaned}`.trim();
}

function updateTimeLimitDisplay(seconds, running=false){
  if(!timeLimitDisplayEl) return;
  const show = seconds > 0 ? formatTimer(seconds) : '00:00';
  timeLimitDisplayEl.textContent = show;
  timeLimitDisplayEl.classList.toggle('running', running && seconds > 0);
  const warn = running && seconds > 0 && seconds <= 60;
  timeLimitDisplayEl.classList.toggle('warning', warn);
  timeLimitDisplayEl.classList.toggle('fast', warn && seconds <= 30);
  timeLimitDisplayEl.classList.toggle('urgent', warn && seconds <= 10);
}

function updateAuthorizeLabel(running){
  if(!casAuthorizeBtn) return;
  const key = running ? 'action.abort' : 'action.authorize';
  casAuthorizeBtn.textContent = t(key);
  casAuthorizeBtn.classList.toggle('running', running);
}

function stopTimeLimitCountdown(){
  if(timeLimitTimer){
    clearInterval(timeLimitTimer);
    timeLimitTimer = null;
  }
  timeLimitEndMs = 0;
  updateTimeLimitDisplay(getTimeLimitSeconds(), false);
  updateAuthorizeLabel(false);
}

function startTimeLimitCountdown(){
  if(!extraMinutesToggleEl?.checked) return;
  const total = getTimeLimitSeconds();
  if(total <= 0) return;
  timeLimitEndMs = Date.now() + (total * 1000);
  updateTimeLimitDisplay(total, true);
  updateAuthorizeLabel(true);
  if(timeLimitTimer) clearInterval(timeLimitTimer);
  timeLimitTimer = setInterval(()=>{
    const remaining = Math.max(0, Math.ceil((timeLimitEndMs - Date.now()) / 1000));
    updateTimeLimitDisplay(remaining, true);
    if(remaining <= 0){
      stopTimeLimitCountdown();
    }
  }, 250);
}

function isTimeLimitRunning(){
  return !!(timeLimitTimer || timeLimitEndMs > Date.now());
}

function updateDangerCloseVisibility(){
  if(!dangerCloseDegEl || !dangerCloseDistEl) return;
  const show = !!(dangerCloseToggleEl && dangerCloseToggleEl.checked);
  dangerCloseRowEl?.classList.toggle('danger', show);
  const allow = !!(alliesInAreaToggleEl && alliesInAreaToggleEl.checked);
  dangerCloseRowEl?.classList.toggle('hidden', !allow);
  if(dangerCloseDegEl) dangerCloseDegEl.classList.toggle('hidden', !show);
  if(dangerCloseDistEl) dangerCloseDistEl.classList.toggle('hidden', !show);
  if(!allow){
    if(dangerCloseDegEl) dangerCloseDegEl.classList.add('hidden');
    if(dangerCloseDistEl) dangerCloseDistEl.classList.add('hidden');
  }
}

function updatePreauthVisibility(){
  if(!preauthRowEl) return;
  const selected = castypeEls.find(c=>c.checked)?.value || '';
  const show = selected === 'Tipo 3';
  if(preauthLabelEl){
    if(show) preauthLabelEl.classList.remove('hidden');
    else preauthLabelEl.classList.add('hidden');
  }
  if(!show && preauthToggleEl) preauthToggleEl.checked = false;
  updateAlliesInAreaColor();
  updateKillboxVisibility();
}

function updateAlliesInAreaColor(){
  if(!alliesInAreaLabelEl) return;
  const on = !!(alliesInAreaToggleEl && alliesInAreaToggleEl.checked);
  alliesInAreaLabelEl.classList.toggle('ally-active', on);
}

function updateKillboxVisibility(){
  const show = !!(preauthToggleEl && preauthToggleEl.checked);
  if(killboxLabelEl) killboxLabelEl.classList.toggle('hidden', !show);
  if(killboxInputEl) killboxInputEl.classList.toggle('hidden', !(show && killboxToggleEl?.checked));
  if(!show && killboxToggleEl) killboxToggleEl.checked = false;
  if(killboxLabelEl) killboxLabelEl.classList.toggle('danger', !!killboxToggleEl?.checked);
  if(killboxInputEl) killboxInputEl.classList.toggle('danger', !!killboxToggleEl?.checked);
  if(preauthRowEl) preauthRowEl.classList.toggle('compact', !(preauthToggleEl && preauthToggleEl.checked));
}

// ====== Reglas por tipo de CAS ======
function updateCasTypeEffects(){
  const selected = castypeEls.find(c=>c.checked)?.value || '';
  const opt3 = linerSelect?.querySelector('option[value="3"]');
  const opt6 = linerSelect?.querySelector('option[value="6"]');
  const opt9 = linerSelect?.querySelector('option[value="9"]');
  const isTipo3 = selected === 'Tipo 3';
  const isTipo1 = selected === 'Tipo 1';
  if(opt3) opt3.disabled = !isTipo3;
  if(opt6) opt6.disabled = isTipo3;
  if(opt9) opt9.disabled = isTipo3;
  if(isTipo3){
    linerSelect.value = '3';
    updateLiner();
  } else if(linerSelect?.value === '3'){
    linerSelect.value = '9';
    updateLiner();
  }
  if(attackMethodBlockEl){
    attackMethodBlockEl.classList.toggle('hidden', isTipo3);
    if(isTipo3){
      attackMethodEls.forEach(i=> i.checked = false);
    }
    attackMethodEls.forEach(i=>{
      if(i.value === 'BOC'){
        i.disabled = isTipo1;
        if(isTipo1) i.checked = false;
      }
    });
    if(isTipo1){
      attackMethodEls.forEach(i=>{ if(i.value === 'BOT') i.checked = true; });
    }
  }
  if(omitL1L3RowEl){
    const isL6 = linerSelect?.value === '6';
    const hideOmit = isTipo3 || isL6;
    omitL1L3RowEl.classList.toggle('hidden', hideOmit);
    if(hideOmit && omitL1L3El) omitL1L3El.checked = false;
  }
  updatePreauthVisibility();
}

function setupExclusiveSlotGroup(config){
  const {
    presentEls,
    presentState,
    getCurrent,
    setCurrent,
    onLoad,
    onClear,
    clearIds
  } = config;

  presentEls.forEach((el, idx)=>{
    if(!el) return;
    el.checked = !!presentState[idx];
    el.addEventListener('change', ()=>{
      if(suppressSave) return;
      if(el.checked){
        presentEls.forEach((other, j)=>{
          if(j !== idx && other){
            other.checked = false;
            presentState[j] = false;
          }
        });
        presentState[idx] = true;
        setCurrent(idx);
      } else {
        el.checked = true;
        presentState[idx] = true;
      }
      onLoad();
      saveState();
    });
  });

  if(!presentState.some(Boolean) && presentEls[0]){
    presentState[0] = true;
    presentEls[0].checked = true;
    setCurrent(0);
  }

  clearIds.forEach((id, idx)=>{
    const btn = document.getElementById(id);
    if(!btn) return;
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      onClear(idx, getCurrent() === idx);
      saveState();
    });
  });
}

setupExclusiveSlotGroup({
  presentEls: airPresentEls,
  presentState: airPresent,
  getCurrent: ()=> currentAir,
  setCurrent: (idx)=>{ currentAir = idx; },
  onLoad: loadAir,
  onClear: (idx, isCurrent)=>{
    airStore[idx] = {};
    if(isCurrent) loadAir();
  },
  clearIds: ['air-clear-0','air-clear-1','air-clear-2']
});

setupExclusiveSlotGroup({
  presentEls: missionPresentEls,
  presentState: missionPresent,
  getCurrent: ()=> currentMission,
  setCurrent: (idx)=>{ currentMission = idx; },
  onLoad: loadMission,
  onClear: (idx, isCurrent)=>{
    missionStore[idx] = null;
    if(isCurrent) loadMission();
  },
  clearIds: ['mission-clear-0','mission-clear-1','mission-clear-2']
});

if(missionStore[currentMission]) loadMission();

document.querySelectorAll(DETAIL_SECTION_SELECTOR).forEach((d)=> d.addEventListener('toggle', ()=>{ if(!suppressSave) saveState(); }));
window.addEventListener('beforeunload', saveState);
document.addEventListener('visibilitychange', ()=>{ if(document.visibilityState === 'hidden') saveState(); });

// ====== Hold-to-clear ======
if(clearBtnEl){
  let clearHoldTimer = null;
  const startHold = () => {
    if(clearHoldTimer) return;
    clearBtnEl.classList.add('holding');
    clearHoldTimer = setTimeout(()=>{
      clearHoldTimer = null;
      clearBtnEl.classList.remove('holding');
      clearAll();
    }, 1000);
  };
  const cancelHold = () => {
    if(clearHoldTimer){
      clearTimeout(clearHoldTimer);
      clearHoldTimer = null;
    }
    clearBtnEl.classList.remove('holding');
  };
  clearBtnEl.addEventListener('pointerdown', (e)=>{ e.preventDefault(); startHold(); });
  clearBtnEl.addEventListener('pointerup', cancelHold);
  clearBtnEl.addEventListener('pointerleave', cancelHold);
  clearBtnEl.addEventListener('pointercancel', cancelHold);
  clearBtnEl.addEventListener('blur', cancelHold);
  clearBtnEl.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); startHold(); }
  });
  clearBtnEl.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); cancelHold(); }
  });
}

// ====== Eventos de inputs ======
castypeEls.forEach(cb=>{
  cb.addEventListener('change',()=>{
    castypeEls.forEach(o=>{ if(o!==cb) o.checked=false; });
    updateCasTypeEffects();
    saveMission();
  });
});

attackMethodEls.forEach(cb=>{
  cb.addEventListener('change',()=>{
    attackMethodEls.forEach(o=>{ if(o!==cb) o.checked=false; });
    saveMission();
  });
});

function bindEvent(el, eventName, handler){
  if(!el) return;
  el.addEventListener(eventName, handler);
}

function bindMissionEvent(el, eventName, ...beforeSave){
  bindEvent(el, eventName, ()=>{
    beforeSave.forEach((fn)=>{ if(typeof fn === 'function') fn(); });
    saveMission();
  });
}

bindEvent(csJtac, 'input', saveState);
bindEvent(csGround, 'input', saveState);
bindEvent(linerSelect, 'change', ()=>{ updateLiner(); saveState(); });
bindEvent(omitL1L3El, 'change', ()=>{ updateLiner(); saveState(); });

bindMissionEvent(casRemarksEl, 'input');
bindMissionEvent(includeRemarksEl, 'change', updateRemarksVisibility);
bindMissionEvent(dangerCloseToggleEl, 'change', updateDangerCloseVisibility);
bindMissionEvent(dangerCloseDegEl, 'input');
bindMissionEvent(dangerCloseDistEl, 'input');
bindMissionEvent(preauthToggleEl, 'change', updateKillboxVisibility);
bindMissionEvent(alliesInAreaToggleEl, 'change', updateAlliesInAreaColor, updateDangerCloseVisibility);
bindMissionEvent(killboxToggleEl, 'change', updateKillboxVisibility);
bindMissionEvent(killboxInputEl, 'input');
bindMissionEvent(vectorFinalToggleEl, 'change', updateVectorFinalVisibility);
bindMissionEvent(vectorFinalDegEl, 'input');
bindMissionEvent(vectorFinalVarEl, 'input');
bindMissionEvent(extraMinutesToggleEl, 'change', updateExtraMinutesVisibility, ()=> updateTimeLimitDisplay(getTimeLimitSeconds(), false));

bindEvent(extraMinutesInputEl, 'input', ()=>{
  if(extraMinutesInputEl){
    extraMinutesInputEl.value = extraMinutesInputEl.value.replace(/[^\d:]/g, '');
  }
  updateExtraMinutesVisibility();
  saveMission();
  updateTimeLimitDisplay(getTimeLimitSeconds(), false);
});
function attachAuthorizeHold(){
  if(!casAuthorizeBtn) return;
  const HOLD_MS = 700;
  const startHold = () => {
    authorizeTriggered = false;
    casAuthorizeBtn.classList.add('holding');
    if(authorizeHoldTimer) clearTimeout(authorizeHoldTimer);
    authorizeHoldTimer = setTimeout(()=>{
      authorizeTriggered = true;
      casAuthorizeBtn.classList.remove('holding');
      if(isTimeLimitRunning()){
        stopTimeLimitCountdown();
      } else {
        startTimeLimitCountdown();
      }
    }, HOLD_MS);
  };
  const endHold = () => {
    if(authorizeHoldTimer) clearTimeout(authorizeHoldTimer);
    authorizeHoldTimer = null;
    if(!authorizeTriggered) casAuthorizeBtn.classList.remove('holding');
  };
  casAuthorizeBtn.addEventListener('mousedown', startHold);
  casAuthorizeBtn.addEventListener('touchstart', startHold, {passive:true});
  casAuthorizeBtn.addEventListener('mouseup', endHold);
  casAuthorizeBtn.addEventListener('mouseleave', endHold);
  casAuthorizeBtn.addEventListener('touchend', endHold);
  casAuthorizeBtn.addEventListener('touchcancel', endHold);
}

// ====== Validaciï¿½n de inputs numï¿½ricos con min/max ======
function clampNumericInput(el){
  if(!el) return;
  const raw = el.value;
  if(raw === '') return;
  const minAttr = el.getAttribute('min');
  const maxAttr = el.getAttribute('max');
  const min = minAttr === null ? NaN : Number(minAttr);
  const max = maxAttr === null ? NaN : Number(maxAttr);
  let num = Number(raw);
  if(Number.isNaN(num)) return;
  if(!Number.isNaN(min) && num < min) num = min;
  if(!Number.isNaN(max) && num > max) num = max;
  if(String(num) !== raw) el.value = String(num);
}

// ====== Validaciï¿½n en vivo de inputs numï¿½ricos ======
[...document.querySelectorAll('input[type="number"][min][max]')].forEach(el=>{
  el.addEventListener('input', ()=> clampNumericInput(el));
  el.addEventListener('blur', ()=> clampNumericInput(el));
});

// ====== Menï¿½ lateral ======
let lastOpenedSubmenuId = null;
function closeAllSubmenus(){
  document.querySelectorAll('.submenu-panel').forEach(p=> p.classList.remove('open'));
}
function hasAnyOpenSubmenu(){
  return !!document.querySelector('.submenu-panel.open');
}
function syncMenuBackdrop(){
  const shouldShow = !!(leftPanel?.classList.contains('open') || hasAnyOpenSubmenu());
  menuBackdrop?.classList.toggle('show', shouldShow);
}
function closeMenusFully(){
  leftPanel?.classList.remove('open');
  closeAllSubmenus();
  syncMenuBackdrop();
}
function openRememberedSubmenuOrMenu(){
  const panel = lastOpenedSubmenuId ? document.getElementById(lastOpenedSubmenuId) : null;
  if(panel){
    panel.classList.add('open');
    leftPanel?.classList.remove('open');
  } else {
    leftPanel?.classList.add('open');
  }
  syncMenuBackdrop();
}
if(menuBtn && leftPanel){
  menuBtn.addEventListener('click', ()=>{
    const hasOpenSubmenu = hasAnyOpenSubmenu();
    const isAnyMenuOpen = leftPanel.classList.contains('open') || hasOpenSubmenu;
    if(isAnyMenuOpen){
      closeMenusFully();
      return;
    }
    openRememberedSubmenuOrMenu();
  });
}

menuBackdrop?.addEventListener('click', ()=>{
  closeMenusFully();
});

document.addEventListener('keydown', (e)=>{
  const key = (e.key || '').toLowerCase();
  if((e.ctrlKey || e.metaKey) && key === 'z'){
    const activeEl = document.activeElement;
    if(isEditableElement(activeEl) && activeEl !== casOutput) return;
    e.preventDefault();
    if(e.shiftKey) performRedo();
    else performUndo();
    return;
  }
  if((e.ctrlKey || e.metaKey) && key === 'y'){
    const activeEl = document.activeElement;
    if(isEditableElement(activeEl) && activeEl !== casOutput) return;
    e.preventDefault();
    performRedo();
    return;
  }
  if(e.key !== 'Escape') return;
  if(leftPanel?.classList.contains('open') || hasAnyOpenSubmenu()){
    e.preventDefault();
    closeMenusFully();
  }
});

document.addEventListener('click', (e)=>{
  const target = e.target;
  if(!(target instanceof Element)) return;
  const menuBtnBox = target.closest('.menu-btn-box[data-submenu]');
  if(menuBtnBox){
    const id = menuBtnBox.getAttribute('data-submenu');
    closeAllSubmenus();
    const panel = id ? document.getElementById(id) : null;
    if(panel){
      panel.classList.add('open');
      lastOpenedSubmenuId = id;
    }
    leftPanel?.classList.remove('open');
    syncMenuBackdrop();
    return;
  }
  const backBtn = target.closest('.back-btn[data-back]');
  if(backBtn){
    const id = backBtn.getAttribute('data-back');
    if(id){
      const panel = document.getElementById(id);
      panel?.classList.remove('open');
      lastOpenedSubmenuId = null;
      if(!hasAnyOpenSubmenu()){
        leftPanel?.classList.add('open');
      }
      syncMenuBackdrop();
    }
  }
});

// ====== Importar / Exportar ======
function buildExportPayload(){
  return {
    version: 2,
    lang: localStorage.getItem('jtac_lang') || 'es',
    unit: localStorage.getItem('jtac_unit') || 'm',
    state: localStorage.getItem('jtac_helper_state') || '',
    form: captureFormSnapshot()
  };
}

function captureFormSnapshot(){
  const byId = {};
  const byName = {};
  document.querySelectorAll('input, select, textarea').forEach(el=>{
    if(el.name){
      if(el.type === 'radio'){
        if(el.checked) byName[el.name] = el.value;
      } else if(el.type === 'checkbox'){
        if(!Array.isArray(byName[el.name])) byName[el.name] = [];
        if(el.checked) byName[el.name].push(el.value || 'on');
      }
    }
    if(!el.id) return;
    if(el.type === 'checkbox' || el.type === 'radio'){
      byId[el.id] = {type: 'check', value: !!el.checked};
    } else {
      byId[el.id] = {type: 'value', value: el.value};
    }
  });
  return {byId, byName};
}

function applyFormSnapshot(snapshot){
  if(!snapshot || typeof snapshot !== 'object') return;
  const byId = snapshot.byId || {};
  const byName = snapshot.byName || {};
  Object.keys(byId).forEach(id=>{
    const entry = byId[id];
    const el = document.getElementById(id);
    if(!el || !entry) return;
    if(entry.type === 'check'){
      el.checked = !!entry.value;
    } else if(entry.type === 'value'){
      el.value = entry.value ?? '';
    }
  });
  Object.keys(byName).forEach(name=>{
    const val = byName[name];
    const inputs = document.querySelectorAll(`[name="${name}"]`);
    inputs.forEach(el=>{
      if(el.type === 'radio'){
        el.checked = (el.value === val);
      } else if(el.type === 'checkbox'){
        const list = Array.isArray(val) ? val : [];
        const key = el.value || 'on';
        el.checked = list.includes(key);
      }
    });
  });
}

function isEditableElement(el){
  if(!el) return false;
  const tag = (el.tagName || '').toLowerCase();
  return tag === 'input' || tag === 'textarea' || tag === 'select' || !!el.isContentEditable;
}

function buildHistorySnapshot(){
  saveAir();
  saveMission();
  saveState();
  const form = captureFormSnapshot();
  const formSig = JSON.stringify(form.byId || {});
  const stateSig = localStorage.getItem('jtac_helper_state') || '';
  return {
    state: stateSig,
    form,
    sig: `${stateSig.length}:${stateSig}|${formSig.length}:${formSig}`
  };
}

function sameHistorySnapshot(a, b){
  if(!a || !b) return false;
  return a.sig === b.sig;
}

function pushHistorySnapshot(){
  if(isApplyingHistory) return;
  const snapshot = buildHistorySnapshot();
  const last = undoStack.length ? undoStack[undoStack.length - 1] : null;
  if(last && sameHistorySnapshot(last, snapshot)) return;
  undoStack.push(snapshot);
  if(undoStack.length > 60) undoStack.shift();
  redoStack = [];
}

function restoreHistorySnapshot(snapshot){
  if(!snapshot) return;
  isApplyingHistory = true;
  try{
    if(typeof snapshot.state === 'string'){
      localStorage.setItem('jtac_helper_state', snapshot.state);
    }
    loadState();
    renderMunitionOptions();
    applyFormSnapshot(snapshot.form);
    refreshUIAfterImport();
  }finally{
    isApplyingHistory = false;
  }
}

function performUndo(){
  if(undoStack.length <= 1) return;
  const current = undoStack.pop();
  if(current) redoStack.push(current);
  const previous = undoStack[undoStack.length - 1];
  restoreHistorySnapshot(previous);
}

function performRedo(){
  if(!redoStack.length) return;
  const next = redoStack.pop();
  if(!next) return;
  undoStack.push(next);
  restoreHistorySnapshot(next);
}

function scheduleHistorySnapshot(){
  if(historyDebounceTimer) clearTimeout(historyDebounceTimer);
  historyDebounceTimer = setTimeout(pushHistorySnapshot, 250);
}

function applyImportedState(payload){
  if(!payload) throw new Error('invalid payload');
  // Allow raw state JSON, wrapped payload, or stringified payload
  if(typeof payload === 'string'){
    try{
      payload = JSON.parse(payload);
    }catch{
      throw new Error('invalid payload');
    }
  }
  if(typeof payload !== 'object') throw new Error('invalid payload');
  if(typeof payload.lang === 'string' && payload.lang){
    localStorage.setItem('jtac_lang', payload.lang);
  }
  if(typeof payload.unit === 'string' && payload.unit){
    localStorage.setItem('jtac_unit', payload.unit);
  }
  if(typeof payload.state === 'string'){
    localStorage.setItem('jtac_helper_state', payload.state);
  } else if(typeof payload.state === 'object' && payload.state !== null){
    localStorage.setItem('jtac_helper_state', JSON.stringify(payload.state));
  } else if(payload.airStore || payload.missionStore || payload.openSections){
    // Treat as raw state object
    localStorage.setItem('jtac_helper_state', JSON.stringify(payload));
  }
  loadState();
  renderMunitionOptions();
  if(payload.form) applyFormSnapshot(payload.form);
  else if(payload.state && payload.state.req_munition) setSelectedMunitionList(payload.state.req_munition);
  const stored = localStorage.getItem('jtac_lang') || 'es';
  if(langSelectEl) langSelectEl.value = stored;
  loadLang(stored);
  refreshUIAfterImport();
}

function refreshUIAfterImport(){
  updateLiner();
  loadAir();
  loadMission();
  updateCasTypeEffects();
  updateRemarksVisibility();
  updateVectorFinalVisibility();
  updateExtraMinutesVisibility();
  updateDangerCloseVisibility();
  updatePreauthVisibility();
  updateAlliesInAreaColor();
  updateKillboxVisibility();
    updateTimeLimitDisplay(getTimeLimitSeconds(), false);
  const mode = casModeRadioEl && casModeRadioEl.checked ? 'radio' : 'texto';
  if(casOutput) genCAS(mode);
}

document.addEventListener('input', (e)=>{
  if(!(e.target instanceof HTMLElement)) return;
  if(!e.target.closest('input, textarea, select')) return;
  if(e.target.id === 'import-export-text') return;
  scheduleHistorySnapshot();
}, true);

document.addEventListener('change', (e)=>{
  if(!(e.target instanceof HTMLElement)) return;
  if(!e.target.closest('input, textarea, select')) return;
  if(e.target.id === 'import-export-text') return;
  pushHistorySnapshot();
}, true);

if(exportBtnEl && importExportTextEl){
  exportBtnEl.addEventListener('click', ()=>{
    const panel = exportBtnEl.closest('.submenu-panel');
    panel?.classList.add('open');
    menuBackdrop?.classList.add('show');
    saveAir();
    saveMission();
    saveState();
    const payload = buildExportPayload();
    importExportTextEl.value = JSON.stringify(payload, null, 2);
    importExportTextEl.focus();
    importExportTextEl.select();
  });
}

if(importBtnEl && importExportTextEl){
  importBtnEl.addEventListener('click', ()=>{
    const panel = importBtnEl.closest('.submenu-panel');
    panel?.classList.add('open');
    menuBackdrop?.classList.add('show');
    const raw = (importExportTextEl.value || '').trim();
    if(!raw) return alert(t('import.error_empty'));
    try{
      const payload = JSON.parse(raw);
      applyImportedState(payload);
      alert(t('import.success'));
    }catch(e){
      console.warn('import error', e);
      alert(t('import.error_invalid'));
    }
  });
}

if(exportArmamentsBtnEl && importExportTextEl){
  exportArmamentsBtnEl.addEventListener('click', ()=>{
    const panel = exportArmamentsBtnEl.closest('.submenu-panel');
    panel?.classList.add('open');
    menuBackdrop?.classList.add('show');
    importExportTextEl.value = buildArmamentsCsv();
    importExportTextEl.focus();
    importExportTextEl.select();
  });
}

if(importArmamentsBtnEl && importExportTextEl){
  importArmamentsBtnEl.addEventListener('click', ()=>{
    const panel = importArmamentsBtnEl.closest('.submenu-panel');
    panel?.classList.add('open');
    menuBackdrop?.classList.add('show');
    const raw = (importExportTextEl.value || '').trim();
    if(!raw) return alert(t('import.error_empty'));
    try{
      const normalized = parseArmamentsCsv(raw);
      if(!normalized.length) return alert(t('import.armaments_empty'));
      commonArmamentsCsv = buildArmamentsCsvFromList(normalized);
      saveCommonArmamentsCsv(commonArmamentsCsv);
      renderCommonArmamentsList();
      applyImportedArmaments(normalized);
      alert(t('import.armaments_success'));
    }catch(e){
      console.warn('import armaments error', e);
      alert(t('import.armaments_invalid'));
    }
  });
}

[airL1,airL2,airL3,airL4,airL5,airL6,airL7].forEach(el=>{ if(el) el.addEventListener('input', saveAir); });
airL4?.addEventListener('input', ()=>{ renderMunitionOptions(); saveMission(); });
getLinerInputs().forEach((i)=> i.addEventListener('input', saveMission));
linerFields?.addEventListener('input', (e)=>{
  const t = e.target;
  if(t && t.dataset && t.dataset.line === '8'){
    syncDangerCloseFromLine8();
  }
});
linerFields?.addEventListener('change', (e)=>{
  const t = e.target;
  if(t && t.dataset && t.dataset.line === '8'){
    syncDangerCloseFromLine8();
  }
});

// ====== Hints por hover ======
// ====== Idioma ======
async function loadLang(lang){
  const safe = lang || 'es';
  try{
    const res = await window.safeFetchJson(`lang/${safe}.json`, {timeoutMs: 6000});
    if(!res.ok) throw new Error(`lang load ${safe}: ${res.error}`);
    translations = res.data;
    currentLang = safe;
    localStorage.setItem('jtac_lang', safe);
    applyLang();
  }catch(e){
    console.warn('loadLang error', e);
  }
}

function applyLang(){
  document.title = t('app.title');
  document.documentElement.setAttribute('lang', currentLang);
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(key) el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    if(key) el.setAttribute('placeholder', t(key));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el=>{
    const key = el.getAttribute('data-i18n-title');
    if(key) el.setAttribute('title', t(key));
  });
  updateLiner();
  applyUnitToUI();
  applyHoverHints();
  dictionaryManager?.setLanguage(currentLang);
  dictionaryManager?.render();
  renderCommonArmamentsList();
  setRandomCreditsSubtext();
}

function applyHoverHints(){
  const excludeIds = new Set(['cas-mode-radio']);
  document.querySelectorAll('input, select, textarea, button').forEach(el=>{
    if(excludeIds.has(el.id)) return;
    if(el.dataset && el.dataset.hint){
      el.title = t(el.dataset.hint);
      return;
    }
    if(el.id && hintMap[el.id]){
      el.title = t(hintMap[el.id]);
      return;
    }
    if(el.title) return;
    if(el.tagName === 'INPUT' && (el.type === 'checkbox' || el.type === 'radio')){
      const label = el.closest('label');
      if(label){
        if(label.getAttribute('for') && excludeIds.has(label.getAttribute('for'))) return;
        const text = label.textContent.replace(/\s+/g, ' ').trim();
        if(text) el.title = text;
      }
      return;
    }
    const ph = el.getAttribute('placeholder');
    if(ph) el.title = ph;
  });
  document.querySelectorAll('label').forEach(label=>{
    const forId = label.getAttribute('for');
    if(forId && excludeIds.has(forId)) return;
    const embedded = label.querySelector('input[id]');
    if(embedded && embedded.id && hintMap[embedded.id]){
      label.title = t(hintMap[embedded.id]);
      return;
    }
    if(label.title) return;
    const text = label.textContent.replace(/\s+/g, ' ').trim();
    if(text) label.title = text;
  });
}

function applyUnitToUI(){
  const unit = getUnit();
  if(unitSelectEl) unitSelectEl.value = unit;
  const distKey = unit === 'ft' ? 'remarks.feet' : 'remarks.meters';
  if(dangerCloseDistEl) dangerCloseDistEl.setAttribute('placeholder', t(distKey));
  if(dangerCloseDistEl) dangerCloseDistEl.title = t(distKey);
  const liner = linerSelect?.value || '9';
  if(liner === '6' || liner === '9'){
    const line3 = linerFields?.querySelector('input[data-line="3"]');
    if(line3){
      const phKey = unit === 'ft' ? 'liner.distance_ft' : 'liner.distance_m';
      const hintKey = unit === 'ft' ? 'hint.distance_ft' : 'hint.distance_m';
      line3.setAttribute('placeholder', `L3 ${t(phKey)}`);
      line3.dataset.hint = hintKey;
      line3.title = t(hintKey);
    }
  }
  renderCheckpointPlanner();
}

function setAppTab(tabId){
  if(!appTabBtnEls.length || !appTabPanelEls.length) return;
  const migratedTabId = tabId === 'ops-tab' ? 'tab1' : tabId === 'empty-tab' ? 'tab2' : tabId;
  const validIds = new Set(appTabBtnEls.map((b)=> b.dataset.appTabBtn).filter(Boolean));
  const safeTab = validIds.has(migratedTabId) ? migratedTabId : 'tab1';
  appTabBtnEls.forEach((btn)=>{
    const active = btn.dataset.appTabBtn === safeTab;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  appTabPanelEls.forEach((panel)=>{
    const active = panel.dataset.appTabPanel === safeTab;
    panel.classList.toggle('active', active);
    panel.setAttribute('aria-hidden', active ? 'false' : 'true');
  });
  localStorage.setItem(APP_TAB_STORAGE_KEY, safeTab);
}

function parsePositiveNumber(raw){
  const n = Number(String(raw || '').trim());
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function formatDuration(totalSeconds){
  if(!Number.isFinite(totalSeconds) || totalSeconds <= 0) return '--:--';
  const sec = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if(h > 0) return `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  return `${m}:${String(s).padStart(2,'0')}`;
}

function secondsForDistance(distanceM, speedKmh){
  if(!Number.isFinite(distanceM) || distanceM <= 0) return 0;
  if(!Number.isFinite(speedKmh) || speedKmh <= 0) return NaN;
  const unit = getUnit();
  const metersPerSecond = unit === 'ft' ? (speedKmh * 0.44704) : (speedKmh / 3.6);
  if(!Number.isFinite(metersPerSecond) || metersPerSecond <= 0) return NaN;
  return distanceM / metersPerSecond;
}

function toMetersFromDisplayDistance(distanceValue){
  if(distanceValue === '' || distanceValue === null || distanceValue === undefined) return '';
  const num = parsePositiveNumber(distanceValue);
  if(!num) return '';
  return getUnit() === 'ft' ? (num * 0.3048) : num;
}

function fromMetersToDisplayDistance(distanceM){
  if(distanceM === '' || distanceM === null || distanceM === undefined) return '';
  const num = Number(distanceM);
  if(!Number.isFinite(num) || num <= 0) return '';
  const converted = getUnit() === 'ft' ? (num / 0.3048) : num;
  return String(Math.round(converted));
}

function getCheckpointUnitLabels(){
  if(getUnit() === 'ft'){
    return {
      speed: 'mph',
      distance: 'ft'
    };
  }
  return {
    speed: 'km/h',
    distance: 'm'
  };
}

function renderCheckpointPlanner(){
  if(!checkpointListEl) return;
  if(!checkpointSegmentsM.length){
    checkpointSegmentsM = [''];
    checkpointNames = [''];
  }
  if(checkpointNames.length !== checkpointSegmentsM.length){
    if(checkpointNames.length < checkpointSegmentsM.length){
      while(checkpointNames.length < checkpointSegmentsM.length) checkpointNames.push('');
    } else {
      checkpointNames = checkpointNames.slice(0, checkpointSegmentsM.length);
    }
  }
  checkpointSegmentsM[0] = '';
  const speedMin = parsePositiveNumber(cpSpeedMinEl?.value);
  const speedAvg = parsePositiveNumber(cpSpeedAvgEl?.value);
  const speedMax = parsePositiveNumber(cpSpeedMaxEl?.value);
  const labels = getCheckpointUnitLabels();
  if(cpSpeedMinLabelEl) cpSpeedMinLabelEl.textContent = `MIN (${labels.speed})`;
  if(cpSpeedAvgLabelEl) cpSpeedAvgLabelEl.textContent = `AVG (${labels.speed})`;
  if(cpSpeedMaxLabelEl) cpSpeedMaxLabelEl.textContent = `MAX (${labels.speed})`;
  if(cpColDistanceEl) cpColDistanceEl.textContent = `Segment distance (${labels.distance})`;
  if(cpColCumulativeEl) cpColCumulativeEl.textContent = `Cumulative (${labels.distance})`;
  checkpointListEl.innerHTML = '';
  let cumulativeDistance = 0;
  let cumulativeMinSec = 0;
  let cumulativeAvgSec = 0;
  let cumulativeMaxSec = 0;

  checkpointSegmentsM.forEach((segmentDistance, index)=>{
    const isFirstCheckpoint = index === 0;
    const rawDistance = isFirstCheckpoint ? '' : fromMetersToDisplayDistance(segmentDistance);
    const safeDistance = isFirstCheckpoint ? 0 : (Number(segmentDistance) || 0);
    cumulativeDistance += safeDistance;
    cumulativeMinSec += secondsForDistance(safeDistance, speedMin);
    cumulativeAvgSec += secondsForDistance(safeDistance, speedAvg);
    cumulativeMaxSec += secondsForDistance(safeDistance, speedMax);

    const tr = document.createElement('tr');

    const cpTd = document.createElement('td');
    cpTd.dataset.label = 'Checkpoint';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.className = 'checkpoint-input-small';
    nameInput.placeholder = 'Checkpoint';
    nameInput.value = checkpointNames[index] || '';
    nameInput.addEventListener('input', ()=>{
      checkpointNames[index] = nameInput.value || '';
    });
    cpTd.appendChild(nameInput);

    const distTd = document.createElement('td');
    distTd.dataset.label = `Segment distance (${labels.distance})`;
    const distInput = document.createElement('input');
    distInput.type = 'number';
    distInput.className = 'checkpoint-input-small';
    distInput.min = '0';
    distInput.step = '1';
    distInput.inputMode = 'numeric';
    distInput.value = rawDistance;
    distInput.placeholder = isFirstCheckpoint ? '-' : labels.distance;
    distInput.disabled = isFirstCheckpoint;
    distInput.addEventListener('input', ()=>{
      if(isFirstCheckpoint) return;
      const v = String(distInput.value || '').trim();
      checkpointSegmentsM[index] = v === '' ? '' : toMetersFromDisplayDistance(v);
    });
    distInput.addEventListener('change', ()=>{
      if(isFirstCheckpoint) return;
      renderCheckpointPlanner();
    });
    distInput.addEventListener('blur', ()=>{
      if(isFirstCheckpoint) return;
      renderCheckpointPlanner();
    });
    distInput.addEventListener('keydown', (e)=>{
      if(isFirstCheckpoint) return;
      if(e.key === 'Enter') renderCheckpointPlanner();
    });
    distTd.appendChild(distInput);

    const cumulativeTd = document.createElement('td');
    cumulativeTd.dataset.label = `Cumulative (${labels.distance})`;
    cumulativeTd.textContent = `${Math.round(getUnit() === 'ft' ? (cumulativeDistance / 0.3048) : cumulativeDistance)}`;

    const minTd = document.createElement('td');
    minTd.dataset.label = 'MIN';
    minTd.textContent = formatDuration(cumulativeMinSec);

    const avgTd = document.createElement('td');
    avgTd.dataset.label = 'AVG';
    avgTd.textContent = formatDuration(cumulativeAvgSec);

    const maxTd = document.createElement('td');
    maxTd.dataset.label = 'MAX';
    maxTd.textContent = formatDuration(cumulativeMaxSec);

    const actionsTd = document.createElement('td');
    actionsTd.dataset.label = 'Actions';
    const actionsWrap = document.createElement('div');
    actionsWrap.className = 'checkpoint-actions';

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'checkpoint-btn danger-btn';
    deleteBtn.title = 'Delete checkpoint';
    deleteBtn.textContent = 'X';
    deleteBtn.disabled = checkpointSegmentsM.length <= 1;
    deleteBtn.addEventListener('click', ()=>{
      if(checkpointSegmentsM.length <= 1) return;
      checkpointSegmentsM.splice(index, 1);
      checkpointNames.splice(index, 1);
      if(checkpointSegmentsM.length) checkpointSegmentsM[0] = '';
      renderCheckpointPlanner();
    });

    actionsWrap.appendChild(deleteBtn);
    actionsTd.appendChild(actionsWrap);

    tr.appendChild(cpTd);
    tr.appendChild(distTd);
    tr.appendChild(cumulativeTd);
    tr.appendChild(minTd);
    tr.appendChild(avgTd);
    tr.appendChild(maxTd);
    tr.appendChild(actionsTd);
    checkpointListEl.appendChild(tr);
  });

  if(checkpointSummaryEl){
    const totalDisplay = Math.round(getUnit() === 'ft' ? (cumulativeDistance / 0.3048) : cumulativeDistance);
    checkpointSummaryEl.textContent = `${checkpointSegmentsM.length} checkpoints | Total distance: ${totalDisplay} ${labels.distance}`;
  }
}

// ====== Generaciï¿½n de salida ======
if(casGenBtn){
  casGenBtn.addEventListener('click', ()=>{
    const mode = casModeRadioEl && casModeRadioEl.checked ? 'radio' : 'texto';
    genCAS(mode);
  });
  if(casModeRadioEl) casModeRadioEl.addEventListener('change', saveState);
}

if(appTabBtnEls.length){
  appTabBtnEls.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
      setAppTab(btn.dataset.appTabBtn || 'tab1');
    });
  });
  const storedTab = localStorage.getItem(APP_TAB_STORAGE_KEY);
  setAppTab(storedTab || appTabBtnEls.find((b)=> b.classList.contains('active'))?.dataset.appTabBtn || 'tab1');
}

[cpSpeedMinEl, cpSpeedAvgEl, cpSpeedMaxEl].forEach((el)=>{
  el?.addEventListener('input', renderCheckpointPlanner);
});
checkpointAddBtnEl?.addEventListener('click', ()=>{
  checkpointSegmentsM.push('');
  checkpointNames.push('');
  renderCheckpointPlanner();
});
renderCheckpointPlanner();

if(casOutput){
  casOutput.addEventListener('keydown', (e)=>{
    if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a'){
      e.preventDefault();
      const range = document.createRange();
      range.selectNodeContents(casOutput);
      const sel = window.getSelection();
      if(sel){
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  });
}

function formatLine6(val){
  const digits = (val || '').replace(/\D/g,'');
  if(!(digits.length === 6 || digits.length === 8 || digits.length === 10)) return val;
  const half = digits.length / 2;
  const first = digits.slice(0, half);
  const last = digits.slice(-half);
  return `[ X${first} | Y${last} ]`;
}

function formatWeapons(val){
  const raw = (val || '').trim();
  if(!raw) return '';
  const parts = raw.split(',').map((p)=>p.trim()).filter(Boolean);
  return parts.join(' | ');
}

function toCompass(deg){
  if(isNaN(deg)) return '';
  const normalized = ((Number(deg) % 360) + 360) % 360;
  const dirs = ['N','NE','E','SE','S','SW','W','NW','N'];
  const idx = Math.round(normalized / 45);
  return dirs[idx];
}

function padLeadingZero(rawVal){
  if(rawVal === null || rawVal === undefined) return '';
  const raw = String(rawVal).trim();
  if(raw === '') return '';
  if(raw.startsWith('0')) return raw;
  const num = Number(raw);
  if(Number.isNaN(num)) return raw;
  return num < 99 ? `0${raw}` : raw;
}

function formatHeading(val){
  if(val === null || val === undefined) return '';
  const raw = String(val).trim();
  if(raw === '') return '';
  const num = Number(raw);
  if(Number.isNaN(num)) return val;
  const shown = padLeadingZero(raw);
  const dir = toCompass(num);
  return `${t('cas.heading_prefix')} ${dir} ${shown}\&deg;`;
}

function formatDirection(val, label){
  if(val === null || val === undefined) return '';
  const raw = String(val).trim();
  if(raw === '') return '';
  const num = Number(raw);
  if(Number.isNaN(num)) return '';
  const shown = padLeadingZero(raw);
  const dir = toCompass(num);
  return label ? `${label} ${dir} ${shown}\&deg;` : `${dir} ${shown}\&deg;`;
}

function formatDirectionOrText(val, label){
  if(val === null || val === undefined) return '';
  const raw = String(val).trim();
  if(raw === '') return '';
  const num = Number(raw);
  if(Number.isNaN(num)) return label ? `${label} ${raw}` : raw;
  const shown = padLeadingZero(raw);
  const dir = toCompass(num);
  return label ? `${label} ${dir} ${shown}\&deg;` : `${dir} ${shown}\&deg;`;
}

function formatDistance(val){
  if(val === null || val === undefined) return '';
  const raw = String(val).trim();
  if(raw === '') return '';
  const num = Number(raw);
  if(Number.isNaN(num)) return val;
  const unit = getUnit();
  if(unit === 'ft'){
    const ft = Math.round(num);
    if(ft >= 5280){
      const mi = ft / 5280;
      const shown = Math.round(mi * 100) / 100;
      return t('cas.distance_mi', {mi: shown});
    }
    return t('cas.distance_ft', {ft});
  }
  if(num >= 1000){
    const km = num / 1000;
    return t('cas.distance_km', {km});
  }
  return t('cas.distance_m', {m: raw});
}

function formatVectorFinal(){
  if(!vectorFinalToggleEl?.checked) return '';
  const degVal = (vectorFinalDegEl?.value || '').trim();
  const degRaw = parseFloat(degVal);
  if(isNaN(degRaw)) return '';
  const dir = toCompass(degRaw);
  const shownDeg = padLeadingZero(degVal);
  const varVal = (vectorFinalVarEl?.value || '').trim();
  const varRaw = parseFloat(varVal);
  const shownVar = padLeadingZero(varVal);
  const varPart = !isNaN(varRaw) ? ` &plusmn; ${shownVar}&deg;` : '';
  return t('cas.vector_final', {dir, deg: `${shownDeg}&deg;`, var: varPart}).trim();
}

function getInitials(raw){
  if(!raw) return '';
  const parts = raw.split(/\s+/).filter(Boolean);
  const initials = parts.slice(0,3).map((p)=> p[0].toUpperCase()).join('.');
  return initials ? `${initials}.` : '';
}

function formatDangerClose(){
  if(!dangerCloseToggleEl?.checked) return '';
  if(!alliesInAreaToggleEl?.checked) return '';
  const degVal = (dangerCloseDegEl?.value || '').trim();
  const distVal = (dangerCloseDistEl?.value || '').trim();
  const parts = [];
  const degRaw = parseFloat(degVal);
  if(!isNaN(degRaw)){
    const dir = toCompass(degRaw);
    const shownDeg = padLeadingZero(degVal);
    parts.push(t('cas.allies_direction', {dir, deg: `${shownDeg}&deg;`}));
  }
  const distRaw = parseFloat(distVal);
  if(!isNaN(distRaw)){
    parts.push(formatDistance(distVal));
  }
  const initials = getInitials((csGround?.value || '').trim());
  const prefix = t('cas.danger_close_authorized');
  const extra = initials ? `${t('cas.ground_cmd_initials', {initials})}, ` : '';
  const tail = parts.length ? parts.join(', ') : '';
  const colored = `${prefix}${extra}${tail}`.replace(/, /g, '</span>, <span class="danger">');
  return `<span class="danger">${colored}</span>`;
}

function escapeRegExp(s){
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceInTextNodes(html, re, replacement){
  return html.split(/(<[^>]+>)/g).map((part, i)=>{
    if(i % 2) return part;
    return part.replace(re, replacement);
  }).join('');
}

function colorizeCallsigns(html, jtacCall, airCall){
  let outHtml = html;
  const protectedSpans = [];
  outHtml = outHtml.replace(/<span class="(?:jtac|air)">.*?<\/span>/g, (m)=>{
    protectedSpans.push(m);
    return `__PROT${protectedSpans.length-1}__`;
  });
  if(jtacCall){
    const re = new RegExp(escapeRegExp(jtacCall), 'g');
    outHtml = replaceInTextNodes(outHtml, re, `<span class="jtac">${jtacCall}</span>`);
  }
  if(airCall){
    const re = new RegExp(escapeRegExp(airCall), 'g');
    outHtml = replaceInTextNodes(outHtml, re, `<span class="air">${airCall}</span>`);
  }
  outHtml = outHtml.replace(/__PROT(\d+)__/g, (_, idx)=> protectedSpans[Number(idx)] || '');
  return outHtml;
}
function collectCASContext(){
  const jtac = escapeHtml((csJtac.value || '').trim() || t('callsign.jtac_default'));
  const liner = parseInt(linerSelect.value,10) || 9;
  const control = castypeEls.find(c=>c.checked)?.value || '';
  const attack = attackMethodEls.find(a=>a.checked)?.value || '';
  const munition = getSelectedMunitionList()
    .map(m=> m.qty ? `${escapeHtml(m.qty)}x${escapeHtml(m.name)}` : escapeHtml(m.name))
    .join(' | ');
  const castype = control || t('cas.default_type');
  const activeRaw = airStore[currentAir] || {};
  const activeAir = {
    l1: escapeHtml(activeRaw.l1 || ''),
    l2: escapeHtml(activeRaw.l2 || ''),
    l3: escapeHtml(activeRaw.l3 || ''),
    l4: escapeHtml(activeRaw.l4 || ''),
    l5: escapeHtml(activeRaw.l5 || ''),
    l6: escapeHtml(activeRaw.l6 || ''),
    l7: escapeHtml(activeRaw.l7 || '')
  };
  const fields = getLinerInputs()
    .filter(i=>!i.classList.contains('hidden') && !i.disabled && i.value.trim() !== '');
  const remarks = escapeHtml((casRemarksEl?.value || '').trim());
  return {jtac, liner, control, attack, munition, castype, activeAir, fields, remarks};
}

function genCAS(mode){
  saveAir();
  const {jtac, liner, control, attack, munition, castype, activeAir, fields, remarks} = collectCASContext();
  let out = '';
  const map = {};
  fields.forEach(i=> map[i.dataset.line] = escapeHtml(i.value));

  if(mode === 'radio'){
    const a = activeAir;
    const chkParts = [];
    if(a.l2) chkParts.push(a.l2);
    if(a.l4) chkParts.push(formatWeapons(a.l4));
    if(a.l5) chkParts.push(t('radio.playtime', {mikes: a.l5}));
    if(a.l6) chkParts.push(t('radio.abort_code', {code: a.l6}));
    if(a.l1) {
      out += `<span class="air">${a.l1}</span>:`;
      if(chkParts.length) out += ` ${chkParts.join(', ')}`;
      out += `.<br>`;
      if(a.l7) out += `${t('radio.remarks')}: ${a.l7}.<br>`;
    }
    out += `<span class="jtac">${jtac}</span>: ${t('radio.checkin_ack')}<br><br>`;

    out += `<span class="jtac">${jtac}</span>: ${t('radio.call_gameplan', {air: a.l1 || t('radio.air_default'), jtac})}<br>`;
    out += `<span class="air">${a.l1 || t('radio.air_default')}</span>: ${t('radio.ready_gameplan', {air: a.l1 || t('radio.air_default')})}<br><br>`;

    const gpParts = [];
    if(control){
      const ctlLabel = control === 'Tipo 1' ? t('gameplan.cas_type_1') : control === 'Tipo 2' ? t('gameplan.cas_type_2') : control === 'Tipo 3' ? t('gameplan.cas_type_3') : control;
      if(currentLang === 'en'){
        gpParts.push(`${ctlLabel} ${t('radio.control')}`.trim());
      } else {
        gpParts.push(`${t('radio.control')} ${ctlLabel}`.trim());
      }
    }
    if(attack) gpParts.push(attack === 'BOT' ? t('gameplan.bot') : attack === 'BOC' ? t('gameplan.boc') : attack);
    if(munition) gpParts.push(munition);
    out += `<span class="jtac">${jtac}</span>: ${t('radio.gameplan', {air: a.l1 || t('radio.air_default'), jtac, details: gpParts.length ? `, ${gpParts.join(', ')}` : '', liner})}<br><br>`;

    out += `<span class="air">${a.l1 || t('radio.air_default')}</span>: ${t('radio.ready_liner', {air: a.l1 || t('radio.air_default'), liner})}<br><br>`;

    const lineParts = [];
    if(omitL1L3El?.checked){
      lineParts.push(t('cas.lines_1_3_overhead'));
    } else if(liner === 3){
      const parts = [];
      if(map[1]) parts.push(formatLine6(map[1]));
      if(map[2]) parts.push(map[2]);
      if(map[3]) parts.push(`${t('cas.allies')} ${map[3]}`);
      if(parts.length) lineParts.push(parts.join(', '));
    } else {
      if(map[1]) lineParts.push(map[1]);
      if(map[2]) lineParts.push(formatHeading(map[2]));
      if(map[3]) lineParts.push(formatDistance(map[3]));
    }
    if(map[4]) lineParts.push(`${t('cas.elevation')} ${map[4]}`);
    if(map[5]) lineParts.push(map[5]);
    if(map[6]) lineParts.push(`${t('cas.coordinates')} ${formatLine6(map[6])}`);
    if(map[7]) lineParts.push(`${t('cas.marked_with')} ${map[7]}`);
    if(map[8]) lineParts.push(control === 'Tipo 3' ? `${t('cas.allies')} ${map[8]}` : formatDirectionOrText(map[8], t('cas.allies')));
    if(map[9]) lineParts.push(control === 'Tipo 3' ? `${t('cas.egress')} ${map[9]}` : formatDirection(map[9], t('cas.egress')));
    const vec = formatVectorFinal();
    const killboxName = escapeHtml((killboxInputEl?.value || '').trim());
    const engagement = getEngagementWindowText();
    const preauthBase = preauthToggleEl?.checked ? (killboxToggleEl?.checked && killboxName ? t('cas.preauth_killbox', {killbox: `<span class="danger">${formatKillboxDisplay(killboxName)}</span>`}) : t('cas.preauth')) : '';
    const preauth = preauthBase ? `${preauthBase}` : '';
    const killbox = (!preauth && killboxToggleEl?.checked && killboxName) ? `<span class="danger">${formatKillboxDisplay(killboxName)}</span>` : '';
    const allies = alliesInAreaToggleEl?.checked ? `<span class="ally-text">${t('cas.allies_in_area')}</span>` : '';
    const danger = formatDangerClose();
    if(includeRemarksEl?.checked && (preauth || engagement || allies || danger || vec || remarks)) lineParts.push(t('cas.remarks_label'));
    if(includeRemarksEl?.checked && preauth) lineParts.push(preauth);
    if(includeRemarksEl?.checked && engagement) lineParts.push(engagement);
    if(includeRemarksEl?.checked && killbox) lineParts.push(killbox);
    if(includeRemarksEl?.checked && allies) lineParts.push(allies);
    if(includeRemarksEl?.checked && danger) lineParts.push(danger);
    if(includeRemarksEl?.checked && vec) lineParts.push(vec);
    if(includeRemarksEl?.checked && remarks) lineParts.push(`${t('cas.remarks_word')} ${remarks}`);
    out += `<span class="jtac">${jtac}</span>: ${liner}-line` + (lineParts.length ? `, ${lineParts.join(', ')}` : '') + `, ${t('cas.ready_readback')}.`;
    out = out.replace(`, ${t('cas.remarks_label')}`, `; ${t('cas.remarks_label')}`);
  }else{
    out += `<span class="jtac">${t('text.jtac_label')}</span> ${jtac}<br><br>`;
//    out += `${castype}<br><br>`;
    if(activeAir.l1){
      const airParts = [];
      if(activeAir.l2) airParts.push(activeAir.l2);
      if(activeAir.l4) airParts.push(formatWeapons(activeAir.l4));
    if(activeAir.l5) airParts.push(t('radio.playtime', {mikes: activeAir.l5}));
      if(activeAir.l6) airParts.push(t('radio.abort_code_short', {code: activeAir.l6}));
      out += `<span class="air">${activeAir.l1}</span>: ${airParts.join(', ')}.<br>`;
      if(activeAir.l7) out += `${t('text.remarks_label')}: ${activeAir.l7}.<br>`;
    }
    if(control || attack || munition){
      out += `<b>${t('text.gameplan_title')}</b><br>`;
      if(control){
        const ctlLabel = control === 'Tipo 1' ? t('gameplan.cas_type_1') : control === 'Tipo 2' ? t('gameplan.cas_type_2') : control === 'Tipo 3' ? t('gameplan.cas_type_3') : control;
        out += `${t('text.control_type')}: ${ctlLabel}<br>`;
      }
      if(attack === 'BOT') out += `${t('text.attack_method')}: ${t('gameplan.bot')}<br>`;
      if(attack === 'BOC') out += `${t('text.attack_method')}: ${t('gameplan.boc')}<br>`;
      if(munition) out += `${t('text.requested_munition')}: ${munition}<br>`;
      out += `<br>`;
    }
    out += `${t('text.cas_line', {liner})}<br>`;
    if(liner === 3){
      const m1 = map[1] ? formatLine6(map[1]) : '';
      const m2 = map[2] || '';
      const m3 = map[3] ? `${t('cas.allies')} ${map[3]}` : '';
      const parts = [m1,m2,m3].filter(Boolean);
      if(parts.length) out += `- ${parts.join(', ')}<br>`;
    } else {
      fields.forEach(f => {
        if(omitL1L3El?.checked && ['1','2','3'].includes(f.dataset.line)) return;
        const rawValue = escapeHtml(f.value);
        let v = rawValue;
        if(f.dataset.line === '6') v = formatLine6(rawValue);
        if(f.dataset.line === '2') v = formatHeading(rawValue);
        if(f.dataset.line === '3') v = formatDistance(rawValue);
        if(f.dataset.line === '8') v = control === 'Tipo 3' ? `${t('cas.allies')} ${rawValue}` : formatDirectionOrText(rawValue, t('cas.allies'));
        if(f.dataset.line === '9') v = control === 'Tipo 3' ? `${t('cas.egress')} ${rawValue}` : formatDirection(rawValue, t('cas.egress'));
        out += `- ${v}<br>`;
      });
    }
    if(omitL1L3El?.checked){
      out += `- ${t('cas.lines_1_3_overhead')}<br>`;
    }
    if(includeRemarksEl?.checked && (remarks || formatVectorFinal() || preauthToggleEl?.checked || alliesInAreaToggleEl?.checked || formatDangerClose() || getEngagementWindowText() || (killboxToggleEl?.checked && (killboxInputEl?.value || '').trim()))){
      const vec = formatVectorFinal();
      const danger = formatDangerClose();
      const engagement = getEngagementWindowText();
      out += `<br><b>${t('cas.remarks_label')}</b><br>`;
      const kbName = escapeHtml((killboxInputEl?.value || '').trim());
      if(preauthToggleEl?.checked){
        const base = `${t('cas.preauth')}${(killboxToggleEl?.checked && kbName) ? ` ${t('cas.in')} <span class="danger">${formatKillboxDisplay(kbName)}</span>` : ''}`;
        out += `${base}<br>`;
      } else if(killboxToggleEl?.checked && kbName){
        out += `<span class="danger">${formatKillboxDisplay(kbName)}</span><br>`;
      }
      if(engagement) out += `${engagement}<br>`;
      if(alliesInAreaToggleEl?.checked) out += `<span class="ally-text">${t('cas.allies_in_area')}</span><br>`;
      if(danger) out += `${danger}<br>`;
      if(vec) out += `${vec}<br>`;
      if(remarks) out += `${remarks}<br>`;
    }
  }

  out = colorizeCallsigns(out, jtac, activeAir.l1 || '');
  casOutput.innerHTML = out;
  saveState();
}

// ====== Reset global ======
function clearAll(){
  suppressSave = true;
  airStore = [{},{},{}];
  currentAir = 0;
  airPresent = [false,false,false];
  airPresentEls.forEach(el=>{ if(el) el.checked = false; });
  missionStore = [null,null,null];
  missionPresent = [false,false,false];
  currentMission = 0;
  missionPresentEls.forEach(el=>{ if(el) el.checked = false; });
  csJtac.value = '';
  if(csGround) csGround.value = '';
  linerSelect.value = '9';
  updateLiner();
  [airL1,airL2,airL3,airL4,airL5,airL6,airL7].forEach(i=>{ if(i) i.value=''; });
  castypeEls.forEach(i=> i.checked=false);
  attackMethodEls.forEach(i=> i.checked=false);
  setSelectedMunitionList([]);
  casRemarksEl.value = '';
  if(includeRemarksEl) includeRemarksEl.checked = false;
  if(preauthToggleEl) preauthToggleEl.checked = false;
  if(alliesInAreaToggleEl) alliesInAreaToggleEl.checked = false;
  updateAlliesInAreaColor();
  if(killboxToggleEl) killboxToggleEl.checked = false;
  if(killboxInputEl) killboxInputEl.value = '';
  if(dangerCloseToggleEl) dangerCloseToggleEl.checked = false;
  if(dangerCloseDegEl) dangerCloseDegEl.value = '';
  if(dangerCloseDistEl) dangerCloseDistEl.value = '';
  if(vectorFinalToggleEl) vectorFinalToggleEl.checked = false;
  if(vectorFinalDegEl) vectorFinalDegEl.value = '';
  if(vectorFinalVarEl) vectorFinalVarEl.value = '';
  if(extraMinutesToggleEl) extraMinutesToggleEl.checked = false;
  if(extraMinutesInputEl) extraMinutesInputEl.value = '';
  updateRemarksVisibility();
  updateVectorFinalVisibility();
  updateExtraMinutesVisibility();
  updateDangerCloseVisibility();
  updatePreauthVisibility();
  stopTimeLimitCountdown();
  saveState();
  getLinerInputs().forEach((i)=>{ i.value=''; });
  casOutput.innerHTML = '';
  suppressSave = false;
}

