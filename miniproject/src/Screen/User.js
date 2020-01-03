import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,  MDBRow } from 'mdbreact';
import Axios from 'axios' ;

class CardExample  extends Component  {
    constructor()
    {
      super();
      this.state={
        user : []
       
      };
      this.delete=this.delete.bind(this)

    }


    componentDidMount()
    {
        Axios.get('https://gorest.co.in/public-api/users?_format=json&access-token=https://gorest.co.in/public-api/users?_format=json&access-token=xDh01oCQWdEBwF2Zuk5naGiNyi1tw2B1OvtK')
        .then(res =>
            {
                this.setState({
                    user:res.data.result
                })
            })
    }
    delete(index){
        const  user=this.state.user.filter(el => el.id!==index.id )
        this.setState({user})
    }
    render(){
  return (
    <MDBRow className="justify-content-between" >
    
      {this.state.user.map((item,index) => ( 
      <MDBCard  style={{ width: "22rem" }} key={index}>
        <MDBCardImage className="img-fluid" src={item._links.avatar.href} />
        <MDBCardBody>
          <MDBCardTitle>user info</MDBCardTitle>
          <MDBCardText>
            <ul>
                <ol>id:{item.id}</ol>
                <ol> first_name:{item.first_name}</ol>
                <ol> last_name: {item.last_name}</ol>
                <ol> gender: {item.gender}</ol>
                <ol>  dob:{item.dob}</ol>
                <ol>  email:{item.email}</ol>
              
            </ul>
          </MDBCardText>
          <MDBBtn color="primary" onClick={()=> this.delete(item,index)}>delete</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      ))}
    
    </MDBRow>

  )
    }
}

export default CardExample;