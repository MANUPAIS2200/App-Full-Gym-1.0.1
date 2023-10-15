import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';

export default function NavigationFooter() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                El Bunker Academia
              </h6>
              <p className='text-small' >
                El bunker Academia y Productora
              </p>
              <p className='text-small' >
                Refugio de artistas
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-center'>Links</h6>
              <p className='text-small'> {/* Aplicar la clase 'text-small' para reducir el tamaño del texto */}
                <a href='#!' className='text-reset'>
                  Clases
                </a>
              </p>
              <p className='text-small'>
                <a href='#!' className='text-reset'>
                  Horarios
                </a>
              </p>
              <p className='text-small'>
                <a href='#!' className='text-reset'>
                  Zonas
                </a>
              </p>
              <p className='text-small'>
                <a href='#!' className='text-reset'>
                  Servicios
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-center'>Nosotros</h6>
              <p className='text-small'> {/* Aplicar la clase 'text-small' para reducir el tamaño del texto */}
                <a href='#!' className='text-reset'>
                  Contacto
                </a>
              </p>
              <p className='text-small'>
                <a href='#!' className='text-reset'>
                  Quienes somos
                </a>
              </p>
              <p className='text-small'>
                <a href='#!' className='text-reset'>
                  
                </a>
              </p>
              <p className='text-small'>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-center'>Contact</h6>
              <p className='text-small'> {/* Aplicar la clase 'text-small' para reducir el tamaño del texto */}
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p className='text-small'> {/* Aplicar la clase 'text-small' para reducir el tamaño del texto */}
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p className='text-small'> {/* Aplicar la clase 'text-small' para reducir el tamaño del texto */}
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p className='text-small'> {/* Aplicar la clase 'text-small' para reducir el tamaño del texto */}
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-small' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold text-small' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
