import { Component } from "react";
import { React, useState } from "react";
import '../App.css'
import { Link } from "react-router-dom";

class Courses extends Component {
    constructor() {
        super()
        this.state = {
            inputText: '',
        };
        this.change = this.change.bind(this);
    }
    change(e) {
        this.setState({ inputText: e.target.value.toLowerCase() })
    }
    render() {

        var courses = [
            { course: 'SAT', photo: "https://scontent.fgza2-1.fna.fbcdn.net/v/t1.15752-9/287715679_574253924040898_3893400773874829179_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=u_QiLHPudSYAX9QYfFM&_nc_ht=scontent.fgza2-1.fna&oh=03_AVJ_08O0BydJLd_B0TvcaR8RvWOyyhY1JsL6zNcRL5Mt5w&oe=62CF9F66 " },
            { course: 'TOFEL', photo: "https://scontent.fgza2-3.fna.fbcdn.net/v/t1.15752-9/287289651_569939831170704_6421095855177622320_n.png?stp=dst-png_s2048x2048&_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=H-FIDF0bDDUAX8zcxme&_nc_ht=scontent.fgza2-3.fna&oh=03_AVK4_8TF8BNiWDDHdQGLsyoqctwLoNohiKPcHC4_5TvnsQ&oe=62D0CC50" },
            { course: 'IELTS', photo: "https://scontent.fgza2-1.fna.fbcdn.net/v/t1.15752-9/287770470_438311347746428_4497969536518215407_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=p-KPHcfylZwAX-wOVhF&_nc_ht=scontent.fgza2-1.fna&oh=03_AVK4Omd0Hrb0B1ZsXzX4DWfM9Zi-q5NRNyik58xBlFGPzg&oe=62CEE8FC" },
            { course: 'Creative writing', photo: "https://scontent.fgza2-1.fna.fbcdn.net/v/t1.15752-9/279054893_1042974189637952_2018113168408538623_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=hvpWxvOlSs0AX8vTw9D&_nc_ht=scontent.fgza2-1.fna&oh=03_AVLUxDaH-jCgzfspafhbnERIIa6aEm3D7nbmPKT8PAlp2w&oe=62D15212" },
            { course: 'Coding', photo: "https://scontent.fgza2-1.fna.fbcdn.net/v/t1.15752-9/287233353_716198149444967_791495446055034152_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=X9iAgCulYQ8AX_dvysN&_nc_ht=scontent.fgza2-1.fna&oh=03_AVLN1W19eCJXAwgbSEQTPAjLeeg9N1fy9xWjH2_80-6bkQ&oe=62CEEB76" },
            { course: 'Speaking English', photo: "https://scontent.fgza2-3.fna.fbcdn.net/v/t1.15752-9/288684316_1169236860328839_4546308071862114335_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DqG_47J5PSkAX-NCKmN&_nc_ht=scontent.fgza2-3.fna&oh=03_AVJ8HTfIHE4p571nlE6CbeP6kEwDIPLolet0pejomwWRZA&oe=62D0C610" },
            { course: 'Maths', photo: "https://scontent.fgza2-3.fna.fbcdn.net/v/t1.15752-9/277030846_1160706508011981_6274281590660679808_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=V9o1zNLiXUoAX9fsjes&_nc_ht=scontent.fgza2-3.fna&oh=03_AVJ6_Zp8ZId0PvRiQ2Rp47d8GCWpt8pHdDgg_7YNsfDjHg&oe=62D0FEAD" },
            { course: 'French', photo: "https://scontent.fgza2-3.fna.fbcdn.net/v/t1.15752-9/287749872_431761412092595_9153414802795822632_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Adgy_5UiTJAAX9j5FVs&tn=EYOPsbXZ7VlzjuVr&_nc_ht=scontent.fgza2-3.fna&oh=03_AVLMeq0BS7BFsJR3_qZkSfnU1O2WCq6D-NAPTNzw0A5BMA&oe=62D097F5" },
            { course: 'Design Thinking', photo: "https://scontent.fgza2-3.fna.fbcdn.net/v/t1.15752-9/287820771_1090031141894116_8288035771004059448_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Zbg-Pqcgl_QAX9nmXWJ&_nc_ht=scontent.fgza2-3.fna&oh=03_AVIwrRba6Yw8NKF9eRYVgjqOS6T4qzQLcC2tFIVzzwL7mA&oe=62CDDE2F" },
            { course: 'First aid kit', photo: "https://scontent.fgza2-3.fna.fbcdn.net/v/t1.15752-9/287249661_1205578853605012_7378398810267899415_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=auaTjGGxQ4MAX_bAMEa&_nc_ht=scontent.fgza2-3.fna&oh=03_AVLkfTZcnA2A2M8t7AE0zHydS2UlX_k_l2bXqHGslTMcIQ&oe=62D08E45" },
            { course: 'Interview prep', photo: "https://scontent.fgza2-3.fna.fbcdn.net/v/t1.15752-9/287367218_396630539160023_3373241427460083586_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=WAbaguS4unkAX8qZDM2&_nc_ht=scontent.fgza2-3.fna&oh=03_AVJt_vUR7mv3PzI3QsbyjwvTgy5s0YEOJXID2aYZI4f6Xw&oe=62D00802" },
        ];

        const filteredData = courses.filter((el) => {
            if (this.state.inputText === '') {
                return el;
            }
            else {
                return el.course.toLowerCase().includes(this.state.inputText)
            }
        })

        return (
            <>
                <input
                    id="outlined-basic"
                    onChange={this.change}
                    variant="outlined"
                    fullWidth label="Search"
                    className="input"
                    placeholder="Search For Course"
                />
                {filteredData.map((it) => {
                    return (
                        <div className='UniDiv'>
                            <img src={it.photo} className="image"></img>
                            <h2 className="h3">{it.course} </h2>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Courses
