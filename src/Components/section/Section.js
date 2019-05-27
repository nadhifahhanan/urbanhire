import React from 'react';
import { Image, Grid, Responsive} from 'semantic-ui-react'
import './Section.css';

class Section extends React.Component {
    render() {
        return (
            <div className="layout-background">
                <div className="main">
                    <p className="main-title"> Assisting Companies Since 2016 </p>
                        <Responsive as={Grid.Row} className="main-content">
                            <div className="margin-main-content">
                                <span className="achievement-count"> 4,000 <span className="plus">+</span></span>
                                <p className="achievement-desc"> Applicants Applied </p>
                            </div>
                            <div className="margin-main-content">
                                <span className="achievement-count"> 2,000 <span className="plus">+</span></span>
                                <p className="achievement-desc"> Candidates Hired </p>
                            </div>
                            <div className="margin-main-content">
                                <span className="achievement-count"> 5,000 <span className="plus">+</span></span>
                                <p className="achievement-desc"> Company Subscriptions </p>
                            </div>
                        </Responsive>
                </div>
                <Image className="building-base" src='https://cdn1.imggmi.com/uploads/2019/5/27/5f23a448de7f1acf2cd4b3a51c8dd898-full.png' />
                <Image className="deco-1" src='https://cdn1.imggmi.com/uploads/2019/5/27/45f10270539119d0af3b1c0f147ccf6b-full.png' />
                <Image className='deco-2' src='https://cdn1.imggmi.com/uploads/2019/5/27/72f33c2841e3c43ebcaf804c970c2364-full.png' />
            </div >
        )
    }
}

export default Section;

