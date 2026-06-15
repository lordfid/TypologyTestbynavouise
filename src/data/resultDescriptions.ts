import type {
  AttitudinalPsycheAspect,
  AttitudinalPsychePosition,
  BigFiveTrait,
  CognitiveFunction,
  DefensePattern,
  DiscType,
  EnneagramType,
  HexacoTrait,
  IdealPartnerTendency,
  Instinct,
  MBTIType,
  PreferredEnvironment,
  PreferredLoveStyle,
  RiasecType,
  StressResponse
} from "../types";

export const MBTI_DESCRIPTIONS = {
  INTJ:
    "Pola INTJ menunjukkan kecenderungan melihat hidup seperti peta panjang yang belum selesai. Kau mungkin tidak selalu banyak bicara, tetapi sering diam-diam mengukur arah, risiko, dan titik lemah sebelum orang lain sadar ada pola yang sedang terbentuk.",
  INTP:
    "Pola INTP menunjukkan pikiran yang cenderung membongkar sesuatu dari dalam. Kau mungkin tampak santai di luar, tetapi di kepala ada ruang kerja kecil yang terus bertanya: apakah ini benar, masuk akal, dan bebas dari lubang logika?",
  ENTJ:
    "Pola ENTJ menunjukkan dorongan untuk mengubah kekacauan menjadi arah. Kau cenderung cepat melihat siapa yang perlu bergerak, apa yang harus diputuskan, dan bagian mana yang tidak boleh dibiarkan terlalu lama mengambang.",
  ENTP:
    "Pola ENTP menunjukkan pikiran yang hidup saat ada kemungkinan baru. Kau cenderung menguji batas, membalik sudut pandang, dan mencari celah yang tidak dilihat orang lain, kadang sebelum kau sendiri tahu akan dibawa ke mana.",
  INFJ:
    "Pola INFJ menunjukkan kecenderungan membaca lapisan yang tidak diucapkan. Kau mungkin menahan reaksi luar lebih dulu, bukan karena kosong, tetapi karena sedang menunggu satu bukti terakhir sebelum memutuskan apakah pintu itu masih layak dibuka.",
  INFP:
    "Pola INFP menunjukkan dunia batin yang menjaga sesuatu dengan sangat pribadi. Kau cenderung tidak langsung melawan, tetapi bila sesuatu menyentuh nilai terdalam, tubuhmu seperti tahu lebih dulu bahwa kau tidak bisa ikut dengan cara itu.",
  ENFJ:
    "Pola ENFJ menunjukkan kepekaan terhadap arah emosi orang di ruangan. Kau cenderung tahu kapan harus mendekat, kapan harus memberi kata, dan kapan suasana perlu ditahan agar tidak runtuh sebelum masalahnya selesai.",
  ENFP:
    "Pola ENFP menunjukkan jiwa yang cepat menangkap kemungkinan dari manusia, cerita, dan perubahan kecil. Kau mungkin mudah menyala saat merasa hidup membuka pintu baru, tetapi bisa gelisah ketika harus tinggal terlalu lama di tempat yang mematikan rasa.",
  ISTJ:
    "Pola ISTJ menunjukkan kecenderungan menjaga hal yang sudah terbukti bisa diandalkan. Kau mungkin tidak selalu mencari sorotan, tetapi sering menjadi orang yang memastikan pintu terkunci, catatan rapi, dan janji tidak hilang begitu saja.",
  ISFJ:
    "Pola ISFJ menunjukkan perhatian yang sering muncul lewat tindakan kecil. Kau cenderung mengingat detail yang orang lain lewatkan, bukan untuk pamer peduli, tetapi karena bagimu hubungan terlihat dari hal-hal yang tetap dijaga saat tidak ada yang melihat.",
  ESTJ:
    "Pola ESTJ menunjukkan dorongan untuk membuat sesuatu berjalan jelas. Kau cenderung tidak tahan melihat tanggung jawab dilempar-lempar, dan lebih memilih mengambil kendali daripada membiarkan semua orang menunggu tanpa arah.",
  ESFJ:
    "Pola ESFJ menunjukkan kepekaan terhadap ikatan sosial yang nyata. Kau cenderung membaca siapa yang merasa ditinggal, siapa yang perlu diajak bicara, dan bagaimana membuat orang kembali duduk di meja yang sama.",
  ISTP:
    "Pola ISTP menunjukkan kecenderungan tenang saat harus menghadapi sesuatu yang konkret. Kau mungkin tidak banyak menjelaskan isi kepala, tetapi saat situasi menuntut tangan bergerak, kau sering lebih cepat paham daripada orang yang terlalu banyak bicara.",
  ISFP:
    "Pola ISFP menunjukkan kepekaan yang bergerak lewat rasa, suasana, dan pilihan kecil. Kau cenderung tidak suka dipaksa mendefinisikan diri, tetapi tindakanmu sering menunjukkan dengan jelas mana yang terasa benar dan mana yang membuatmu ingin pergi.",
  ESTP:
    "Pola ESTP menunjukkan respons yang cepat terhadap dunia yang sedang terjadi sekarang. Kau cenderung membaca peluang dari gerak tubuh, nada ruangan, dan momen yang bisa langsung disentuh, bukan dari rencana yang terlalu lama digantung.",
  ESFP:
    "Pola ESFP menunjukkan kehadiran yang kuat pada momen yang sedang hidup. Kau cenderung menangkap suasana, membawa energi ke ruang yang kaku, dan tahu kapan sesuatu perlu dirasakan langsung, bukan hanya dipikirkan dari jauh."
} satisfies Record<MBTIType, string>;

