const LEVEL_NAMES = ['Iniciante','Aprendiz','Estudioso','Curioso','Raciocínador','Lógico','Matemático','Gênio','Mestre BrainMath','Lenda ⚡'];

const ALL_ACHIEVEMENTS = [
  { id:'first_win', icon:'🎯', name:'Primeiro Acerto', desc:'Acerte 1 questão', req: s => s.acertos >= 1 },
  { id:'fase5', icon:'🏅', name:'5 Questões', desc:'Acerte 5 questões', req: s => s.acertos >= 5 },
  { id:'fase15', icon:'🥈', name:'15 Questões', desc:'Acerte 15 questões', req: s => s.acertos >= 15 },
  { id:'fase30', icon:'🥇', name:'30 Questões', desc:'Acerte 30 questões', req: s => s.acertos >= 30 },
  { id:'combo3', icon:'🔥', name:'Em Chamas!', desc:'Combo de 3+ em sequência', req: s => s.bestCombo >= 3 },
  { id:'combo5', icon:'💥', name:'Imparável!', desc:'Combo de 5+ em sequência', req: s => s.bestCombo >= 5 },
  { id:'perfect', icon:'💎', name:'Perfeição', desc:'10/10 em uma fase', req: s => s.perfectRuns >= 1 },
  { id:'lvl3', icon:'⭐', name:'Nível 3', desc:'Chegue ao nível 3', req: s => s.level >= 3 },
  { id:'lvl5', icon:'🌟', name:'Nível 5', desc:'Chegue ao nível 5', req: s => s.level >= 5 },
  { id:'hard_unlock', icon:'🔓', name:'Desafiador', desc:'Desbloqueie a fase Difícil', req: s => s.acertos >= 15 },
  { id:'master_unlock', icon:'👑', name:'Mestre', desc:'Desbloqueie a fase Mestre', req: s => s.acertos >= 30 },
  { id:'eco', icon:'🌱', name:'Eco Herói', desc:'Complete 5 fases (sem papel!)', req: s => s.fases >= 5 },
];

