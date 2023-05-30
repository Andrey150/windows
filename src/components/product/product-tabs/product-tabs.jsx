import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {sale} from '../../../utils/images.jsx';

import './product-tabs.scss'

const TabPanel = ({children, value, index, }) => {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs = ({manufacturer, description}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Blitz" {...a11yProps(0)} />
          <Tab label="Grazio" {...a11yProps(1)} />
          <Tab label="Delight" {...a11yProps(2)} />
          <Tab label="Intelio" {...a11yProps(3)} />
          <Tab label="Geneo" {...a11yProps(4)} />
        </Tabs>
      </Box>
      {Object.values(description).map((desc, descIdx) => (
        <div className="product-wrap" key={descIdx}>
          <TabPanel value={value} index={descIdx}>
            {desc.map((el, elIdx) => (
              <div className='product-description' key={elIdx}>
                <h2>{el.windowTitle}</h2>
                <h4>{el.windowSubtitle}</h4>
                <p>{el.description}</p>
              </div>
            ))}
            {Object.values(manufacturer)[descIdx].map((item) => (
              <div className="product-item" key={item.id}>
                <div className="product-item__img">
                  <img src={item.img} alt={item.alt}/>
                </div>
                <div className="product-item__header">
                  <h4 className="product-item__header-title">{item.title}</h4>
                  <h4 className="product-item__header-price">
                    {item.price}
                    <span className='product-item__header-sale'>
                      <img src={sale} alt="sale"/>
                    </span>
                  </h4>
                </div>
                <div className="product-item__characteristics">
                  <div className="product-item__characteristics-description">
                    <p>Размер окна</p><span/><p>{item.size}</p>
                  </div>
                  {
                    item.doorSize ? <div className="product-item__characteristics-description"><p>Размер Двери</p><span/><p>{item.doorSize}</p></div> : null
                  }
                  <div className="product-item__characteristics-description">
                    <p>Системная глубина</p><span/><p>{item.systemDepth}</p>
                  </div>
                  <div className="product-item__characteristics-description">
                    <p>Воздушные камеры</p><span/><p>{item.airChambers}</p>
                  </div>
                  <div className="product-item__characteristics-description">
                    <p>Толщина стеклопакета</p><span/><p>{item.glassThinkness}</p>
                  </div>
                </div>
                <a className='product-item__button button' href={item.message}>Подробнее</a>
              </div>
            ))}
          </TabPanel>
        </div>
      ))}

    </Box>
  );
}

export default BasicTabs;