export const COGNITIVE_FUNCTION_DESCRIPTIONS = {
  Ni:
    "Ni menunjukkan kecenderungan menyempitkan banyak tanda menjadi satu arah besar. Kau mungkin tidak selalu bisa menjelaskan sejak awal, tetapi sering merasa ada sesuatu yang sedang menuju titik tertentu.",
  Ne:
    "Ne menunjukkan kecenderungan membuka banyak kemungkinan dari satu kejadian kecil. Kau mungkin cepat melihat cabang, alternatif, dan jalan lain, bahkan saat orang lain baru melihat satu pintu.",
  Si:
    "Si menunjukkan kecenderungan menyimpan pengalaman sebagai peta pembanding. Kau mungkin peka pada detail yang pernah terjadi, pola yang berulang, dan rasa aman dari hal yang sudah terbukti.",
  Se:
    "Se menunjukkan kecenderungan hadir pada yang nyata, cepat, dan langsung. Kau mungkin lebih mudah memahami situasi saat bisa melihat, menyentuh, mencoba, atau merespons sesuatu yang sedang terjadi di depan mata.",
  Fi:
    "Fi menunjukkan kecenderungan menjaga rasa benar yang sangat pribadi. Kau mungkin tidak selalu langsung menjelaskan, tetapi ada garis dalam dirimu yang terasa jelas saat sesuatu mulai mengkhianati nilai sendiri.",
  Fe:
    "Fe menunjukkan kecenderungan membaca suhu emosional di antara orang. Kau mungkin memperhatikan jeda, nada, wajah, dan kalimat yang tidak selesai karena hubungan terasa seperti sesuatu yang perlu dirawat.",
  Ti:
    "Ti menunjukkan kecenderungan membongkar logika dari dalam. Kau mungkin butuh memahami struktur sesuatu sebelum menerimanya, seolah jawaban belum sah kalau masih ada bagian yang terasa bocor.",
  Te:
    "Te menunjukkan kecenderungan mengubah pikiran menjadi langkah yang bisa dijalankan. Kau mungkin cepat bertanya apa tujuan, siapa melakukan apa, dan bagian mana yang harus selesai dulu."
} satisfies Record<CognitiveFunction, string>;

export const ENNEAGRAM_DESCRIPTIONS = {
  "1":
    "Tipe 1 menunjukkan kecenderungan ingin hidup dengan cara yang terasa benar dan layak dipertanggungjawabkan. Di balik ketegasanmu, mungkin ada rasa lelah karena terus melihat bagian yang belum rapi, belum adil, atau belum cukup baik.",
  "2":
    "Tipe 2 menunjukkan kecenderungan mencari kedekatan lewat memberi, membantu, dan hadir. Kau mungkin tidak selalu meminta balik secara langsung, tetapi ada bagian dalam dirimu yang ingin dipilih tanpa harus membuktikan manfaatmu dulu.",
  "3":
    "Tipe 3 menunjukkan kecenderungan membaca hidup lewat capaian, arah, dan kesan yang berhasil dibangun. Kau mungkin cepat menyesuaikan diri demi menang, tetapi diam-diam takut berhenti karena takut nilaimu ikut hilang.",
  "4":
    "Tipe 4 menunjukkan kecenderungan mencari sesuatu yang terasa asli, dalam, dan tidak bisa diganti. Kau mungkin peka pada kehilangan, jarak, dan keindahan yang pahit, seolah hidup harus punya makna yang tidak sekadar rapi.",
  "5":
    "Tipe 5 menunjukkan kecenderungan menjaga ruang batin lewat memahami sebelum terlibat. Kau mungkin mundur bukan karena tidak peduli, tetapi karena dunia terasa terlalu meminta sebelum kau punya cukup tenaga dan pegangan.",
  "6":
    "Tipe 6 menunjukkan kecenderungan membaca risiko, loyalitas, dan tanda bahaya lebih cepat dari yang terlihat. Kau mungkin mencari kepastian, tetapi bukan karena lemah; lebih seperti seseorang yang tahu satu keputusan kecil bisa mengubah keamanan banyak hal.",
  "7":
    "Tipe 7 menunjukkan kecenderungan mencari jalan keluar, kemungkinan baru, dan udara segar saat hidup mulai terasa sempit. Kau mungkin cepat menyalakan suasana, tetapi bisa gelisah ketika rasa sakit meminta duduk terlalu lama.",
  "8":
    "Tipe 8 menunjukkan kecenderungan melindungi diri dan orang yang dianggap milikmu dengan tenaga besar. Kau mungkin keras di luar, tetapi sering kali itu muncul dari penolakan untuk terlihat lemah di tempat yang tidak aman.",
  "9":
    "Tipe 9 menunjukkan kecenderungan menjaga ketenangan agar sesuatu tidak pecah. Kau mungkin tampak mengalah, tetapi di dalam bisa ada banyak hal yang disimpan terlalu lama karena konflik terasa seperti pintu yang sulit ditutup kembali."
} satisfies Record<EnneagramType, string>;

