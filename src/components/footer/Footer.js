const Footer = () =>{
    return(
        <footer className="bg-luster2-3 font-vazir text-white text-lg">
            <div className="px-2 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-1 pt-8 pb-2">
                <div className="w-auto px-2">
                    <h5 className="border-b-2 border-white">لینک های مرتبط</h5>
                    <div className="grid grid-cols-3 gap-2 pt-2">
                        <img className="w-20 h-20" src="/image/6.jpg"/>
                        <img className="w-20 h-20" src="/image/6.jpg"/>
                        <img className="w-20 h-20" src="/image/6.jpg"/>
                        <img className="w-20 h-20" src="/image/6.jpg"/>
                        <img className="w-20 h-20" src="/image/6.jpg"/>
                        <img className="w-20 h-20" src="/image/6.jpg"/>
                        <img className="w-20 h-20" src="/image/6.jpg"/>
                        <img className="w-20 h-20" src="/image/6.jpg"/>
                    </div>
                </div>
                <div className="px-2 sm:pt-5 md:py-4 lg:py-0 ">
                    <h5 className="border-b-2 border-white">تماس با اتحادیه</h5>
                    <ul className="py-2">
                        <li> 
                            <h5><i className="fa fa-map-marker hover:animate-bounce text-luster-1"></i> آدرس:</h5>
                            <p className="px-4">تهران ،
                                خیابان شریعتی، خیابان کاج، پلاک 47، طبقه3 ، واحد5
                            </p>
                        </li>
                        <li>
                             <h5><i className="fa fa-phone text-luster-1"></i> تماس:</h5>
                            <p className="px-4">021-77684686</p>
                        </li>
                        <li>
                             <h5><i className="fa fa-envelope text-luster-1"></i> کد پستی:</h5>
                            <p className="px-4">1613857816</p>
                        </li>
                        <li>
                             <h5><i className="fa fa-envelope text-luster-1"></i> ایمیل:</h5>
                            <p className="px-4">Tehran.chandelier@gmail.com</p>
                        </li>
                        <li>
                             <h5><i className="fa fa-check text-luster-1"></i> روز های کاری:</h5>
                            <p className="px-4">روز های  فعالیت اتحادیه از شنبه تا چهارشنبه</p>
                        </li>
                        <li>
                             <h5><i className="fa fa-clock text-luster-1"></i> ساعت کار:</h5>
                            <p className="px-4">روز های هفته از ساعت 8:00 تا 16:00</p>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h5 className="border-b-2 border-white">دسترسی آسان</h5>
                    <div className=" flex flex-col lg:flex-row items-center justify-between rounded-lg text-amber-50">
                    <div className='grid grid-cols-1 gap-4 place-items-start'>
                        <a href='#'>خانه</a>
                        <a href='#'>محصولات</a>
                        <a href='#'>درباره ما</a>
                        <a href='#'>تماس با ما</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                    تعداد بازدید
            </div>   
        </footer>
    )
}

export default Footer;