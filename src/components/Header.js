import React, { useState } from 'react';
import './Header.css'

function Header() {
    // 声明一个新的叫做 “count” 的 state 变量
    // const [count, setCount] = useState(0);

    return (
        <div className="header">
            <div className="container">
                <h1 className="logo">
                    <strong>
                        <a href="https://hao.uisdc.com" title="优设导航 - 学设计从这里开始">
                            <img src="https://image.uisdc.com/wp-content/uploads/2019/03/logo.png" alt="设计师网址导航" />
                        </a>
                    </strong>
                </h1>



                <div className="primary-menus">
                    <ul className="selects">
                        <li> 常用 </li>
                        <li className=""> <span>百度</span> </li>
                        <li className=""> <span>google</span> </li>
                        <li className="current"> <span>优设搜索</span> </li>
                        <li> <span>优优教程网</span> </li>
                    </ul>
                    <div className="cont">
                        <div className="right-link">
                            <a href="https://hao.uisdc.com" className="add_fav" ><i className="icon-heart"></i>Ctrl+D收藏导航</a>
                            <a href="https://www.uisdc.com/about" ><i className="icon-pen-01"></i>联系我们</a>
                            <a href="https://translate.google.cn/" >&nbsp;翻译工具</a>
                        </div>
                        <div className="left-cont">
                            <div className="search form" id="baidu-search">
                                <input type="text" name="wd" className="s" value="优优教程网" />
                                <button type="submit" name="submit" className="btn">百度一下</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header