export const INSTINCT_DESCRIPTIONS = {
  sp:
    "Instinct sp menunjukkan perhatian pada keamanan, tubuh, sumber daya, batas, dan kestabilan hidup. Kau cenderung bertanya dalam hati: apakah ini aman, cukup, bisa bertahan, dan tidak membuatku kehilangan pijakan?",
  sx:
    "Instinct sx menunjukkan perhatian pada intensitas, daya tarik, kedekatan satu-satu, dan rasa hidup yang menyala. Kau cenderung mencari sesuatu yang terasa langsung menembus, bukan sekadar hubungan yang rapi dari luar.",
  so:
    "Instinct so menunjukkan perhatian pada posisi, peran, jaringan, reputasi, dan tempatmu dalam lingkaran manusia. Kau cenderung membaca siapa terhubung dengan siapa, siapa tersisih, dan bagaimana dirimu berdiri di tengah sistem sosial."
} satisfies Record<Instinct, string>;

export const BIG_FIVE_DESCRIPTIONS = {
  openness: {
    high:
      "Openness tinggi menunjukkan kecenderungan tertarik pada kemungkinan, simbol, cerita, ide, dan cara pandang yang tidak biasa. Kau mungkin cepat bosan jika hidup hanya berisi instruksi tanpa ruang untuk menafsirkan.",
    low:
      "Openness rendah menunjukkan kecenderungan memilih hal yang jelas, terbukti, dan tidak terlalu mengawang. Kau mungkin lebih nyaman pada sesuatu yang bisa dipakai langsung daripada ide yang indah tetapi belum tentu bisa dipegang."
  },
  conscientiousness: {
    high:
      "Conscientiousness tinggi menunjukkan kecenderungan memegang tanggung jawab dengan serius. Kau mungkin sulit benar-benar tenang sebelum hal penting tertutup rapi, bahkan saat orang lain merasa itu sudah cukup.",
    low:
      "Conscientiousness rendah menunjukkan kecenderungan lebih lentur terhadap alur, mood, dan perubahan mendadak. Kau mungkin bisa bergerak kreatif di ruang yang tidak terlalu ketat, tetapi bisa tersandung saat hidup menuntut konsistensi panjang."
  },
  extraversion: {
    high:
      "Extraversion tinggi menunjukkan energi yang cenderung hidup saat ada gerak, respons, dan kontak dengan dunia luar. Kau mungkin lebih cepat menemukan tenaga ketika sesuatu terjadi di depanmu, bukan hanya dipikirkan sendirian.",
    low:
      "Extraversion rendah menunjukkan kecenderungan mengisi ulang tenaga lewat ruang yang lebih tenang. Kau mungkin tetap peduli pada orang, tetapi tidak selalu ingin dirimu tersedia untuk semua suara sekaligus."
  },
  agreeableness: {
    high:
      "Agreeableness tinggi menunjukkan kecenderungan mempertimbangkan rasa orang lain sebelum mengambil posisi. Kau mungkin mudah melihat sisi manusia dari konflik, meski kadang itu membuatmu menunda kalimat yang sebenarnya perlu tegas.",
    low:
      "Agreeableness rendah menunjukkan kecenderungan lebih mudah mengambil jarak dari tuntutan emosional orang lain. Kau mungkin lebih tahan menghadapi ketegangan, tetapi perlu menjaga agar kejujuranmu tidak terdengar seperti penolakan terhadap manusia di depanmu."
  },
  neuroticism: {
    high:
      "Neuroticism tinggi menunjukkan sistem batin yang cepat menangkap ancaman, perubahan nada, atau kemungkinan buruk. Ini bukan berarti kau rapuh; lebih seperti alarm dalam dirimu sering menyala sebelum orang lain mencium asap.",
    low:
      "Neuroticism rendah menunjukkan kecenderungan tetap stabil saat suasana bergeser. Kau mungkin tidak mudah panik, tetapi kadang perlu memastikan ketenanganmu tidak membuat sinyal kecil dari dalam diri atau orang lain terlewat."
  }
} satisfies Record<BigFiveTrait, { high: string; low: string }>;

