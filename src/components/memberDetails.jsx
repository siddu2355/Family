// import React, {Component} from 'react';
// import {FaPhoneAlt} from "react-icons/fa";

// class MemberDetails extends Component {
//     state={
//     members : [
//         {
//           _id: "626e442596aed580569905e8",
//           name: "Abhigna Reddy Abaka",
//           age: 32,
//           gender: "Female",
//           catogery: {
//             name: "Adult",
//             _id: "626e0c73448feaa655a8386c",
//           },
//           desc: "Abhigna Reddy dudda was born on 26-April-1990 to Srinivasulu reddy dudda and Naveena.she has a brother named Chiranjeevi kumar. Abhigna got married to Naresh kumar Abaka.one of the best cooks in our family",
//           phone: "7032641990",
//           image: "images/abhi.jpeg",
//         },
//         {
//           _id: "626e478496aed580569905f4",
//           name: "Aishwarya Reddy sivadi",
//           age: 28,
//           gender: "Female",
//           catogery: {
//             name: "Adult",
//             _id: "626e0c73448feaa655a8386c",
//           },
//           desc: "Aishwarya reddy sivadi is the Wife of Vamsi krishna reddy sivadi.",
//           phone: "6301742238",
//           image: "images/aishu.jpeg",
//         },
//         {
//           _id: "626e47f496aed580569905f8",
//           name: "Akhila Reddy Abaka",
//           age: 28,
//           gender: "Female",
//           catogery: {
//             name: "Adult",
//             _id: "626e0c73448feaa655a8386c",
//           },
//           desc: "Akhila reddy abaka was born to sudhakar reddy and Suhasini, she also has a brother named Hari. Akhila Reddy got married to leela mohan abaka and they have a daughter named Hemitha sree.",
//           phone: "8309258826",
//           image: "images/akhilamain.jpeg",
//         },
//         {
//           _id: "626e52ae96aed58056990782",
//           name: "Balram Reddy Abaka",
//           age: 60,
//           gender: "Male",
//           catogery: {
//             name: "Senior Citizen",
//             _id: "626e0faa448feaa655a8387f",
//           },
//           desc: "Balaram Reddy Abaka born to Sarojinamma .Hope that he will get well soon",
//           phone: "9441242227",
//           image: "images/balaram.jpeg",
//         },
//         {
//           _id: "626e77b1aebc285f3e074528",
//           name: "Barathi Sivadi",
//           age: 55,
//           gender: "Female",
//           catogery: {
//             name: "Senior Citizen",
//             _id: "626e0faa448feaa655a8387f",
//           },
//           desc: "Barathi got married to Subramanyam Reddy. they have two siblings Vamsi krishna, Sunil.",
//           phone: "9441653970",
//           image: "images/barathi.jpeg",
//         },
//         {
//           _id: "626e176d988f5cb5f4a21048",
//           name: "Charan sai reddy Sirasanambeti",
//           age: 11,
//           gender: "Male",
//           catogery: {
//             name: "Kid",
//             _id: "626e0bf4448feaa655a83867",
//           },
//           desc: "Charan Sai Reddy was Born on 18-November-2010 to Satish Reddy and Neeraja. he is the one in our family who does 14 types of rubix cubes.and expert in skating. ",
//           phone: "no number",
//           image: "images/charan.jpeg",
//         },
//         {
//           _id: "626e1879988f5cb5f4a2104c",
//           name: "Hemitha sree Abaka",
//           age: 1,
//           gender: "Female",
//           catogery: {
//             name: "Kid",
//             _id: "626e0bf4448feaa655a83867",
//           },
//           desc: "Hemitha Reddy Abaka was Born on 28-January-2021 to Leela Mohan and Akhila. yet to explore... ",
//           phone: "no number",
//           image: "images/hemi.jpeg",
//         },
//         {
//           _id: "626e25cf988f5cb5f4a21064",
//           name: "Leela Mohan Abaka",
//           age: 33,
//           gender: "Male",
//           catogery: {
//             name: "Adult",
//             _id: "626e0c73448feaa655a8386c",
//           },
//           desc: "Leela Mohan abaka is very much much much knowm for his 'hand hold' he is born on 16-May-1988 to balaram reddy and prasuna. married too Akhila Reddy on 2019 and blessed with a baby girl on 2021.",
//           phone: "7799299599",
//           image: "images/lili.jpeg",
//         },
//         {
//           _id: "626e52fe96aed58056990786",
//           name: "Naresh Kumar Abaka",
//           age: 36,
//           gender: "Male",
//           catogery: {
//             name: "Senior Citizen",
//             _id: "626e0faa448feaa655a8387f",
//           },
//           desc: "Naresh Kumar Abaka Born on 26-april-1986 to Balaram Reddy and Prasuna. Naresh kumar is Famous for long jump, high jump, cooking hot water, what to say name anything he's expert in it.",
//           phone: "7032641986",
//           image: "images/poster.jpeg",
//         },
//         {
//           _id: "626e22ef988f5cb5f4a2105c",
//           name: "Neeraja Reddy Sirasanambeti",
//           age: 34,
//           gender: "Female",
//           catogery: {
//             name: "Adult",
//             _id: "626e0c73448feaa655a8386c",
//           },
//           desc: "Neeraja Reddy Gaddam Born on 27-september-1987 to Sudhakar Reddy and Sulochana, and yet became Neeraja reddy sirasanambeti after marrying Satish Reddy Sirasanambeti. The curries made by her before 20 years are still remembered by satish reddy. but now she is one of the best cook in our family",
//           phone: "9182597234",
//           image: "images/pinni.jpeg",
//         },
//         {
//           _id: "626e2cce988f5cb5f4a21070",
//           name: "Prasuna reddy Gaddam",
//           age: 57,
//           gender: "Female",
//           catogery: {
//             name: "Senior Citizen",
//             _id: "626e0faa448feaa655a8387f",
//           },
//           desc: "Prasuna Reddy Sivadi was born to Shankar Reddy Sivadi and Subharatnamma, married to balaram reddy abaka. due to transfers of balaram reddy they used to live in different states like orissa, tamil nadu, kerala..., But She is Known for his 'chapati'.",
//           phone: "9490365372",
//           image: "images/akhila1.jpeg",
//         },
//         {
//           _id: "626e1d2a988f5cb5f4a21058",
//           name: "Satish Reddy Sirasanambeti",
//           age: 43,
//           gender: "Male",
//           catogery: {
//             name: "Adult",
//             _id: "626e0c73448feaa655a8386c",
//           },
//           desc: "Satish Reddy Sirasanambeti Born to Sidda Reddy and Haimavathi. He always be funny with all of them and cracks jokes all time. the best thing he did in his life is marriying Neeraja Reddy. ",
//           phone: "9848148770",
//           image: "images/sati.jpeg",
//         },
//         {
//           _id: "626e37b2988f5cb5f4a210cd",
//           name: "Srinivasulu reddy Sirasanambeti",
//           age: 48,
//           gender: "Male",
//           catogery: {
//             name: "Adult",
//             _id: "626e0c73448feaa655a8386c",
//           },
//           desc: "Srinivasulu Reddy sirasanambeti eppudu puttado telidu oka 1970 eskundam, born to venu reddy sirasanambeti and ratnamma, living in nellore currently.",
//           phone: "9381107958",
//           image: "images/nanna.jpeg",
//         },
//         {
//           _id: "626e7657aebc285f3e074510",
//           name: "Subramanyam Reddy",
//           age: 60,
//           gender: "Male",
//           catogery: {
//             name: "Senior Citizen",
//             _id: "626e0faa448feaa655a8387f",
//           },
//           desc: "Subramanyam reddy is the son of Shankar Reddy and Subharatnamma, he is the only son and has two sisters sulochana and prasuna. Subramanyam Reddy got married to Barathi. they have two siblings Vamsi krishna, Sunil.",
//           phone: "9441653970",
//           image: "images/mani.jpeg",
//         },
//         {
//           _id: "626e78a3aebc285f3e07452e",
//           name: "Sirasanambeti Siddu Reddy",
//           age: 18,
//           gender: "Male",
//           catogery: {
//             name: "Infant",
//             _id: "626e7864aebc285f3e07452b",
//           },
//           desc: "You Tell about Me!!!.",
//           phone: "9391198374",
//           image: "images/siddu3.jpeg",
//         },
//         {
//           _id: "626e27f8988f5cb5f4a21068",
//           name: "Sudhakar reddy Gaddam",
//           age: 60,
//           gender: "Male",
//           catogery: {
//             name: "Senior Citizen",
//             _id: "626e0faa448feaa655a8387f",
//           },
//           desc: "Sudhakar reddy was born to Krishna reddy on 1963. and married to sulochana which his best decision of life that he ever took.he is probably known for his anger",
//           phone: "9492934795",
//         },
//         {
//           _id: "626e29de988f5cb5f4a2106c",
//           name: "Sulochana reddy Gaddam",
//           age: 57,
//           gender: "Female",
//           catogery: {
//             name: "Senior Citizen",
//             _id: "626e0faa448feaa655a8387f",
//           },
//           desc: "Sulochana reddy Sivadi was born to Shankar reddy and Subharatnamma on 1965. and married to Sudhakar Reddy Gaddam and became Sulochana Reddy Gaddam. ",
//           phone: "9381682988",
//           image: "images/sulo.jpeg",
//         },
//         {
//           _id: "626e46b696aed580569905f0",
//           name: "Vamsi Krishna Reddy sivadi",
//           age: 32,
//           gender: "Male",
//           catogery: {
//             name: "Adult",
//             _id: "626e0c73448feaa655a8386c",
//           },
//           desc: "Vamsi krihna reddy born to Subramanyam reddy sivadi and Barathi. He is the only one from our family to enter IIT. even today if you go to him and ask to explain the topics of intermediate he'll do it without question...",
//           phone: "7780750669",
//           image: "images/vamsi.jpeg",
//         },
//         {
//           _id: "626e1a16988f5cb5f4a21054",
//           name: "Vishnu vardhan Reddy Sirasanambeti",
//           age: 16,
//           gender: "Male",
//           catogery: {
//             name: "Kid",
//             _id: "626e0bf4448feaa655a83867",
//           },
//           desc: "Vishnu Vardhan Reddy Sirasanambeti was Born on 31-July-2016 to Satish Reddy and Neeraja. Vishnu is very good at games such as shuttle, basket ball, even out-out no one can catch him... ",
//           phone: "no number",
//           image: "images/vishnu.jpeg",
//         },
//         {
//           _id: "626e18ef988f5cb5f4a21050",
//           name: "Yukthi reddy Abaka",
//           age: 6,
//           gender: "Female",
//           catogery: {
//             name: "Kid",
//             _id: "626e0bf4448feaa655a83867",
//           },
//           desc: "Yukthi Reddy Abaka was Born on 8-January-2016 to Naresh kumar and Abhigna. at the age of 6 only she does 3X3 rubiks cube, but cries out loud at the time of playing carroms. ",
//           phone: "no number",
//           image: "images/yukthi1.jpeg",
//         },
//       ],
//     }
    
//     componentDidMount(){
//         const member = this.state.members.filter(m => m._id === this.props.match.params.id);
//         this.setState({member})
//     }
    
//     render() {
//         console.log(this.state.member)
//         return (
//             <div className='container' style={{textAlign:"center", padding:80}}>
//                <img src={this.state.member.image} alt="img of member" style={{
//                 borderRadius:25,
//                 marginRight:10, 
//                 width:400, 
//                 height:500, 
//                 marginBottom:5}}/>
//                <p style={{marginTop:25}}>Name: {this.state.member.name}</p>
//                <p >age: {this.state.member.age}</p>
//                <p>{this.state.member.desc}</p>
//               <p style={{marginTop:20}}><FaPhoneAlt color="green"/> Contact me: {this.state.member.phone}</p>
//             </div>
//         );
//     }
// }
 
// export default MemberDetails;
