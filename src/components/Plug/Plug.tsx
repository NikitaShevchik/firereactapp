import { PlugProps } from '../../types/types';

const Plug = ({ wdth }: PlugProps) => (
  <div style={{ width: `${wdth}%`, height: '100%', backgroundColor: '#09090c' }}></div>
);

export default Plug;
