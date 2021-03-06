import React, {useState, Fragment} from "react";
import { Modal } from "react-bootstrap";

export default function LoanHistory() {
  const [requestLoanModalOpen, setRequestModalOpen] = useState(false);
  const [withdrawalModalOpen, setWithdrawalModalOpen] = useState(false);

  const closeRequestLoanModal= ()=>{
    setRequestModalOpen(false);
  }

  const closeWithdrawalLoanModal=()=>{
    setWithdrawalModalOpen(false)
  }


  return (
    <Fragment>
      <Modal show={requestLoanModalOpen} onHide={()=> closeRequestLoanModal()}>
        <Modal.Header closeButton >
          <Modal.Title>
            <h5>Request New Loan</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4 style={{color:"gray"}} className="text-center">
              Maximum Loan amount <b>₦50,000</b>
            </h4>
            <br/>
            <form className="form-group">
              <label>Loan Amount</label>
              <div className="form-group">
                <input type="number" className='form-control' placeholder='Enter Request Amount'/>
                <button className='btn btn-block bg-success'>Submit</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={withdrawalModalOpen} onHide={()=>closeWithdrawalLoanModal()}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Withdraw Funds</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div className="form-group">
              <label>
                <input type="number" placeholder='Enter Amount' className="form-control"/>
                </label>
            </div>
            <div className="form-group">
              <label>VetroPay UID</label>
              <input type="number" className="form-control"/>
            </div>
            <div className="form-group">
              <button className="btn btn-success btn-block">Withdraw</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <div className="container">
        <div className="text-center">
          <button onClick={()=>setRequestModalOpen(true)} className="btn btn-success">Request New Loan</button>
          <button onClick={()=>setWithdrawalModalOpen(true)} className="btn btn-secondary ml-2">Withdraw Funds</button>
        </div>
        <br />
        Loan History:
        <div className="card card-body shadow mt-3">
          <div className="loan-history-card">
            <div>
              Request Date: Aug 2, 2020 <br />
              Amount: ₦15,000
            </div>
            <div>
              Status: <span className="badge badge-warning">Running</span> <br />
              Interest: 10%
            </div>
          </div>
        </div>
        <div className="card card-body shadow mt-3">
          <div className="loan-history-card">
            <div>
              Request Date: Jul 1, 2020 <br />
              Amount: ₦10,000
            </div>
            <div>
              Status: <span className="badge badge-success">Paid</span> <br />
              Interest: 10%
            </div>
          </div>
        </div>
        <div className="card card-body shadow mt-3">
          <div className="loan-history-card">
            <div>
              Request Date: Jan 10, 2020 <br />
              Amount: ₦35,000
            </div>
            <div>
              Status: <span className="badge badge-success">Paid</span> <br />
              Interest: 10%
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
