"use client"
import Link from "next/link";
import {useState} from "react";
import 'primeicons/primeicons.css';

const Header = () =>{
    const [productMenuExpand,setProductMenuExpand] = useState(false);
    const [humbergerMenuExpand,setHumbergerMenuExpand] = useState(false);
    const handleProductMenuExpand = () =>{
        setProductMenuExpand(!productMenuExpand);
    }
    const handleHumbergerMenuExpand = () =>{
        setHumbergerMenuExpand(!humbergerMenuExpand);
    }
    return (
         <header className=" bg-luster2-3 shadow-lg mb-10">
           <div className='container  mx-auto px-10'>
                <div className='flex justify-between items-center'>
                    <div className='hidden md:flex items-center'>
                      <div className="mr-7">
                        <ul className="flex gap-7 font-vazir">
                          <li className="nav-item"><Link href={"/"}> خانه</Link></li>
                          <li className="nav-item"><Link onClick={handleProductMenuExpand} href={"#"}>محصولات</Link>
                              {productMenuExpand ?
                                  <div className="bg-white absolute top-14 border rounded-lg py-2 px-2 transition duration-300 ease-in-out" key="test">
                                      <ul className="space-y-3">
                                          <li className="nav-item"> <Link href={"#"}> شعمدانی</Link></li>
                                          <li className="nav-item"> <Link href={"#"}>لوستر اداری</Link></li>
                                          <li className="nav-item"><Link href={"#"}>لوستر شمعدان</Link></li>
                                          <li className="nav-item"><Link href={"#"}>آینه و لوستر</Link></li>
                                          <li className="nav-item"><Link href={"#"}>لوستر دیواری</Link></li>
                                          <li className="nav-item"><Link href={"#"}>ساعت شمعدان</Link></li>
                                      </ul>
                                  </div> :
                                  <></>
                              }

                          </li>
                          <li className="nav-item"><Link href={"/about"}>تماس با ما</Link></li>
                        </ul>
                      </div>
                    </div>


                    <div className="md:hidden ">
                        <div>
                            <Link href="#" onClick={handleHumbergerMenuExpand}>
                                <i className="pi pi-bars"/>
                            </Link>
                        </div>
                        {humbergerMenuExpand ?
                            <div className="absolute bg-white py-3  px-3 rounded-lg top-13 border border-indigo-600 z-50	">
                                <div className='flex items-center'>
                                    <div>
                                        <ul className="flex flex-col gap-7 font-vazir">
                                            <li><Link href={"/"}>صفحه اصلی</Link></li>
                                            <li><Link href={"#"}>محصولات</Link></li>
                                            <li><Link href={"/about"}>تماس با ما</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            :<></>
                        }
                    </div>
                    <div>
                      <img src="/image/6-1.png" className="ml-0  lg:ml-[670px] h-20 rounded-full"/>
                    </div>
                </div>
           </div>
           </header>
      );
}

export default Header;