import React from 'react';

const Images = () => {
    return ( 
        <div >
            <div style={{marginBottom:"15px"}}>
            <img src={require("../images/tvn1.jpeg")} style={{width:500, height:300, borderRadius:"10px"}} alt="very nice" />
            <img style={{marginLeft:500, width:300, height:400, borderTopLeftRadius:"3px"}} src={require("../images/tvn2.jpeg")} alt="very nice" />
            </div>
            <div style={{textAlign:"center"}}>
            <img src={require("../images/ajanta.jpeg")} alt="very nice" />
            </div>
            <div>
            <img src={require("../images/melilirecep.jpeg")} alt="very nice" />
            </div>
            <div>
            <img src={require("../images/mugguru.jpeg")} alt="very nice" />
            </div>
            <div>
            <img src={require("../images/lilirecep.jpeg")} alt="very nice" />
            </div>
            <div>
            <img src={require("../images/sane2.jpeg")} alt="very nice" />
            </div>
            <div>
            <img src={require("../images/vamsirecep.jpeg")} alt="very nice" />
            </div>
            <div>
            <img src={require("../images/nare.jpeg")} alt="very nice" />
            </div>
            <div>
            <img src={require("../images/vamaish.jpeg")} alt="very nice" />
            </div>
            <div>
            <img src={require("../images/akilil.jpeg")} alt="very nice" />
            </div>
        </div>
    );
}
 
export default Images;