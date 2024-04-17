import React, { useState } from 'react'
import './RegistrationForm.css'


function RegistrationForm() {


  const [image, setImage] = useState(null);
  const [employeeData, setEmployeeData] = useState({
    name: '',
    nationality: '',
    height: '',
    gender: '',
    idnumber: '',
    address: '',

    designation: '',
    department: '',
  });


  const handleImageChang = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handlesubmit = () => {

  }





  return (
    <div >
      <center>
        <h3>Employee Details Registration</h3>
      </center>

      <div >

        <form onSubmit={handlesubmit}>


          <div id='personaldetails'>
            <h4>Personal Details</h4>
            <table>

              <tr>
                <td>Name</td>
                <td><input type='text' name='name' required />
                </td>
              </tr>
              
              <tr>
                <td>
                  Date of Birth
                </td>
                <td>
                  <input type='date' name='dateofbirth' required />
                </td>
              </tr>

              <tr>
                <td>Nationality</td>
                <td><input type='text' name='nationality' required />
                </td>

              </tr>
              <tr>
                <td>Gender</td>
                <td><input type='text' name='gender' required />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td><input type='email' name='email' required />
                </td>
              </tr>
              <tr>
                <td>
                  Phone
                </td>
                <td>
                  <input type='text' name='phone' required />
                </td>
              </tr>
              <tr>
                <td>Address</td>
                <td><input type='text' name='address' required />
                </td>
              </tr>

            </table>
          </div>
          <div id='companydetails'>
            <h4>Company Details</h4>

            <table>
              <tr>
                <td>
                  Employee Id
                </td>
                <td>
                  <input type='text' name='employeeid' required />
                </td>
              </tr>
              <tr>
                <td>
                  Department
                </td>
                <td>
                  <input type='text' name='Department' required />
                </td>
              </tr>
              <tr>
                <td>
                  Designation
                </td>
                <td>
                  <input type='text' name='Designation' required />
                </td>
              </tr>
            </table>
          </div>
          <div id='employeeimage'>
            <h4>Employee Image</h4>

            {image && (
              <div>

                <img src={URL.createObjectURL(image)} alt="Preview" id='image_preview'  />
              </div>
            )}
            <input type="file" accept="image/*" onChange={handleImageChang} required />
          </div>
          <div id='submitbutton'>
            <div id='subbutton'>
            <input type='submit' value="submit" />
            </div>
          
        </div>
        </form>
        
      </div>

      {/* <link to='/regForm'> click</link> */}
    </div>
    
  )
}

export default RegistrationForm