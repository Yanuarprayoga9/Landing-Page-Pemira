/**
   * Easy selector helper function
   */
const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}
  

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)


  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }


  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }

  


  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })
  

var swiper = new Swiper(".mySwiper", {
	pagination: {
	  el: ".swiper-pagination",
	  type: "fraction",
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });

  // JS DOM slider paslon
var slides = document.querySelectorAll(".paslon");
var imgPaslon = document.getElementById("card-paslon");
var listPaslon = document.getElementById("list-paslon");
var namaPaslon = document.getElementById("nama-paslon");
var visiPaslon = document.getElementById("visi");
var misiPaslon = document.getElementById("misi");
var kandidatPaslon = document.getElementById("kandidat");
var prevButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");
var index = document.getElementById("pages-slide")
var indexSlide = 1;
var currentSlide = 0;

var data = [
  { image: 'img/paslon1.png',kandidat:'Kandidat BEM', paslon: 'Paslon 1', namacalon:'Muhammad Alfian Kurniawan & Hilmi Alfi Naugerah', visi:'MENJADIKAN BADAN EKSEKUTIF MAHASISWA SEBAGAI WADAH ASPIRATIE, INOVATIF, DAN INTERAKTIF SERTA MEMAKSIMALKAN POTENSI MAHASISWA SEBAGAI AGEN PERUBAHAN',misi:'1. MENJALIN KOLABORASI SERTA MENJUNJUNG TINGGI SOLIDARITAS BAGI SEMUA ELEMEN MAHASISWA <br> 2. MENGOPTIMALKAN SEGALA POTENSI YANG ADA BAGI SELURUH MAHASISWA <br>3. MEMBANGUN SUMBER DAYA MAHASISWA YANG LEBIH BERANI, KRITIS, TANGGAP DAN BERSINERGI TERHADAP ISU SEKITAR <br> 4. MEMBANGUN INTERNAL YANG BERKOMPETEN DAN MEMILIKI RASA KEKELUARGAAN'},
  { image: 'img/2-1-1@2x.png',kandidat:'Kandidat BEM', paslon: 'Paslon 2',namacalon:'Marshal Kurnia Bayu & Fitri Kamila Kinanti', visi:'MENCIPTAKAN LEMBAGA EKSEKUTIF MAHASISWA YANG BEREVOLUSI UNTUK INOVASI DALAM PENGEMBANGAN MAHASISWA PNC YANG UNGGUL',misi:'1. MENJADIKAN ANGGOTA BEM PNC YANG DINAMIS DAN RESPONSIF SERTA BERSINERGI DENGAN SETIAP ELEMEN KAMPUS <br> 2. MENGOPTIMALKAN BEM PNC SEBAGAI LOKOMOTIF TERHADAP ISU INTERNAL DAN EXSTERNAL <br> 3. MENANAMKAN JIWA PROFESIONAL DALAM KELUARGA MAHASISWA PNC UNTUK MEMBANGUN NILAI FUNGSI MAHASISWA DAN TRI DHARMA PERGURUAN TINGGI <br> 4. MENGOPTIMALKAN FUNGSI ADVOKASI DAN MEWUJUDKAN TINDAK LANJUT YANG INFORMATIF DAN TRANSPARAN <br> 5. MEMBANGUN CITRA POLITEKNIK NEGERI CILACAP SEBAGAI INSTITUSI YANG UNGGUL DAN KOMPETEN' },
  { image: 'image3.jpg',kandidat:'Kandidat BPM', paslon: 'Paslon 1',namacalon:'Aulia Al Ghifari & Gilang Saputra', visi:'BERSINERGI AGAR PROGRESIE, KREATIF, DAN RESPONSIF',misi:'1. MENGEMBANGKAN HUBUNGAN ANTARA MAHASISWA DAN INSTITUSI <br> 2. BERINTEGRITAS BAIK DENGAN CIVITAS AKADEMIKA SERTA ORMAWA <br> 3. MENGEMBANGKAN SYSTEM BIROKRASI UNTUK SELURUH ORMAWA PNC <br> 4. MENGEMBANGKAN REGULASI YANG BAIK UNTUK KEPENTINGAN ORMAWA PNC' },
  { image: 'image4.jpg',kandidat:'Kandidat BPM', paslon: 'Paslon 2',namacalon:'Tri Bagus Subarkah & Muhammad Hilmy Farid', visi:'MEWUJUDKAN BPM PNC SEBAGAI LEMBAGA YANG KOLABORATIE, ASPIRATIF, PROFESIONAL DAN MENGEDEPANKAN RASA KEKELUARGAAN DALAM MENGEMBAN KEWAJIBAN',misi:'1. MENINGKATKAN PERAN AKTIF BPM SEBAGAI LEMBAGA LEGISLATIF <br> 2. MEWUJUDKAN KOMUNIKASI YANG BAIK UNTUK MENCIPTAKAN RASA KEKELUARGAAN DENGAN BEM DAN ORGANISASI LAINNYA <br> 3. MENINGKATKAN KUALITAS SUMBER DAYA ANGGOTA BPM PNC <br> 4. MENYUSUN PROGRAM KERIA YANG TERENCANA, TERARAH DAN ADAPTIF DALAM MEWUJUDKAN VISI DAN MEMPERTAHANKAN HEBERLANJUTAN PROGRAM YANG ADA DI BPM PNC' }
];


function renderSlide() {
  var slide = data[currentSlide];
  imgPaslon.innerHTML = '<img src="' + slide.image + '" />'
  index.innerHTML = '<h2>'+ indexSlide +'</h2>';
  kandidatPaslon.innerHTML = '<h1>'+ slide.kandidat + '</h1>';
  listPaslon.innerHTML = '<h1>'+slide.paslon+'</h1>';
  namaPaslon.innerHTML = '<h3>'+slide.namacalon+'</h3>';
  visiPaslon.innerHTML = '<p>'+slide.visi+'</p>';
  misiPaslon.innerHTML = '<p>'+slide.misi+'</p>';
  if(indexSlide == 1){
    prevButton.classList.add("disabled");
  }else if(indexSlide == 4){
    nextButton.classList.add("disabled");
  }else{
    prevButton.classList.remove("disabled");
    nextButton.classList.remove("disabled");

  }
  
}
renderSlide();



prevButton.addEventListener('click', function() {
  indexSlide--;
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = data.length - 1;
  }
  renderSlide();
});

nextButton.addEventListener('click', function() {
  indexSlide++;
  currentSlide++;
  if (currentSlide >= data.length) {
    currentSlide = 0;
  }
  renderSlide();
});



