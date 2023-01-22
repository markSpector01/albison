import "./shovcase.css"
import React from "react";

function Shov(){
    return(
        <div className="wrap">
            <div className="text">
                <h1>NEGA YANA GRAND KURSLAR</h1>
                <p>Kechagina ochilgan dasturchilar maktabimiz bitiruvchilari hozirda nafaqat bizda balki boshqa xalqaro IT kompaniyalarda ham o'z o'rnini egallashmoqda. Hozirda ushbu xalqaro kompaniyalar o'z ishonchlarini bildirib, yanada ko'proq dasturchilarni yetkazib berishda hamkorlarimizga aylanishdi</p>
                <form>
                    <button className="btn1"><a href="#bt1">Ro'yxatdan o'tish</a></button>
                    <button className="btn2"><a href="#bt2">Barcha kurslar</a></button>
                </form>
            </div>
            <div className="img">
                <img src="https://www.albison.uz/img/svg/developer.svg" alt="" />
            </div>
        </div>
    )
}
export default Shov;