import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { get } from 'axios';

import HomeLayout from '../layouts/HomeLayout';
import SummaryCard from '../components/SummaryCard';
import CoronaTable from '../components/CoronaTable';
import SEO from '../components/SEO';

const CardDeck = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-device-width: 480px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  img {
    width: 100%;
    margin: 0rem auto;
  }
`;

function KawalCorona() {
  const [data, setData] = useState([]);
  const [indonesiaOnly, setIndonesiaOnly] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAPI = async () => {
    setLoading(true);
    const response = await get('https://api.kawalcorona.com/');
    console.log('isfetching');
    if (response.data) {
      setData(response.data);
      setIndonesiaOnly(
        response.data.find(
          ({ attributes: { Country_Region } }) => Country_Region === 'Indonesia'
        )
      );
    } else {
      setError(response.error || 'Terjadi kesalahan');
      console.error(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

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
          <p>
            Dikutip dari artikel WHO:
            <blockquote>
              "<b>Sejumlah kecil kasus penyakit ini menyebabkan kematian</b>.
              Orang lanjut usia (lansia) dan orang-orang dengan kondisi medis
              yang dimiliki sebelumnya (seperti diabetes dan penyakit jantung)
              terindikasi lebih rentan menderita penyakit yang parah karena
              virus ini."
            </blockquote>
          </p>
          <p>
            Jadi tidak perlu khawatir, karena COVID-19 dapat sembuh. Namun kita
            tidak boleh bodoamat dengan COVID-19 dan sotoy malah sok ngga peduli
            dengan penyakit ini. Tetap harus waspada dengan penyakit COVID-19
            yang dapat menular dengan cepat.
          </p>
          <h2>Beberapa cara sederhana untuk melindungi diri Anda</h2>
          <p>
            <img
              src="https://media.giphy.com/media/d7HWDCV6t72iRm9vPh/giphy.gif"
              alt="wash yo hand"
            />
            <ul>
              <li>Cuci tangan dengan sabun</li>
              <li>
                Pakai masker kalo berhubungan langsung dengan penderita
                COVID-19, kalo sehat wal-alfiat ngga usah bos!
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
          </p>

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
        {!isLoading && indonesiaOnly && indonesiaOnly.attributes && (
          <>
            <h2>
              <span role="img" aria-label="indonesia">
                🇮🇩
              </span>{' '}
              Sebaran COVID-19, di Indonesia:
            </h2>
            <CardDeck>
              <SummaryCard
                headerLabel="Total Positif"
                value={`${indonesiaOnly.attributes.Active} Kasus`}
              />
              <SummaryCard
                headerLabel="Total Sembuh"
                value={`${indonesiaOnly.attributes.Recovered} Kasus`}
              />
              <SummaryCard
                headerLabel="Total Meninggal"
                value={`${indonesiaOnly.attributes.Deaths} Kasus`}
              />
            </CardDeck>
          </>
        )}
        <h2>
          <span role="img" aria-label="world">
            🇮🗺️
          </span>{' '}
          Sebaran COVID-19 Diseluruh Dunia
        </h2>
        <CoronaTable isLoading={isLoading} data={data} />
        <div>
          Powered by <a href="kawalcorona.com">kawalcorona.com</a>
        </div>

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
