
(function(){
  const params = new URLSearchParams(window.location.search);
  if(params.get('open') === '1' && window.location.hash){
    const target = document.querySelector(window.location.hash);
    if(target && target.tagName.toLowerCase() === 'details'){
      target.open = true;
      setTimeout(() => target.scrollIntoView({block:'start'}), 50);
    }
  }
  const search = document.getElementById('rank-search');
  const count = document.getElementById('search-count');
  if(search){
    const items = Array.from(document.querySelectorAll('.home-rank'));
    search.addEventListener('input', () => {
      const q = search.value.trim().toLowerCase();
      let shown = 0;
      items.forEach(item => {
        const hay = (item.dataset.title || '') + ' ' + (item.dataset.category || '') + ' ' + item.textContent.toLowerCase();
        const match = !q || hay.includes(q);
        item.classList.toggle('hidden', !match);
        if(match) shown += 1;
      });
      if(count) count.textContent = q ? `Showing ${shown} matching entr${shown===1?'y':'ies'}.` : 'Showing all 100 entries.';
    });
  }
})();
