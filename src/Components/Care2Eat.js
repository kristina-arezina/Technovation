import React from 'react';
import MediaQuery from 'react-responsive';

class Name extends React.Component {
  render() {


    return (
      <div>
      <MediaQuery query="(max-width: 1180px)">
      {matches =>
                    matches ? (
                      // small screen
            <div style={{backgroundColor: "#f4f4f4",opacity: 0.9, paddingTop:"100px", paddingLeft:"20px"}}>
                  <p style={{
                      height:"100px",
                      fontSize:"80px",
                      fontFamily:'Noto Sans SC',
                      marginTop: "80px",
                      marginBottom: "100px",
                      marginRight: "150px",
                      color:"#3e6c42",

                    }}
                      >
                      <b>CARE2EAT</b>
                  </p>
                  <p style={{
                      height:"80px",
                      padding: "40px",
                      fontSize:"40px",
                      fontFamily:"Source Sans Pro', sans-serif"}}
                      >Empowering Sustainable Eating
                  </p>
                  <p style={{
                      fontSize:"25px",
                      height:"50px",
                      padding: "40px",
                      }}
                      >Awareness leading to sustainable food choices which power a better future.</p>
                  <p style={{
                      height:"100px",
                      fontSize:"20px",
                      paddingTop:"80px",
                      color:"#6b9b6d",
                      paddingRight:"200px"
                  }}
                      >TheurloftheappstoreofCare2Eat.com</p>
            </div>
            ):(
// Full Screen
              <div style={{paddingTop:"150px", paddingLeft:"600px"}}>
                    <p style={{
                        height:"100px",
                        fontSize:"110px",
                        fontFamily:'Noto Sans SC',
                        marginTop: "80px",
                        marginBottom: "100px",
                        marginRight: "150px",
                        marginLeft: "800px",
                        color:"#3e6c42"
                      }}
                        >
                        <b>CARE2EAT</b>
                    </p>
                    <p style={{
                        height:"80px",
                        padding: "40px",
                        fontSize:"40px",
                        fontFamily:"Source Sans Pro', sans-serif"}}
                        >Empowering Sustainable Eating
                    </p>
                    <hr style={{display: "block", marginTop: "0.5em",
                      marginBottom: "0.5em",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderStyle: "inset",
                      height:"2px",
                      borderWidth: "1px",
                      backgroundColor:"#3e6c42"
                    }}/>
                    <p style={{
                        fontSize:"25px",
                        height:"50px",
                        padding: "40px",
                        }}
                        >Awareness leading to sustainable food choices which power a better future.</p>
                    <p style={{
                        height:"100px",
                        fontSize:"20px",
                        paddingTop:"80px",
                        color:"#6b9b6d",
                        paddingLeft:"270px",
                    }}
                        >TheurloftheappstoreofCare2Eat.com</p>
              </div>
            )}
               </MediaQuery>


                              </div>

  )}
}

export default Name;