export const HEXACO_DESCRIPTIONS = {
  honestyHumility: {
    high:
      "Honesty-Humility tinggi menunjukkan kecenderungan tidak nyaman memakai celah untuk menaikkan diri. Kau mungkin lebih memilih menang dengan cara yang bisa kau tatap ulang, bukan dengan permainan yang meninggalkan rasa kotor.",
    low:
      "Honesty-Humility rendah menunjukkan kecenderungan lebih strategis terhadap status, keuntungan, atau posisi tawar. Ini tidak otomatis buruk, tetapi bisa membuatmu lebih mudah membenarkan langkah tajam saat merasa permainan memang begitu aturannya."
  },
  emotionality: {
    high:
      "Emotionality tinggi menunjukkan keterikatan yang kuat pada rasa aman, kehilangan, dan perlindungan. Kau mungkin merasakan hubungan dan risiko dengan tubuh, bukan hanya dengan pikiran.",
    low:
      "Emotionality rendah menunjukkan kecenderungan tidak mudah diguncang oleh ketegangan emosional. Kau mungkin lebih tahan jarak dan tekanan, tetapi kadang tampak terlalu jauh bagi orang yang sedang butuh tanda hangat."
  },
  extraversion: {
    high:
      "Extraversion HEXACO tinggi menunjukkan kecenderungan lebih mudah tampil, menyatakan diri, dan mengambil ruang sosial. Kau mungkin tidak selalu ingin menjadi pusat, tetapi keberadaanmu tidak mudah hilang dari ruangan.",
    low:
      "Extraversion HEXACO rendah menunjukkan kecenderungan menjaga ruang pribadi dan tidak memaksakan diri terlihat. Kau mungkin memilih hadir dengan cara yang lebih sunyi, tidak selalu lewat suara paling keras."
  },
  agreeableness: {
    high:
      "Agreeableness HEXACO tinggi menunjukkan kecenderungan memaafkan, menurunkan panas konflik, dan tidak cepat membalas. Kau mungkin memberi ruang kedua, meski tetap perlu menjaga agar ruang itu tidak menjadi tempat orang mengulang luka yang sama.",
    low:
      "Agreeableness HEXACO rendah menunjukkan kecenderungan sulit melupakan kesalahan yang terasa melewati batas. Kau mungkin punya daya tahan terhadap konfrontasi, tetapi perlu membedakan antara menjaga harga diri dan terus memegang bara."
  },
  conscientiousness: {
    high:
      "Conscientiousness HEXACO tinggi menunjukkan dorongan kuat pada rapi, tepat, dan bisa dipercaya. Kau mungkin melihat detail sebagai bentuk hormat, bukan sekadar aturan.",
    low:
      "Conscientiousness HEXACO rendah menunjukkan kecenderungan lebih spontan dan tidak terlalu terikat pada standar kaku. Kau mungkin mudah bergerak saat ruangnya bebas, tetapi hasil bisa naik-turun jika tidak ada jangkar."
  },
  openness: {
    high:
      "Openness HEXACO tinggi menunjukkan ketertarikan pada estetika, ide, kedalaman, dan pengalaman yang memperluas rasa hidup. Kau mungkin merasa dunia terlalu sempit jika semua hal harus praktis sejak awal.",
    low:
      "Openness HEXACO rendah menunjukkan kecenderungan memilih hal yang dekat, konkret, dan tidak terlalu eksperimental. Kau mungkin lebih percaya pada sesuatu yang terbukti bekerja daripada yang terdengar menarik tetapi belum jelas bentuknya."
  }
} satisfies Record<HexacoTrait, { high: string; low: string }>;

