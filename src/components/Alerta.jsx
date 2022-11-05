
import { Alert } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

export default function Alerta() {
  const { alerta } = useBebidas();

  return (
    <div className='px-4 mt-3'>
      {
        (alerta.includes('agregado')) ?
        <Alert variant='success' className='text-uppercase text-center'>{alerta}</Alert>
        :
        <Alert variant='danger' className='text-uppercase text-center'>{alerta}</Alert>
      }
    </div>
  )
}