const QUESTIONS = {
  easy: [
    { expr:'(-3) + (-5)', lbl:'Resolva:', ans:-8, opts:[-8,-2,8,2] },
    { expr:'(+6) + (-4)', lbl:'Resolva:', ans:2, opts:[2,-2,10,-10] },
    { expr:'(-7) - (-3)', lbl:'Resolva:', ans:-4, opts:[-4,-10,4,10] },
    { expr:'(+5) × (-2)', lbl:'Resolva:', ans:-10, opts:[-10,10,-7,7] },
    { expr:'(-8) ÷ (-2)', lbl:'Resolva:', ans:4, opts:[4,-4,-6,16] },
    { expr:'(+3) + (+7)', lbl:'Resolva:', ans:10, opts:[10,-4,4,-10] },
    { expr:'(-9) + (+4)', lbl:'Resolva:', ans:-5, opts:[-5,5,-13,13] },
    { expr:'(+6) - (+8)', lbl:'Resolva:', ans:-2, opts:[-2,2,14,-14] },
    { expr:'(-4) × (+3)', lbl:'Resolva:', ans:-12, opts:[-12,12,-7,7] },
    { expr:'(+10) ÷ (-5)', lbl:'Resolva:', ans:-2, opts:[-2,2,-50,50] },
    { expr:'(-2) + (-8)', lbl:'Resolva:', ans:-10, opts:[-10,10,-6,6] },
    { expr:'(+9) - (+3)', lbl:'Resolva:', ans:6, opts:[6,-6,12,-12] },
    { expr:'(-5) × (-4)', lbl:'Resolva:', ans:20, opts:[20,-20,-9,9] },
    { expr:'(+12) ÷ (-3)', lbl:'Resolva:', ans:-4, opts:[-4,4,-9,9] },
    { expr:'(-1) + (-1)', lbl:'Resolva:', ans:-2, opts:[-2,2,0,-1] },
  ],
  med: [
    { expr:'(-3)² + (-4)', lbl:'Resolva:', ans:5, opts:[5,-13,13,-5] },
    { expr:'(+2) × (-3) + 10', lbl:'Resolva:', ans:4, opts:[4,-4,16,-16] },
    { expr:'(-6) ÷ 2 - (-1)', lbl:'Resolva:', ans:-2, opts:[-2,2,-4,4] },
    { expr:'|(-8)| - |(-3)|', lbl:'Módulo:', ans:5, opts:[5,-5,11,-11] },
    { expr:'(-5) × (-2) - 4', lbl:'Resolva:', ans:6, opts:[6,-6,14,-14] },
    { expr:'3 + (-2) × (-4)', lbl:'Resolva:', ans:11, opts:[11,-5,5,-11] },
    { expr:'(-1)³ × (-2)²', lbl:'Resolva:', ans:-4, opts:[-4,4,-8,8] },
    { expr:'(-12) ÷ 3 + (-1)', lbl:'Resolva:', ans:-5, opts:[-5,5,-3,3] },
    { expr:'|(-9)| ÷ 3 - 5', lbl:'Módulo:', ans:-2, opts:[-2,2,8,-8] },
    { expr:'(-2)³ + 4²', lbl:'Resolva:', ans:8, opts:[8,-8,24,-24] },
    { expr:'5 - (-3) × 2', lbl:'Resolva:', ans:11, opts:[11,-1,-11,1] },
    { expr:'(-4)² - 3²', lbl:'Resolva:', ans:7, opts:[7,-7,25,-25] },
    { expr:'|(-7) + 3|', lbl:'Módulo:', ans:4, opts:[4,-4,10,-10] },
    { expr:'2² × (-3)', lbl:'Resolva:', ans:-12, opts:[-12,12,-6,6] },
    { expr:'(-10) ÷ (-2) + 1', lbl:'Resolva:', ans:6, opts:[6,-6,4,-4] },
  ],
  hard: [
    { expr:'(-3)² - 2³ + (-4)', lbl:'Resolva:', ans:-3, opts:[-3,3,5,-5] },
    { expr:'[(+4) - (-6)] × (-2)', lbl:'Resolva:', ans:-20, opts:[-20,20,-4,4] },
    { expr:'(-2)⁴ ÷ (-4) + 3', lbl:'Resolva:', ans:-1, opts:[-1,1,7,-7] },
    { expr:'(-1)⁵ × [3 - (-7)]', lbl:'Resolva:', ans:-10, opts:[-10,10,-4,4] },
    { expr:'|(-5)² - 3²|', lbl:'Módulo:', ans:16, opts:[16,-16,34,2] },
    { expr:'(-3) × 4 - (-2) × 5', lbl:'Resolva:', ans:-2, opts:[-2,2,-22,22] },
    { expr:'2³ + (-3)² - (-1)', lbl:'Resolva:', ans:18, opts:[18,-18,16,-16] },
    { expr:'[(-4) + 2] × [3 - 5]', lbl:'Resolva:', ans:4, opts:[4,-4,2,-2] },
    { expr:'(-6)² ÷ [(-3) × 2]', lbl:'Resolva:', ans:-6, opts:[-6,6,-2,2] },
    { expr:'(-2)³ + (-3)² - 4', lbl:'Resolva:', ans:-3, opts:[-3,3,5,21] },
    { expr:'(-4)³ ÷ (-8) + 5', lbl:'Resolva:', ans:13, opts:[13,-13,3,-3] },
    { expr:'[3² - (-1)³] × (-2)', lbl:'Resolva:', ans:-20, opts:[-20,20,-16,16] },
    { expr:'|(-3)² - (-4)²|', lbl:'Módulo:', ans:7, opts:[7,-7,25,1] },
    { expr:'(-5) × [(-2) + 4]', lbl:'Resolva:', ans:-10, opts:[-10,10,-30,30] },
    { expr:'(-1)⁴ × 3³ - 20', lbl:'Resolva:', ans:7, opts:[7,-7,47,-47] },
  ],
  master: [
    { expr:'(-2)³ × (-3)² + 4²', lbl:'Resolva:', ans:-56, opts:[-56,56,-40,40] },
    { expr:'|(-5)³ + 4²|', lbl:'Módulo:', ans:109, opts:[109,-109,-109,75] },
    { expr:'[(-3)² - 5²] ÷ (-4)', lbl:'Resolva:', ans:4, opts:[4,-4,8,-8] },
    { expr:'(-2)⁵ + [(-3) × (-4)]', lbl:'Resolva:', ans:-20, opts:[-20,20,4,-4] },
    { expr:'3 × (-2)³ - (-1)⁷', lbl:'Resolva:', ans:-23, opts:[-23,23,-25,25] },
    { expr:'|(-4)² × (-2)|', lbl:'Módulo:', ans:32, opts:[32,-32,28,-28] },
    { expr:'[(-6) ÷ 2]² - 10', lbl:'Resolva:', ans:-1, opts:[-1,1,9,-9] },
    { expr:'(-3)³ + (-3)² + (-3)', lbl:'Resolva:', ans:-21, opts:[-21,21,-27,27] },
    { expr:'4² ÷ [(-2)³ + 4]', lbl:'Resolva:', ans:-4, opts:[-4,4,-16,16] },
    { expr:'|(-2)⁴ - (-3)³|', lbl:'Módulo:', ans:43, opts:[43,-43,11,-11] },
  ]
};

