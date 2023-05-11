import React from 'react';
import {
  advantage1,
  advantage2,
  advantage3,
  advantage4,
  advantage5,
  advantage6

} from "../../utils/images.jsx";

import './advantages.scss'

const Advantages = () => {
  const advantages = [
    {
      'title': 'Всегда тепло и тихо',
      'description': 'Система закрывания гарантирует, что створка будет плотно прижиматься в пяти точках, что обеспечивает полную защиту от сквозняков и улучшает звукоизоляцию.',
      'img' : advantage1
    },
    {
      'title': 'Снижается частота уборки',
      'description': 'Специальный материал ПВХ окон обеспечивает гладкую поверхность, на которой пыль меньше скапливается. Таким образом, очистка окон от грязи и пыли становится реже.',
      'img' : advantage2
    },
    {
      'title': 'Армирование от 1,5 мм',
      'description': 'Окна REHAU оснащены армирующим профилем толщиной 1,5 мм, что превосходит многие аналоги, у которых армирование составляет только 1,2 мм. Благодаря такому улучшению наша конструкция более прочная и надежная. Кроме того, мы предоставляем возможность увеличения толщины армирующего профиля до 1,6 и даже 2 мм.',
      'img' : advantage3
    },
    {
      'title': 'Легко проветривать',
      'description': 'Система микропроветривания делает возможным регулирование степени проветривания ПВХ окон в соответствии с нуждами, не приходится оставлять их полностью открытыми в холодное время года.',
      'img' : advantage4
    },
    {
      'title': 'Защита от взлома',
      'description': 'Собственная безопасность и безопасность жилья - это основные заботы владельцев частных домов и квартир на первых этажах. У нас есть решение - фурнитура с функцией "защита от взлома", которая обеспечивает нашим клиентам надежную защиту.',
      'img' : advantage5
    },
    {
      'title': 'Гарантия 5 лет',
      'description': 'Наши клиенты могут быть уверены в качестве наших пластиковых окон из профиля Rehau, так как мы предоставляем гарантию на 5\u00A0лет вместо стандартных 3-х лет.',
      'img' : advantage6
    },
  ]
  return (
    <div className='advantage'>
      <h2>Основные преимущества наших окон</h2>
      <div className='advantage-wrap wrap'>
        {
          advantages.map((item) => {
            return(
              <div className="advantage-item">
                <div className="advantage-img">
                  <img src={item.img} alt="тепло и тихо"/>
                </div>
                <div className="advantage-text">
                  <h4 className="advantage-text__title">{item.title}</h4>
                  <div className="advantage-text__description">{item.description}</div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  );
};

export default Advantages;