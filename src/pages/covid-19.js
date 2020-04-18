import React from 'react';
import styled from 'styled-components';

import HomeLayout from '../layouts/HomeLayout';
import SEO from '../components/SEO';

const ContentWrapper = styled.div`
  img {
    width: 100%;
    margin: 0rem auto;
  }
`;

function KawalCorona() {
  return (
    <HomeLayout>
      <SEO
        title={'Waspada Corona'}
        description={'Informasi mengenai Virus Corona dan COVID-10'}
        pathname={'covid-19'}
      />
      <ContentWrapper>
        <article>
          <h2>Apa itu COVID-19?</h2>
          <p>
            COVID-19 merupakan penyakit yang disebabkan oleh virus Corona yang
            bisa menyebabkan gangguan pada sistem pernapasan, pneumonia akut,
            sampai kematian. Penyebaran Virus ini sangatlah cepat karena virus
            ini dapat menyebar melalui percikan ludah, bersin ataupun batuk dari
            pasien yang terkena COVID-19.
          </p>

          <p>Gejala dari COVID-19:</p>
          <ul>
            <li>demam</li>
            <li>rasa lelah</li>
            <li>batuk kering</li>
            <li>kesulitan bernafas</li>
          </ul>
          <p>
            Jika anda mengalami gejala tersebut sebaiknya periksakanlah ke
            dokter.
          </p>
          <h2>Tidak Perlu Panik</h2>
          <p>Dikutip dari artikel WHO:</p>
          <blockquote>
            "<b>Sejumlah kecil kasus penyakit ini menyebabkan kematian</b>.
            Orang lanjut usia (lansia) dan orang-orang dengan kondisi medis yang
            dimiliki sebelumnya (seperti diabetes dan penyakit jantung)
            terindikasi lebih rentan menderita penyakit yang parah karena virus
            ini."
          </blockquote>

          <p>
            Jadi tidak perlu khawatir, karena COVID-19 dapat sembuh. Namun kita
            tidak boleh bodoamat dengan COVID-19 dan sotoy malah sok ngga peduli
            dengan penyakit ini. Tetap harus waspada dengan penyakit COVID-19
            yang dapat menular dengan cepat.
          </p>
          <h2>Beberapa cara sederhana untuk melindungi diri Anda</h2>

          <img
            src="https://media.giphy.com/media/d7HWDCV6t72iRm9vPh/giphy.gif"
            alt="wash yo hand"
          />
          <ul>
            <li>Cuci tangan dengan sabun</li>
            <li>
              Pakai masker kalo berhubungan langsung dengan penderita COVID-19,
              kalo sehat wal-alfiat ngga usah bos!
            </li>
            <li>
              Jangan sentuh muka sebelum cuci tangan, untuk menghindari
              terhirupnya partikel yang menempel di tangan.
            </li>
            <li>
              Jika ngga penting-penting amat, ngga usahlah keluar rumah, atau
              ngumpul ditempat yang ramai.
            </li>
          </ul>

          <h2>#dirumahAja</h2>
          <img
            src="https://media.giphy.com/media/Qu1fT51CG14ksIkASL/giphy.gif"
            alt="flatten the curve"
          />
          <p>
            Salah satu cara untuk melindungi diri adalah dengan social
            distancing dan mengurangi kontak dengan keramaian. Karena dengan
            cara ini kita dapat mengurangi kemungkinan kita terpapar virus.
          </p>
        </article>

        <h2>Panic Buying is a Stupid Move</h2>
        <img
          src="https://media.giphy.com/media/kE3eXBrZtqnEenJ3k9/giphy.gif"
          alt="corona dude is on the move"
        />
        <p>
          Mempersiapkan untuk kemungkinan terburuk memang penting, namun bukan
          berarti kita harus memborong seluruh makanan yang ada di supermarket,
          atau menimbun banyak alat medis untuk melindungi diri seperti masker,
          surgical gloves atau hand sanitizer.
        </p>
        <p>
          Tindakan membeli barang yang berlebihan atau bahasa kerennya, 'Panic
          Buying' ini justru memperparah keadaan yaitu seperti kurangnya stok
          sehingga tenaga medis yang justru paling sering berinteraksi dengan
          pasien COVID-19 tak dapat melindungi diri mereka, dan harga makin naik
          sampai ke batas yang tak wajar.
        </p>

        <p>Keep healthy, stay at home and wash yo hands friends!</p>

        <h2>Untuk penimbun Masker, Hand Sanitizer, dan Surgical Gloves</h2>
        <img
          src="https://media.giphy.com/media/Y3pdRhPgKjoH8VQ8TE/giphy.gif"
          alt="evil"
        />
        <h4>
          You deserved to be sent into deepest level of HELL and burned in HELL
        </h4>
      </ContentWrapper>
    </HomeLayout>
  );
}

export default KawalCorona;
