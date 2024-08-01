
import "../css/input.css"

const InputForm = () => {
    
    const handleSubmit = () =>{
        alert("Form submitted");
    }

    return(
        <div className="container mb-3 pos">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 mt-3">
            <div className='d-flex'>
                
            <form onSubmit={handleSubmit} style={{
                  width: "180vh",
                 
                }}>
              <div
                className="d-flex align-items-center justify-content-between"
                style={{
                  borderRadius: "5vh",
                  border: "3px solid #BA9359",
                  padding: "0.5rem",
                  outline: "none",
                  backgroundColor :"#FFEED6"
                
                }}
              >
                <input
                  type="text"
                  className="form-control flex-grow-1"
                  placeholder="Message"
                //   value={inputValue}
                //   onChange={handleChange}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  className="send-button btn btn-link p-0 ml-2"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 21L23 12L2 3V10L17 12L2 14V21Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </form>
            
            {/* <button onClick={isRecording ? stopRecording : startRecording} className="btn border-0 outline-none"> */}
              {/* {isRecording ? <img src={microphone} alt="Speak" style={{ width: '24px', height: '24px' }} /> : <img src={mute} alt="Speak" style={{ width: '24px', height: '24px' }} />} */}
            {/* </button> */}
            {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
           
            </div>
          </div>
        </div>
      </div>
    )
}

export default InputForm;