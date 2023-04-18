import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div>
    <Carousel>
    <Carousel.Item interval={3000}>
      <img width={'100%'} height={'100%'}
        className="d-block w-100"
        src="./img/first.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Более 30 лет научного и клинического опыта</h3>
        <p>Признанная во всем мире школа Anti-Age медицины для врачей всех специальностей</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img width={'100%'} height={'100%'}
        className="d-block w-100"
        src="./img/second.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Путь врача-эксперта в Anti-Age начинается здесь</h3>
        <p>При участии экспертов Российской Ассоциации Междисциплинарной Антивозрастной Медицины</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img  width={'100%'}height={'100%'}
        className="d-block w-100"
        src="./img/third.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Аккредитация в Медицинском Университете Парижа - UPEC</h3>
        <p>Научное ядро международной школы Anti-Age Expert - это активно практикующие врачи и ученые с мировым именем</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img  width={'100%'}height={'100%'}
        className="d-block w-100"
        src="./img/fourth.jpg"
        alt="Fourth slide"
      />
      <Carousel.Caption>
        <h3>Будущее современной клиники</h3>
        <p>Сообщество Anti-Age Expert объединяет врачей 100+ специальностей из разных уголков мира</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img  width={'100%'}height={'100%'}
        className="d-block w-100"
        src="./img/fifth.jpg"
        alt="Fifth slide"
      />
      <Carousel.Caption>
        <h3>Anti-Age Expert</h3>
        <p>Интенсивный разбор сложных клинических случаев и инноваций в Anti-Age медицине</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img  width={'100%'}height={'100%'}
        className="d-block w-100"
        src="./img/sixth.jpg"
        alt="Fifth slide"
      />
      <Carousel.Caption>
        <h3>Anti-Age Expert</h3>
        <p>Глубинное изучение всех процессов организма с точки зрения Anti-Age медицины</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider