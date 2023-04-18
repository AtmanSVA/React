import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Main = () => {
  return (
    <div className="row">
      <div className="col py-4 px-3 my-3 mx-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./img/1.jpg" />
        <Card.Body>
          <Card.Title className="title">Модуль 1</Card.Title>
          <Card.Text>
            Основы работы в Anti-Age медицине. Физиология и патология детокса организма.
          </Card.Text>
          <Button variant="primary">Купить</Button>
        </Card.Body>
      </Card>
      </div>
      <div className="col py-4 px-3 my-3 mx-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./img/2.jpg" />
        <Card.Body>
          <Card.Title className="title">Модуль 2</Card.Title>
          <Card.Text>
            Баланс жирных кислот в антивозрастной медицине. Фазы детокса и взаимосвязь с основными метаболическими путями организма.
          </Card.Text>
          <Button variant="primary">Купить</Button>
        </Card.Body>
      </Card>
      </div>
      <div className="col py-4 px-3 my-3 mx-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./img/3.jpg" />
        <Card.Body>
          <Card.Title className="title">Модуль 3</Card.Title>
          <Card.Text>
            Метаболические циклы в Anti-Age. Патофизиология возрастных изменений.
          </Card.Text>
          <Button variant="primary">Купить</Button>
        </Card.Body>
      </Card>
      </div>
      <div className="col py-4 px-3 my-3 mx-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./img/4.jpg" />
        <Card.Body>
          <Card.Title className="title">Модуль 4</Card.Title>
          <Card.Text>
            Физиопатология надпочечников и гипоталямо-гипофизарной системы. Нейромедиаторы. Интегративная нейрофизиология. Физиопатология дегенеративных заболеваний головного мозга. 
          </Card.Text>
          <Button variant="primary">Купить</Button>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}
export default Main;