export const ATTITUDINAL_PSYCHE_POSITION_DESCRIPTIONS = {
  L: {
    "1":
      "1L menunjukkan kecenderungan merasa cukup kuat saat memakai logika sendiri. Kau mungkin tidak mudah menyerahkan penilaian pada orang lain bila struktur pikirannya belum terasa bersih.",
    "2":
      "2L menunjukkan kecenderungan nyaman berdiskusi, menukar sudut pandang, dan membangun pemahaman bersama. Logika bagimu bukan hanya senjata, tetapi juga meja tempat orang bisa duduk dan membongkar sesuatu pelan-pelan.",
    "3":
      "3L menunjukkan kemungkinan ada sensitivitas pada benar-salah pikiran, argumen, atau kecerdasan. Kau mungkin ingin yakin, tetapi justru mudah terganggu saat merasa pemahamanmu sedang diuji.",
    "4":
      "4L menunjukkan kecenderungan tidak terlalu ingin hidup dikendalikan oleh debat atau analisis panjang. Kau mungkin memakai logika seperlunya, lalu lebih memilih bergerak ke hal yang terasa lebih penting bagimu."
  },
  E: {
    "1":
      "1E menunjukkan ekspresi emosi yang cenderung kuat, personal, dan sulit dipisahkan dari identitas. Kau mungkin merasa sesuatu harus terasa hidup dulu sebelum bisa disebut benar-benar berarti.",
    "2":
      "2E menunjukkan kecenderungan mudah membaca, menampung, dan merespons emosi orang. Kau mungkin bisa menjadi ruang pantul yang membuat orang lain merasa perasaannya tidak jatuh sendirian.",
    "3":
      "3E menunjukkan kemungkinan ada rasa rawan pada ekspresi emosi. Kau mungkin ingin dimengerti, tetapi sekaligus takut terlihat terlalu banyak, terlalu sensitif, atau tidak terkendali.",
    "4":
      "4E menunjukkan kecenderungan tidak ingin terlalu lama berada dalam arus emosi yang intens. Kau mungkin peduli, tetapi lebih nyaman jika rasa tidak menuntutmu menampilkan sesuatu terus-menerus."
  },
  F: {
    "1":
      "1F menunjukkan kecenderungan kuat terhadap kenyamanan fisik, kepemilikan, bentuk, tubuh, atau dunia konkret. Kau mungkin tahu apa yang terasa pas, enak, cukup, dan layak dimiliki.",
    "2":
      "2F menunjukkan kecenderungan fleksibel dan suportif dalam hal kebutuhan fisik, benda, kenyamanan, atau urusan praktis. Kau mungkin mudah membantu orang menata hal nyata tanpa terlalu menjadikannya pertarungan ego.",
    "3":
      "3F menunjukkan kemungkinan ada sensitivitas pada tubuh, uang, penampilan, kenyamanan, atau rasa cukup. Kau mungkin ingin merasa aman secara konkret, tetapi justru mudah terusik oleh detail yang bagi orang lain terlihat kecil.",
    "4":
      "4F menunjukkan kecenderungan tidak terlalu ingin hidup dipusatkan pada benda, tubuh, atau kenyamanan fisik. Kau mungkin bisa mengabaikan kebutuhan konkret terlalu lama sampai tubuh atau keadaan akhirnya memaksa bicara."
  },
  V: {
    "1":
      "1V menunjukkan dorongan kehendak yang kuat. Kau mungkin tidak mudah digeser ketika sudah memutuskan sesuatu, dan sering merasa hidup perlu dipegang sendiri agar tidak ditarik oleh kemauan orang lain.",
    "2":
      "2V menunjukkan kecenderungan bisa bernegosiasi dengan kemauan orang lain tanpa langsung merasa kalah. Kau mungkin cukup nyaman membagi arah, menyusun keputusan bersama, dan menguatkan orang lain untuk memilih.",
    "3":
      "3V menunjukkan kemungkinan ada sensitivitas pada kuasa, pilihan, batas, atau harga diri. Kau mungkin ingin menentukan arah sendiri, tetapi bisa sangat terganggu saat merasa ditekan, diremehkan, atau dikendalikan.",
    "4":
      "4V menunjukkan kecenderungan tidak selalu ingin memimpin kehendak secara terang-terangan. Kau mungkin membiarkan arus berjalan dulu, selama tidak menyentuh batas yang diam-diam sebenarnya tetap kau punya."
  }
} satisfies Record<
  AttitudinalPsycheAspect,
  Record<AttitudinalPsychePosition, string>
>;

export const DISC_DESCRIPTIONS = {
  D:
    "DISC D menunjukkan kecenderungan bergerak langsung saat ada hambatan. Kau mungkin lebih memilih keputusan yang tidak sempurna tetapi berjalan daripada diskusi panjang yang membuat semua orang tetap di tempat.",
  I:
    "DISC I menunjukkan kecenderungan memengaruhi lewat energi, kata, ekspresi, dan hubungan. Kau mungkin membaca peluang dari respons orang, lalu menghidupkan suasana agar sesuatu lebih mudah diterima.",
  S:
    "DISC S menunjukkan kecenderungan menjaga kestabilan, ritme, dan rasa aman dalam kerja bersama. Kau mungkin tidak selalu paling keras, tetapi sering menjadi penahan agar perubahan tidak membuat orang tercerai-berai.",
  C:
    "DISC C menunjukkan kecenderungan mencari ketepatan, standar, dan bukti yang bisa dipertanggungjawabkan. Kau mungkin tidak mudah puas dengan jawaban cepat jika masih ada detail yang bisa membuat hasilnya retak."
} satisfies Record<DiscType, string>;

export const RIASEC_DESCRIPTIONS = {
  R:
    "RIASEC Realistic menunjukkan ketertarikan pada hal yang konkret, teknis, dapat disentuh, atau langsung dikerjakan. Kau mungkin merasa lebih hidup saat solusi tidak hanya dibicarakan, tetapi benar-benar dipasang, dicoba, atau diperbaiki.",
  I:
    "RIASEC Investigative menunjukkan ketertarikan pada pertanyaan, analisis, pola, dan pencarian sebab. Kau mungkin menikmati proses memahami sesuatu sampai akarnya, bahkan ketika jawabannya tidak langsung berguna hari itu juga.",
  A:
    "RIASEC Artistic menunjukkan ketertarikan pada ekspresi, bentuk, suasana, dan cara baru menyampaikan sesuatu. Kau mungkin tidak tahan jika semua hal harus terlalu seragam sampai tidak ada ruang untuk rasa.",
  S:
    "RIASEC Social menunjukkan ketertarikan pada membantu, mengajar, mendampingi, atau membaca kebutuhan manusia. Kau mungkin melihat pekerjaan bukan hanya sebagai tugas, tetapi sebagai pertemuan dengan orang yang membawa cerita.",
  E:
    "RIASEC Enterprising menunjukkan ketertarikan pada pengaruh, peluang, persuasi, dan gerak menuju hasil. Kau mungkin cukup peka melihat kapan sesuatu bisa dijual, dipimpin, dinegosiasikan, atau dibuat lebih besar.",
  C:
    "RIASEC Conventional menunjukkan ketertarikan pada sistem, data, keteraturan, dan proses yang jelas. Kau mungkin merasa tenang saat sesuatu punya tempat, urutan, nama file, batas waktu, dan cara kerja yang bisa diulang."
} satisfies Record<RiasecType, string>;

