import BtnSelect1Svg from './assets/images/btn-select-1.svg';
import BtnSelect2Svg from './assets/images/btn-select-2.svg';
import BtnSelect3Svg from './assets/images/btn-select-3.svg';
import BtnSelect4Svg from './assets/images/btn-select-4.svg';
import BtnSelect5Svg from './assets/images/btn-select-5.svg';
import BtnSelect6Svg from './assets/images/btn-select-6.svg';
import TeamImage1 from './assets/images/teammate_1.png';
import TeamImage2 from './assets/images/teammate_2.png';
import TeamImage3 from './assets/images/teammate_3.png';
import TeamImage4 from './assets/images/teammate_4.png';
import StakeSvg from './assets/images/stake.svg';
import RebirthSvg from './assets/images/rebirth.svg';
import BurnSvg from './assets/images/burn.svg';

import BoBuSuzukiPng from './assets/images/bobu-szuki.png';
import BurnningGif from './assets/images/Burning.gif';
import StakingGif from './assets/images/Staking.gif';
import RebirthGit from './assets/images/Rebirth.gif';
import AnimGif0 from './assets/images/Animations0.png';
import AnimGif1 from './assets/images/Animations1.gif';
import AnimGif2 from './assets/images/Animations2.gif';
import AnimGif3 from './assets/images/Animations3.gif';
import AnimGif4 from './assets/images/Animations4.gif';
import AnimGif5 from './assets/images/Animations5.gif';
import AnimGif6 from './assets/images/Animations6.gif';

export const KANE_ITEMS = [
  {
    id: 0,
    title: 'Standing',
    imgSrc: BtnSelect1Svg,
    animSrc: AnimGif0,
  },
  {
    id: 1,
    title: 'Wizard',
    imgSrc: BtnSelect1Svg,
    animSrc: AnimGif1,
  },
  {
    id: 2,
    title: 'Samurai',
    imgSrc: BtnSelect2Svg,
    animSrc: AnimGif2,
  },
  {
    id: 3,
    title: 'Knight',
    imgSrc: BtnSelect3Svg,
    animSrc: AnimGif6,
  },
  {
    id: 4,
    title: 'Archer',
    imgSrc: BtnSelect4Svg,
    animSrc: AnimGif4,
  },
  {
    id: 5,
    title: 'Assassin',
    imgSrc: BtnSelect5Svg,
    animSrc: AnimGif3,
  },
  {
    id: 6,
    title: 'Enlightened',
    imgSrc: BtnSelect6Svg,
    animSrc: AnimGif5,
  },
];

export const PROTOCOL_ITEMS = [
  {
    id: 'stake',
    title: 'statke',
    imgSrc: StakingGif,
    description: 'Earn for holding. Utilizing the staking function will grant $SOULS in daily rewards, the amount received via staking will be calculated based on the rarity of your NFT(s).',
    class: 'row-reverse'
  },
  {
    id: 'burn',
    title: 'burn',
    imgSrc: BurnningGif,
    description: 'Extinguish the light of The Tarnished in exchange for $SOULS.The amount you receive from the burn is calculated algorithmically based on rarity parameters of any given NFT.',
    class: ''
  },
  {
    id: 'rebirth',
    title: 'rebirth',
    imgSrc: RebirthGit,
    description: 'Rebirthing is a unique function designed to allow members more power over the customization of The Tarnished. You can rebirth and potentially turn your common into something rarer. Rebirthing is a dynamic function that will later allow further customization of traits in the future. ',
    class: 'row-reverse'
  },
];

export const TEAMMATES = [
  {
    id: 1,
    name: 'John Doe',
    imgSrc: TeamImage1,
    description: 'Game Developer',
  },
  {
    id: 2,
    name: 'John Doe',
    imgSrc: TeamImage2,
    description: 'Game Developer',
  },
  {
    id: 3,
    name: 'John Doe',
    imgSrc: TeamImage3,
    description: 'Game Developer',
  },
  {
    id: 4,
    name: 'John Doe',
    imgSrc: TeamImage4,
    description: 'Game Developer',
  },
];
