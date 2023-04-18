import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const Description = () => {
  return (
    <div>
      <h1 className='col-md-8 offset-md-2'> Путь врача-эксперта
в Anti-Age начинается здесь </h1>
        <motion.img 
          width={'15%'}
          src='/img/aae.png'
          alt=''

          animate={{x:-3, rotate:-5}}
          transition={{
          delay:1,
          duration: 5,
          repeat: Infinity,
          repeatDelay: 0.3,
          repeatType:'reverse',
          }}
         />

        <motion.p
          initial={{
          x:-1000,
          opacity:0
          }}
          animate={{
          x:0,
          opacity: 1
          }}
          transition={{
          delay:1,
          duration: 2,
          type: "spring",
          stiffness: 100,
          }}>При участии экспертов Российской Ассоциации Междисциплинарной Антивозрастной Медицины
        </motion.p>
        
        <motion.div id='aae'
          initial={{
          x:1000,
          opacity: 0
          }}
          animate={{
          x:0,
          opacity: 1
          }}
          transition={{
          delay:2,
          duration:2,
          type: "spring",
          stiffness: 100,
          }}
          >
            <motion.img 
          width={'5%'}
          src='/img/banner1.jpg'
          alt=''
          whileHover={{ scale: 1.3 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}/>
          <motion.img 
          width={'5%'}
          src='/img/banner2.jpg'
          alt=''
          whileHover={{ scale: 1.3 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}/>
          <motion.img
          width={'5%'}
          src='/img/banner3.jpg'
          alt=''
          whileHover={{ scale: 1.3 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}/>
          <motion.img 
          width={'5%'}
          src='/img/banner4.jpg'
          alt=''
          whileHover={{ scale: 1.3 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}/>
          <motion.img 
          width={'5%'}
          src='/img/banner5.jpg'
          alt=''
          whileHover={{ scale: 1.3 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}/>
        </motion.div>

      
      <div id='divImg'>
        <motion.div id='div1'
          initial={{
          opacity:0,
          scale:0.5,
          }}
          animate={{
          scale:1,
          opacity:1
          }}
          transition={{
          duration:2,
          }}>
        <motion.p id='p1'
          initial={{
          x:-1000,
          opacity:0
          }}
          animate={{
          x:0,
          opacity: 1
          }}
          transition={{
          delay:2,
          duration: 2,
          type: "spring",
          stiffness: 100,
          }}>Выберите удобный формат обучения:
        </motion.p>
        <motion.img
          src='img/aaeb.png'
          alt='Модульная школа'
          className='ball'
          width={100}
          initial={{
          opacity:1
          }}
          transition={{
          duration:5
          }}
          whileHover={{
          scale:1.5,
          transition:{
          duration:2
          }
          }}/>
        <motion.img
          src='img/aae.png'
          alt='Фундаментальный уровень'
          className='ball'
          width={100}
          initial={{
          opacity:1
          }}
          transition={{
          duration:5
          }}
          whileHover={{
          scale:1.5,
          transition:{
          duration:2
          }
          }}/>
        <motion.img
          src='img/aaer.png'
          alt='Продвинутый уровень'
          className='ball'
          width={100}
          initial={{
          opacity:1
          }}
          transition={{
          duration:5
          }}
          whileHover={{
          scale:1.5,
          transition:{
          duration:2
          }
          }}/>
          <motion.img
          src='img/aaeg.png'
          alt='Экспертный уровень'
          className='ball'
          width={100}
          initial={{
          opacity:1
          }}
          transition={{
          duration:5
          }}
          whileHover={{
          scale:1.5,
          transition:{
          duration:2
          }
          }}/>          
        </motion.div>
      </div>
        <Link exact to={'/form'}>
          <motion.button className='btn btn-primary'
            whileHover={{
            scale:1.1
            }}>Пройти обучение
          </motion.button>
        </Link>
    </div>
  )
}

export default Description