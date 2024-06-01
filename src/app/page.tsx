import Image from "next/image";
import Logo from "/public/thrivoHR-removebg.png";
import LogoNav from "/public/thrivoHR-icon.png";
import { Carousel, Divider, FloatButton } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
export default function Homepage() {
  return (
    <>
      <FloatButton icon={<PhoneOutlined />} />
      <nav className="px-2 py-2.5 rounded bg-blue-400 shadow">
        <div className="container grid grid-cols-12 items-center mx-auto">
          <a href="/" className="flex items-center">
            <Image src={LogoNav} alt="Logo" width={60} height={60} />
          </a>
          <div className="flex justify-center col-span-10">
            <ul className=" flex space-x-8 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white hover:bg-blue-300 rounded"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white hover:bg-blue-300 rounded"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white hover:bg-blue-300 rounded"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white hover:bg-blue-300 rounded"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white hover:bg-blue-300 rounded"
                >
                  Contact
                </a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

      <div className="relative bg-cover bg-center h-screen">
        <div className="container mx-auto h-full grid grid-cols-1 md:grid-cols-2 items-center px-4">
          <div className="text-white z-10 p-6 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              ThirvoHR
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-black">
              NỀN TẢNG QUẢN TRỊ VÀ ĐIỀU HÀNH DOANH NGHIỆP TOÀN DIỆN
            </h1>
            <p className="text-lg md:text-xl mb-6 text-black">
              Phù hợp với nhiều lĩnh vực
            </p>
            <p className="text-lg md:text-xl mb-6 text-black">Chi phí hợp lý</p>
            <p className="text-lg md:text-xl mb-6 text-black">
              Được 3500+ doanh nghiệp tin dùng
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Get Started
            </button>
          </div>
          <div className="hidden md:block z-10">
            <Image
              src={Logo}
              alt="Secondary"
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="container mx-auto py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-500">
              HỆ ĐIỀU HÀNH DOANH NGHIỆP TỔNG THỂ 4.0
            </h2>
            <p className="text-2xl font-bold mb-8">One app – One platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <Image
                  src={Logo}
                  alt="Service Image"
                  className="w-full h-48 object-cover"
                  width={500}
                  height={300}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Service {index + 1}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto py-12">
          <div className="text-left mb-8">
            <h2 className="text-3xl text-blue-500">
              BỘ ỨNG DỤNG GIÚP DOANH NGHIỆP <br />
              <span className="font-bold">HIỆN THỰC HÓA MỌI MỤC TIÊU</span>
            </h2>
          </div>

          <div className="space-y-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden w-full"
              >
                <div className="grid md:grid-cols-3">
                  <div className="left p-6 bg-blue-500 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      Title {index + 1}
                    </h3>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </p>
                    <button className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-gray-200">
                      Detail
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-4 bg-blue-50 hover:bg-blue-100 col-span-2">
                    {Array.from({ length: 6 }).map((_, imgIndex) => (
                      <div key={imgIndex} className="flex items-center">
                        <Image
                          src={Logo}
                          alt={`Something ${imgIndex + 1}`}
                          className="w-10 h-10 object-fill"
                          width={40}
                          height={40}
                        />
                        <div className="ml-2">
                          <p className="font-semibold text-left text-mb text-black">
                            Something {imgIndex + 1}
                          </p>
                          <p className="text-left text-sm text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto py-12">
          <div className="text-left mb-8">
            <h2 className="text-3xl text-blue-500 font-bold">
              LIÊN HỆ CHÚNG TÔI
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-gray-100 hover:bg-gray-200 shadow-lg">
              <Image
                src={Logo}
                alt="Service Image"
                className="w-full h-48 object-cover"
                width={500}
                height={300}
              />
              <h3 className="text-xl font-bold mb-2">Service</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="p-4 bg-gray-100 hover:bg-gray-200 shadow-lg">
              <Image
                src={Logo}
                alt="Service Image"
                className="w-full h-48 object-cover"
                width={500}
                height={300}
              />
              <h3 className="text-xl font-bold mb-2">Service</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="p-4 bg-gray-100 hover:bg-gray-200 shadow-lg">
              <Image
                src={Logo}
                alt="Service Image"
                className="w-full h-48 object-cover"
                width={500}
                height={300}
              />
              <h3 className="text-xl font-bold mb-2">Service</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="p-4 bg-gray-100 hover:bg-gray-200 shadow-lg">
              <Image
                src={Logo}
                alt="Service Image"
                className="w-full h-48 object-cover"
                width={500}
                height={300}
              />
              <h3 className="text-xl font-bold mb-2">Service</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto pt-12">
          <div className="text-left mb-8">
            <h2 className="text-3xl text-blue-500 font-bold">CÁC ĐỐI TÁC</h2>
          </div>
          <Carousel autoplay autoplaySpeed={2000}>
            <div className="hidden md:block z-10">
              <Image
                src={Logo}
                alt="Secondary"
                layout="responsive"
              />
            </div>
            <div className="hidden md:block z-10">
              <Image
                src={Logo}
                alt="Secondary"
                layout="responsive"
                width={300}
                height={300}
              />
            </div>
            <div className="hidden md:block z-10">
              <Image
                src={Logo}
                alt="Secondary"
                layout="responsive"
                width={300}
                height={300}
              />
            </div>
            <div className="hidden md:block z-10">
              <Image
                src={Logo}
                alt="Secondary"
                layout="responsive"
                width={300}
                height={300}
              />
            </div>
          </Carousel>
        </div>

        <div className="container mx-auto py-6">
          <div className="grid grid-cols-4 gap-4 mt-12">
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Câu Chuyện Khách Hàng</h3>
              <p className="text-gray-700 mb-4">
                Những doanh nghiệp đã tin tưởng đồng hành và ứng dụng thành công
                phần mềm
              </p>
              <button className="border-2 border-black bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-gray-200">
                Detail
              </button>
            </div>
            <div className="p-4 bg-gray-100 hover:bg-gray-200 shadow-lg">
              <Image
                src={Logo}
                alt="Service Image"
                className="w-full h-48 object-cover"
                width={500}
                height={300}
              />
              <h3 className="text-xl font-bold mb-2">Service</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="p-4 bg-gray-100 hover:bg-gray-200 shadow-lg">
              <Image
                src={Logo}
                alt="Service Image"
                className="w-full h-48 object-cover"
                width={500}
                height={300}
              />
              <h3 className="text-xl font-bold mb-2">Service</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="p-4 bg-gray-100 hover:bg-gray-200 shadow-lg">
              <Image
                src={Logo}
                alt="Service Image"
                className="w-full h-48 object-cover"
                width={500}
                height={300}
              />
              <h3 className="text-xl font-bold mb-2">Service</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-6">
          <div className="flex items-center justify-center min-h-96">
            <div className="bg-blue-100 w-3/4 h-64 grid grid-cols-2 p-6 rounded-lg">
              <div className="flex items-center justify-center">
                <Image
                  src={Logo}
                  alt="Service Image"
                  className="w-full h-60 object-cover"
                  width={500}
                  height={200}
                />
              </div>
              <div className="flex flex-col justify-center items-start p-4">
                <h2 className="text-lg font-bold mb-4">Liên hệ 012345789</h2>
                <p className="mb-4">
                  hoặc để lại thông tin để được tư vấn và trải nghiệm miễn phí!
                </p>
                <button className="border-2 border-black py-2 px-4 rounded-full hover:bg-blue-300">
                  Click Me
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4">
              <h1 className="font-bold mb-4">PLACEHOLDER 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, amet. Corporis vero molestias distinctio labore quos,
                provident quibusdam quasi temporibus, in natus illo voluptatum
                maiores repellat harum, reprehenderit fugit atque.
              </p>
            </div>
            <div className="p-4">
              <h1 className="font-bold mb-4">PLACEHOLDER 2</h1>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
            </div>
            <div className="p-4 text-center">
              <h1 className="font-bold mb-4">PLACEHOLDER 3</h1>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
            </div>
            <div className="p-4 text-right">
              <h1 className="font-bold mb-4">PLACEHOLDER 2</h1>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
              <a href="#" className="hover:text-blue-200 block">
                something
              </a>
            </div>
          </div>
          <Divider />
          <p className="text-center mt-8">
            © 2024 - Nền tảng quản trị & điều hành doanh nghiệp toàn diện. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}