export const STRESS_RESPONSE_DESCRIPTIONS = {
  freeze:
    "Freeze menunjukkan kecenderungan tubuh berhenti dulu saat tekanan datang. Kau mungkin terlihat diam, padahal di dalam sedang ada banyak pintu yang terkunci bersamaan dan kau butuh beberapa detik untuk menemukan gagangnya.",
  fight:
    "Fight menunjukkan kecenderungan melawan saat merasa terancam, dipojokkan, atau tidak dihargai. Kau mungkin cepat mengangkat suara atau posisi, bukan selalu karena ingin menyerang, tetapi karena batasmu terasa diinjak.",
  flight:
    "Flight menunjukkan kecenderungan ingin pergi, sibuk, pindah fokus, atau menjauh dari sumber tekanan. Kau mungkin mencari ruang baru agar bisa bernapas sebelum situasi menelan seluruh isi kepalamu.",
  fawn:
    "Fawn menunjukkan kecenderungan menenangkan orang lain lebih dulu agar suasana tidak pecah. Kau mungkin cepat membaca apa yang diinginkan orang, tetapi kadang lupa bertanya apakah dirimu sendiri masih punya ruang.",
  control:
    "Control menunjukkan kecenderungan merapikan keadaan saat cemas. Kau mungkin membuat daftar, mengatur orang, atau memperketat rencana karena ketidakpastian terasa lebih aman jika bisa diberi pagar.",
  collapse:
    "Collapse menunjukkan kecenderungan tenaga turun drastis saat tekanan terlalu penuh. Kau mungkin bukan tidak mau bergerak, tetapi sistemmu seperti mematikan lampu karena terlalu lama menahan beban.",
  overthink:
    "Overthink menunjukkan kecenderungan mengulang kemungkinan, kalimat, dan skenario sebelum bertindak. Kau mungkin mencari jawaban paling aman, tetapi kadang pintu keluar tertutup oleh terlalu banyak peta.",
  numb:
    "Numb menunjukkan kecenderungan mati rasa sementara ketika emosi terlalu ramai. Kau mungkin tampak biasa saja, padahal jarak itu muncul karena tubuhmu sedang melindungi diri dari banjir yang belum siap dibuka.",
  impulsive:
    "Impulsive menunjukkan kecenderungan bergerak cepat untuk memecah tekanan. Kau mungkin memilih tindakan dulu agar tidak terkurung rasa, tetapi kadang baru melihat akibatnya setelah debu mulai turun."
} satisfies Record<StressResponse, string>;

export const DEFENSE_PATTERN_DESCRIPTIONS = {
  rationalization:
    "Rationalization menunjukkan kecenderungan membuat alasan yang terdengar masuk akal agar rasa tidak terlalu telanjang. Kau mungkin bukan berbohong, tetapi sedang mencoba membuat luka tampak seperti keputusan yang rapi.",
  withdrawal:
    "Withdrawal menunjukkan kecenderungan menarik diri saat sesuatu terasa terlalu dekat, terlalu bising, atau terlalu menuntut. Kau mungkin butuh ruang, tetapi orang lain bisa membacanya sebagai tembok jika tidak diberi tanda.",
  projection:
    "Projection menunjukkan kecenderungan melihat sesuatu di luar diri yang mungkin sebenarnya sedang bergerak di dalam. Ini bukan tuduhan; lebih seperti emosi yang terlalu panas kadang mencari layar agar bisa terlihat.",
  idealization:
    "Idealization menunjukkan kecenderungan menaikkan seseorang, harapan, atau kemungkinan sampai terlihat lebih utuh dari kenyataannya. Kau mungkin sedang mencari tempat aman, tetapi perlu tetap melihat retak kecil sebelum terlalu jauh masuk.",
  devaluation:
    "Devaluation menunjukkan kecenderungan mengecilkan nilai sesuatu setelah terasa mengecewakan atau mengancam. Kau mungkin memakai jarak sebagai pelindung, tetapi kadang yang dipotong bukan hanya bahaya, melainkan juga hal yang masih berharga.",
  denial:
    "Denial menunjukkan kecenderungan menunda mengakui sesuatu sampai tubuh atau keadaan memaksamu melihatnya. Kau mungkin butuh waktu sebelum siap menyentuh fakta yang bisa mengubah banyak hal.",
  peoplePleasing:
    "People-pleasing menunjukkan kecenderungan menjaga penerimaan dengan menyesuaikan diri lebih cepat dari yang kau sadari. Kau mungkin pandai membuat orang nyaman, tetapi perlu memastikan dirimu tidak hilang dari ruangan yang kau rawat.",
  perfectionism:
    "Perfectionism menunjukkan kecenderungan menahan langkah sampai sesuatu terasa cukup aman dari salah. Kau mungkin punya standar yang tajam, tetapi standar itu bisa berubah menjadi pagar tinggi yang membuatmu sulit keluar.",
  detachment:
    "Detachment menunjukkan kecenderungan memisahkan rasa dari situasi agar bisa tetap berfungsi. Kau mungkin tampak dingin, padahal sering kali itu cara agar tanganmu tidak gemetar saat harus mengambil keputusan.",
  control:
    "Control sebagai defense menunjukkan kecenderungan mengatur detail agar rasa takut tidak menyebar. Kau mungkin merasa lebih aman saat semua punya tempat, tetapi hidup kadang tetap membawa hal yang tidak bisa dipaku di meja."
} satisfies Record<DefensePattern, string>;

