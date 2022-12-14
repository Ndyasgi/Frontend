import React, {useEffect} from "react";
import vid from "../assets/video (2).mp4";

import Star from '../assets/star.svg'
import img from '../assets/pantai pulisan.jpg'
import img2 from '../assets/bunaken.jpg'
import img3 from '../assets/pulau lembeh.jpg'
import img4 from '../assets/pulau lihaga.jpeg'
import img5 from '../assets/tangkoko.jpg'
import img6 from '../assets/pinus.jpg'
import img7 from '../assets/patung yesus.jpg'
import img8 from '../assets/bukit larata.jpg'
import img9 from '../assets/bukit doa mahawu.jpg'
import img10 from '../assets/danau linow.jpg'
import img11 from '../assets/tuur maasering.jpg'
import img12 from '../assets/arung jeram.jpg'
import img13 from '../assets/bukit kasih.jpg'
import img14 from '../assets/pantai paal.jpg'
import img15 from '../assets/gunung klabat.jpg'


const Jlajah = () => {

const Data = [
{
    id: 1,
    imgSrc: img,
    nama: "Pantai Pulisan",
    alamat: "Desa Pulisan Kec. Likupang Timur",
    penilaian: "9/10",
    deskripsi: "Pantai Pulisan terkenal dengan sebutannya sebagai “the hidden paradise”, Sebutan ini diberikan karena lokasi dari pantai ini yang tersembunyi. Selain karena keindahan alamnya."
},

{
    id: 8,
    imgSrc: img2,
    nama: "Taman Nasional Bunaken",
    alamat: "Kota Manado, Sulawesi Utara",
    penilaian: "10/10",
    deskripsi: "Taman Nasional Bunaken merupakan kawasan pelestarian ekosistem tropis perairan yang berada di pusat segitiga terumbu karang dunia"
},

{
    id: 9,
    imgSrc: img3,
    nama: "Pulau Lembeh",
    alamat: "Pulau Lembeh, Kota Bitung",
    penilaian: "8/10",
    deskripsi: "Bagi pecinta diving, kamu nggak akan kehabisan spot diving deh kalau liburan ke Sulawesi Utara. Tapi, kalau mencari spot yang paling cantik maka pesona keindahan bawah laut Pulau Lembeh ini tiada duanya."
},

{
    id: 10,
    imgSrc: img4,
    nama: "Pulau Lihaga",
    alamat: "Gangga Satu, Likupang Barat",
    penilaian: "8/10",
    deskripsi: "Walau letaknya jauh dari pusat Kota Manado, keindahan Pulau Lihaga memang susah ditandingi. Hamparan pasir putih bersih yang dikelilingi air biru nan jernih akan seketika menenangkan pikiranmu!"
},

{
    id: 11,
    imgSrc: img5,
    nama: "Taman Nasional Tangkoko",
    alamat: "Pinangunian, Aertembaga, Kota Bitung",
    penilaian: "8/10",
    deskripsi: "Kamu akan dengan mudah menemukan hewan imut ini di sela-sela rimbunnya pepohonan. Gemas sekali. Rasanya ingin dibawa pulang, tapi tidak boleh ya karena hewan ini sudah langka dan harus dilestatrikan"
},

{
    id: 12,
    imgSrc: img6,
    nama: "Hutan Pinus Lahendong",
    alamat: "Jalan Lahendong, Tomohon Selatan",
    penilaian: "8/10",
    deskripsi: "Berada di antara pepohonan pinus yang menjulang tinggi tentu membuat pikiran kita terasa lebih segar. Apalagi bagi kamu yang jenuh dan lelah dengan rutinitas harian yang menyita sebagian besar waktu"
},

{
    id: 13,
    imgSrc: img7,
    nama: "Patung Yesus Memberkati",
    alamat: "Winangun Satu, Kec. Malalayang, Kota Manado",
    penilaian: "8/10",
    deskripsi: "Patung setinggi 30 meter dengan penyangga setinggi 20 meter ini disebut-sebut sebagai sala satu Patung Kristus termegah di dunia, nggak kalah sama yang ada di Rio de Janeiro, Brazil. Dari kejauhan, keindahan patung ini sudah terlihat jelas dengan jubah yang seakan-akan terbang tertiup angin."
},

{
    id: 14,
    imgSrc: img8,
    nama: "Bukit Larata",
    alamat: "Pulisan, Likupang Timur, Kab. Minahasa Utara",
    penilaian: "9/10",
    deskripsi: "Perpaduan antara hijaunya bukit dengan birunya langit dan laut yang membentang di depan mata membuat tempat ini seperti salah satu kepingan surga yang jatuh di salah satu sudut Indonesia."
},

{
    id: 15,
    imgSrc: img9,
    nama: "Bukit Doa Mahawu Tomohon",
    alamat: "Kakaskasen Tiga, Kec. Tomohon Utara, Kota Tomohon",
    penilaian: "10/10",
    deskripsi: "Saking indahnya, tak jarang tempat ini jadi lokasi favorit para para pasangan yang ingin melakukan pemotretan pre-wedding. Bahkan bisa juga kalau ingin melakukan pemberkatan pernikahan di sini karena juga tersedia sebuah kapel nan indah serta gedung berkapasitas 200 orang."
},

{
    id: 16,
    imgSrc: img10,
    nama: "Danau Linow",
    alamat: "Lahendong, Tomohon Sel., Kota Tomohon",
    penilaian: "9/10",
    deskripsi: "Danau ini merupakan danau vulkanik dengan tingkat keasaman yang tinggi sehingga wajar jika kamu mencium bau belerang. Uniknya, warna Danau Linow berubah-ubah tergantung cuaca dan aktivitas belerang di dalamnya. Terkadang danaunya berwarna kehijauan, terkadang biru, dan terkadang campuran antara keduanya bahkan coklat."
},

{
    id: 17,
    imgSrc: img11,
    nama: "Tuur Maasering",
    alamat: "Kumelembuay, Tomohon Timur, Kota Tomohon",
    penilaian: "8/10",
    deskripsi: "Sebuah cafe dengan bangunan yang terbuat dari kayu dan bambu ini memang asyik untuk jadi tempat nongkrong santai bareng teman-teman."
},

{
    id: 18,
    imgSrc: img12,
    nama: "Arung Jeram Desa Timbukar",
    alamat: "Timbukar, Sonder, Kabupaten Minahasa",
    penilaian: "8/10",
    deskripsi: "Sepanjang arung jeram, kamu akan disuguhkan pemandangan sawah, kebun, hutan, pedesaan, dan tebing-tebing serta bebatuan sungai."
},

{
    id: 19,
    imgSrc: img13,
    nama: "Bukit Kasih",
    alamat: "Jl. Kawangkoan-Kanonang, Kec. Kawangkoan Barat, Kab. Minahasa",
    penilaian: "8/10",
    deskripsi: "Tempat ini sebagai pusat spiritual dimana mereka sering bermeditasi atau berkumpul di bukit ini."
},

{
    id: 20,
    imgSrc: img14,
    nama: "Pantai Paal",
    alamat: "Pantai Paal di Desa Marinsow, Likupang Timur",
    penilaian: "9/10",
    deskripsi: "Pantai Paal di Sulawesi Utara ini memiliki hamparan pasir putih dan halus ditambah nuansa warna kontras gradasi air laut."
},

{
    id: 21,
    imgSrc: img15,
    nama: "Gunung Klabat",
    alamat: "Airmadidi, Kab. Minahasa Utara",
    penilaian: "9/10",
    deskripsi: "Ini nih gunung yang wajib kamu taklukan saat berada di Sulawesi Utara. Puncak gunungnya berada di ketinggian 2.100mdpl dan menjadi gunung tertinggi di Sulawesi Utara."
},
]
      
      
        return (
        <div className="main">
            <div className="overlay"></div>
                    <div className="content"></div>
                        
                            <div >
                                <h3 className="font-bold text-3xl text-center flex-col flex my-2 p-7">
                                    Tempat Populer
                                </h3>
                            </div>
                        
                                <div className="h-full  grid grid-cols-3  py-4 px-4 gap-y-2.5 gap-x-2.5">                        
                                {
                                    Data.map(({id, imgSrc, nama, alamat, penilaian, deskripsi})=>{
                                        return(
                                          <div key={id} className="grid border-4 box-border h-30 w-30 py-4 px-4 rounded-xl gap-y-2.5 gap-x-2.5 bg-gradient-to-br">
                                            <div >
                                              <img className="object-cover duration-200 h-full w-full" src={imgSrc} alt={nama} />
                                            </div>
                            
                                            <div >
                                              <h4 className="font-bold">{nama}</h4>
                                              <span >
                                             
                                                <span >{alamat}</span>
                                              </span>
                            
                                              <div >
                                                <div className="grid grid-cols-1 flex-col">
                                                  <p >
                                                  <img className="grid-cols-2 h-5 w-5" src={Star}/>
                                                </p>
                                                {penilaian}
                                                </div>
                                                
                                              </div>
                            
                                              <div >
                                                <p>Deskripsi :</p>
                                                <p>{deskripsi}</p>
                                              </div>
                                        </div>
                                        </div>
                                    )
                                    })
                                }
                                </div>
                        
        </div>
                        
        )
}
  export default Jlajah;