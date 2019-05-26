import React from 'react';
import { Image, Grid, Responsive} from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.js';
import './Section.css';

class Section extends React.Component {
    render() {
        return (
            <div className="layout-background">
                <div className="description">
                    <p className="title"> Assisting Companies Since 2016 </p>
                        <Responsive as={Grid.Row} className="sub-description">
                            <div className="margin-sub-description">
                                <span className="totalCount"> 4,000 <span className="plus">+</span></span>
                                <p className="sub-title"> Applicants Applied </p>
                            </div>
                            <div className="margin-sub-description">
                                <span className="totalCount"> 2,000 <span className="plus">+</span></span>
                                <p className="sub-title"> Candidates Hired </p>
                            </div>
                            <div className="margin-sub-description">
                                <span className="totalCount"> 5,000 <span className="plus">+</span></span>
                                <p className="sub-title"> Company Subscriptions </p>
                            </div>
                        </Responsive>
                </div>
                <Image className="picture" src='https://winter-cdn.urbanhire.com/img/img-backgroundcity.svg' />
                <Image className="picture-2" src='https://cdn1.imggmi.com/uploads/2019/5/26/765378c73611811c2e256f68bd75f5ad-full.png' />
            </div >
        )
    }
}

export default Section;

