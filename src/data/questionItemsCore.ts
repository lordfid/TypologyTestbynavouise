import type { QuestionItem } from "../types";

export const CORE_QUESTIONS: QuestionItem[] = [
  {
    id: "core_001",
    kind: "singleChoice",
    domain: "family",
    context:
      "Malam di rumah setelah makan bersama. Piring masih ada di meja, gelas teh tinggal setengah, dan seseorang tiba-tiba berkata, “akhir-akhir ini kau beda ya.” Ruangan tidak ribut, tapi semua orang seperti menunggu reaksimu.",
    prompt:
      "Apa yang paling mungkin kau lakukan dulu sebelum suasana berubah terlalu jauh?",
    instruction:
      "Pilih satu tindakan yang paling mirip dengan reaksimu dalam situasi seperti ini.",
    options: [
      {
        id: "core_001_a",
        text:
          "Aku tidak langsung menjawab. Aku melihat siapa yang berhenti mengunyah, siapa yang menunduk, lalu berkata pelan, “beda yang mana dulu?”",
        subtleMeaning:
          "Peserta menahan reaksi, membaca perubahan suasana dan arah tersembunyi sebelum memberi respons.",
        weights: {
          cognitive: {
            Ni: 3,
            Fe: 1,
            Se: -1
          },
          mbtiAxis: {
            N: 2,
            I: 1,
            J: 1,
            S: -1
          },
          evidence: {
            indirect: 1,
            relational: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_001_b",
        text:
          "Aku mengangkat gelas, mencoba membuat nada tetap ringan, lalu bilang, “beda gimana? coba kasih contoh, jangan cuma lempar kalimat begitu.”",
        subtleMeaning:
          "Peserta membuka kemungkinan, meminta contoh, dan menjaga ruang respons tetap bergerak.",
        weights: {
          cognitive: {
            Ne: 3,
            Ti: 1,
            Ni: -1
          },
          mbtiAxis: {
            N: 2,
            P: 2,
            J: -1
          },
          evidence: {
            direct: 1,
            behavioral: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_001_c",
        text:
          "Aku meletakkan sendok, mengingat-ingat kejadian beberapa hari terakhir, lalu menjawab, “kalau soal kemarin, aku memang pulang lebih diam.”",
        subtleMeaning:
          "Peserta merujuk pengalaman konkret, detail kejadian, dan konteks yang pernah terjadi sebelum menjelaskan diri.",
        weights: {
          cognitive: {
            Si: 3,
            Te: 1,
            Ne: -1
          },
          mbtiAxis: {
            S: 2,
            J: 2,
            N: -1
          },
          evidence: {
            behavioral: 1,
            valueBased: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_001_d",
        text:
          "Aku menatap orang itu langsung, menggeser kursi sedikit, lalu bilang, “aku di sini kok. Kalau mau tanya, tanya jelas sekarang.”",
        subtleMeaning:
          "Peserta merespons situasi secara langsung, hadir di momen, dan meminta kejelasan lewat tindakan nyata.",
        weights: {
          cognitive: {
            Se: 3,
            Te: 1,
            Si: -1
          },
          mbtiAxis: {
            S: 2,
            E: 1,
            P: 1,
            N: -1
          },
          evidence: {
            direct: 1,
            behavioral: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_001_e",
        text:
          "Aku tersenyum sebentar, tapi tanganku merapikan piring lebih lama dari perlu. Aku bilang, “nanti kita bicara setelah semua selesai makan.”",
        subtleMeaning:
          "Peserta menunda respons langsung demi menjaga suasana, tetapi tetap memberi batas waktu agar masalah tidak sepenuhnya hilang.",
        weights: {
          cognitive: {
            Fe: 2,
            Si: 1,
            Se: -1
          },
          mbtiAxis: {
            F: 1,
            J: 1,
            P: -1
          },
          evidence: {
            relational: 1,
            emotional: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1,
          ambiguity: 1
        }
      }
    ],
    reliability: {
      reverseKeyed: false,
      consistencyGroup: "core_family_pattern_reading",
      contradictionGroup: "core_direct_vs_indirect_response",
      expectedAnswerKinds: ["choice"],
      minConfidenceImpact: 1,
      maxConfidenceImpact: 3,
      ambiguityRisk: 1
    },
    targetSystems: [
      "cognitive",
      "mbtiAxis",
      "communication",
      "relationship",
      "reliability"
    ]
  },
  {
    id: "core_002",
    kind: "multiChoice",
    domain: "work",
    context:
      "Sore di ruang kerja kecil. Meja penuh kertas, file tugas belum diberi nama rapi, chat grup terus berbunyi, dan satu orang yang biasanya banyak bicara justru diam dari tadi. Tenggatnya tinggal beberapa jam.",
    prompt:
      "Dua hal mana yang paling mungkin kau lakukan lebih dulu saat proyek mulai berantakan seperti ini?",
    instruction:
      "Pilih maksimal dua tindakan yang paling mirip dengan caramu bergerak saat tugas bersama mulai kacau.",
    options: [
      {
        id: "core_002_a",
        text:
          "Aku membuka file utama, menandai bagian yang saling bertabrakan, lalu menulis di chat, “bagian ini belum nyambung, kita harus bereskan urutannya dulu.”",
        subtleMeaning:
          "Peserta mencari konsistensi internal dan memperbaiki struktur masalah sebelum mendorong eksekusi.",
        weights: {
          cognitive: {
            Ti: 3,
            Te: 1,
            Fe: -1
          },
          mbtiAxis: {
            T: 2,
            J: 1,
            F: -1
          },
          evidence: {
            behavioral: 1,
            direct: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_002_b",
        text:
          "Aku mengambil kertas kosong, membagi tugas jadi tiga kolom, lalu mengirim, “aku ambil bagian A, siapa pegang B dan C?”",
        subtleMeaning:
          "Peserta mengubah kekacauan menjadi pembagian kerja yang jelas dan bisa langsung dijalankan.",
        weights: {
          cognitive: {
            Te: 3,
            Ti: -1
          },
          mbtiAxis: {
            T: 2,
            J: 2,
            P: -1
          },
          evidence: {
            behavioral: 1,
            direct: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_002_c",
        text:
          "Aku membuka chat pribadi orang yang diam itu dan mengetik, “kau aman? kalau ada yang berat bilang, jangan hilang sendirian.”",
        subtleMeaning:
          "Peserta memperhatikan kondisi personal anggota tim dan membaca diam sebagai sinyal relasional.",
        weights: {
          cognitive: {
            Fe: 3,
            Fi: 1,
            Te: -1
          },
          mbtiAxis: {
            F: 2,
            J: 1,
            T: -1
          },
          evidence: {
            relational: 1,
            emotional: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_002_d",
        text:
          "Aku berhenti mengetik sebentar, membaca ulang bagian yang membuatku tidak nyaman, lalu bilang, “aku nggak mau kirim kalau isinya membuat kita terlihat setuju pada hal yang salah.”",
        subtleMeaning:
          "Peserta menahan hasil demi kesesuaian nilai pribadi dan rasa benar yang tidak ingin dikorbankan.",
        weights: {
          cognitive: {
            Fi: 3,
            Ti: 1,
            Fe: -1
          },
          mbtiAxis: {
            F: 2,
            P: 1,
            T: -1
          },
          evidence: {
            valueBased: 1,
            emotional: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_002_e",
        text:
          "Aku membaca chat yang menumpuk, mengambil satu pesan paling penting, lalu menulis, “kita jawab ini dulu, sisanya jangan dibahas bersamaan.”",
        subtleMeaning:
          "Peserta memilih satu pusat masalah agar tim tidak terseret oleh terlalu banyak cabang sekaligus.",
        weights: {
          cognitive: {
            Ni: 2,
            Te: 1,
            Ne: -1
          },
          mbtiAxis: {
            N: 1,
            J: 2,
            P: -1
          },
          evidence: {
            behavioral: 1,
            indirect: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_002_f",
        text:
          "Aku mengirim voice note pendek, “semua tulis dulu versi masing-masing dalam lima menit, nanti kita ambil yang paling bisa digabung.”",
        subtleMeaning:
          "Peserta membuka banyak masukan dulu, menjaga kemungkinan tetap hidup, lalu baru menggabungkan arah.",
        weights: {
          cognitive: {
            Ne: 2,
            Fe: 1,
            Si: -1
          },
          mbtiAxis: {
            N: 1,
            P: 2,
            J: -1
          },
          evidence: {
            behavioral: 1,
            relational: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      }
    ],
    minSelect: 1,
    maxSelect: 2,
    reliability: {
      reverseKeyed: false,
      consistencyGroup: "core_project_disorder_response",
      contradictionGroup: "core_task_vs_people_priority",
      expectedAnswerKinds: ["multi"],
      minConfidenceImpact: 1,
      maxConfidenceImpact: 3,
      ambiguityRisk: 1
    },
    targetSystems: [
      "cognitive",
      "mbtiAxis",
      "decision",
      "communication",
      "work",
      "reliability"
    ]
  },
  {
    id: "core_003",
    kind: "firstReaction",
    domain: "stress",
    context:
      "Di sebuah ruangan rapat yang sempit, suara notifikasi berbunyi berkali-kali dari laptop depan. Seseorang berkata cepat, “kita harus putuskan sekarang, kalau tidak semuanya lewat.” Tanganmu terasa tegang di pinggir meja, dan beberapa mata mulai mengarah padamu.",
    prompt:
      "Reaksi pertama apa yang paling mungkin muncul sebelum kau sempat terlihat benar-benar tenang?",
    instruction:
      "Pilih reaksi spontan yang paling dekat dengan tubuh dan tindakan pertamamu.",
    options: [
      {
        id: "core_003_a",
        text:
          "Aku menarik napas, menatap satu titik di meja, lalu berkata pelan, “berhenti sebentar. Keputusan ini akan menyeret hal lain kalau kita salah ambil.”",
        subtleMeaning:
          "Peserta menahan tekanan cepat, mencari arah konsekuensi, dan memakai pola utama untuk memperlambat keputusan.",
        weights: {
          cognitive: {
            Ni: 2,
            Te: 1,
            Se: -1
          },
          stackRole: {
            dominant: 3,
            inferior: -1
          },
          mbtiAxis: {
            I: 1,
            N: 1,
            J: 1,
            E: -1
          },
          stress: {
            freeze: 1,
            control: 1,
            impulsive: -1
          },
          evidence: {
            stressBased: 1,
            behavioral: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_003_b",
        text:
          "Aku langsung menggeser laptop ke tengah, menunjuk bagian yang harus dipilih, lalu berkata, “kita ambil ini dulu. Yang lain menyusul setelah aman.”",
        subtleMeaning:
          "Peserta memakai respons cepat dan terarah untuk mengambil kendali praktis ketika waktu menekan.",
        weights: {
          cognitive: {
            Te: 2,
            Se: 1,
            Fi: -1
          },
          stackRole: {
            dominant: 2,
            auxiliary: 1,
            opposing: -1
          },
          mbtiAxis: {
            E: 1,
            T: 1,
            J: 2,
            P: -1
          },
          stress: {
            control: 2,
            fight: 1,
            freeze: -1
          },
          evidence: {
            stressBased: 1,
            direct: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_003_c",
        text:
          "Aku melihat orang yang paling panik, menurunkan suara, lalu bilang, “aku dengar. Tapi jangan saling potong dulu, satu orang bicara.”",
        subtleMeaning:
          "Peserta memakai fungsi penyeimbang untuk menjaga ruangan tetap bisa dipakai sebelum keputusan dibuat.",
        weights: {
          cognitive: {
            Fe: 2,
            Si: 1,
            Ti: -1
          },
          stackRole: {
            auxiliary: 3,
            trickster: -1
          },
          mbtiAxis: {
            F: 2,
            J: 1,
            T: -1
          },
          stress: {
            fawn: 1,
            control: 1,
            fight: -1
          },
          evidence: {
            relational: 1,
            stressBased: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_003_d",
        text:
          "Dadaku panas duluan. Aku memotong kalimat orang itu dan berkata, “jangan tekan aku kalau datanya saja belum beres.”",
        subtleMeaning:
          "Peserta menunjukkan reaksi bawah tekanan yang lebih defensif, cepat melawan ketika merasa dipaksa mengambil keputusan mentah.",
        weights: {
          cognitive: {
            Ti: 2,
            Fi: 1,
            Fe: -1
          },
          stackRole: {
            inferior: 3,
            auxiliary: -1
          },
          mbtiAxis: {
            T: 1,
            I: 1,
            J: -1
          },
          stress: {
            fight: 2,
            impulsive: 1,
            fawn: -1
          },
          evidence: {
            stressBased: 1,
            emotional: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1,
          contradiction: 1
        }
      },
      {
        id: "core_003_e",
        text:
          "Aku tiba-tiba curiga ada bagian yang sengaja tidak disebut. Aku bertanya, “kenapa baru sekarang bilang mendesak? apa yang tadi tidak masuk ke meja?”",
        subtleMeaning:
          "Peserta merespons tekanan dengan kecurigaan terhadap agenda tersembunyi dan mencari sumber ancaman di balik situasi.",
        weights: {
          cognitive: {
            Ne: 2,
            Ni: 1,
            Si: -1
          },
          stackRole: {
            opposing: 3,
            dominant: -1
          },
          mbtiAxis: {
            N: 2,
            P: 1,
            S: -1
          },
          stress: {
            overthink: 2,
            fight: 1,
            collapse: -1
          },
          evidence: {
            stressBased: 1,
            indirect: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1,
          ambiguity: 1
        }
      },
      {
        id: "core_003_f",
        text:
          "Aku merasakan tubuhku ingin pergi dari ruangan itu. Aku tetap duduk, tapi hanya berkata, “aku butuh dua menit lihat ulang sebelum jawab.”",
        subtleMeaning:
          "Peserta mengalami dorongan menjauh tetapi mencoba memberi batas kecil agar tidak sepenuhnya hilang dari situasi.",
        weights: {
          cognitive: {
            Si: 2,
            Fi: 1,
            Se: -1
          },
          stackRole: {
            inferior: 2,
            opposing: 1,
            dominant: -1
          },
          mbtiAxis: {
            I: 2,
            P: 1,
            E: -1
          },
          stress: {
            flight: 2,
            freeze: 1,
            control: -1
          },
          evidence: {
            stressBased: 1,
            emotional: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1,
          ambiguity: 1
        }
      }
    ],
    reliability: {
      reverseKeyed: false,
      consistencyGroup: "core_fast_stress_reaction",
      contradictionGroup: "core_pressure_role_response",
      expectedAnswerKinds: ["choice"],
      minConfidenceImpact: 1,
      maxConfidenceImpact: 3,
      ambiguityRisk: 2
    },
    targetSystems: [
      "cognitive",
      "stackRole",
      "mbtiAxis",
      "stress",
      "defense",
      "reliability"
    ]
  },
  import type { QuestionItem } from "../types";

export const CORE_QUESTIONS: QuestionItem[] = [
  {
    id: "core_001",
    kind: "singleChoice",
    domain: "family",
    context:
      "Malam di rumah setelah makan bersama. Piring masih ada di meja, gelas teh tinggal setengah, dan seseorang tiba-tiba berkata, “akhir-akhir ini kau beda ya.” Ruangan tidak ribut, tapi semua orang seperti menunggu reaksimu.",
    prompt:
      "Apa yang paling mungkin kau lakukan dulu sebelum suasana berubah terlalu jauh?",
    instruction:
      "Pilih satu tindakan yang paling mirip dengan reaksimu dalam situasi seperti ini.",
    options: [
      {
        id: "core_001_a",
        text:
          "Aku tidak langsung menjawab. Aku melihat siapa yang berhenti mengunyah, siapa yang menunduk, lalu berkata pelan, “beda yang mana dulu?”",
        subtleMeaning:
          "Peserta menahan reaksi, membaca perubahan suasana dan arah tersembunyi sebelum memberi respons.",
        weights: {
          cognitive: {
            Ni: 3,
            Fe: 1,
            Se: -1
          },
          mbtiAxis: {
            N: 2,
            I: 1,
            J: 1,
            S: -1
          },
          evidence: {
            indirect: 1,
            relational: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_001_b",
        text:
          "Aku mengangkat gelas, mencoba membuat nada tetap ringan, lalu bilang, “beda gimana? coba kasih contoh, jangan cuma lempar kalimat begitu.”",
        subtleMeaning:
          "Peserta membuka kemungkinan, meminta contoh, dan menjaga ruang respons tetap bergerak.",
        weights: {
          cognitive: {
            Ne: 3,
            Ti: 1,
            Ni: -1
          },
          mbtiAxis: {
            N: 2,
            P: 2,
            J: -1
          },
          evidence: {
            direct: 1,
            behavioral: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_001_c",
        text:
          "Aku meletakkan sendok, mengingat-ingat kejadian beberapa hari terakhir, lalu menjawab, “kalau soal kemarin, aku memang pulang lebih diam.”",
        subtleMeaning:
          "Peserta merujuk pengalaman konkret, detail kejadian, dan konteks yang pernah terjadi sebelum menjelaskan diri.",
        weights: {
          cognitive: {
            Si: 3,
            Te: 1,
            Ne: -1
          },
          mbtiAxis: {
            S: 2,
            J: 2,
            N: -1
          },
          evidence: {
            behavioral: 1,
            valueBased: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_001_d",
        text:
          "Aku menatap orang itu langsung, menggeser kursi sedikit, lalu bilang, “aku di sini kok. Kalau mau tanya, tanya jelas sekarang.”",
        subtleMeaning:
          "Peserta merespons situasi secara langsung, hadir di momen, dan meminta kejelasan lewat tindakan nyata.",
        weights: {
          cognitive: {
            Se: 3,
            Te: 1,
            Si: -1
          },
          mbtiAxis: {
            S: 2,
            E: 1,
            P: 1,
            N: -1
          },
          evidence: {
            direct: 1,
            behavioral: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_001_e",
        text:
          "Aku tersenyum sebentar, tapi tanganku merapikan piring lebih lama dari perlu. Aku bilang, “nanti kita bicara setelah semua selesai makan.”",
        subtleMeaning:
          "Peserta menunda respons langsung demi menjaga suasana, tetapi tetap memberi batas waktu agar masalah tidak sepenuhnya hilang.",
        weights: {
          cognitive: {
            Fe: 2,
            Si: 1,
            Se: -1
          },
          mbtiAxis: {
            F: 1,
            J: 1,
            P: -1
          },
          evidence: {
            relational: 1,
            emotional: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1,
          ambiguity: 1
        }
      }
    ],
    reliability: {
      reverseKeyed: false,
      consistencyGroup: "core_family_pattern_reading",
      contradictionGroup: "core_direct_vs_indirect_response",
      expectedAnswerKinds: ["choice"],
      minConfidenceImpact: 1,
      maxConfidenceImpact: 3,
      ambiguityRisk: 1
    },
    targetSystems: [
      "cognitive",
      "mbtiAxis",
      "communication",
      "relationship",
      "reliability"
    ]
  },
  {
    id: "core_002",
    kind: "multiChoice",
    domain: "work",
    context:
      "Sore di ruang kerja kecil. Meja penuh kertas, file tugas belum diberi nama rapi, chat grup terus berbunyi, dan satu orang yang biasanya banyak bicara justru diam dari tadi. Tenggatnya tinggal beberapa jam.",
    prompt:
      "Dua hal mana yang paling mungkin kau lakukan lebih dulu saat proyek mulai berantakan seperti ini?",
    instruction:
      "Pilih maksimal dua tindakan yang paling mirip dengan caramu bergerak saat tugas bersama mulai kacau.",
    options: [
      {
        id: "core_002_a",
        text:
          "Aku membuka file utama, menandai bagian yang saling bertabrakan, lalu menulis di chat, “bagian ini belum nyambung, kita harus bereskan urutannya dulu.”",
        subtleMeaning:
          "Peserta mencari konsistensi internal dan memperbaiki struktur masalah sebelum mendorong eksekusi.",
        weights: {
          cognitive: {
            Ti: 3,
            Te: 1,
            Fe: -1
          },
          mbtiAxis: {
            T: 2,
            J: 1,
            F: -1
          },
          evidence: {
            behavioral: 1,
            direct: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_002_b",
        text:
          "Aku mengambil kertas kosong, membagi tugas jadi tiga kolom, lalu mengirim, “aku ambil bagian A, siapa pegang B dan C?”",
        subtleMeaning:
          "Peserta mengubah kekacauan menjadi pembagian kerja yang jelas dan bisa langsung dijalankan.",
        weights: {
          cognitive: {
            Te: 3,
            Ti: -1
          },
          mbtiAxis: {
            T: 2,
            J: 2,
            P: -1
          },
          evidence: {
            behavioral: 1,
            direct: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_002_c",
        text:
          "Aku membuka chat pribadi orang yang diam itu dan mengetik, “kau aman? kalau ada yang berat bilang, jangan hilang sendirian.”",
        subtleMeaning:
          "Peserta memperhatikan kondisi personal anggota tim dan membaca diam sebagai sinyal relasional.",
        weights: {
          cognitive: {
            Fe: 3,
            Fi: 1,
            Te: -1
          },
          mbtiAxis: {
            F: 2,
            J: 1,
            T: -1
          },
          evidence: {
            relational: 1,
            emotional: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_002_d",
        text:
          "Aku berhenti mengetik sebentar, membaca ulang bagian yang membuatku tidak nyaman, lalu bilang, “aku nggak mau kirim kalau isinya membuat kita terlihat setuju pada hal yang salah.”",
        subtleMeaning:
          "Peserta menahan hasil demi kesesuaian nilai pribadi dan rasa benar yang tidak ingin dikorbankan.",
        weights: {
          cognitive: {
            Fi: 3,
            Ti: 1,
            Fe: -1
          },
          mbtiAxis: {
            F: 2,
            P: 1,
            T: -1
          },
          evidence: {
            valueBased: 1,
            emotional: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_002_e",
        text:
          "Aku membaca chat yang menumpuk, mengambil satu pesan paling penting, lalu menulis, “kita jawab ini dulu, sisanya jangan dibahas bersamaan.”",
        subtleMeaning:
          "Peserta memilih satu pusat masalah agar tim tidak terseret oleh terlalu banyak cabang sekaligus.",
        weights: {
          cognitive: {
            Ni: 2,
            Te: 1,
            Ne: -1
          },
          mbtiAxis: {
            N: 1,
            J: 2,
            P: -1
          },
          evidence: {
            behavioral: 1,
            indirect: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_002_f",
        text:
          "Aku mengirim voice note pendek, “semua tulis dulu versi masing-masing dalam lima menit, nanti kita ambil yang paling bisa digabung.”",
        subtleMeaning:
          "Peserta membuka banyak masukan dulu, menjaga kemungkinan tetap hidup, lalu baru menggabungkan arah.",
        weights: {
          cognitive: {
            Ne: 2,
            Fe: 1,
            Si: -1
          },
          mbtiAxis: {
            N: 1,
            P: 2,
            J: -1
          },
          evidence: {
            behavioral: 1,
            relational: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      }
    ],
    minSelect: 1,
    maxSelect: 2,
    reliability: {
      reverseKeyed: false,
      consistencyGroup: "core_project_disorder_response",
      contradictionGroup: "core_task_vs_people_priority",
      expectedAnswerKinds: ["multi"],
      minConfidenceImpact: 1,
      maxConfidenceImpact: 3,
      ambiguityRisk: 1
    },
    targetSystems: [
      "cognitive",
      "mbtiAxis",
      "decision",
      "communication",
      "work",
      "reliability"
    ]
  },
  {
    id: "core_003",
    kind: "firstReaction",
    domain: "stress",
    context:
      "Di sebuah ruangan rapat yang sempit, suara notifikasi berbunyi berkali-kali dari laptop depan. Seseorang berkata cepat, “kita harus putuskan sekarang, kalau tidak semuanya lewat.” Tanganmu terasa tegang di pinggir meja, dan beberapa mata mulai mengarah padamu.",
    prompt:
      "Reaksi pertama apa yang paling mungkin muncul sebelum kau sempat terlihat benar-benar tenang?",
    instruction:
      "Pilih reaksi spontan yang paling dekat dengan tubuh dan tindakan pertamamu.",
    options: [
      {
        id: "core_003_a",
        text:
          "Aku menarik napas, menatap satu titik di meja, lalu berkata pelan, “berhenti sebentar. Keputusan ini akan menyeret hal lain kalau kita salah ambil.”",
        subtleMeaning:
          "Peserta menahan tekanan cepat, mencari arah konsekuensi, dan memakai pola utama untuk memperlambat keputusan.",
        weights: {
          cognitive: {
            Ni: 2,
            Te: 1,
            Se: -1
          },
          stackRole: {
            dominant: 3,
            inferior: -1
          },
          mbtiAxis: {
            I: 1,
            N: 1,
            J: 1,
            E: -1
          },
          stress: {
            freeze: 1,
            control: 1,
            impulsive: -1
          },
          evidence: {
            stressBased: 1,
            behavioral: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_003_b",
        text:
          "Aku langsung menggeser laptop ke tengah, menunjuk bagian yang harus dipilih, lalu berkata, “kita ambil ini dulu. Yang lain menyusul setelah aman.”",
        subtleMeaning:
          "Peserta memakai respons cepat dan terarah untuk mengambil kendali praktis ketika waktu menekan.",
        weights: {
          cognitive: {
            Te: 2,
            Se: 1,
            Fi: -1
          },
          stackRole: {
            dominant: 2,
            auxiliary: 1,
            opposing: -1
          },
          mbtiAxis: {
            E: 1,
            T: 1,
            J: 2,
            P: -1
          },
          stress: {
            control: 2,
            fight: 1,
            freeze: -1
          },
          evidence: {
            stressBased: 1,
            direct: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_003_c",
        text:
          "Aku melihat orang yang paling panik, menurunkan suara, lalu bilang, “aku dengar. Tapi jangan saling potong dulu, satu orang bicara.”",
        subtleMeaning:
          "Peserta memakai fungsi penyeimbang untuk menjaga ruangan tetap bisa dipakai sebelum keputusan dibuat.",
        weights: {
          cognitive: {
            Fe: 2,
            Si: 1,
            Ti: -1
          },
          stackRole: {
            auxiliary: 3,
            trickster: -1
          },
          mbtiAxis: {
            F: 2,
            J: 1,
            T: -1
          },
          stress: {
            fawn: 1,
            control: 1,
            fight: -1
          },
          evidence: {
            relational: 1,
            stressBased: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_003_d",
        text:
          "Dadaku panas duluan. Aku memotong kalimat orang itu dan berkata, “jangan tekan aku kalau datanya saja belum beres.”",
        subtleMeaning:
          "Peserta menunjukkan reaksi bawah tekanan yang lebih defensif, cepat melawan ketika merasa dipaksa mengambil keputusan mentah.",
        weights: {
          cognitive: {
            Ti: 2,
            Fi: 1,
            Fe: -1
          },
          stackRole: {
            inferior: 3,
            auxiliary: -1
          },
          mbtiAxis: {
            T: 1,
            I: 1,
            J: -1
          },
          stress: {
            fight: 2,
            impulsive: 1,
            fawn: -1
          },
          evidence: {
            stressBased: 1,
            emotional: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1,
          contradiction: 1
        }
      },
      {
        id: "core_003_e",
        text:
          "Aku tiba-tiba curiga ada bagian yang sengaja tidak disebut. Aku bertanya, “kenapa baru sekarang bilang mendesak? apa yang tadi tidak masuk ke meja?”",
        subtleMeaning:
          "Peserta merespons tekanan dengan kecurigaan terhadap agenda tersembunyi dan mencari sumber ancaman di balik situasi.",
        weights: {
          cognitive: {
            Ne: 2,
            Ni: 1,
            Si: -1
          },
          stackRole: {
            opposing: 3,
            dominant: -1
          },
          mbtiAxis: {
            N: 2,
            P: 1,
            S: -1
          },
          stress: {
            overthink: 2,
            fight: 1,
            collapse: -1
          },
          evidence: {
            stressBased: 1,
            indirect: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1,
          ambiguity: 1
        }
      },
      {
        id: "core_003_f",
        text:
          "Aku merasakan tubuhku ingin pergi dari ruangan itu. Aku tetap duduk, tapi hanya berkata, “aku butuh dua menit lihat ulang sebelum jawab.”",
        subtleMeaning:
          "Peserta mengalami dorongan menjauh tetapi mencoba memberi batas kecil agar tidak sepenuhnya hilang dari situasi.",
        weights: {
          cognitive: {
            Si: 2,
            Fi: 1,
            Se: -1
          },
          stackRole: {
            inferior: 2,
            opposing: 1,
            dominant: -1
          },
          mbtiAxis: {
            I: 2,
            P: 1,
            E: -1
          },
          stress: {
            flight: 2,
            freeze: 1,
            control: -1
          },
          evidence: {
            stressBased: 1,
            emotional: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1,
          ambiguity: 1
        }
      }
    ],
    reliability: {
      reverseKeyed: false,
      consistencyGroup: "core_fast_stress_reaction",
      contradictionGroup: "core_pressure_role_response",
      expectedAnswerKinds: ["choice"],
      minConfidenceImpact: 1,
      maxConfidenceImpact: 3,
      ambiguityRisk: 2
    },
    targetSystems: [
      "cognitive",
      "stackRole",
      "mbtiAxis",
      "stress",
      "defense",
      "reliability"
    ]
  },
  {
    id: "core_004",
    kind: "hiddenReaction",
    domain: "friendship",
    context:
      "Malam hampir lewat. Layar HP menyala di atas bantal, dan pesan terakhir dari seseorang hanya berbunyi, “yaudah.” Setelah itu ada jeda panjang. Tanda mengetik muncul sebentar, hilang, lalu tidak ada balasan lagi.",
    prompt:
      "Apa yang paling mungkin terjadi di dalam dirimu sebelum kau memutuskan membalas atau membiarkannya dulu?",
    instruction:
      "Pilih reaksi yang paling mirip dengan gerakan batin dan tindakan kecilmu dalam momen seperti ini.",
    options: [
      {
        id: "core_004_a",
        text:
          "Aku tidak langsung mengetik. Aku membaca ulang tiga pesan sebelumnya, mencari bagian yang nadanya berubah sebelum kata “yaudah” itu muncul.",
        subtleMeaning:
          "Peserta mencari arah tersembunyi dari rangkaian tanda kecil sebelum mengambil respons.",
        weights: {
          cognitive: {
            Ni: 3,
            Ti: 1,
            Se: -1
          },
          stackRole: {
            dominant: 2,
            auxiliary: 1,
            inferior: -1
          },
          mbtiAxis: {
            I: 2,
            N: 2,
            J: 1,
            E: -1
          },
          evidence: {
            indirect: 1,
            relational: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_004_b",
        text:
          "Aku mengetik beberapa versi balasan, menghapusnya lagi, lalu berpikir, “bisa jadi dia capek, tersinggung, atau cuma nggak mau panjang malam ini.”",
        subtleMeaning:
          "Peserta membuka beberapa kemungkinan sosial dan tidak langsung mengunci satu tafsir.",
        weights: {
          cognitive: {
            Ne: 3,
            Fe: 1,
            Ni: -1
          },
          stackRole: {
            auxiliary: 2,
            dominant: 1,
            critical: -1
          },
          mbtiAxis: {
            N: 2,
            P: 2,
            J: -1
          },
          evidence: {
            indirect: 1,
            emotional: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1,
          ambiguity: 1
        }
      },
      {
        id: "core_004_c",
        text:
          "Aku menaruh HP telungkup sebentar, lalu mengirim, “aku takut kalimatku tadi kebaca dingin. Kalau iya, bilang ya.”",
        subtleMeaning:
          "Peserta mengutamakan pemulihan hubungan dengan mengakui kemungkinan dampak emosional dari ucapannya.",
        weights: {
          cognitive: {
            Fe: 3,
            Fi: 1,
            Ti: -1
          },
          stackRole: {
            auxiliary: 3,
            opposing: -1
          },
          mbtiAxis: {
            F: 2,
            I: 1,
            T: -1
          },
          evidence: {
            relational: 1,
            emotional: 1
          },
          positive: 2,
          negative: 1,
          reliability: 1
        }
      },
      {
        id: "core_004_d",
        text:
          "Aku membuka chat lagi, memotong asumsi yang mulai melebar, lalu mengetik, “maksud ‘yaudah’ ini selesai dibahas atau kau masih mau jelasin?”",
        subtleMeaning:
          "Peserta meminta definisi dan kejelasan agar tidak terseret asumsi emosional yang belu
