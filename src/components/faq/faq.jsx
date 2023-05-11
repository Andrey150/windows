import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './faq.scss'

const Faq = () => {
  return (
    <div className='faq'>
      <div className='wrap'>
        <Accordion className='tab'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography><h3>Какую толщину профиля можно заказать? </h3></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="tab-content">
              <h4 >Окна производятся из 60 профиля (3, 4 камерный) из 70 профиля (5 камерный) и из 80 профиля (6 камерный) </h4>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='tab'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography><h3>Какие могут быть цвета оконного профиля?</h3></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <h4>У нас большой выбор ламинации. (одно и двух сторонней). Так же есть возможность сделать выкрас в любой цвет по каталогу RAL.</h4>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='tab'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography><h3>Какую фурнитуру используете?</h3></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <h4>На наши конструкции мы устанавливаем немецкую фурнитуру Siegenia, которая зарекомендовала себя на рынке как одна из самых качественных и надежных.</h4>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='tab'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography><h3>Что такое мультифункционал?</h3></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <h4>Мультифункционал – специальное напыление, благодаря которому излишки солнечного света отражаются от окна и не попадают в дом не перегревая помещение летом.
                Зимой же данное напыление препятствует выходу тепла из дома, благодаря чему будет сохраняться комфортная температура помещения с наименьшим воздействием снаружи.</h4>
            </Typography>
          </AccordionDetails>
        </Accordion>
    </div>
    </div>
  );
};

export default Faq;