const DICAS = {
  easy:'💡 Dica: Dois sinais iguais = positivo. Dois sinais diferentes = negativo!',
  med:'💡 Dica: Calcule potências primeiro, depois multiplique/divida, depois some/subtraia.',
  hard:'💡 Dica: Resolva o que está dentro dos colchetes primeiro, depois aplique as operações externas.',
  master:'💡 Dica: Mestre domina a ordem das operações: parênteses → potências → × ÷ → + −'
};

const STORAGE_KEY = 'brainmath_state';

// --- Supabase ---

const SUPABASE_URL = 'https://dwuqzjzaxabqjqumtdfs.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_tvlZopJLy5a7qaZGQm5xLg_SKfV9zmX';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentUser = null;

let state = {
  pts:0, acertos:0, fases:0, level:1, xp:0, xpMax:100,
  streak:0, bestCombo:0, perfectRuns:0,
  lives:3, qIdx:0, qCorrect:0, curLevel:'easy',
  questions:[], combo:0, qResults:[],
  unlockedAchs: [], newAchs: []
};
let currentLevel = 'easy';

// --- Persistência (progresso não se perde ao recarregar a página) ---
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    // localStorage indisponível (modo privado, quota cheia etc.) — segue sem persistir
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      // Só recupera os campos de progresso "estável"; o resto (fase em andamento) começa limpo
      state.pts = saved.pts ?? state.pts;
      state.acertos = saved.acertos ?? state.acertos;
      state.fases = saved.fases ?? state.fases;
      state.level = saved.level ?? state.level;
      state.xp = saved.xp ?? state.xp;
      state.xpMax = saved.xpMax ?? state.xpMax;
      state.streak = saved.streak ?? state.streak;
      state.bestCombo = saved.bestCombo ?? state.bestCombo;
      state.perfectRuns = saved.perfectRuns ?? state.perfectRuns;
      state.unlockedAchs = Array.isArray(saved.unlockedAchs) ? saved.unlockedAchs : [];
    }
  } catch (e) {
    // JSON corrompido ou localStorage indisponível — ignora e começa do zero
  }
}

// --- Autenticação ---
function setAuthMsg(msg, isError) {
  const el = document.getElementById('auth-fb');
  el.textContent = msg;
  el.className = 'feedback ' + (isError ? 'fb-fail' : 'fb-ok');
}

async function handleSignUp() {
  const username = document.getElementById('auth-username').value.trim();
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  if (!username) {
    setAuthMsg('Escolha um nome de exibição.', true);
    return;
  }
  if (!email || password.length < 6) {
    setAuthMsg('Preencha um email válido e uma senha com 6+ caracteres.', true);
    return;
  }
  setAuthMsg('Criando conta...', false);
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: { data: { username } }
  });
  if (error) { setAuthMsg(error.message, true); return; }
  if (data.session) {
    await onLoginSuccess(data.user);
  } else {
    setAuthMsg('Conta criada! Verifique seu email para confirmar antes de entrar.', false);
  }
}

async function handleSignIn() {
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  if (!email || !password) {
    setAuthMsg('Preencha email e senha.', true);
    return;
  }
  setAuthMsg('Entrando...', false);
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) { setAuthMsg(error.message, true); return; }
  await onLoginSuccess(data.user);
}

async function handleSignOut() {
  await supabaseClient.auth.signOut();
  currentUser = null;
  document.getElementById('auth-username').value = '';
  document.getElementById('auth-email').value = '';
  document.getElementById('auth-password').value = '';
  showScreen('s-auth');
}

