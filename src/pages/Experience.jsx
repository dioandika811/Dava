import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { RiHotelFill } from "react-icons/ri";
import { IoIosCafe } from "react-icons/io";
import { IoSchoolSharp } from "react-icons/io5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Experience() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<RiHotelFill />}
          >
            <h3 className="vertical-timeline-element-title">Perjalanan</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hotel Grand Mercure
            </h4>
            <p>
              Pertama kali Saya berkerja di Hotel Grand Mercure Saya berkerja di
              hotel pas waktu SMA saya Berkerja untuk tambahan uang jajan saya
              saya berkerja Pas kelas 3 SMA 2022 bulan 5 Saya dapat kawan baru
              Puji Tuhan kawan saya gk ada dengki sama saya dan mereka sangat
              baik sama saya sampai bulan 10 dah bulan 10 saya berhenti berkerja
              di hotel.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoIosCafe />}
          >
            <h3 className="vertical-timeline-element-title">Perjalanan</h3>
            <h4 className="vertical-timeline-element-subtitle">Cafe</h4>
            <p>
              Saya cari perkejaan lain di cafe saya mudah masuk kerja di cafe
              karena saya ada org dalam jadi saya masuk dan tanggal masuk kerja
              bulan 12 2022 terus saya semangat kali berkerja Karena tambah²
              untuk Jajan saya dan saya berhenti berkerja dh mau tamat Sekolah
              SMA.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">Perjalanan</h3>
            <h4 className="vertical-timeline-element-subtitle">KULIAH</h4>
            <p>
              saya dah tamat SMA saya mencoba Angkatan TNI AD Bintara tanggal 2
              Januari hingga 11 agustus 2023 Tapi saya latihan fisik dan lain
              sebagainya tapi saya tidak Lolos tapi saya tidak mudah menyerah
              Saya mendaftar lgi untuk KIP kuliah Puji Tuhan Saya lolos Di
              Drs.Sofyan Tan dan saya ujian dan saya ambil jurusan informatika
              sekian terima kasih.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
