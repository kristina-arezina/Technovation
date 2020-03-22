import React from 'react';
import MediaQuery from 'react-responsive';

class Name extends React.Component {
  render() {


    return (
      <div>
      <MediaQuery query="(max-width: 1000px)">
      {matches =>
                    matches ? (
            <div style={{paddingTop:"300px", paddingLeft:"80px"}}>
                  <p style={{
                      height:"100px",
                      fontSize:"110px",
                      fontFamily:'Noto Sans SC',
                      marginTop: "80px",
                      marginBottom: "100px",
                      marginRight: "150px",
                      marginLeft: "80px",
                      color:"#3e6c42",
                      backgroundColor:"pink"
                    }}
                      >
                      <b>CARE2EAT</b>
                  </p>
                  <p style={{
                      height:"80px",
                      padding: "40px",
                      fontSize:"60px",
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
                      color:"#6b9b6d"
                  }}
                      >TheurloftheappstoreofCare2Eat.com</p>
            </div>
            ):(

              <div style={{paddingTop:"300px", paddingLeft:"80px"}}>
                    <p style={{
                        height:"100px",
                        fontSize:"110px",
                        fontFamily:'Noto Sans SC',
                        marginTop: "80px",
                        marginBottom: "100px",
                        marginRight: "150px",
                        marginLeft: "80px",
                        color:"#3e6c42"
                      }}
                        >
                        <b>CARE2EAT</b>
                    </p>
                    <p style={{
                        height:"80px",
                        padding: "40px",
                        fontSize:"60px",
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
                      backgroundColor:"#f4f4"
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
                        color:"#6b9b6d"
                    }}
                        >TheurloftheappstoreofCare2Eat.com</p>
              </div>
            )}
               </MediaQuery>

               <MediaQuery query="(max-width: 610)">
               {matches =>
                             matches ? (
                               <div style={{paddingTop:"300px", paddingLeft:"80px"}}>
                                     <p style={{
                                         height:"100px",
                                         fontSize:"110px",
                                         fontFamily:'Noto Sans SC',
                                         marginTop: "80px",
                                         marginBottom: "100px",
                                         marginRight: "150px",
                                         marginLeft: "80px",
                                         color:"blue"
                                       }}
                                         >
                                         <b>CARE2EAT</b>
                                     </p>
                                     <p style={{
                                         height:"80px",
                                         padding: "40px",
                                         fontSize:"60px",
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
                                       backgroundColor:"#f4f4"
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
                                         color:"#6b9b6d"
                                     }}
                                         >TheurloftheappstoreofCare2Eat.com</p>
                               </div>
                             ):(
                               <div style={{paddingTop:"300px", paddingLeft:"80px"}}>
                                     <p style={{
                                         height:"100px",
                                         fontSize:"110px",
                                         fontFamily:'Noto Sans SC',
                                         marginTop: "80px",
                                         marginBottom: "100px",
                                         marginRight: "150px",
                                         marginLeft: "80px",
                                         color:"green"
                                       }}
                                         >
                                         <b>CARE2EAT</b>
                                     </p>
                                     <p style={{
                                         height:"80px",
                                         padding: "40px",
                                         fontSize:"60px",
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
                                       backgroundColor:"#f4f4"
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
                                         color:"#6b9b6d"
                                     }}
                                         >TheurloftheappstoreofCare2Eat.com</p>
                               </div>
                             )}
                             </MediaQuery>
                              </div>

  )}
}

export default Name;
