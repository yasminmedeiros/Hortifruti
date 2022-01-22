import React from 'react';

function Footer() {
    return (
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#b1f089',
          fontFamily:'roboto',
          borderTop:'4px solid black'
        }}
      >
       
        <div style={{
          margin:'2% 2%',
          backgroundColor: '#b1f089',
          width:'85%',
          height:'auto',
        }}>
          <div style={{
            margin: '0px 0px',
            border:"solid 20px #b1f089",
            
          }}>
            <div style={{
              height:'100%',
              padding: '0px 0px',
              margin:'0px 0px 0px 0px',
              backgroundColor:'#f1f1f1',              
              textAlign: 'center',
              border:'4px solid black',
	            borderRadius:'20px',
            }}>
                <h1 style={{
                    backgroundColor:"#f1f1f1",
                    fontSize:'5vh',
                    fontWeight: 'bold', 
                    
                }}>Contate-nos</h1>
                <h2 style={{
                    backgroundColor:"#f1f1f1",
                    fontSize:'3vh',
                }}> Email: hortifruti@gmail.com</h2>
                <h2 style={{
                    backgroundColor:"#f1f1f1",
                    fontSize:'3vh',
                }}>Telefone: (81) 99964-9841</h2>
                

            </div>
            
          </div>
          
        </div>
     </div>
    )
}

export default Footer;
