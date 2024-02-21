import React from 'react';
import './invhome.css';
import Navbar from '../../components/navbar/navbar';

function invhome() {
  return (
    <div className='invhome'>
       <Navbar />
       <div className='widget-box'>

        <div className='widget-upper'>

            <div className='widget'>
              <div className='left'>
                <span className='title'>TOTAL NUMBER OF ITEMS IN INVENTORY</span>
              </div>
              <div className='right'>
                <span className='val'>value1</span>
              </div>
            </div>
            <div className='widget'>
              <div className='left'>
                <span className='title'>title2</span>
              </div>
              <div className='right'>
                <span className='val'>value2</span>
              </div>
            </div>
            <div className='widget'>
              <div className='left'>
                <span className='title'>title3</span>
              </div>
              <div className='right'>
                <span className='val'>value3</span>
              </div>
            </div>
            <div className='widget'>
              <div className='left'>
                <span className='title'>title4</span>
              </div>
              <div className='right'>
                <span className='val'>value4</span>
              </div>
            </div>
            {/* <div className='widget'>
              <div className='left'>
                <span className='title'>title5</span>
              </div>
              <div className='right'>
                <span className='val'>value5</span>
              </div>
            </div> */}

        </div>


        <div className='widget-lower'>

            <div className='widget'>
              <div className='left'>
                <span className='title'>title6</span>
              </div>
              <div className='right'>
                <span className='val'>value6</span>
              </div>
            </div>
            <div className='widget'>
              <div className='left'>
                <span className='title'>title7</span>
              </div>
              <div className='right'>
                <span className='val'>value7</span>
              </div>
            </div>
            <div className='widget'>
              <div className='left'>
                <span className='title'>title8</span>
              </div>
              <div className='right'>
                <span className='val'>value8</span>
              </div>
            </div>
            <div className='widget'>
              <div className='left'>
                <span className='title'>title9</span>
              </div>
              <div className='right'>
                <span className='val'>value9</span>
              </div>
            </div>
            {/* <div className='widget'>
              <div className='left'>
                <span className='title'>title10</span>
              </div>
              <div className='right'>
                <span className='val'>value10</span>
              </div>
            </div> */}

        </div>

       </div>
    </div>
  )
}

export default invhome