// Nome escolhido no cadastro; contas antigas (criadas antes desse campo existir) caem no fallback do email
function getDisplayName() {
  return currentUser?.user_metadata?.username || currentUser?.email.split('@')[0] || 'Jogador';
}

async function onLoginSuccess(user) {
  currentUser = user;
  await loadRankingRow();
  showScreen('s-home');
  updateHome();
}

// Busca a linha do jogador no ranking; se não existir (primeiro login), cria uma
async function loadRankingRow() {
  const { data, error } = await supabaseClient
    .from('ranking')
    .select('*')
    .eq('user_id', currentUser.id)
    .maybeSingle();

  if (error) { console.error('Erro ao carregar ranking:', error); return; }

  if (data) {
    state.pts = data.pts;
    state.streak = data.streak;
    state.bestCombo = data.best_combo;
  } else {
    await supabaseClient.from('ranking').insert({
      user_id: currentUser.id,
      username: getDisplayName(),
      pts: 0, streak: 0, best_combo: 0
    });
  }
}

// Grava a pontuação atual do jogador no Supabase (chamado sempre que o estado muda)
async function syncRanking() {
  if (!currentUser) return;
  const { error } = await supabaseClient.from('ranking').upsert({
    user_id: currentUser.id,
    username: getDisplayName(),
    pts: state.pts,
    streak: state.streak,
    best_combo: state.bestCombo,
    updated_at: new Date().toISOString()
  });
  if (error) console.error('Erro ao salvar ranking:', error);
}

function shuffle(arr) { return [...arr].sort(() => Math.random()-0.5); }

function getLevelName(lvl) { return LEVEL_NAMES[Math.min(lvl-1, LEVEL_NAMES.length-1)]; }

function updateHome() {
  document.getElementById('h-lvl-circle').textContent = state.level;
  document.getElementById('h-lvl-name').textContent = getLevelName(state.level);
  document.getElementById('h-xp').textContent = state.xp;
  document.getElementById('h-xpmax').textContent = state.xpMax;
  document.getElementById('h-xp-bar').style.width = Math.min(100,(state.xp/state.xpMax)*100)+'%';
  document.getElementById('h-pts').textContent = state.pts;
  document.getElementById('h-acertos').textContent = state.acertos;
  document.getElementById('h-fases').textContent = state.fases;
  document.getElementById('h-streak').textContent = state.streak + (state.streak===1?' dia':' dias');

  const a = state.acertos;
  if (a>=5) { document.getElementById('btn-med').classList.remove('locked'); document.getElementById('btn-med').removeAttribute('aria-disabled'); document.getElementById('lbl-med').textContent='Desbloqueado'; document.getElementById('lbl-med').className='lvl-badge b-med'; }
  if (a>=15) { document.getElementById('btn-hard').classList.remove('locked'); document.getElementById('btn-hard').removeAttribute('aria-disabled'); document.getElementById('lbl-hard').textContent='Desbloqueado'; document.getElementById('lbl-hard').className='lvl-badge b-hard'; }
  if (a>=30) { document.getElementById('btn-master').classList.remove('locked'); document.getElementById('btn-master').removeAttribute('aria-disabled'); document.getElementById('lbl-master').textContent='Desbloqueado'; document.getElementById('lbl-master').className='lvl-badge b-master'; }

  checkAchievements();
  renderRanking();
  renderAchievements();
  saveState();
  syncRanking();
}

