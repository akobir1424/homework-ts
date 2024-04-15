import Image from "next/image";
import Logo from "../../public/logo.png";
import Tg from "../../public/tg.svg";
import Pochta from "../../public/pochta.svg";
import Phone from "../../public/phone.svg";
import Laptop from "../../public/laptop.png";
import Open from "../../public/tort.png";
import Section from "../../public/section.svg";
import Tel from "../../public/tel.svg";
import Book from "../../public/book.svg";
import Notebook from "../../public/notebook.svg";
import Kamp from "../../public/kamp.svg";
import Notebook1 from "../../public/notebook1.svg";
import Phone2 from "../../public/phone2.svg";

export default function header() {
  return (
    <div className="border">
      <header className="mt-[40px]">
        <nav className="">
          <ul className="flex text-center items-center">
            <Image src={Logo} alt="logo" width={236} height={100} />
            <li className="ml-[400px]">
              <a href="#">
                <Image src={Tg} alt="Tg" />
              </a>
            </li>
            <li className="ml-[50px]">
              <a href="#">
                <Image src={Pochta} alt="Email" />
              </a>
            </li>
            <li className="ml-[50px]">
              <Image className="w-[120px] h-[60px]" src={Phone} alt="Phone" />
            </li>
            <button className="border ml-[50px] bg-[#F05670] h-[50px] w-[140px] rounded-[8px] text-[12px] text-white">
              НАЧАТЬ ПРОЕКТ
            </button>
          </ul>
        </nav>
      </header>
      <div className="mt-[80px] justify-center flex">
        <Image className="w-[800px] h-[500px]" src={Laptop} />
      </div>
      <div className="flex justify-center mt-[150px]">
        <div className="">
          <Image className="w-[400px] h-[500px]" src={Open} />
        </div>
        <div className="w-[500px] h-[500px] mt-[50px] ml-[100px]">
          <h2 className="text-[#1E959B] text-[25px] font-[900]">
            OpenGift – это система монетизации <br /> OpenSource-проектов на
            основе блокчейна hyperledger fabric.
          </h2>
          <br />
          <span className=" ">
            К разработке платформы было привлечено более 5000 разработчиков. Ее
            интегрировали с сетью блокчейнов. <br /> Альфа-версия была запущена
            в январе 2018 года. OpenGIft был создан для решения проблем,
            унаследованных от
            <br />
            обеспечение, а управление проектами является основной функцией,
            помогающей в сотрудничестве. <br />
            <br /> Для монетизации используются смарт-контракты, чтобы создать
            пассивный, периодический потенциал дохода. <br /> Уникальность
            проекта в видении на разработку с открытым исходным кодом.
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <Image className="w-[1000px] " src={Section} />
      </div>
      <div className="Cabify">
        <div className="justify-center flex ">
        <h2 className="text-[#1E959B] font-[600]">ПРОЕКТЫ КОМАНДЫ PRODUCTFIT</h2>
        </div>
        <div className="xuit">
          <div>
            <Image className="w-[500px] h-[300px] ml-[30px]" src={Tel}/>
            <h3 className="text-[#1E959B] font-[600] ml-[250px]">Cabify</h3>
            <p className="ml-[150px]">Все сервисы для пассажиров <br />
«Уральских авиалиний» в одном <br />
приложении на Swift и Java</p>
          </div>
          <div>
          <Image className="w-[500px] h-[300px] ml-[30px]" src={Book}/>
            <h3 className="text-[#1E959B] font-[600] ml-[200px]">Ural Airlines</h3>
            <p className="ml-[120px]">Кроссплатформенное приложение <br />
под Android и iOS разработано на <br />
React Native(Python)</p>
          </div>
          <div>
          <Image className="w-[400px] h-[250px] mr-[200px]" src={Notebook}/>
            <h3 className="text-[#1E959B] font-[600] ml-[180px] mt-[50px]">OpenGift</h3>
            <p className="ml-[100px]">Система монетизации <br />
OpenSource-проектов на основе <br />
блокчейна hyperledger fabric</p>
          </div>
        </div>


  
      
        <div className="Gift">
        <div>
            <Image className="w-[500px] h-[250px] ml-[30px]" src={Kamp}/>
            <h3 className="text-[#1E959B] font-[600] ml-[250px]">Cabify</h3>
            <p className="ml-[150px]">Все сервисы для пассажиров <br />
«Уральских авиалиний» в одном <br />
приложении на Swift и Java</p>
          </div>
          <div>
          <Image className="w-[500px] h-[250px] ml-[20px]" src={Notebook1}/>
            <h3 className="text-[#1E959B] font-[600] ml-[200px]">Ural Airlines</h3>
            <p className="ml-[120px]">Кроссплатформенное приложение <br />
под Android и iOS разработано на <br />
React Native(Python)</p>
          </div>
          <div>
          <Image className="w-[400px] h-[250px] mr-[150px]" src={Phone2}/>
            <h3 className="text-[#1E959B] font-[600] ml-[180px] ">OpenGift</h3>
            <p className="ml-[100px]">Система монетизации <br />
OpenSource-проектов на основе <br />
блокчейна hyperledger fabric</p>
          </div>
        </div>

      <button className="border ml-[660px] mt-[100px] bg-[#1E959B] h-[70px] w-[200px] rounded-[8px] text-[12px] text-white">Все проекты</button>

      </div>
    </div>
  );
}
