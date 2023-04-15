"use client"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { red } from '@mui/material/colors';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";   
import { Button } from 'primereact/button';
import CustomSlider from "@/components/slider/CustomSlider";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import React from 'react';
import Link from 'next/link';
import SmallMenu from "@/components/smallMenu/SmallMenu";
const Main = () =>{
    return(
      <>
      <section>
        <div className="md:relative container pt-0">
           <img className='block sm:hidden w-[100px] ' src='/image/134.jpg'/>
           <img className='hidden sm:block ' src='/image/ir.png'/>
           <img className='hidden lg:block lg:absolute lg:top-0 lg:mr-[600px] lg:h-36' src='/image/6-1.png'/>
           <p className='absolute md:hidden top-32 mr-[100px] font-bold text-luster2-3 text-base'> اتحاديه  تولید کنندگان و فروشندگان لوستر شهرستان تهران</p>
        </div>
      </section>
      <section className=" container mx-auto px-10 font-bold">
          <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
              <div className="header-btn ">
                  <p className="leading-10 pt-3">اخبار</p>
              </div>
              <div className="header-btn">
                  <p className="leading-10 pt-3 text-">اعضای هیئت مدیره</p>
              </div>
              <div className="header-btn ">
                  <p className="leading-10 pt-3">همکاران اتحادیه</p>
              </div>
              <Link href={"/"}>
              <div className="header-btn h-[67px] pt-0">
                  <img className="float-left w-16 z-40 " src="/image/133.png"/>
                   <p className="leading-10 pt-4 md:text-base lg:text-base">
                       سخن رئيس اتحاديه
                   </p>
              </div>
              </Link>
          </div>
      </section>
          <section>
              <div className='container py-2 px-0  md:mx-auto md:px-10'>
                  <div className="flex flex-col-reverse sm:flex-row gap-5 items-center">
                      <div className="basis-1/3 w-full rounded-lg">
                        <div className='bg-luster-2 py-4 mb-2 text-white text-center'>
                            رسته های کاری
                        </div>
                          <div
                              className='grid grid-cols-1 gap-4 place-items-center h-96 rounded-lg  items-stretch '>
                              <a className="border w-full text-center hover:border-luster2-3 rounded-lg " href='#'> <span
                                  className="block mt-2">لوستر خانگی</span></a>
                              <a className="border w-full text-center hover:border-luster2-3 rounded-lg" href='#'> <span
                                  className="block mt-2">لوستر اداری</span></a>
                              <a className="border w-full text-center hover:border-luster2-3 rounded-lg" href='#'><span
                                  className="block mt-2">لوستر سازی </span></a>
                              <a className="border w-full text-center hover:border-luster2-3 rounded-lg" href='#'> <span
                                  className="block mt-2">آینه و شمعدان</span></a>
                              <a className="border w-full text-center hover:border-luster2-3 rounded-lg" href='#'> <span
                                  className="block mt-2">ست روشنایی و لوستر</span></a>
                              <a className="border w-full text-center hover:border-luster2-3 rounded-lg" href='#'> <span
                                  className="block mt-2">لوستر امارت</span></a>
                              <a className="border w-full text-center hover:border-luster2-3 rounded-lg" href='#'> <span
                                  className="block mt-2">آباژور</span></a>
                          </div>
                      </div>
                      <div className="basis-2/3 h-[500px] w-full ">
                          <div className='grid grid-cols-1 place-items-center h-96 rounded-lg'>
                              <CustomSlider />
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <br/>
          <SmallMenu />
          <br/>
<section>
      <div className='container font-vazir'>
          <div class="md:w-[500px] md:mr-[100px] lg:w-auto my-auto lg:grid lg:grid-cols-3 gap-4 sm:grid sm:grid-cols-1 items-center">
              <Link href={'/near'}>
                  <div className=" basis-1/3 md:h-96 md:py-3 w-full">
                      <img className="md:mr-4 lg:mr-0 h-full rounded-lg" src="/svg/ir.svg"/>
                      <h5 className='text-center border-2'>نزدیک ترین ها</h5>
                  </div>
              </Link>
              <Link href={'/members'}>
                    <div class="basis-1/3 md:h-96 md:py-3  w-full">
                            <img className="md:mr-16 lg:mr-0 h-full rounded-lg mix-blend-multiply" src="/image/partmentship.jpg"/>
                            <h5 className='text-center border-2'>اعضای صنفی اتحادیه</h5>
                    </div>
              </Link>
              <Link href={'/requierments'}>
                    <div class=" basis-1/3 md:h-96 md:py-3 w-full">
                        <img className="md:mr-6 lg:mr-0 h-full rounded-lg" src="/image/9.jpg"/>
                        <h5 className='text-center border-2'>نیازمندی ها</h5>
                    </div>
              </Link>
          </div>
      </div>
      </section>
      <br/>
</>
    )
}

export default Main;