export const IDEAL_PARTNER_TENDENCY_DESCRIPTIONS = {
  emotionallySafe:
    "Kecenderungan ini menunjukkan kau mungkin mencari seseorang yang membuat hatimu tidak terus berjaga. Bukan hanya yang manis, tetapi yang hadirnya membuat tubuhmu pelan-pelan percaya bahwa tidak semua kedekatan harus terasa seperti ancaman.",
  intellectuallyStimulating:
    "Kecenderungan ini menunjukkan kau mungkin tertarik pada seseorang yang bisa membuat pikiranmu menyala. Bukan sekadar pintar, tetapi orang yang mengajakmu melihat dunia dari sudut yang tidak membuatmu cepat bosan.",
  adventurous:
    "Kecenderungan ini menunjukkan kau mungkin mencari pasangan yang membawa udara bergerak. Seseorang yang tidak selalu membuat hidup aman di kertas, tetapi membuatmu merasa masih ada jalan, tawa, dan pintu yang belum dicoba.",
  loyal:
    "Kecenderungan ini menunjukkan kau mungkin sangat menghargai orang yang tetap ada ketika suasana tidak menarik lagi. Bagimu, cinta terlihat dari konsistensi kecil yang tidak perlu diumumkan.",
  gentle:
    "Kecenderungan ini menunjukkan kau mungkin tertarik pada kelembutan yang tidak lemah. Seseorang yang bisa memegang hal rapuh tanpa menjadikannya bahan kuasa.",
  ambitious:
    "Kecenderungan ini menunjukkan kau mungkin tertarik pada orang yang punya arah, nyala, dan rasa ingin tumbuh. Bukan hanya mengejar status, tetapi membawa dorongan bahwa hidup tidak harus berhenti di versi sekarang.",
  deep:
    "Kecenderungan ini menunjukkan kau mungkin mencari hubungan yang tidak hanya ramai di permukaan. Kau ingin seseorang yang berani masuk ke percakapan sunyi, lapisan lama, dan pertanyaan yang tidak selesai dalam satu malam.",
  playful:
    "Kecenderungan ini menunjukkan kau mungkin tertarik pada orang yang bisa membuat hidup terasa lebih ringan tanpa menganggap semuanya sepele. Seseorang yang tahu kapan bercanda menjadi cara menyelamatkan hari.",
  protective:
    "Kecenderungan ini menunjukkan kau mungkin mencari seseorang yang membuatmu merasa tidak harus kuat sendirian. Bukan yang mengurung, tetapi yang berdiri cukup dekat saat dunia terasa terlalu tajam.",
  independent:
    "Kecenderungan ini menunjukkan kau mungkin tertarik pada orang yang punya hidupnya sendiri dan tidak menjadikan cinta sebagai sangkar. Kedekatan terasa lebih aman saat dua orang bisa saling memilih tanpa saling menelan."
} satisfies Record<IdealPartnerTendency, string>;

export const PREFERRED_LOVE_STYLE_DESCRIPTIONS = {
  slowBurn:
    "Slow burn menunjukkan kecenderungan mencintai lewat proses yang pelan, tidak langsung membuka semua pintu. Kau mungkin lebih percaya pada rasa yang tetap tinggal setelah euforia pertama selesai.",
  intenseBond:
    "Intense bond menunjukkan kecenderungan mencari ikatan yang terasa dalam, fokus, dan sulit digantikan. Kau mungkin tidak puas pada hubungan yang hanya baik-baik saja jika tidak ada rasa tertarik yang benar-benar hidup.",
  steadyCare:
    "Steady care menunjukkan kecenderungan memahami cinta sebagai kehadiran yang konsisten. Kau mungkin lebih percaya pada orang yang tetap mengingat hal kecil daripada yang hanya datang dengan kalimat besar.",
  playfulFlirtation:
    "Playful flirtation menunjukkan kecenderungan menikmati cinta yang punya tawa, godaan kecil, dan ruang bernapas. Bagimu, kedekatan tidak selalu harus berat untuk terasa nyata.",
  actsOfService:
    "Acts of service menunjukkan kecenderungan mencintai lewat tindakan yang membantu hidup seseorang menjadi sedikit lebih ringan. Kau mungkin tidak selalu banyak berkata, tetapi tanganmu sering lebih jujur daripada mulut.",
  deepConversation:
    "Deep conversation menunjukkan kecenderungan merasa dekat saat percakapan masuk ke bagian yang jarang dibuka. Kau mungkin jatuh bukan hanya pada wajah, tetapi pada cara seseorang menyusun ketakutan, harapan, dan pikirannya.",
  protectivePresence:
    "Protective presence menunjukkan kecenderungan mencintai lewat rasa menjaga dan dijaga. Kau mungkin merasa hubungan menjadi nyata ketika seseorang tidak lari saat situasi mulai tidak nyaman.",
  sharedAdventure:
    "Shared adventure menunjukkan kecenderungan mencintai lewat pengalaman bersama. Kau mungkin lebih mudah merasa terikat saat ada perjalanan, keputusan spontan, atau momen yang hanya dimengerti oleh kalian berdua.",
  quietLoyalty:
    "Quiet loyalty menunjukkan kecenderungan mencintai dengan cara yang tidak selalu ramai. Kau mungkin lebih percaya pada kesetiaan yang tidak banyak diumumkan, tetapi tetap ada saat lampu ruangan sudah padam.",
  romanticExpression:
    "Romantic expression menunjukkan kecenderungan menghargai cinta yang diberi bentuk: kata, simbol, perhatian, atau gestur yang terasa sengaja. Kau mungkin ingin rasa tidak hanya diasumsikan, tetapi juga ditunjukkan."
} satisfies Record<PreferredLoveStyle, string>;

