import React from 'react';
import Container from 'react-bootstrap/esm/Container';

const Footer = () => {
  return (
    <div>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className='row row-col-cols-1 row-cols-sm-2 row-cols-md-2 py-0 my-0'>
          <div className='col mb-3'>
            <img src='/img/aae.png' alt=" " className='bi me-2' width={70} height={70}/>
            <p id="ft2">Взрослеть, но не стареть...</p>
          </div>
          <div className='col mb-2 py-2'>
            <ul className='nav flex-column'>
              <li className='nav-item mb-3'>
                <a id="ft1" href="https://antiage-expert.com/ru/terms/">Пользовательское соглашение</a>
              </li>
              <li className='nav-item mb-3'>
                <a id="ft1" href="https://antiage-expert.com/ru/policy/">Политика обработки данных</a>
              </li>
            </ul>
          </div>
        </div>

        <Container>
          <div className="text-center text-md-left">
            <p className="mb-0">
              Copyright &copy; {new Date().getFullYear()}{' '}
              <a id="ft1" href="https://online.antiage-expert.com/">
                Anti-Age Expert
              </a>
            . All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
export default Footer;