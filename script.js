// Peta menu sidebar -> elemen yang ikut menyala / berwarna saat menu diklik
const menuTargets = {
  home:      { cards: [], texts: [] },
  mahasiswa: { cards: [], texts: ['namaMhs'] },       // nama berwarna
  kelas:     { cards: [], texts: ['kelasMhs'] },      // "Kelas SI-3C" berwarna
  progres:   { cards: ['cardProgres'], texts: [] },   // kartu Progres Kelas menyala
  aktifitas: { cards: ['cardAktifitas'], texts: [] }, // kartu Aktifitas menyala
  statistik: { cards: ['cardStatistik'], texts: [] },
  dokumen:   { cards: ['cardLampiran'], texts: [] },
  settings:  { cards: [], texts: [] },
  signout:   { cards: [], texts: [] }
};

const menuLinks = document.querySelectorAll('#sidebar a');
const allCards  = document.querySelectorAll('.card');
const allTexts  = document.querySelectorAll('#namaMhs, #kelasMhs');

function resetFokus() {
  menuLinks.forEach(a => a.classList.remove('active'));
  allCards.forEach(c => c.classList.remove('focus'));
  allTexts.forEach(t => t.classList.remove('colored'));
}

function aktifkanMenu(link) {
  const target = menuTargets[link.dataset.menu];
  resetFokus();
  link.classList.add('active');

  target.cards.forEach(id => {
    const card = document.getElementById(id);
    void card.offsetWidth;          // restart animasi kedip tiap diklik
    card.classList.add('focus');
  });
  target.texts.forEach(id => document.getElementById(id).classList.add('colored'));
}

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    aktifkanMenu(link);
  });
});