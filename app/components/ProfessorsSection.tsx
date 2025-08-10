import { fetchProfessors } from '@/app/lib/data';
import ProfessorsList from './ProfessorsList';

export default async function ProfessorsSection() {

  const professors = await fetchProfessors();

  return (
    <section className="professors-section" id="section-professors">
      <div className="container">
        <h2 className="section__headline">Преподаватели</h2>
        <p className="section__description">Опытные маги и ведьмы, мастера своего дела, которые обучают учеников магии, передавая знания, традиции и секреты волшебного мира.</p>

        <div className="swiper professors-slider">
          <div className="swiper-wrapper">
            <ProfessorsList professors={professors}/>  
          </div>
        </div>
      </div>
    </section>     
  );
}