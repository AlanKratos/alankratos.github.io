import i18next from 'i18next';
import ptbr from '../../assets/pt-br.png';
import enus from '../../assets/en-us.png';
import './header.css'

const Lang = () => {
   return (
     <div className='lang'>
        <li type='button' className='btn__lang btn-primary-lang'> <img src={ptbr} height='20' width='20'/></li>
        <li type='button' className='btn__lang btn-primary-lang'> <img src={enus} height='20' width='20'/></li>
     </div>
   )
 }

export default Lang;