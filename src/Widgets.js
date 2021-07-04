import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const news = (article,heading) =>(
        <div className="news">
            <div className="news__left">
                <FiberManualRecordIcon />
            </div>
            
            <div className="news__right">
                <h4>{article}</h4>
                <p>{heading}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>

            {news('Data Science','The new GPT-3 based Github Copilot is amazing .')}
            {news('NASA','NASA Is Offering Its Software Catalogue With Over 800 Programmes for Free to the Public.')}
            {news('Vivo','Vivo S10 With MediaTek Dimensity 1100 SoC, 12GB RAM Spotted on Geekbench.')}
            {news('Google','Google Health App Tipped to Be in the Works, May Help Integrate Medical Records on a Unified Platform.')}
            {news('Instagram ','Instagram to Bring Recommendations, Fullscreen Videos in Coming Months.')}
            
        </div>
    )
}

export default Widgets