export const PREFERRED_ENVIRONMENT_DESCRIPTIONS = {
  calm:
    "Lingkungan calm menunjukkan kau cenderung lebih mudah menjadi diri sendiri ketika suasana tidak terus menarik sarafmu. Ruang yang tenang membuat pikiranmu punya tempat untuk turun sebelum mengambil bentuk.",
  dynamic:
    "Lingkungan dynamic menunjukkan kau cenderung hidup saat ada gerak, tantangan, dan perubahan. Terlalu banyak diam bisa membuatmu merasa seperti menunggu sesuatu yang tidak pernah datang.",
  private:
    "Lingkungan private menunjukkan kau cenderung butuh ruang yang tidak selalu dilihat. Bukan berarti menutup diri, tetapi ada bagian darimu yang hanya bekerja baik saat tidak terus dinilai.",
  social:
    "Lingkungan social menunjukkan kau cenderung menangkap energi dari pertemuan, percakapan, dan peran di antara orang. Ruang yang terlalu sepi mungkin membuat sebagian potensimu seperti tidak punya tempat memantul.",
  structured:
    "Lingkungan structured menunjukkan kau cenderung nyaman saat aturan, urutan, dan batas cukup jelas. Kepastian bukan selalu kekakuan; kadang itu lantai yang membuatmu berani melangkah.",
  openEnded:
    "Lingkungan open-ended menunjukkan kau cenderung membutuhkan ruang untuk menafsirkan, mencoba, dan mengubah arah. Terlalu banyak pagar sejak awal bisa membuat ide terasa mati sebelum tumbuh.",
  beautiful:
    "Lingkungan beautiful menunjukkan kau cenderung peka pada bentuk, warna, suasana, dan rasa tempat. Keindahan mungkin bukan hiasan bagimu, tetapi cara tubuhmu merasa hidup tidak hanya sedang bertahan.",
  practical:
    "Lingkungan practical menunjukkan kau cenderung nyaman ketika segala sesuatu punya fungsi jelas dan bisa dipakai. Kau mungkin lebih tenang di ruang yang tidak berlebihan, selama semua kebutuhan nyata terjawab.",
  challenging:
    "Lingkungan challenging menunjukkan kau cenderung tumbuh saat ada target, tekanan, atau lawan yang membuatmu naik kelas. Hidup yang terlalu mudah bisa terasa seperti ruangan tanpa jendela.",
  supportive:
    "Lingkungan supportive menunjukkan kau cenderung berkembang ketika ada rasa dipercaya, dibantu, dan tidak dipermalukan saat belum sempurna. Dukungan membuatmu lebih berani mengambil bentuk, bukan menjadi manja."
} satisfies Record<PreferredEnvironment, string>;

export const RESULT_DESCRIPTIONS = {
  mbti: MBTI_DESCRIPTIONS,
  cognitiveFunctions: COGNITIVE_FUNCTION_DESCRIPTIONS,
  enneagram: ENNEAGRAM_DESCRIPTIONS,
  instincts: INSTINCT_DESCRIPTIONS,
  bigFive: BIG_FIVE_DESCRIPTIONS,
  hexaco: HEXACO_DESCRIPTIONS,
  attitudinalPsychePositions: ATTITUDINAL_PSYCHE_POSITION_DESCRIPTIONS,
  disc: DISC_DESCRIPTIONS,
  riasec: RIASEC_DESCRIPTIONS,
  stressResponse: STRESS_RESPONSE_DESCRIPTIONS,
  defensePattern: DEFENSE_PATTERN_DESCRIPTIONS,
  idealPartnerTendency: IDEAL_PARTNER_TENDENCY_DESCRIPTIONS,
  preferredLoveStyle: PREFERRED_LOVE_STYLE_DESCRIPTIONS,
  preferredEnvironment: PREFERRED_ENVIRONMENT_DESCRIPTIONS
} as const;

export default RESULT_DESCRIPTIONS;