import { Fragment } from "react";
import CardAnggota from "../component/CardAnggota";
import "./Profile.css";

export default function Profile()  {


  const identitas = [
    {
      nama: "Karisa Zihni Lutfiana",
      nim: "21120119130077",
      id: 1,
      github: 'https://github.com/karisa0220',
      img: "https://lh3.googleusercontent.com/vSLSYkSYV9DYhvdLvj5ZMguhmqUq5BgGNvANjeQlT0aW4QdMsiP3jGvlQqN0ZlFtihz0WlmcE3l_F92uCSyrWZ770gqSsQpyIP3hRsjxhDB6XpmyPXa8hfcrNEjeARrwUpU95VWdnTomVnNtyl_xoyhEzcCsVKeiFKbX0f9AtSZq5GHUwctVsRe1h-OtJ9gQysQItMAObOHbX9QvVQd3n01RWaBwTht41OmVOgJlggNCElGdf38VyBP7E3sMGl_362ZoFGqqRAdMC052Bz1BWgOQ7bR2a3CkiCbShq0v4xsByp6-IxJoLf8FgkcEEyHb9tWCGDxQQLb7KUm2RdiKWtu_6-KSOTHTyt6Rxnc905UQttuBKVXeUIcjacwksxa5giFv5tjlzjasjpm1dLlvOryGbxbp1MJLi4hvWxbV6g_YzeUnbGMz52sqQ-N95DXQVTc8j902mJZZuBHuQTZ0QHd1tIpfIXWpZnJzcdbBPDPkOKxmzGUgW3Yu-UgrMWB9HTd2RZfm3Su-MVCPNA9CnfxPH0_pdPCdV8E6EcQbraPwy7JEWRCMdKjqRgmZ8ZBNh79KspON3IDaxRGmJ2o_uxWGLmP8CVZZf2skKELE6Mz7V_brk3PhJBD5hbwCVEHXE_TSESFansYoeONvuTcbBdjGTmmUZHYZW3eWGu3QL3LBjqxaDyEV8OQykr66b2yhJf1gudlGtA70LLcTiqBUJnVp=w328-h437-no?authuser=0",
    },
  ];

  return (
    <>
      <p id="profiles">User Profile</p>
      {identitas.map((item) => (
        <Fragment key={item.id}>
        <div className = "containerTop">
        <CardAnggota
          nama={item.nama}
          img={item.img}
          nim={item.nim}
        />
        <div id = "card">
        <p id= "me">Hello I'm Karisa. I am an ordinary girl who in love with books. 
          And book loves me too and that's all that I need. Books always find me wherever I go. 
          I'm hella hella in love with books. So u know that's why i make something about books 
          in this my Mobile Device Programming (MDP) project. </p>
        </div>
        </div>
        
      </Fragment>
      ))}
    </>
  );
}
