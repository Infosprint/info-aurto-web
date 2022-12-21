import React from 'react'
import "./Footer.css";


function Footer() {
  return (
    <div className="Foot">
        <div className="Foot1">
            <div className="Aboutus">
                <h3>Aboutus</h3>
            </div>
            <div className="Quicklinks">
                <div className="facebook">facebook</div>
                <div className="instagram">Instagram</div>
                <div className="twitter">Twitter</div>
            </div>
        </div>
        <div className="Foot2">
            <div className="Ourservices">Ourservices</div>
            <div className="custommersupport"> custommersupport</div>
            <div className="locations">locations</div>
            <div className="terms">terms</div>
            <div className="privacy">privacy</div>
        </div>
        <div className="Foot3">
            <div className="feedbacks">feedbacks</div>
            <div className="careers">careers</div>
            <div className="warrenty">warrenty</div>
            <div className="loans">loans and finances</div>
        </div>
        <div className="Foot4">
            <div className="Popularbrands">Popularbrands</div>
            <div className="Partners">Working Partners</div>
            <div className="Officeaddress">Office address</div>
        </div>
    </div>
  )
}

export default Footer