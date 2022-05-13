import * as React from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandSvgIcon from '../../../assets/images/expand.svg';
import CollapseSvgIcon from '../../../assets/images/collapse.svg';
import KnifePng from '../../../assets/images/knife.png';

const Questions = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section id='section-question'>
      <div className='container'>
        <h1 className='title'>Questions</h1>
        <div className='questions-accordion'>
          <div>
            <Accordion className='accordion' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={expanded === 'panel1'?<img src={CollapseSvgIcon} />:<img src={ExpandSvgIcon} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '80%', flexShrink: 0 }}>
                  What are the mint prices?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Mint proceeds will be used to fund our project, we want to create a very powerful brand, and in order to do that we need to keep developing and adding to our utility while scaling and marketing to the world;  aspects of the project such as our marketing campaign, 2nd collection, development of the rebirth function, liquidity pool for $SOULS token and development of our manga, anime, game. The proceeds raised via royalties will mostly be given back to our community through our DAO and its treasury. 
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='accordion' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={expanded === 'panel2'?<img src={CollapseSvgIcon} />:<img src={ExpandSvgIcon} />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: '80%', flexShrink: 0 }}>
                  What is the total supply?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Mint proceeds will be used to fund our project, we want to create a very powerful brand, and in order to do that we need to keep developing and adding to our utility while scaling and marketing to the world;  aspects of the project such as our marketing campaign, 2nd collection, development of the rebirth function, liquidity pool for $SOULS token and development of our manga, anime, game. The proceeds raised via royalties will mostly be given back to our community through our DAO and its treasury. 
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='accordion' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={expanded === 'panel3'?<img src={CollapseSvgIcon} />:<img src={ExpandSvgIcon} />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: '80%', flexShrink: 0 }}>
                  When is the launch?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Mint proceeds will be used to fund our project, we want to create a very powerful brand, and in order to do that we need to keep developing and adding to our utility while scaling and marketing to the world;  aspects of the project such as our marketing campaign, 2nd collection, development of the rebirth function, liquidity pool for $SOULS token and development of our manga, anime, game. The proceeds raised via royalties will mostly be given back to our community through our DAO and its treasury. 
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='accordion' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={expanded === 'panel4'?<img src={CollapseSvgIcon} />:<img src={ExpandSvgIcon} />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: '80%', flexShrink: 0 }}>
                  How do I join the whitelist? 
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Mint proceeds will be used to fund our project, we want to create a very powerful brand, and in order to do that we need to keep developing and adding to our utility while scaling and marketing to the world;  aspects of the project such as our marketing campaign, 2nd collection, development of the rebirth function, liquidity pool for $SOULS token and development of our manga, anime, game. The proceeds raised via royalties will mostly be given back to our community through our DAO and its treasury. 
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='accordion' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary
                expandIcon={expanded === 'panel5'?<img src={CollapseSvgIcon} />:<img src={ExpandSvgIcon} />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
              >
                <Typography sx={{ width: '80%', flexShrink: 0 }}>
                  What happens to mint proceeds and secondary royalties?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Mint proceeds will be used to fund our project, we want to create a very powerful brand, and in order to do that we need to keep developing and adding to our utility while scaling and marketing to the world;  aspects of the project such as our marketing campaign, 2nd collection, development of the rebirth function, liquidity pool for $SOULS token and development of our manga, anime, game. The proceeds raised via royalties will mostly be given back to our community through our DAO and its treasury. 
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className='content'>
          <img src={KnifePng} alt='no Knife' />
        </div>
      </div>
    </section>
  );
};

export default Questions;