function startLevel(lvl) {
  if (lvl==='med' && state.acertos<5) return;
  if (lvl==='hard' && state.acertos<15) return;
  if (lvl==='master' && state.acertos<30) return;
  currentLevel = lvl;
  state.curLevel = lvl;
  state.lives = 3;
  state.qIdx = 0;
  state.qCorrect = 0;
  state.combo = 0;
  state.qResults = [];
  const pool = [...QUESTIONS[lvl]];
  state.questions = shuffle(pool).slice(0,10);
  showScreen('s-quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = state.questions[state.qIdx];
  document.getElementById('q-num').textContent = state.qIdx+1;
  document.getElementById('q-text-lbl').textContent = q.lbl;
  document.getElementById('q-expr').textContent = q.expr;
  document.getElementById('q-fb').textContent = '';
  document.getElementById('q-fb').className = 'feedback';
  document.getElementById('q-prog').style.width = ((state.qIdx/10)*100)+'%';

  const baseP = state.curLevel==='easy'?10:state.curLevel==='med'?20:state.curLevel==='hard'?30:50;
  document.getElementById('q-pts').textContent = baseP+(state.combo>=3?' 🔥':'');

  const hearts = '❤️'.repeat(state.lives)+'🖤'.repeat(3-state.lives);
  document.getElementById('q-lives').textContent = hearts;

  const banner = document.getElementById('combo-banner');
  if (state.combo>=3) { banner.style.display='block'; banner.textContent='🔥 Combo x'+state.combo+'! Bônus de pontos!'; }
  else { banner.style.display='none'; }

  const dotsEl = document.getElementById('streak-dots');
  dotsEl.innerHTML = '';
  for (let i=0;i<10;i++) {
    const d = document.createElement('div');
    d.className='sdot';
    if (i<state.qIdx) { d.className='sdot '+(state.qResults[i]?'done':'wrong-dot'); }
    dotsEl.appendChild(d);
  }

  const container = document.getElementById('q-opts');
  container.innerHTML = '';
  shuffle(q.opts).forEach(o => {
    const btn = document.createElement('button');
    btn.className='opt';
    btn.textContent = o;
    btn.onclick = () => answer(o, q.ans, btn, container);
    container.appendChild(btn);
  });
}

function answer(chosen, correct, btn, container) {
  const btns = container.querySelectorAll('.opt');
  btns.forEach(b => { b.disabled=true; if (Number(b.textContent)===correct) b.classList.add('correct'); });

  const baseP = state.curLevel==='easy'?10:state.curLevel==='med'?20:state.curLevel==='hard'?30:50;
  const fb = document.getElementById('q-fb');

  if (chosen===correct) {
    btn.classList.add('correct');
    state.qCorrect++;
    state.combo++;
    if (state.combo>state.bestCombo) state.bestCombo=state.combo;
    const bonus = state.combo>=3 ? Math.floor(baseP*0.5) : 0;
    state.pts += baseP+bonus;
    state.acertos++;
    state.xp += baseP;
    state.qResults.push(true);
    fb.textContent = state.combo>=3 ? '🔥 Combo x'+state.combo+'! +'+( baseP+bonus)+' pts' : '✓ Correto! +'+baseP+' pts';
    fb.className='feedback fb-ok';
    if (state.xp>=state.xpMax) { levelUp(); }
  } else {
    btn.classList.add('wrong');
    state.lives--;
    state.combo=0;
    state.qResults.push(false);
    fb.textContent = '✗ Resposta correta: '+correct;
    fb.className='feedback fb-fail';
  }

  saveState();

  setTimeout(() => {
    state.qIdx++;
    if (state.qIdx>=10 || state.lives<=0) { showResult(); }
    else { renderQuestion(); }
  }, 1500);
}

function levelUp() {
  // 'while' em vez de 'if': cobre o caso raro de ganhar XP suficiente
  // para subir mais de um nível de uma vez só.
  while (state.xp >= state.xpMax) {
    state.xp -= state.xpMax;
    state.level++;
    state.xpMax = Math.floor(state.xpMax*1.5);
  }
  const modal = document.getElementById('lvlup-modal');
  document.getElementById('lvlup-txt').textContent = 'Nível '+state.level+'!';
  document.getElementById('lvlup-sub').textContent = 'Você é agora um '+getLevelName(state.level)+'!';
  modal.classList.add('show');
}
function closeLvlUp() { document.getElementById('lvlup-modal').classList.remove('show'); }

function showResult() {
  state.fases++;
  const xpG = state.qCorrect*(state.curLevel==='easy'?10:state.curLevel==='med'?20:state.curLevel==='hard'?30:50);
  if (state.qCorrect===state.qIdx && state.qIdx===10) state.perfectRuns++;
  state.streak++;
  checkAchievements();

  document.getElementById('r-acertos').textContent = state.qCorrect;
  document.getElementById('r-total').textContent = state.qIdx;
  const bonus = Math.max(0, state.qCorrect * (state.curLevel==='easy'?2:state.curLevel==='med'?5:state.curLevel==='hard'?10:20) * (state.qCorrect===10?2:1));
  document.getElementById('r-bonus').textContent = bonus;
  document.getElementById('r-xp').textContent = '+'+xpG+' XP';
  document.getElementById('r-dica').textContent = DICAS[state.curLevel];

  const pct = state.qCorrect/state.qIdx;
  let emoji,title,sub;
  if (pct>=0.9){emoji='🏆';title='Incrível!';sub='Você dominou essa fase!';}
  else if(pct>=0.7){emoji='⭐';title='Muito bem!';sub='Continue praticando!';}
  else if(pct>=0.5){emoji='💪';title='Bom esforço!';sub='Quase lá, tente de novo!';}
  else{emoji='📚';title='Continue tentando!';sub='A prática leva à perfeição.';}

  document.getElementById('r-emoji').textContent = emoji;
  document.getElementById('r-title').textContent = title;
  document.getElementById('r-sub').textContent = sub;
  updateHome();
  showScreen('s-result');
}

function checkAchievements() {
  let newOnes = [];
  ALL_ACHIEVEMENTS.forEach(a => {
    if (!state.unlockedAchs.includes(a.id) && a.req(state)) {
      state.unlockedAchs.push(a.id);
      newOnes.push(a);
    }
  });
  if (newOnes.length>0) {
    state.newAchs = newOnes.map(a => a.id);
    newOnes.forEach((a,i) => {
      setTimeout(() => showToast('⭐ Conquista: '+a.name), i*2000);
    });
    renderAchievements();
    // Remove o selo "NOVO!" depois de um tempo, para não ficar preso pra sempre
    setTimeout(() => { state.newAchs = []; renderAchievements(); }, newOnes.length*2000 + 4000);
  }
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

async function renderRanking() {
  document.getElementById('rank-meu-pts').textContent = state.pts+' pts';

  const { data, error } = await supabaseClient
    .from('ranking')
    .select('*')
    .order('pts', { ascending: false })
    .limit(20);

  if (error) { console.error('Erro ao buscar ranking:', error); return; }

  const myPos = data.findIndex(r => r.user_id === currentUser?.id) + 1;
  document.getElementById('rank-minha-pos').textContent =
    myPos > 0 ? myPos+'º lugar entre '+data.length+' jogadores' : 'Posição: —';

  const medals = ['🥇','🥈','🥉'];
  const list = document.getElementById('rank-list');
  list.innerHTML = '';
  data.forEach((r,i) => {
    const isYou = r.user_id === currentUser?.id;
    const div = document.createElement('div');
    div.className = 'rank-item'+(isYou?' you':'');
    div.innerHTML = `
      <div class="rank-pos">${medals[i]||('#'+(i+1))}</div>
      <div class="rank-avatar">🧑</div>
      <div>
        <div class="rank-name">${r.username}${isYou?' (você)':''}</div>
        <div class="rank-sub">🔥 ${r.streak} dias</div>
      </div>
      <div class="rank-pts">${r.pts}</div>
    `;
    list.appendChild(div);
  });
}

function renderAchievements() {
  const total = ALL_ACHIEVEMENTS.length;
  const unlocked = state.unlockedAchs.length;
  document.getElementById('ach-count').textContent = unlocked+' / '+total;

  const grid = document.getElementById('ach-grid');
  grid.innerHTML = '';
  ALL_ACHIEVEMENTS.forEach(a => {
    const isUnlocked = state.unlockedAchs.includes(a.id);
    const isNew = state.newAchs && state.newAchs.includes(a.id);
    const div = document.createElement('div');
    div.className = 'ach-card'+(isUnlocked?' unlocked':' locked');
    div.innerHTML = `
      ${isNew?'<div class="ach-new">NOVO!</div>':''}
      <div class="ach-icon">${isUnlocked?a.icon:'🔒'}</div>
      <div class="ach-name">${a.name}</div>
      <div class="ach-desc">${a.desc}</div>
    `;
    grid.appendChild(div);
  });
}

function showTab(tab) {
  ['home','ranking','conquistas'].forEach(t => {
    document.getElementById('tab-'+t+'-content').style.display = t===tab?'block':'none';
    const tabEl = document.getElementById('tab-'+t);
    tabEl.classList.toggle('active', t===tab);
    tabEl.setAttribute('aria-selected', t===tab ? 'true' : 'false');
  });
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goHome() { showScreen('s-home'); updateHome(); }

loadState();

(async function init() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (session) {
    await onLoginSuccess(session.user);
  } else {
    showScreen('s-auth');
  }
})();