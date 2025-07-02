import "../styles/About.css";
import { FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Haiii !! Saya Dava Cristovel Tamatan dari SMA Katolik Mariana Medan,
          Jurusan IPA Dan sekarang berkuliah di Universitas Satya Terra Bhinneka
          Dengan Prodi Informatika Alasan saya memilih prodi ini karena memiliki
          prospek lapangan kerja yg lumayan banyak. saya pikir di prodi
          Informatika akan terasa mudah namun nyatanya tidak seperti itu. <br />
        </p>
        <p>
          Di prodi ininsaya di ajarkan tentang ilmu dan mampu harus bisa
          coodingan selain itu saya juga aktif dalam berbagai kegiatan Kampus,
          baik akademik maupun non-akademik seperti organisasi kemahasiswaan,
          pelatihan, dan kegiatan lainnya. hal ini menjadi bekal saya untuk
          menjadi org sukses.
        </p>
        <h4>Programming Language & Tools</h4>
        <div className="skills">
          <FaFigma />
          <FaReact />
          <FaHtml5 />
          <FaCss3Alt />
          <FaJava />
          <IoLogoJavascript />
        </div>
      </div>
    </section>
  );
}

export default About;
