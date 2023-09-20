import React from 'react'
import styled from 'styled-components'
import Pic from "../src/profile-pic.png"
const Title = styled.h1`
color: white;
font-size: 40px;
text-align: center;
padding: 10px;
`
const Container = styled.div`

display: flex;
color: white;
align-items: center;
padding: 30px;
gap: 30px;
justify-content: center;

`
const Developer = styled.div`
img{
    width: 300px;
}

`
const DeveloperDetail = styled.div`
h1{

}
p{
    margin: 10px 0;
}
a{
    color: white;
    font-size: 30px;
    &:hover{
        transform: scale(1.1);
    }
}

li{
    list-style: none;
}
ul{
    display: flex;
    gap: 10px;

}

`


function Footer() {
  return (
    <>
    <Title>Developer</Title>
    <Container>
    <Developer>
        <img src={Pic}/>

    </Developer>
    <DeveloperDetail>
        <h1>Dev Raj Sharma</h1>
        <p>(codewithsharma)</p>
        <ul>
            <a href='https://github.com/codewithsharma'><li><i class="fa-brands fa-github"></i></li></a>
            <a href='https://www.linkedin.com/in/codewithsharma/'><li><i class="fa-brands fa-linkedin"></i></li></a>
            <a href='https://www.youtube.com/channel/UCuGVhk0PLPda1ikQcRoRa6w'><li><i class="fa-brands fa-youtube"></i></li></a>
            <a href='https://instagram.com/codewithsharma'><li><i class="fa-brands fa-instagram"></i></li></a>
           
        </ul>



    </DeveloperDetail>

    </Container>
    </>
    
  )
}

export default Footer