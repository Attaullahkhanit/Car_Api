import { useEffect, useState } from 'react';
import './App.css';
import Carousel from './Components/Carousel/Carousel';

function App() {

  const [img, setimg] = useState([]);

  const [LoaderState, setLoader] = useState(false);

  useEffect(() => {

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "csv=2; edgebucket=9tBTpBrQLFbPamYgci; loid=0000000000w3n3vns6.2.1678112135676.Z0FBQUFBQmtCZldKSExvRGFxS3pWcG82SmJmNnR2c0YwNzYzcGZ0bzVyM3ZIaU5TVF8tX19aT0N5RTZUUDN0RkdRV3VZQ21ScVIzY19IVzdOTzVQVHpNeFowNzZwZVJEVHhodG5NMWpwR2E1d3NnZGt3dGJVeXM3Q2lVbVVYU2lSb2FfbEhaR3VxeUU; session_tracker=DobEwnq3dAwKO5EcaD.0.1678121244017.Z0FBQUFBQmtCaGtkeHlsUVU1NzRDNGRNcmp4Nkd6Sl9HZTBFTC1waW5QYVdMWUNIY3N6M1FFWkJwZ0RoSHd2Ty1ISEJFd2U1bVpBcWJrVmN6M0FwdEdMNXZRX2s0ankxWnZXR1BLTFNLdHNmRy1tdWdBbTA5UDc0OVpacWRJQ05hYXdoY3hrMmE4aks");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch("https://www.reddit.com/r/aww/top/.json?t=all", requestOptions)
      .then(response => response.json())
      .then(result => {
        setLoader(false);
        setimg(result.data.children[0].data.all_awardings);
        console.log(result.data.children[0].data, 'myallimggggg')
      })
  }, [])



  // console.log(result.data, 'myallimggggg')
  return (
    <>
      <div className='App w-90 justify-content-center'>
        <div className='m-auto max-w-lg'>
          <Carousel autoSlide={true}>
            {LoaderState ? "LoaderStateing" :
              img.map((dta) => (
                <>
                  {console.log(dta.static_icon_url, 'dskfasjfklja')}
                  <img src={dta.icon_url} alt="item-img" />
                </>
              ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default App;
