import "./style.css";
import facebook from "../../assets/Facebook.png";
import vk from "../../assets/Vk.png";
import instagram from "../../assets/Inst.png";
import googleplay from "../../assets/Google_Play.png";
import appstore from "../../assets/App_Store.png";

export function Footer() {
    return (
        <footer className="footer">
            <div className="logo">
                <span>react</span>
            </div>
            <div className="links">
                <div className="social">
                    <p>Присоединяйся к нам</p>
                    <a href={"#"} target={"_blank"}>
                        <img src={facebook} alt={"facebook"} />
                    </a>
                    <a href={"#"} target={"_blank"}>
                        <img src={vk} alt={"vk"} />
                    </a>
                    <a href={"#"} target={"_blank"}>
                        <img src={instagram} alt={"instagram"} />
                    </a>
                </div>
                <div className="downloads">
                    <p>Устанавливайте приложение</p>
                    <a href={"#"} target={"_blank"}>
                        <img src={googleplay} alt={"googleplay"} />
                    </a>
                    <a href={"#"} target={"_blank"}>
                        <img src={appstore} alt={"appstore"} />
                    </a>
                </div>
            </div>
            <div className="policy">
                <a href={"#"} target={"_blank"}>© webreznov</a>
                <a href={"#"} target={"_blank"}>Правовая информация</a>
                <a href={"#"} target={"_blank"}>Политика конфиденциальности</a>
            </div>
        </footer>
    );
}