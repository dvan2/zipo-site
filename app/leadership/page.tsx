import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import LeaderCard from '@/components/LeaderCard';

const president = {
  name: 'Pu En Khan Khai',
  role: 'President',
  image: '/images/leaders/president.png',
};

const executiveCommittee = [
  {
    name: 'Pu Thang Suan Khup',
    role: 'Vice President',
    image: '/images/leaders/pa_khup.png',
  },
  {
    name: 'Pu Cin Ngaih Suan',
    role: 'Secretary',
    image: '/images/leaders/cin_suan.png',
  },
  {
    name: 'Pu Langh Khan Khual',
    role: 'Treasurer',
    image: '/images/leaders/pulangh_khual.png',
  },
  {
    name: 'Pi Zam Don Kim',
    role: 'Assistant Treasurer',
    image: '/images/leaders/pi_zam_kim.png',
  },
];

const youthDept = [
  {
    name: 'Tg. Lal Hoih Cin',
    role: 'Youth Leader',
    image: '/images/leaders/tg_lal_hoih.png',
  },
  {
    name: 'Tg.Mang Sian Suan Suum',
    role: 'Youth Secretary',
    image: '/images/leaders/tg_mang_suum.png',
  },
  {
    name: 'Lia Ciin Lawh Kim',
    role: 'Youth Tresurer',
    image: '/images/leaders/lia_ciin_kim.png',
  },
];

export default function LeadershipPage() {
  return (
    <Wrapper>
      <PageHeader title='Leadership & Vision' />
      {/* President’s Message */}
      {/* President’s Message - Bilingual */}
      <section className='mt-12 mb-16'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-2xl font-heading font-semibold text-zomi-red text-center mb-8'>
            Message from Our President
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* English Version */}
            <div className='text-gray-800 leading-relaxed'>
              <p className='mb-4'>
                Welcome! Whether you’re part of the Zomi community, a supportive
                friend, or simply curious to learn more — we’re so glad you’re
                here.
              </p>
              <p className='mb-4'>
                Since 2004, ZIPO has been about culture, connection, and
                community. We’re proud of our journey and the heritage we carry.
                Our community is a big, warm family — and there’s always room
                for you in it.
              </p>
              <p className='mb-4'>
                Together, we continue to build a future rooted in unity,
                tradition, and hope. We can’t wait for you to be part of it.
              </p>
              <p className='font-semibold mt-4'>— Pu En Khan Khai, President</p>
            </div>

            {/* Zomi Version */}
            <div className='text-gray-800 leading-relaxed'>
              <p className='mb-4'>
                Dam kim tek maw? Zomi Innkuan Portland Oregon (ZIPO) bup tang
                in, kong muak uh hi.
              </p>
              <p className='mb-4'>
                ZIPO kipawlna pen kum 2004 pan in kipan khia aa, “Portland sung
                ah Zomi te a ding manphatna, ii ngeina, ii pau leh ii lai te
                khantohna ding leh lamsang na ding in nasep na a tuamtuam kinei
                a pawi tuamtuam ki bawl hi. Tua dan ah no te nong ki helna ding
                in Kong zawn nuam hi.”
              </p>
              <p className='font-semibold mt-4'>
                — Pu En Khan Khai, ZIPO Innkuan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Group Photo */}
      <section className='mb-16'>
        <div className='max-w-4xl mx-auto px-4'>
          <img
            src='/images/leaders/leaders_photo.jpg'
            alt='ZIPO Leadership Group Photo'
            className='rounded-xl shadow-md w-full object-cover mb-4'
          />
          <p className='text-sm text-center text-gray-500'>
            Our Zipo Board members at 2025, Zomi National Day
          </p>
        </div>
      </section>

      {/* Executive Committee */}
      <section className='bg-[#fefae0] py-12 sm:py-16'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-2xl font-heading font-semibold text-zomi-red mb-10 text-center'>
            Executive Committee
          </h2>

          {/* President solo card */}
          <div className='flex justify-center mb-6 sm:mb-8'>
            <div className='w-full max-w-xs'>
              <LeaderCard {...president} index={0} />
            </div>
          </div>

          {/* Other members in a grid */}
          <div className='flex justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {executiveCommittee.map((leader, index) => (
                <LeaderCard key={leader.name} {...leader} index={index + 1} />
              ))}
            </div>
          </div>

          <h2 className='text-2xl font-heading font-semibold text-zomi-green mt-16 mb-10 text-center'>
            Youth Department
          </h2>
          <div className='flex justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8'>
              {youthDept.map((leader, index) => (
                <LeaderCard
                  key={leader.name}
                  {...leader}
                  index={index + 1} // continue stagger delay
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
