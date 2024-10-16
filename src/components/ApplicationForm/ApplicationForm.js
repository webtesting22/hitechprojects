import React, { useState, useRef, useEffect } from "react";
import {
  Form,
  Select,
  Input,
  DatePicker,
  InputNumber,
  TreeSelect,
  Cascader,
  Button,
  message,
  Upload,
  notification,
  Checkbox
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./ApplicationForm.css";
import moment from 'moment';

import { PlusOutlined } from '@ant-design/icons';
// import "./ApplicationForm.css"
const ApplicationForm = () => {
  const [form] = Form.useForm();
  // const [formData, setFormData] = useState({});
  const displayRender = (labels) => labels[labels.length - 1];
  const [photoLink, setPhotoLink] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [inputList, setInputList] = useState([{ id: 1, name: 'contactNumber1' }]);
  const [isDisable, setIsDisable] = useState(false)
  const [formValues, setFormValues] = useState({})
  const [successMessage, setSuccessMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [otherDepartment, setOtherDepartment] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [otherPosition, setOtherPosition] = useState('');
  const [isFriendFieldEnabled, setIsFriendFieldEnabled] = useState(false);
  const [isReferenceothers, setIsReferenceOthers] = useState(false)
  const handleSelectChange = (value) => {
    setSelectedOptions(value);
  };
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const handleFormChange = (key, value) => {
    console.log(`${key}: ${value}`);
    setFormValues(prevValues => ({
      ...prevValues,
      [key]: value,
    }));
    if (key === "reference") {
      if (value && value.includes("Refer a Friend")) {
        setIsFriendFieldEnabled(true);
      } else {
        setIsFriendFieldEnabled(false);
        // alert("hello")
      }

      if (value && value.includes("Others")) {
        setIsReferenceOthers(true);
      } else {
        setIsReferenceOthers(false);
      }
    }
    // console.log(`${field} selected:`, value);
  };
  const handleDepartmentSelectChange = (value) => {
    setSelectedDepartment(value);

    if (value === "Others") {
      setOtherDepartment('');
    } else {
      handleFormChange("departmentAppliedFor", value);
    }

    // Trigger validation for the "departmentAppliedFor" field
    form.validateFields(['departmentAppliedFor']);
  };
  const handleDepartmentInputChange = (e) => {
    const value = e.target.value;
    setOtherDepartment(value);

    if (selectedDepartment === "Others") {
      handleFormChange("departmentAppliedFor", value);
    }

    // Trigger validation for the "departmentAppliedFor" field
    form.validateFields(['departmentAppliedFor']);
  };
  const handleInputChange = (key, value) => {
    setInputValues(prevValues => ({
      ...prevValues,
      [key]: value,
    }));
  };
  const handlePositionChange = (value) => {
    setSelectedPosition(value);
    if (value !== "Others") {
      handleFormChange("positionAppliedFor", value);
    } else {
      setOtherPosition(''); // Clear the input when "Others" is selected
    }

    // Trigger validation for the "positionAppliedFor" field
    form.validateFields(['positionAppliedFor']);
  };

  const handlePositionInputChange = (e) => {
    const value = e.target.value;
    setOtherPosition(value);
    handleFormChange("positionAppliedFor", value); // Send input value to handleFormChange

    // Trigger validation for the "positionAppliedFor" field
    form.validateFields(['positionAppliedFor']);
  };
  const validateDepartment = () => {
    return selectedDepartment === 'DepartmentOthers' ? !!otherDepartment : !!selectedDepartment;
  };

  const validatePosition = () => {
    return selectedPosition === 'PositionOthers' ? !!otherPosition : !!selectedPosition;
  };

  // const onChangePhoto = async (options) => {
  //     const { file, onSuccess, onError } = options;

  //     if (file.status === 'uploading') {
  //         setUploading(true);
  //         return;
  //     }

  //     if (file.status === 'done') {
  //         message.success(`${file.name} file uploaded successfully.`);
  //         onSuccess();
  //         setUploading(false);
  //         return;
  //     }

  //     if (file.status === 'error') {
  //         message.error(`Upload failed: ${file.error.message}`);
  //         onError(file.error);
  //         setUploading(false);
  //         return;
  //     }

  //     const formData = new FormData();
  //     formData.append('file', file.originFileObj);

  //     try {
  //         const response = await fetch('https://napi.prepseed.com/chats/uploadPolicy', {
  //             method: 'POST',
  //             body: formData,
  //         });

  //         if (response.ok) {
  //             const data = await response.json();
  //             console.log('Upload successful:', data); // Log the data here
  //             message.success(`${file.name} file uploaded successfully.`);
  //             onSuccess(data); // Call onSuccess with the response data if needed
  //         } else {
  //             const errorData = await response.json();
  //             message.error(`Upload failed: ${errorData.message || 'Unknown error'}`);
  //             onError(new Error(errorData.message || 'Unknown error'));
  //         }
  //     } catch (error) {
  //         message.error(`Upload failed: ${error.message}`);
  //         onError(error);
  //     } finally {
  //         setUploading(false);
  //     }
  // };

  const handleUploadChange = async (info) => {
    try {
      // Access the first file from the file list
      const file = info.file;
      const fileType = file.type;

      // Prepare request body for the upload policy request
      const requestBody = {
        fileName: encodeURIComponent(file.name), // Replace spaces with %20
        mime: fileType,
        ACL: "public-read",
      };

      // Request upload policy from the backend
      const response = await fetch(`https://napi.prepseed.com/chats/uploadPolicy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWJkNGM4YWQ3NzczMjc5YzVhZTM4MCIsInJvbGUiOiJtb2RlcmF0b3IiLCJleHAiOjE3MzAwMjc4MzksInBocyI6e30sImlhdCI6MTcyNDg0MzgzOH0.gNjc_Z5LD9vqtZ7V15CQhXsAdXrhbW9OEwOMEDz7MMg`,
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      // Check if the policy data is valid
      if (!data.data || !data.data.fields || !data.data.url) {
        throw new Error("Invalid policy document received from the server.");
      }

      // Create form data to upload the file
      const formData = new FormData();
      for (const [key, value] of Object.entries(data.data.fields)) {
        formData.append(key, value);
      }
      formData.append("file", file);

      // Upload the file to the S3 bucket (or wherever the URL points to)
      const uploadResponse = await fetch(data.data.url, {
        method: "POST",
        body: formData,
      });

      if (uploadResponse.ok) {
        const finalUrl = `${data.data.url}/${encodeURIComponent(data.filePath)}`;
        console.log("This is the finalUrl", finalUrl);
        setPhotoLink(finalUrl);
      } else {
        console.error("File upload failed");
      }
    } catch (error) {
      console.error("An error occurred during file upload:", error);
    }
  };



  const handleResumeChange = async (info) => {

    try {
      const file = info.file;
      const fileType = file.type;

      // Prepare request body for the upload policy request
      const requestBody = {
        fileName: encodeURIComponent(file.name), // Replace spaces with %20
        mime: fileType,
        acl: "public-read",
      };

      // Request upload policy from the backend
      const response = await fetch(
        `https://napi.prepseed.com/chats/uploadPolicy`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWJkNGM4YWQ3NzczMjc5YzVhZTM4MCIsInJvbGUiOiJtb2RlcmF0b3IiLCJleHAiOjE3MzAwMjc4MzksInBocyI6e30sImlhdCI6MTcyNDg0MzgzOH0.gNjc_Z5LD9vqtZ7V15CQhXsAdXrhbW9OEwOMEDz7MMg`,
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();

      // Check if the policy data is valid
      if (data && data.data && data.data.fields && data.data.url) {
        // Create form data to upload the file
        const formData = new FormData();
        for (const [key, value] of Object.entries(data.data.fields)) {
          formData.append(key, value);
        }
        formData.append("file", file);

        // Upload the file to the S3 bucket (or wherever the URL points to)
        const uploadResponse = await fetch(data.data.url, {
          method: "POST",
          body: formData,
        });

        if (uploadResponse.ok) {
          const finalUrl = `${data.data.url}/${encodeURIComponent(data.filePath)}`;
          // console.log
          setResumeLink(finalUrl);
          console.log("This is the final URL for the resume:", finalUrl);
        } else {
          notification.error({ message: "Error while uploading Resume" });
        }
      } else {
        notification.error({ message: "Error while uploading Resume" });
      }
    } catch (error) {
      console.error("An error occurred during file upload:", error);
      notification.error({ message: "An error occurred during file upload" });
    }
  };


  const handleSubmit = async (data) => {
    if (data) {
      try {
        console.log("Data to be sent:", data); // Log data before sending

        const response = await fetch(
          "https://napi.prepseed.com/hightech/addApplication",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // Convert formData to JSON
          }
        );

        if (response.ok) {
          const result = await response.json(); // Parse JSON response
          console.log("API Response:", result);
          // Assuming form is a reference to your form instance
          if (typeof form !== 'undefined' && form.resetFields) {
            form.resetFields(); // Reset the form fields
          }
          const relevantExperience = selectedOptions.reduce((acc, option) => {
            acc[option] = inputValues[option] || '';
            return acc;
          }, {});

          // Send relevantExperience in req.body
          console.log('Relevant Experience:', relevantExperience);
        } else {
          // Handle non-2xx HTTP responses
          console.error("API request failed with status:", response.status);
          const errorText = await response.text(); // Optionally get more details from the response
          console.error("Error response:", errorText);
        }
      } catch (error) {
        console.error("Error sending data to API:", error);
      }
    }
  };

  const treeCurrentLocationData = [
    {
      value: "Andhra Pradesh",
      label: "Andhra Pradesh",
      children: [
        { value: "Hyderabad", label: "Hyderabad" },
        { value: "Visakhapatnam", label: "Visakhapatnam" },
        { value: "Vijayawada", label: "Vijayawada" },
        { value: "Guntur", label: "Guntur" },
        { value: "Tirupati", label: "Tirupati" },
        { value: "Kakinada", label: "Kakinada" },
        { value: "Nellore", label: "Nellore" },
        { value: "Rajahmundry", label: "Rajahmundry" },
        { value: "Chittoor", label: "Chittoor" },
        { value: "Anantapur", label: "Anantapur" },
      ],
    },
    {
      value: "Arunachal Pradesh",
      label: "Arunachal Pradesh",
      children: [
        { value: "Itanagar", label: "Itanagar" },
        { value: "Tawang", label: "Tawang" },
        { value: "Bomdila", label: "Bomdila" },
        { value: "Ziro", label: "Ziro" },
        { value: "Pasighat", label: "Pasighat" },
        { value: "Naharlagun", label: "Naharlagun" },
        { value: "Roing", label: "Roing" },
        { value: "Tezu", label: "Tezu" },
        { value: "Ruksin", label: "Ruksin" },
        { value: "Seppa", label: "Seppa" },
      ],
    },
    {
      value: "Assam",
      label: "Assam",
      children: [
        { value: "Guwahati", label: "Guwahati" },
        { value: "Dispur", label: "Dispur" },
        { value: "Silchar", label: "Silchar" },
        { value: "Dibrugarh", label: "Dibrugarh" },
        { value: "Jorhat", label: "Jorhat" },
        { value: "Tezpur", label: "Tezpur" },
        { value: "Nagaon", label: "Nagaon" },
        { value: "Karimganj", label: "Karimganj" },
        { value: "Haflong", label: "Haflong" },
        { value: "Sivasagar", label: "Sivasagar" },
      ],
    },
    {
      value: "Bihar",
      label: "Bihar",
      children: [
        { value: "Patna", label: "Patna" },
        { value: "Gaya", label: "Gaya" },
        { value: "Bhagalpur", label: "Bhagalpur" },
        { value: "Munger", label: "Munger" },
        { value: "Darbhanga", label: "Darbhanga" },
        { value: "Muzaffarpur", label: "Muzaffarpur" },
        { value: "Begusarai", label: "Begusarai" },
        { value: "Purnia", label: "Purnia" },
        { value: "Arrah", label: "Arrah" },
        { value: "Kishanganj", label: "Kishanganj" },
      ],
    },
    {
      value: "Chhattisgarh",
      label: "Chhattisgarh",
      children: [
        { value: "Raipur", label: "Raipur" },
        { value: "Bilaspur", label: "Bilaspur" },
        { value: "Korba", label: "Korba" },
        { value: "Durg", label: "Durg" },
        { value: "Jagdalpur", label: "Jagdalpur" },
        { value: "Raigarh", label: "Raigarh" },
        { value: "Ambikapur", label: "Ambikapur" },
        { value: "Dhamtari", label: "Dhamtari" },
        { value: "Janjgiri-Champa", label: "Janjgiri-Champa" },
        { value: "Bhilai", label: "Bhilai" },
      ],
    },
    {
      value: "Goa",
      label: "Goa",
      children: [
        { value: "Panaji", label: "Panaji" },
        { value: "Vasco da Gama", label: "Vasco da Gama" },
        { value: "Margao", label: "Margao" },
        { value: "Mapusa", label: "Mapusa" },
        { value: "Ponda", label: "Ponda" },
        { value: "Cortalim", label: "Cortalim" },
        { value: "Panjim", label: "Panjim" },
        { value: "Quepem", label: "Quepem" },
        { value: "Sanguem", label: "Sanguem" },
        { value: "Cortalim", label: "Cortalim" },
      ],
    },
    {
      value: "Gujarat",
      label: "Gujarat",
      children: [
        { value: "Ahmedabad", label: "Ahmedabad" },
        { value: "Surat", label: "Surat" },
        { value: "Vadodara", label: "Vadodara" },
        { value: "Rajkot", label: "Rajkot" },
        { value: "Gandhinagar", label: "Gandhinagar" },
        { value: "Bhavnagar", label: "Bhavnagar" },
        { value: "Jamnagar", label: "Jamnagar" },
        { value: "Junagadh", label: "Junagadh" },
        { value: "Anand", label: "Anand" },
        { value: "Nadiad", label: "Nadiad" },
      ],
    },
    {
      value: "Haryana",
      label: "Haryana",
      children: [
        { value: "Ambala", label: "Ambala" },
        { value: "Bhiwani", label: "Bhiwani" },
        { value: "Chandigarh", label: "Chandigarh" },
        { value: "Faridabad", label: "Faridabad" },
        { value: "Firozpur Jhirka", label: "Firozpur Jhirka" },
        { value: "Gurugram", label: "Gurugram" },
        { value: "Hansi", label: "Hansi" },
        { value: "Hisar", label: "Hisar" },
        { value: "Jind", label: "Jind" },
        { value: "Kaithal", label: "Kaithal" },
        { value: "Karnal", label: "Karnal" },
        { value: "Kurukshetra", label: "Kurukshetra" },
        { value: "Panipat", label: "Panipat" },
        { value: "Pehowa", label: "Pehowa" },
        { value: "Rewari", label: "Rewari" },
        { value: "Rohtak", label: "Rohtak" },
        { value: "Sirsa", label: "Sirsa" },
        { value: "Sonipat", label: "Sonipat" },
      ],
    },
    {
      value: "Himachal Pradesh",
      label: "Himachal Pradesh",
      children: [
        { value: "Bilaspur", label: "Bilaspur" },
        { value: "Chamba", label: "Chamba" },
        { value: "Dalhousie", label: "Dalhousie" },
        { value: "Dharmshala", label: "Dharmshala" },
        { value: "Hamirpur", label: "Hamirpur" },
        { value: "Kangra", label: "Kangra" },
        { value: "Kullu", label: "Kullu" },
        { value: "Mandi", label: "Mandi" },
        { value: "Nahan", label: "Nahan" },
        { value: "Shimla", label: "Shimla" },
        { value: "Una", label: "Una" },
      ],
    },
    {
      value: "Jammu and Kashmir",
      label: "Jammu and Kashmir",
      children: [
        { value: "Anantnag", label: "Anantnag" },
        { value: "Baramula", label: "Baramula" },
        { value: "Doda", label: "Doda" },
        { value: "Gulmarg", label: "Gulmarg" },
        { value: "Jammu", label: "Jammu" },
        { value: "Kathua", label: "Kathua" },
        { value: "Punch", label: "Punch" },
        { value: "Rajouri", label: "Rajouri" },
        { value: "Srinagar", label: "Srinagar" },
        { value: "Udhampur", label: "Udhampur" },
      ],
    },
    {
      value: "Jharkhand",
      label: "Jharkhand",
      children: [
        { value: "Bokaro", label: "Bokaro" },
        { value: "Chaibasa", label: "Chaibasa" },
        { value: "Deoghar", label: "Deoghar" },
        { value: "Dhanbad", label: "Dhanbad" },
        { value: "Dumka", label: "Dumka" },
        { value: "Giridih", label: "Giridih" },
        { value: "Hazaribag", label: "Hazaribag" },
        { value: "Jamshedpur", label: "Jamshedpur" },
        { value: "Jharia", label: "Jharia" },
        { value: "Rajmahal", label: "Rajmahal" },
        { value: "Ranchi", label: "Ranchi" },
        { value: "Saraikela", label: "Saraikela" },
      ],
    },
    {
      value: "Karnataka",
      label: "Karnataka",
      children: [
        { value: "Badami", label: "Badami" },
        { value: "Ballari", label: "Ballari" },
        { value: "Bengaluru", label: "Bengaluru" },
        { value: "Belagavi", label: "Belagavi" },
        { value: "Bhadravati", label: "Bhadravati" },
        { value: "Bidar", label: "Bidar" },
        { value: "Chikkamagaluru", label: "Chikkamagaluru" },
        { value: "Chitradurga", label: "Chitradurga" },
        { value: "Davangere", label: "Davangere" },
        { value: "Halebid", label: "Halebid" },
        { value: "Hassan", label: "Hassan" },
        { value: "Hubballi-Dharwad", label: "Hubballi-Dharwad" },
        { value: "Kalaburagi", label: "Kalaburagi" },
        { value: "Kolar", label: "Kolar" },
        { value: "Madikeri", label: "Madikeri" },
        { value: "Mandya", label: "Mandya" },
        { value: "Mangaluru", label: "Mangaluru" },
        { value: "Mysuru", label: "Mysuru" },
        { value: "Raichur", label: "Raichur" },
        { value: "Shivamogga", label: "Shivamogga" },
        { value: "Shravanabelagola", label: "Shravanabelagola" },
        { value: "Shrirangapattana", label: "Shrirangapattana" },
        { value: "Tumakuru", label: "Tumakuru" },
        { value: "Vijayapura", label: "Vijayapura" },
      ],
    },
    {
      value: "Kerala",
      label: "Kerala",
      children: [
        { value: "Alappuzha", label: "Alappuzha" },
        { value: "Vatakara", label: "Vatakara" },
        { value: "Idukki", label: "Idukki" },
        { value: "Kannur", label: "Kannur" },
        { value: "Kochi", label: "Kochi" },
        { value: "Kollam", label: "Kollam" },
        { value: "Kottayam", label: "Kottayam" },
        { value: "Kozhikode", label: "Kozhikode" },
        { value: "Mattancheri", label: "Mattancheri" },
        { value: "Palakkad", label: "Palakkad" },
        { value: "Thalassery", label: "Thalassery" },
        { value: "Thiruvananthapuram", label: "Thiruvananthapuram" },
        { value: "Thrissur", label: "Thrissur" },
      ],
    },
    {
      value: "Ladakh",
      label: "Ladakh",
      children: [
        { value: "Kargil", label: "Kargil" },
        { value: "Leh", label: "Leh" },
      ],
    },
    {
      value: "Madhya Pradesh",
      label: "Madhya Pradesh",
      children: [
        { value: "Balaghat", label: "Balaghat" },
        { value: "Barwani", label: "Barwani" },
        { value: "Betul", label: "Betul" },
        { value: "Bharhut", label: "Bharhut" },
        { value: "Bhind", label: "Bhind" },
        { value: "Bhojpur", label: "Bhojpur" },
        { value: "Bhopal", label: "Bhopal" },
        { value: "Burhanpur", label: "Burhanpur" },
        { value: "Chhatarpur", label: "Chhatarpur" },
        { value: "Chhindwara", label: "Chhindwara" },
        { value: "Damoh", label: "Damoh" },
        { value: "Datia", label: "Datia" },
        { value: "Dewas", label: "Dewas" },
        { value: "Dhar", label: "Dhar" },
        {
          value: "Dr. Ambedkar Nagar (Mhow)",
          label: "Dr. Ambedkar Nagar (Mhow)",
        },
        { value: "Guna", label: "Guna" },
        { value: "Gwalior", label: "Gwalior" },
        { value: "Hoshangabad", label: "Hoshangabad" },
        { value: "Indore", label: "Indore" },
        { value: "Itarsi", label: "Itarsi" },
        { value: "Jabalpur", label: "Jabalpur" },
        { value: "Jhabua", label: "Jhabua" },
        { value: "Khajuraho", label: "Khajuraho" },
        { value: "Khandwa", label: "Khandwa" },
        { value: "Khargone", label: "Khargone" },
        { value: "Maheshwar", label: "Maheshwar" },
        { value: "Mandla", label: "Mandla" },
        { value: "Mandsaur", label: "Mandsaur" },
        { value: "Morena", label: "Morena" },
        { value: "Murwara", label: "Murwara" },
        { value: "Narsimhapur", label: "Narsimhapur" },
        { value: "Narsinghgarh", label: "Narsinghgarh" },
        { value: "Narwar", label: "Narwar" },
        { value: "Neemuch", label: "Neemuch" },
        { value: "Nowgong", label: "Nowgong" },
        { value: "Orchha", label: "Orchha" },
        { value: "Panna", label: "Panna" },
        { value: "Raisen", label: "Raisen" },
        { value: "Rajgarh", label: "Rajgarh" },
        { value: "Ratlam", label: "Ratlam" },
        { value: "Rewa", label: "Rewa" },
        { value: "Sagar", label: "Sagar" },
        { value: "Sarangpur", label: "Sarangpur" },
        { value: "Satna", label: "Satna" },
        { value: "Sehore", label: "Sehore" },
        { value: "Seoni", label: "Seoni" },
        { value: "Shahdol", label: "Shahdol" },
        { value: "Shajapur", label: "Shajapur" },
        { value: "Sheopur", label: "Sheopur" },
        { value: "Shivpuri", label: "Shivpuri" },
        { value: "Ujjain", label: "Ujjain" },
        { value: "Vidisha", label: "Vidisha" },
      ],
    },
    {
      value: "Maharashtra",
      label: "Maharashtra",
      children: [
        { value: "Ahmadnagar", label: "Ahmadnagar" },
        { value: "Akola", label: "Akola" },
        { value: "Amravati", label: "Amravati" },
        { value: "Aurangabad", label: "Aurangabad" },
        { value: "Bhandara", label: "Bhandara" },
        { value: "Bhusawal", label: "Bhusawal" },
        { value: "Bid", label: "Bid" },
        { value: "Buldhana", label: "Buldhana" },
        { value: "Chandrapur", label: "Chandrapur" },
        { value: "Daulatabad", label: "Daulatabad" },
        { value: "Dhule", label: "Dhule" },
        { value: "Jalgaon", label: "Jalgaon" },
        { value: "Kalyan", label: "Kalyan" },
        { value: "Karli", label: "Karli" },
        { value: "Kolhapur", label: "Kolhapur" },
        { value: "Mahabaleshwar", label: "Mahabaleshwar" },
        { value: "Malegaon", label: "Malegaon" },
        { value: "Matheran", label: "Matheran" },
        { value: "Mumbai", label: "Mumbai" },
        { value: "Nagpur", label: "Nagpur" },
        { value: "Nanded", label: "Nanded" },
        { value: "Nashik", label: "Nashik" },
        { value: "Osmanabad", label: "Osmanabad" },
        { value: "Pandharpur", label: "Pandharpur" },
        { value: "Parbhani", label: "Parbhani" },
        { value: "Pune", label: "Pune" },
        { value: "Ratnagiri", label: "Ratnagiri" },
        { value: "Sangli", label: "Sangli" },
        { value: "Satara", label: "Satara" },
        { value: "Sevagram", label: "Sevagram" },
        { value: "Solapur", label: "Solapur" },
        { value: "Thane", label: "Thane" },
        { value: "Ulhasnagar", label: "Ulhasnagar" },
        { value: "Vasai-Virar", label: "Vasai-Virar" },
        { value: "Wardha", label: "Wardha" },
        { value: "Yavatmal", label: "Yavatmal" },
      ],
    },
    {
      value: "Manipur",
      label: "Manipur",
      children: [
        { value: "Imphal", label: "Imphal" },
        { value: "Churachandpur", label: "Churachandpur" },
        { value: "Thoubal", label: "Thoubal" },
        { value: "Kakching", label: "Kakching" },
        { value: "Moirang", label: "Moirang" },
        { value: "Jiribam", label: "Jiribam" },
        { value: "Kangpokpi", label: "Kangpokpi" },
        { value: "Senapati", label: "Senapati" },
        { value: "Tamenglong", label: "Tamenglong" },
        { value: "Ukhrul", label: "Ukhrul" },
      ],
    },
    {
      value: "Meghalaya",
      label: "Meghalaya",
      children: [
        { value: "Shillong", label: "Shillong" },
        { value: "Tura", label: "Tura" },
        { value: "Jowai", label: "Jowai" },
        { value: "Nongpoh", label: "Nongpoh" },
        { value: "Bally", label: "Bally" },
        { value: "Mairang", label: "Mairang" },
        { value: "Nongstoin", label: "Nongstoin" },
        { value: "Williamnagar", label: "Williamnagar" },
        { value: "Rongram", label: "Rongram" },
        { value: "Jaintia Hills", label: "Jaintia Hills" },
      ],
    },
    {
      value: "Mizoram",
      label: "Mizoram",
      children: [
        { value: "Aizawl", label: "Aizawl" },
        { value: "Lunglei", label: "Lunglei" },
        { value: "Serchhip", label: "Serchhip" },
        { value: "Champhai", label: "Champhai" },
        { value: "Kolasib", label: "Kolasib" },
        { value: "Mamit", label: "Mamit" },
        { value: "Lawngtlai", label: "Lawngtlai" },
        { value: "Hnahthial", label: "Hnahthial" },
        { value: "Siaha", label: "Siaha" },
        { value: "Saiha", label: "Saiha" },
      ],
    },
    {
      value: "Nagaland",
      label: "Nagaland",
      children: [
        { value: "Kohima", label: "Kohima" },
        { value: "Dimapur", label: "Dimapur" },
        { value: "Wokha", label: "Wokha" },
        { value: "Mokokchung", label: "Mokokchung" },
        { value: "Tuensang", label: "Tuensang" },
        { value: "Mon", label: "Mon" },
        { value: "Phek", label: "Phek" },
        { value: "Zunheboto", label: "Zunheboto" },
        { value: "Longleng", label: "Longleng" },
        { value: "Kiphire", label: "Kiphire" },
      ],
    },
    {
      value: "Odisha",
      label: "Odisha",
      children: [
        { value: "Balangir", label: "Balangir" },
        { value: "Baleshwar", label: "Baleshwar" },
        { value: "Baripada", label: "Baripada" },
        { value: "Bhubaneshwar", label: "Bhubaneshwar" },
        { value: "Brahmapur", label: "Brahmapur" },
        { value: "Cuttack", label: "Cuttack" },
        { value: "Dhenkanal", label: "Dhenkanal" },
        { value: "Kendujhar", label: "Kendujhar" },
        { value: "Konark", label: "Konark" },
        { value: "Koraput", label: "Koraput" },
        { value: "Paradip", label: "Paradip" },
        { value: "Phulabani", label: "Phulabani" },
        { value: "Puri", label: "Puri" },
        { value: "Sambalpur", label: "Sambalpur" },
        { value: "Mainpuri", label: "Mainpuri" },
        { value: "Mathura", label: "Mathura" },
        { value: "Meerut", label: "Meerut" },
        { value: "Mirzapur", label: "Mirzapur" },
        { value: "Moradabad", label: "Moradabad" },
        { value: "Muzaffarnagar", label: "Muzaffarnagar" },
        { value: "Partapgarh", label: "Partapgarh" },
        { value: "Pilibhit", label: "Pilibhit" },
        { value: "Prayagraj", label: "Prayagraj" },
        { value: "Rae Bareli", label: "Rae Bareli" },
        { value: "Rampur", label: "Rampur" },
        { value: "Saharanpur", label: "Saharanpur" },
        { value: "Sambhal", label: "Sambhal" },
        { value: "Shahjahanpur", label: "Shahjahanpur" },
        { value: "Sitapur", label: "Sitapur" },
        { value: "Sultanpur", label: "Sultanpur" },
        { value: "Tehri", label: "Tehri" },
        { value: "Varanasi", label: "Varanasi" },
      ],
    },
    {
      value: "Punjab",
      label: "Punjab",
      children: [
        { value: "Chandigarh", label: "Chandigarh" },
        { value: "Amritsar", label: "Amritsar" },
        { value: "Ludhiana", label: "Ludhiana" },
        { value: "Patiala", label: "Patiala" },
        { value: "Jalandhar", label: "Jalandhar" },
        { value: "Mohali", label: "Mohali" },
        { value: "Bathinda", label: "Bathinda" },
        { value: "Faridkot", label: "Faridkot" },
        { value: "Firozpur", label: "Firozpur" },
        { value: "Rupnagar", label: "Rupnagar" },
        { value: "Moga", label: "Moga" },
      ],
    },
    {
      value: "Rajasthan",
      label: "Rajasthan",
      children: [
        { value: "Jaipur", label: "Jaipur" },
        { value: "Udaipur", label: "Udaipur" },
        { value: "Jodhpur", label: "Jodhpur" },
        { value: "Kota", label: "Kota" },
        { value: "Ajmer", label: "Ajmer" },
        { value: "Bikaner", label: "Bikaner" },
        { value: "Alwar", label: "Alwar" },
        { value: "Bhilwara", label: "Bhilwara" },
        { value: "Sikar", label: "Sikar" },
        { value: "Pali", label: "Pali" },
        { value: "Tonk", label: "Tonk" },
        { value: "Jhunjhunu", label: "Jhunjhunu" },
      ],
    },
    {
      value: "Sikkim",
      label: "Sikkim",
      children: [
        { value: "Gangtok", label: "Gangtok" },
        { value: "Namchi", label: "Namchi" },
        { value: "Mangan", label: "Mangan" },
        { value: "Rangpo", label: "Rangpo" },
        { value: "Jorethang", label: "Jorethang" },
        { value: "Yuksom", label: "Yuksom" },
        { value: "Lachung", label: "Lachung" },
        { value: "Lachen", label: "Lachen" },
        { value: "Rongli", label: "Rongli" },
      ],
    },
    {
      value: "Tamil Nadu",
      label: "Tamil Nadu",
      children: [
        { value: "Chennai", label: "Chennai" },
        { value: "Coimbatore", label: "Coimbatore" },
        { value: "Madurai", label: "Madurai" },
        { value: "Tiruchirappalli", label: "Tiruchirappalli" },
        { value: "Salem", label: "Salem" },
        { value: "Tirunelveli", label: "Tirunelveli" },
        { value: "Vellore", label: "Vellore" },
        { value: "Tirupur", label: "Tirupur" },
        { value: "Erode", label: "Erode" },
        { value: "Kanchipuram", label: "Kanchipuram" },
        { value: "Trichy", label: "Trichy" },
        { value: "Nagercoil", label: "Nagercoil" },
      ],
    },
    {
      value: "Telangana",
      label: "Telangana",
      children: [
        { value: "Hyderabad", label: "Hyderabad" },
        { value: "Warangal", label: "Warangal" },
        { value: "Khammam", label: "Khammam" },
        { value: "Karimnagar", label: "Karimnagar" },
        { value: "Nizamabad", label: "Nizamabad" },
        { value: "Mahbubnagar", label: "Mahbubnagar" },
        { value: "Adilabad", label: "Adilabad" },
        { value: "Ramagundam", label: "Ramagundam" },
        { value: "Medak", label: "Medak" },
        { value: "Jagtial", label: "Jagtial" },
      ],
    },
    {
      value: "Tripura",
      label: "Tripura",
      children: [
        { value: "Agartala", label: "Agartala" },
        { value: "Udaipur", label: "Udaipur" },
        { value: "Dharmanagar", label: "Dharmanagar" },
        { value: "Kailashahar", label: "Kailashahar" },
        { value: "Ambassa", label: "Ambassa" },
        { value: "Belonia", label: "Belonia" },
        { value: "Ranirbazar", label: "Ranirbazar" },
        { value: "Khowai", label: "Khowai" },
        { value: "Bishalgarh", label: "Bishalgarh" },
        { value: "Sepahijala", label: "Sepahijala" },
      ],
    },
    {
      value: "Uttar Pradesh",
      label: "Uttar Pradesh",
      children: [
        { value: "Lucknow", label: "Lucknow" },
        { value: "Kanpur", label: "Kanpur" },
        { value: "Ghaziabad", label: "Ghaziabad" },
        { value: "Agra", label: "Agra" },
        { value: "Varanasi", label: "Varanasi" },
        { value: "Meerut", label: "Meerut" },
        { value: "Allahabad", label: "Allahabad" },
        { value: "Moradabad", label: "Moradabad" },
        { value: "Bareilly", label: "Bareilly" },
        { value: "Aligarh", label: "Aligarh" },
        { value: "Jaunpur", label: "Jaunpur" },
        { value: "Ayodhya", label: "Ayodhya" },
      ],
    },
    {
      value: "Uttarakhand",
      label: "Uttarakhand",
      children: [
        { value: "Almora", label: "Almora" },
        { value: "Dehra Dun", label: "Dehra Dun" },
        { value: "Haridwar", label: "Haridwar" },
        { value: "Mussoorie", label: "Mussoorie" },
        { value: "Nainital", label: "Nainital" },
        { value: "Pithoragarh", label: "Pithoragarh" },
      ],
    },
    {
      value: "West Bengal",
      label: "West Bengal",
      children: [
        { value: "Alipore", label: "Alipore" },
        { value: "Alipur Duar", label: "Alipur Duar" },
        { value: "Asansol", label: "Asansol" },
        { value: "Baharampur", label: "Baharampur" },
        { value: "Bally", label: "Bally" },
        { value: "Balurghat", label: "Balurghat" },
        { value: "Bankura", label: "Bankura" },
        { value: "Baranagar", label: "Baranagar" },
        { value: "Barasat", label: "Barasat" },
        { value: "Barrackpore", label: "Barrackpore" },
        { value: "Basirhat", label: "Basirhat" },
        { value: "Bhatpara", label: "Bhatpara" },
        { value: "Bishnupur", label: "Bishnupur" },
        { value: "Budge Budge", label: "Budge Budge" },
        { value: "Burdwan", label: "Burdwan" },
        { value: "Chandernagore", label: "Chandernagore" },
        { value: "Darjeeling", label: "Darjeeling" },
        { value: "Diamond Harbour", label: "Diamond Harbour" },
        { value: "Dum Dum", label: "Dum Dum" },
        { value: "Durgapur", label: "Durgapur" },
        { value: "Halisahar", label: "Halisahar" },
        { value: "Haora", label: "Haora" },
        { value: "Hugli", label: "Hugli" },
        { value: "Ingraj Bazar", label: "Ingraj Bazar" },
        { value: "Jalpaiguri", label: "Jalpaiguri" },
        { value: "Kalimpong", label: "Kalimpong" },
        { value: "Kamarhati", label: "Kamarhati" },
        { value: "Kanchrapara", label: "Kanchrapara" },
        { value: "Kharagpur", label: "Kharagpur" },
        { value: "Cooch Behar", label: "Cooch Behar" },
        { value: "Kolkata", label: "Kolkata" },
        { value: "Krishnanagar", label: "Krishnanagar" },
        { value: "Malda", label: "Malda" },
        { value: "Midnapore", label: "Midnapore" },
        { value: "Murshidabad", label: "Murshidabad" },
        { value: "Nabadwip", label: "Nabadwip" },
        { value: "Palashi", label: "Palashi" },
        { value: "Panihati", label: "Panihati" },
        { value: "Purulia", label: "Purulia" },
        { value: "Raiganj", label: "Raiganj" },
        { value: "Santipur", label: "Santipur" },
        { value: "Shantiniketan", label: "Shantiniketan" },
        { value: "Shrirampur", label: "Shrirampur" },
        { value: "Siliguri", label: "Siliguri" },
        { value: "Siuri", label: "Siuri" },
        { value: "Tamluk", label: "Tamluk" },
        { value: "Titagarh", label: "Titagarh" },
      ],
    },
  ];
  const generateNumbers = () => {
    return Array.from({ length: 20 }, (_, index) => ({
      value: (index + 1).toString(),
      label: (index + 1).toString()
    }));
  };
  const treeRelevantData = [
    {
      value: "Residential",
      label: "Residential",
      children: generateNumbers(),
    },
    {
      value: "Commercial",
      label: "Commercial",
      children: generateNumbers(),
    },
    {
      value: "Industrial",
      label: "Industrial",
      children: generateNumbers(),
    },
    {
      value: "Institutional",
      label: "Institutional",
      children: generateNumbers(),
    },
    {
      value: "Others",
      label: "Others",
      // children: generateNumbers(),
    }
  ];
  const treeHomeData = [

    {
      value: "Andhra Pradesh",
      label: "Andhra Pradesh",
      children: [
        { value: "Hyderabad", label: "Hyderabad" },
        { value: "Visakhapatnam", label: "Visakhapatnam" },
        { value: "Vijayawada", label: "Vijayawada" },
        { value: "Guntur", label: "Guntur" },
        { value: "Tirupati", label: "Tirupati" },
        { value: "Kakinada", label: "Kakinada" },
        { value: "Nellore", label: "Nellore" },
        { value: "Rajahmundry", label: "Rajahmundry" },
        { value: "Chittoor", label: "Chittoor" },
        { value: "Anantapur", label: "Anantapur" },
      ],
    },
    {
      value: "Arunachal Pradesh",
      label: "Arunachal Pradesh",
      children: [
        { value: "Itanagar", label: "Itanagar" },
        { value: "Tawang", label: "Tawang" },
        { value: "Bomdila", label: "Bomdila" },
        { value: "Ziro", label: "Ziro" },
        { value: "Pasighat", label: "Pasighat" },
        { value: "Naharlagun", label: "Naharlagun" },
        { value: "Roing", label: "Roing" },
        { value: "Tezu", label: "Tezu" },
        { value: "Ruksin", label: "Ruksin" },
        { value: "Seppa", label: "Seppa" },
      ],
    },
    {
      value: "Assam",
      label: "Assam",
      children: [
        { value: "Guwahati", label: "Guwahati" },
        { value: "Dispur", label: "Dispur" },
        { value: "Silchar", label: "Silchar" },
        { value: "Dibrugarh", label: "Dibrugarh" },
        { value: "Jorhat", label: "Jorhat" },
        { value: "Tezpur", label: "Tezpur" },
        { value: "Nagaon", label: "Nagaon" },
        { value: "Karimganj", label: "Karimganj" },
        { value: "Haflong", label: "Haflong" },
        { value: "Sivasagar", label: "Sivasagar" },
      ],
    },
    {
      value: "Bihar",
      label: "Bihar",
      children: [
        { value: "Patna", label: "Patna" },
        { value: "Gaya", label: "Gaya" },
        { value: "Bhagalpur", label: "Bhagalpur" },
        { value: "Munger", label: "Munger" },
        { value: "Darbhanga", label: "Darbhanga" },
        { value: "Muzaffarpur", label: "Muzaffarpur" },
        { value: "Begusarai", label: "Begusarai" },
        { value: "Purnia", label: "Purnia" },
        { value: "Arrah", label: "Arrah" },
        { value: "Kishanganj", label: "Kishanganj" },
      ],
    },
    {
      value: "Chhattisgarh",
      label: "Chhattisgarh",
      children: [
        { value: "Raipur", label: "Raipur" },
        { value: "Bilaspur", label: "Bilaspur" },
        { value: "Korba", label: "Korba" },
        { value: "Durg", label: "Durg" },
        { value: "Jagdalpur", label: "Jagdalpur" },
        { value: "Raigarh", label: "Raigarh" },
        { value: "Ambikapur", label: "Ambikapur" },
        { value: "Dhamtari", label: "Dhamtari" },
        { value: "Janjgiri-Champa", label: "Janjgiri-Champa" },
        { value: "Bhilai", label: "Bhilai" },
      ],
    },
    {
      value: "Goa",
      label: "Goa",
      children: [
        { value: "Panaji", label: "Panaji" },
        { value: "Vasco da Gama", label: "Vasco da Gama" },
        { value: "Margao", label: "Margao" },
        { value: "Mapusa", label: "Mapusa" },
        { value: "Ponda", label: "Ponda" },
        { value: "Cortalim", label: "Cortalim" },
        { value: "Panjim", label: "Panjim" },
        { value: "Quepem", label: "Quepem" },
        { value: "Sanguem", label: "Sanguem" },
        { value: "Cortalim", label: "Cortalim" },
      ],
    },
    {
      value: "Gujarat",
      label: "Gujarat",
      children: [
        { value: "Ahmedabad", label: "Ahmedabad" },
        { value: "Surat", label: "Surat" },
        { value: "Vadodara", label: "Vadodara" },
        { value: "Rajkot", label: "Rajkot" },
        { value: "Gandhinagar", label: "Gandhinagar" },
        { value: "Bhavnagar", label: "Bhavnagar" },
        { value: "Jamnagar", label: "Jamnagar" },
        { value: "Junagadh", label: "Junagadh" },
        { value: "Anand", label: "Anand" },
        { value: "Nadiad", label: "Nadiad" },
      ],
    },
    {
      value: "Haryana",
      label: "Haryana",
      children: [
        { value: "Ambala", label: "Ambala" },
        { value: "Bhiwani", label: "Bhiwani" },
        { value: "Chandigarh", label: "Chandigarh" },
        { value: "Faridabad", label: "Faridabad" },
        { value: "Firozpur Jhirka", label: "Firozpur Jhirka" },
        { value: "Gurugram", label: "Gurugram" },
        { value: "Hansi", label: "Hansi" },
        { value: "Hisar", label: "Hisar" },
        { value: "Jind", label: "Jind" },
        { value: "Kaithal", label: "Kaithal" },
        { value: "Karnal", label: "Karnal" },
        { value: "Kurukshetra", label: "Kurukshetra" },
        { value: "Panipat", label: "Panipat" },
        { value: "Pehowa", label: "Pehowa" },
        { value: "Rewari", label: "Rewari" },
        { value: "Rohtak", label: "Rohtak" },
        { value: "Sirsa", label: "Sirsa" },
        { value: "Sonipat", label: "Sonipat" },
      ],
    },
    {
      value: "Himachal Pradesh",
      label: "Himachal Pradesh",
      children: [
        { value: "Bilaspur", label: "Bilaspur" },
        { value: "Chamba", label: "Chamba" },
        { value: "Dalhousie", label: "Dalhousie" },
        { value: "Dharmshala", label: "Dharmshala" },
        { value: "Hamirpur", label: "Hamirpur" },
        { value: "Kangra", label: "Kangra" },
        { value: "Kullu", label: "Kullu" },
        { value: "Mandi", label: "Mandi" },
        { value: "Nahan", label: "Nahan" },
        { value: "Shimla", label: "Shimla" },
        { value: "Una", label: "Una" },
      ],
    },
    {
      value: "Jammu and Kashmir",
      label: "Jammu and Kashmir",
      children: [
        { value: "Anantnag", label: "Anantnag" },
        { value: "Baramula", label: "Baramula" },
        { value: "Doda", label: "Doda" },
        { value: "Gulmarg", label: "Gulmarg" },
        { value: "Jammu", label: "Jammu" },
        { value: "Kathua", label: "Kathua" },
        { value: "Punch", label: "Punch" },
        { value: "Rajouri", label: "Rajouri" },
        { value: "Srinagar", label: "Srinagar" },
        { value: "Udhampur", label: "Udhampur" },
      ],
    },
    {
      value: "Jharkhand",
      label: "Jharkhand",
      children: [
        { value: "Bokaro", label: "Bokaro" },
        { value: "Chaibasa", label: "Chaibasa" },
        { value: "Deoghar", label: "Deoghar" },
        { value: "Dhanbad", label: "Dhanbad" },
        { value: "Dumka", label: "Dumka" },
        { value: "Giridih", label: "Giridih" },
        { value: "Hazaribag", label: "Hazaribag" },
        { value: "Jamshedpur", label: "Jamshedpur" },
        { value: "Jharia", label: "Jharia" },
        { value: "Rajmahal", label: "Rajmahal" },
        { value: "Ranchi", label: "Ranchi" },
        { value: "Saraikela", label: "Saraikela" },
      ],
    },
    {
      value: "Karnataka",
      label: "Karnataka",
      children: [
        { value: "Badami", label: "Badami" },
        { value: "Ballari", label: "Ballari" },
        { value: "Bengaluru", label: "Bengaluru" },
        { value: "Belagavi", label: "Belagavi" },
        { value: "Bhadravati", label: "Bhadravati" },
        { value: "Bidar", label: "Bidar" },
        { value: "Chikkamagaluru", label: "Chikkamagaluru" },
        { value: "Chitradurga", label: "Chitradurga" },
        { value: "Davangere", label: "Davangere" },
        { value: "Halebid", label: "Halebid" },
        { value: "Hassan", label: "Hassan" },
        { value: "Hubballi-Dharwad", label: "Hubballi-Dharwad" },
        { value: "Kalaburagi", label: "Kalaburagi" },
        { value: "Kolar", label: "Kolar" },
        { value: "Madikeri", label: "Madikeri" },
        { value: "Mandya", label: "Mandya" },
        { value: "Mangaluru", label: "Mangaluru" },
        { value: "Mysuru", label: "Mysuru" },
        { value: "Raichur", label: "Raichur" },
        { value: "Shivamogga", label: "Shivamogga" },
        { value: "Shravanabelagola", label: "Shravanabelagola" },
        { value: "Shrirangapattana", label: "Shrirangapattana" },
        { value: "Tumakuru", label: "Tumakuru" },
        { value: "Vijayapura", label: "Vijayapura" },
      ],
    },
    {
      value: "Kerala",
      label: "Kerala",
      children: [
        { value: "Alappuzha", label: "Alappuzha" },
        { value: "Vatakara", label: "Vatakara" },
        { value: "Idukki", label: "Idukki" },
        { value: "Kannur", label: "Kannur" },
        { value: "Kochi", label: "Kochi" },
        { value: "Kollam", label: "Kollam" },
        { value: "Kottayam", label: "Kottayam" },
        { value: "Kozhikode", label: "Kozhikode" },
        { value: "Mattancheri", label: "Mattancheri" },
        { value: "Palakkad", label: "Palakkad" },
        { value: "Thalassery", label: "Thalassery" },
        { value: "Thiruvananthapuram", label: "Thiruvananthapuram" },
        { value: "Thrissur", label: "Thrissur" },
      ],
    },
    {
      value: "Ladakh",
      label: "Ladakh",
      children: [
        { value: "Kargil", label: "Kargil" },
        { value: "Leh", label: "Leh" },
      ],
    },
    {
      value: "Madhya Pradesh",
      label: "Madhya Pradesh",
      children: [
        { value: "Balaghat", label: "Balaghat" },
        { value: "Barwani", label: "Barwani" },
        { value: "Betul", label: "Betul" },
        { value: "Bharhut", label: "Bharhut" },
        { value: "Bhind", label: "Bhind" },
        { value: "Bhojpur", label: "Bhojpur" },
        { value: "Bhopal", label: "Bhopal" },
        { value: "Burhanpur", label: "Burhanpur" },
        { value: "Chhatarpur", label: "Chhatarpur" },
        { value: "Chhindwara", label: "Chhindwara" },
        { value: "Damoh", label: "Damoh" },
        { value: "Datia", label: "Datia" },
        { value: "Dewas", label: "Dewas" },
        { value: "Dhar", label: "Dhar" },
        {
          value: "Dr. Ambedkar Nagar (Mhow)",
          label: "Dr. Ambedkar Nagar (Mhow)",
        },
        { value: "Guna", label: "Guna" },
        { value: "Gwalior", label: "Gwalior" },
        { value: "Hoshangabad", label: "Hoshangabad" },
        { value: "Indore", label: "Indore" },
        { value: "Itarsi", label: "Itarsi" },
        { value: "Jabalpur", label: "Jabalpur" },
        { value: "Jhabua", label: "Jhabua" },
        { value: "Khajuraho", label: "Khajuraho" },
        { value: "Khandwa", label: "Khandwa" },
        { value: "Khargone", label: "Khargone" },
        { value: "Maheshwar", label: "Maheshwar" },
        { value: "Mandla", label: "Mandla" },
        { value: "Mandsaur", label: "Mandsaur" },
        { value: "Morena", label: "Morena" },
        { value: "Murwara", label: "Murwara" },
        { value: "Narsimhapur", label: "Narsimhapur" },
        { value: "Narsinghgarh", label: "Narsinghgarh" },
        { value: "Narwar", label: "Narwar" },
        { value: "Neemuch", label: "Neemuch" },
        { value: "Nowgong", label: "Nowgong" },
        { value: "Orchha", label: "Orchha" },
        { value: "Panna", label: "Panna" },
        { value: "Raisen", label: "Raisen" },
        { value: "Rajgarh", label: "Rajgarh" },
        { value: "Ratlam", label: "Ratlam" },
        { value: "Rewa", label: "Rewa" },
        { value: "Sagar", label: "Sagar" },
        { value: "Sarangpur", label: "Sarangpur" },
        { value: "Satna", label: "Satna" },
        { value: "Sehore", label: "Sehore" },
        { value: "Seoni", label: "Seoni" },
        { value: "Shahdol", label: "Shahdol" },
        { value: "Shajapur", label: "Shajapur" },
        { value: "Sheopur", label: "Sheopur" },
        { value: "Shivpuri", label: "Shivpuri" },
        { value: "Ujjain", label: "Ujjain" },
        { value: "Vidisha", label: "Vidisha" },
      ],
    },
    {
      value: "Maharashtra",
      label: "Maharashtra",
      children: [
        { value: "Ahmadnagar", label: "Ahmadnagar" },
        { value: "Akola", label: "Akola" },
        { value: "Amravati", label: "Amravati" },
        { value: "Aurangabad", label: "Aurangabad" },
        { value: "Bhandara", label: "Bhandara" },
        { value: "Bhusawal", label: "Bhusawal" },
        { value: "Bid", label: "Bid" },
        { value: "Buldhana", label: "Buldhana" },
        { value: "Chandrapur", label: "Chandrapur" },
        { value: "Daulatabad", label: "Daulatabad" },
        { value: "Dhule", label: "Dhule" },
        { value: "Jalgaon", label: "Jalgaon" },
        { value: "Kalyan", label: "Kalyan" },
        { value: "Karli", label: "Karli" },
        { value: "Kolhapur", label: "Kolhapur" },
        { value: "Mahabaleshwar", label: "Mahabaleshwar" },
        { value: "Malegaon", label: "Malegaon" },
        { value: "Matheran", label: "Matheran" },
        { value: "Mumbai", label: "Mumbai" },
        { value: "Nagpur", label: "Nagpur" },
        { value: "Nanded", label: "Nanded" },
        { value: "Nashik", label: "Nashik" },
        { value: "Osmanabad", label: "Osmanabad" },
        { value: "Pandharpur", label: "Pandharpur" },
        { value: "Parbhani", label: "Parbhani" },
        { value: "Pune", label: "Pune" },
        { value: "Ratnagiri", label: "Ratnagiri" },
        { value: "Sangli", label: "Sangli" },
        { value: "Satara", label: "Satara" },
        { value: "Sevagram", label: "Sevagram" },
        { value: "Solapur", label: "Solapur" },
        { value: "Thane", label: "Thane" },
        { value: "Ulhasnagar", label: "Ulhasnagar" },
        { value: "Vasai-Virar", label: "Vasai-Virar" },
        { value: "Wardha", label: "Wardha" },
        { value: "Yavatmal", label: "Yavatmal" },
      ],
    },
    {
      value: "Manipur",
      label: "Manipur",
      children: [
        { value: "Imphal", label: "Imphal" },
        { value: "Churachandpur", label: "Churachandpur" },
        { value: "Thoubal", label: "Thoubal" },
        { value: "Kakching", label: "Kakching" },
        { value: "Moirang", label: "Moirang" },
        { value: "Jiribam", label: "Jiribam" },
        { value: "Kangpokpi", label: "Kangpokpi" },
        { value: "Senapati", label: "Senapati" },
        { value: "Tamenglong", label: "Tamenglong" },
        { value: "Ukhrul", label: "Ukhrul" },
      ],
    },
    {
      value: "Meghalaya",
      label: "Meghalaya",
      children: [
        { value: "Shillong", label: "Shillong" },
        { value: "Tura", label: "Tura" },
        { value: "Jowai", label: "Jowai" },
        { value: "Nongpoh", label: "Nongpoh" },
        { value: "Bally", label: "Bally" },
        { value: "Mairang", label: "Mairang" },
        { value: "Nongstoin", label: "Nongstoin" },
        { value: "Williamnagar", label: "Williamnagar" },
        { value: "Rongram", label: "Rongram" },
        { value: "Jaintia Hills", label: "Jaintia Hills" },
      ],
    },
    {
      value: "Mizoram",
      label: "Mizoram",
      children: [
        { value: "Aizawl", label: "Aizawl" },
        { value: "Lunglei", label: "Lunglei" },
        { value: "Serchhip", label: "Serchhip" },
        { value: "Champhai", label: "Champhai" },
        { value: "Kolasib", label: "Kolasib" },
        { value: "Mamit", label: "Mamit" },
        { value: "Lawngtlai", label: "Lawngtlai" },
        { value: "Hnahthial", label: "Hnahthial" },
        { value: "Siaha", label: "Siaha" },
        { value: "Saiha", label: "Saiha" },
      ],
    },
    {
      value: "Nagaland",
      label: "Nagaland",
      children: [
        { value: "Kohima", label: "Kohima" },
        { value: "Dimapur", label: "Dimapur" },
        { value: "Wokha", label: "Wokha" },
        { value: "Mokokchung", label: "Mokokchung" },
        { value: "Tuensang", label: "Tuensang" },
        { value: "Mon", label: "Mon" },
        { value: "Phek", label: "Phek" },
        { value: "Zunheboto", label: "Zunheboto" },
        { value: "Longleng", label: "Longleng" },
        { value: "Kiphire", label: "Kiphire" },
      ],
    },
    {
      value: "Odisha",
      label: "Odisha",
      children: [
        { value: "Balangir", label: "Balangir" },
        { value: "Baleshwar", label: "Baleshwar" },
        { value: "Baripada", label: "Baripada" },
        { value: "Bhubaneshwar", label: "Bhubaneshwar" },
        { value: "Brahmapur", label: "Brahmapur" },
        { value: "Cuttack", label: "Cuttack" },
        { value: "Dhenkanal", label: "Dhenkanal" },
        { value: "Kendujhar", label: "Kendujhar" },
        { value: "Konark", label: "Konark" },
        { value: "Koraput", label: "Koraput" },
        { value: "Paradip", label: "Paradip" },
        { value: "Phulabani", label: "Phulabani" },
        { value: "Puri", label: "Puri" },
        { value: "Sambalpur", label: "Sambalpur" },
        { value: "Mainpuri", label: "Mainpuri" },
        { value: "Mathura", label: "Mathura" },
        { value: "Meerut", label: "Meerut" },
        { value: "Mirzapur", label: "Mirzapur" },
        { value: "Moradabad", label: "Moradabad" },
        { value: "Muzaffarnagar", label: "Muzaffarnagar" },
        { value: "Partapgarh", label: "Partapgarh" },
        { value: "Pilibhit", label: "Pilibhit" },
        { value: "Prayagraj", label: "Prayagraj" },
        { value: "Rae Bareli", label: "Rae Bareli" },
        { value: "Rampur", label: "Rampur" },
        { value: "Saharanpur", label: "Saharanpur" },
        { value: "Sambhal", label: "Sambhal" },
        { value: "Shahjahanpur", label: "Shahjahanpur" },
        { value: "Sitapur", label: "Sitapur" },
        { value: "Sultanpur", label: "Sultanpur" },
        { value: "Tehri", label: "Tehri" },
        { value: "Varanasi", label: "Varanasi" },
      ],
    },
    {
      value: "Punjab",
      label: "Punjab",
      children: [
        { value: "Chandigarh", label: "Chandigarh" },
        { value: "Amritsar", label: "Amritsar" },
        { value: "Ludhiana", label: "Ludhiana" },
        { value: "Patiala", label: "Patiala" },
        { value: "Jalandhar", label: "Jalandhar" },
        { value: "Mohali", label: "Mohali" },
        { value: "Bathinda", label: "Bathinda" },
        { value: "Faridkot", label: "Faridkot" },
        { value: "Firozpur", label: "Firozpur" },
        { value: "Rupnagar", label: "Rupnagar" },
        { value: "Moga", label: "Moga" },
      ],
    },
    {
      value: "Rajasthan",
      label: "Rajasthan",
      children: [
        { value: "Jaipur", label: "Jaipur" },
        { value: "Udaipur", label: "Udaipur" },
        { value: "Jodhpur", label: "Jodhpur" },
        { value: "Kota", label: "Kota" },
        { value: "Ajmer", label: "Ajmer" },
        { value: "Bikaner", label: "Bikaner" },
        { value: "Alwar", label: "Alwar" },
        { value: "Bhilwara", label: "Bhilwara" },
        { value: "Sikar", label: "Sikar" },
        { value: "Pali", label: "Pali" },
        { value: "Tonk", label: "Tonk" },
        { value: "Jhunjhunu", label: "Jhunjhunu" },
      ],
    },
    {
      value: "Sikkim",
      label: "Sikkim",
      children: [
        { value: "Gangtok", label: "Gangtok" },
        { value: "Namchi", label: "Namchi" },
        { value: "Mangan", label: "Mangan" },
        { value: "Rangpo", label: "Rangpo" },
        { value: "Jorethang", label: "Jorethang" },
        { value: "Yuksom", label: "Yuksom" },
        { value: "Lachung", label: "Lachung" },
        { value: "Lachen", label: "Lachen" },
        { value: "Rongli", label: "Rongli" },
      ],
    },
    {
      value: "Tamil Nadu",
      label: "Tamil Nadu",
      children: [
        { value: "Chennai", label: "Chennai" },
        { value: "Coimbatore", label: "Coimbatore" },
        { value: "Madurai", label: "Madurai" },
        { value: "Tiruchirappalli", label: "Tiruchirappalli" },
        { value: "Salem", label: "Salem" },
        { value: "Tirunelveli", label: "Tirunelveli" },
        { value: "Vellore", label: "Vellore" },
        { value: "Tirupur", label: "Tirupur" },
        { value: "Erode", label: "Erode" },
        { value: "Kanchipuram", label: "Kanchipuram" },
        { value: "Trichy", label: "Trichy" },
        { value: "Nagercoil", label: "Nagercoil" },
      ],
    },
    {
      value: "Telangana",
      label: "Telangana",
      children: [
        { value: "Hyderabad", label: "Hyderabad" },
        { value: "Warangal", label: "Warangal" },
        { value: "Khammam", label: "Khammam" },
        { value: "Karimnagar", label: "Karimnagar" },
        { value: "Nizamabad", label: "Nizamabad" },
        { value: "Mahbubnagar", label: "Mahbubnagar" },
        { value: "Adilabad", label: "Adilabad" },
        { value: "Ramagundam", label: "Ramagundam" },
        { value: "Medak", label: "Medak" },
        { value: "Jagtial", label: "Jagtial" },
      ],
    },
    {
      value: "Tripura",
      label: "Tripura",
      children: [
        { value: "Agartala", label: "Agartala" },
        { value: "Udaipur", label: "Udaipur" },
        { value: "Dharmanagar", label: "Dharmanagar" },
        { value: "Kailashahar", label: "Kailashahar" },
        { value: "Ambassa", label: "Ambassa" },
        { value: "Belonia", label: "Belonia" },
        { value: "Ranirbazar", label: "Ranirbazar" },
        { value: "Khowai", label: "Khowai" },
        { value: "Bishalgarh", label: "Bishalgarh" },
        { value: "Sepahijala", label: "Sepahijala" },
      ],
    },
    {
      value: "Uttar Pradesh",
      label: "Uttar Pradesh",
      children: [
        { value: "Lucknow", label: "Lucknow" },
        { value: "Kanpur", label: "Kanpur" },
        { value: "Ghaziabad", label: "Ghaziabad" },
        { value: "Agra", label: "Agra" },
        { value: "Varanasi", label: "Varanasi" },
        { value: "Meerut", label: "Meerut" },
        { value: "Allahabad", label: "Allahabad" },
        { value: "Moradabad", label: "Moradabad" },
        { value: "Bareilly", label: "Bareilly" },
        { value: "Aligarh", label: "Aligarh" },
        { value: "Jaunpur", label: "Jaunpur" },
        { value: "Ayodhya", label: "Ayodhya" },
      ],
    },
    {
      value: "Uttarakhand",
      label: "Uttarakhand",
      children: [
        { value: "Almora", label: "Almora" },
        { value: "Dehra Dun", label: "Dehra Dun" },
        { value: "Haridwar", label: "Haridwar" },
        { value: "Mussoorie", label: "Mussoorie" },
        { value: "Nainital", label: "Nainital" },
        { value: "Pithoragarh", label: "Pithoragarh" },
      ],
    },
    {
      value: "West Bengal",
      label: "West Bengal",
      children: [
        { value: "Alipore", label: "Alipore" },
        { value: "Alipur Duar", label: "Alipur Duar" },
        { value: "Asansol", label: "Asansol" },
        { value: "Baharampur", label: "Baharampur" },
        { value: "Bally", label: "Bally" },
        { value: "Balurghat", label: "Balurghat" },
        { value: "Bankura", label: "Bankura" },
        { value: "Baranagar", label: "Baranagar" },
        { value: "Barasat", label: "Barasat" },
        { value: "Barrackpore", label: "Barrackpore" },
        { value: "Basirhat", label: "Basirhat" },
        { value: "Bhatpara", label: "Bhatpara" },
        { value: "Bishnupur", label: "Bishnupur" },
        { value: "Budge Budge", label: "Budge Budge" },
        { value: "Burdwan", label: "Burdwan" },
        { value: "Chandernagore", label: "Chandernagore" },
        { value: "Darjeeling", label: "Darjeeling" },
        { value: "Diamond Harbour", label: "Diamond Harbour" },
        { value: "Dum Dum", label: "Dum Dum" },
        { value: "Durgapur", label: "Durgapur" },
        { value: "Halisahar", label: "Halisahar" },
        { value: "Haora", label: "Haora" },
        { value: "Hugli", label: "Hugli" },
        { value: "Ingraj Bazar", label: "Ingraj Bazar" },
        { value: "Jalpaiguri", label: "Jalpaiguri" },
        { value: "Kalimpong", label: "Kalimpong" },
        { value: "Kamarhati", label: "Kamarhati" },
        { value: "Kanchrapara", label: "Kanchrapara" },
        { value: "Kharagpur", label: "Kharagpur" },
        { value: "Cooch Behar", label: "Cooch Behar" },
        { value: "Kolkata", label: "Kolkata" },
        { value: "Krishnanagar", label: "Krishnanagar" },
        { value: "Malda", label: "Malda" },
        { value: "Midnapore", label: "Midnapore" },
        { value: "Murshidabad", label: "Murshidabad" },
        { value: "Nabadwip", label: "Nabadwip" },
        { value: "Palashi", label: "Palashi" },
        { value: "Panihati", label: "Panihati" },
        { value: "Purulia", label: "Purulia" },
        { value: "Raiganj", label: "Raiganj" },
        { value: "Santipur", label: "Santipur" },
        { value: "Shantiniketan", label: "Shantiniketan" },
        { value: "Shrirampur", label: "Shrirampur" },
        { value: "Siliguri", label: "Siliguri" },
        { value: "Siuri", label: "Siuri" },
        { value: "Tamluk", label: "Tamluk" },
        { value: "Titagarh", label: "Titagarh" },
      ],
    },

  ];
  const referenceData = [
    {
      value: "Social Media",
      label: "Social Media",
      children: [
        {
          value: "WhatsApp",
          label: "WhatsApp",
        },
        {
          value: "LinkedIn",
          label: "LinkedIn",
        },
        {
          value: "NewsPaper",
          label: "News Paper",
        },
      ],
    },
    {
      value: "Refer a Friend",
      label: "Refer a Friend",
    },
    {
      value: "Job Portal",
      label: "Job Portal",
    },
    {
      value: "Company Portal",
      label: "Company Portal",
    },
    {
      value: "Others",
      label: "Others",
    },
  ];
  const handleNameInputChange = (e) => {
    const value = e.target.value;
    const alphabetOnlyValue = value.replace(/[^a-zA-Z\s]/g, ""); // Allow only alphabets and spaces
    handleFormChange("name", alphabetOnlyValue);
  };

  const handleFinish = () => {
    // console.log("valeeeeeeee",values)
    // Function to format date in YYYY-MM-DD
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString; // If invalid date, return original string
      return date.toISOString().split("T")[0]; // Return in YYYY-MM-DD format
    };
    // Convert all values to strings and format dob
    const processedValues = Object.fromEntries(
      Object.entries(formValues).map(([key, value]) => {
        if (key == "photo") {
          return [key, photoLink];
        } else if (key == "resume") {
          return [key, resumeLink];
        }
        if (key === "dob") {
          return [key, formatDate(value)]; // Format dob specifically
        }
        if (Array.isArray(value) && key !== "relevantExperience") {
          return [key, value.join(",")]; // Convert arrays to comma-separated strings
        }
        // if (typeof value === "object" && value !== null) {
        //   return [key, JSON.stringify(value)]; // Convert objects to JSON strings
        // }
        return [key, String(value)];
        // Convert other values to strings
      })
    );

    console.log("Processed Form Data:", processedValues);
    processedValues.photo = photoLink;
    processedValues.relevantExperience = [inputValues]
    processedValues.resume = resumeLink;
    // setFormData(processedValues);
    console.log(processedValues.relevantExperience);
    setFormValues(processedValues)
    handleSubmit(processedValues);
    setSuccessMessage('Form successfully submitted!');

    // Pass the processed data to the handleSubmit function
  };
  const disableFutureDates = (current) => {
    // Can not select days after today
    return current && current > moment().endOf('day');
  };


  return (
    <>
      <div id="ApplicationForm">
        <Form
          form={form}
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 10000 }}
          onFinish={handleFinish}
        >
          <div className="Adjust">
            <Form.Item
              label="Department Applied For"
              name="departmentAppliedFor"
              rules={[{
                required: true,
                message: 'Please select a department or specify if Others',
                validator: (_, value) => {
                  return validateDepartment() ? Promise.resolve() : Promise.reject('Please select a department or specify if Others');
                }
              }]}
            >
              <Select
                placeholder="Select Your Department"
                onChange={handleDepartmentSelectChange}
                value={selectedDepartment || undefined}
              >
                <Select.Option value="Administration">Administration</Select.Option>
                <Select.Option value="Billing">Billing</Select.Option>
                <Select.Option value="Business Development">Business Development</Select.Option>
                <Select.Option value="Electrical">Electrical</Select.Option>
                <Select.Option value="Finance & Accounts">Finance & Accounts</Select.Option>
                <Select.Option value="Formwork">Formwork</Select.Option>
                <Select.Option value="Human Resource">Human Resource</Select.Option>
                <Select.Option value="Information Technology">Information Technology</Select.Option>
                <Select.Option value="Mechanical">Mechanical</Select.Option>
                <Select.Option value="Planning">Planning</Select.Option>
                <Select.Option value="Project Execution">Project Execution</Select.Option>
                <Select.Option value="Purchase">Purchase</Select.Option>
                <Select.Option value="Quality">Quality</Select.Option>
                <Select.Option value="Safety">Safety</Select.Option>
                <Select.Option value="Store">Store</Select.Option>
                <Select.Option value="Tender">Tender</Select.Option>
                <Select.Option value="Others">Others</Select.Option>
              </Select>

              {selectedDepartment === 'Others' && (
                <Input
                  style={{ marginTop: '16px' }}
                  placeholder="Please specify your department"
                  value={otherDepartment}
                  onChange={handleDepartmentInputChange}
                />
              )}
            </Form.Item>
            <Form.Item
              label="Position Applied For"
              name="positionAppliedFor"
              rules={[{
                required: true,
                message: 'Please select a position or specify if Others',
                validator: (_, value) => {
                  return validatePosition() ? Promise.resolve() : Promise.reject('Please select a position or specify if Others');
                }
              }]}
            >
              <Select
                placeholder="Select Your Position"
                onChange={handlePositionChange}
                value={selectedPosition || undefined}
              >
                <Select.Option value="Assistant Manager">Assistant Manager</Select.Option>
                <Select.Option value="Company Secretary">Company Secretary</Select.Option>
                <Select.Option value="Cook">Cook</Select.Option>
                <Select.Option value="Crane Operator">Crane Operator</Select.Option>
                <Select.Option value="Deputy Manager">Deputy Manager</Select.Option>
                <Select.Option value="Diploma Trainee Engineer">Diploma Trainee Engineer</Select.Option>
                <Select.Option value="Draftsman">Draftsman</Select.Option>
                <Select.Option value="Electrician">Electrician</Select.Option>
                <Select.Option value="Engineer">Engineer</Select.Option>
                <Select.Option value="Foreman">Foreman</Select.Option>
                <Select.Option value="General Manager">General Manager</Select.Option>
                <Select.Option value="JCB Operator">JCB Operator</Select.Option>
                <Select.Option value="Jr. Engineer">Jr. Engineer</Select.Option>
                <Select.Option value="Lab Technician">Lab Technician</Select.Option>
                <Select.Option value="Manager">Manager</Select.Option>
                <Select.Option value="Mechanic">Mechanic</Select.Option>
                <Select.Option value="Multi Machinery Operator">Multi Machinery Operator</Select.Option>
                <Select.Option value="Office Assistant">Office Assistant</Select.Option>
                <Select.Option value="Office Boy">Office Boy</Select.Option>
                <Select.Option value="Officer">Officer</Select.Option>
                <Select.Option value="Project Manager">Project Manager</Select.Option>
                <Select.Option value="Pump Operator">Pump Operator</Select.Option>
                <Select.Option value="Receptionist">Receptionist</Select.Option>
                <Select.Option value="Sr. Engineer">Sr. Engineer</Select.Option>
                <Select.Option value="Steward">Steward</Select.Option>
                <Select.Option value="Supervisor">Supervisor</Select.Option>
                <Select.Option value="Surveyor">Surveyor</Select.Option>
                <Select.Option value="TM Operator">TM Operator</Select.Option>
                <Select.Option value="Tractor Driver">Tractor Driver</Select.Option>
                <Select.Option value="Welder">Welder</Select.Option>
                <Select.Option value="Others">Others</Select.Option>
              </Select>

              {selectedPosition === 'Others' && (
                <Input
                  style={{ marginTop: '16px' }}
                  placeholder="Please specify your position"
                  value={otherPosition}
                  onChange={handlePositionInputChange}
                />
              )}
            </Form.Item>
          </div>

          <div className="Adjust">
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: 'Please enter your name!' },
                {
                  // Disallow special characters and multiple consecutive spaces
                  pattern: /^(?!.* {2})[a-zA-Z0-9 ]*$/,
                  message: 'Special characters and multiple consecutive spaces are not allowed!',
                },
                {
                  validator: (_, value) => {
                    if (/^[a-zA-Z][a-zA-Z ]*$/.test(value) && !/\d/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Names cannot include numbers or multiple consecutive spaces!'));
                  },
                },
              ]}
            >
              <Input
                placeholder="Your Name Here"
                type="text"
                value={formValues?.name}
                onChange={handleNameInputChange}
              />
            </Form.Item>

            <Form.Item
              label="DOB"
              name="dob"
              rules={[{ required: true, message: 'Please select your date of birth' }]}
            >
              {/* <DatePicker
                format="YYYY-MM-DD" // Set the format to YYYY-MM-DD
                placeholder="YYYY-MM-DD" // Placeholder text to guide manual entry
                allowClear // Allows the user to clear the input
                inputReadOnly={false} // Enables manual typing in the input field
                onChange={(date, dateString) => handleFormChange("dob", dateString)}
              /> */}
              <DatePicker
                format="DD-MM-YYYY" // Display and input format
                placeholder="DD-MM-YYYY" // Placeholder text to guide manual entry
                allowClear // Allows the user to clear the input
                inputReadOnly={false} // Enables manual typing in the input field
                disabledDate={disableFutureDates}
                onChange={(date, dateString) => {
                  // Convert the displayed date (DD-MM-YYYY) to the stored format (YYYY-MM-DD)
                  const formattedDate = date ? date.format("YYYY-MM-DD") : null;
                  handleFormChange("dob", formattedDate);
                }}
              />
            </Form.Item>
          </div>

          <div className="Adjust">
            <Form.Item
              label="Contact Number"
              name="contactNumber"
              rules={[
                {
                  required: true,
                  message: 'Please enter your contact number',
                },
                {
                  pattern: /^[0-9]{10}$/,
                  message: 'Contact number must be exactly 10 digits',
                },
              ]}
            >
              <Input
                placeholder="Enter your Contact Number"
                // onKeyDown="return event.key !== 'e' && event.key !== 'E' && event.key !== '-' && event.key !== '+';"
                onKeyDown={(e) => {
                  // Prevent non-numeric inputs
                  if (e.key !== 'Backspace' && e.key !== 'Tab' && !/^[0-9]$/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                type="number" // Allows numeric input without showing increment/decrement arrows
                maxLength={10} // Limit input to 10 characters
                onChange={(e) => handleFormChange("contactNumber", e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Alternate Contact Number"
              name="alternateContactNumber"
              rules={[
                {
                  pattern: /^[0-9]{10}$/,
                  message: 'Contact number must be exactly 10 digits',
                },
              ]}
            >
              <Input
                onKeyDown={(e) => {
                  // Prevent non-numeric inputs
                  if (e.key !== 'Backspace' && e.key !== 'Tab' && !/^[0-9]$/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                placeholder="Enter your Contact Number" type="number" onChange={(e) => { handleFormChange("alternateContactNumber", e.target.value) }} />
            </Form.Item>

          </div>

          <div className="Adjust">
            <Form.Item
              label="Qualification"
              name="qualification"
              rules={[{ required: true, message: 'Please select your qualification' }]}
            >
              <Select mode="multiple" placeholder="Select your qualifications" onChange={(value) => { handleFormChange("qualification", value) }}>
                <Select.Option value="ADIS">ADIS</Select.Option>
                <Select.Option value="BCA">BCA</Select.Option>
                <Select.Option value="Bachelor of Arts">Bachelor of Arts</Select.Option>
                <Select.Option value="Bachelor of Business">Bachelor of Business Administration</Select.Option>
                <Select.Option value="Bachelor of Commerce">Bachelor of Commerce</Select.Option>
                <Select.Option value="Bachelor of Education">Bachelor of Education</Select.Option>
                <Select.Option value="Bachelor of Engineering(CIVIL)">Bachelor of Engineering(CIVIL)</Select.Option>
                <Select.Option value="Bachelor of Engineering(ELECTRICAL)">Bachelor of Engineering(ELECTRICAL)</Select.Option>
                <Select.Option value="Bachelor of Engineering(IT)">Bachelor of Engineering(IT)</Select.Option>
                <Select.Option value="Bachelor of Engineering(MECHANICAL)">Bachelor of Engineering(MECHANICAL)</Select.Option>
                <Select.Option value="Bachelor of Interior Design">Bachelor of Interior Design</Select.Option>
                <Select.Option value="Bachelor of Science">Bachelor of Science</Select.Option>
                <Select.Option value="Bachelor of Technology(MECHANICAL)">Bachelor of Technology(MECHANICAL)</Select.Option>
                <Select.Option value="Bechelor of Science in Fire">Bechelor of Science in Fire & Safety</Select.Option>
                <Select.Option value="Bechelor of Technology in Fire">Bechelor of Technology in Fire & Safety</Select.Option>
                <Select.Option value="CA Intermediate">CA Intermediate</Select.Option>
                <Select.Option value="Certificate course in managing safety">Certificate course in managing safety</Select.Option>
                <Select.Option value="Chartered Accountant">Chartered Accountant</Select.Option>
                <Select.Option value="CIDC">CIDC</Select.Option>
                <Select.Option value="Civil Construction Supervisor">Civil Construction Supervisor</Select.Option>
                <Select.Option value="Company Secretary">Company Secretary</Select.Option>
                <Select.Option value="Diploma in Business Administration- Specialization">Diploma in Business Administration- Specialization</Select.Option>
                <Select.Option value="Diploma in Business Management">Diploma in Business Management</Select.Option>
                <Select.Option value="Diploma in civil engineer">Diploma in civil engineer</Select.Option>
                <Select.Option value="Diploma in Computer Application">Diploma in Computer Application</Select.Option>
                <Select.Option value="Diploma in electrical Engineer">Diploma in electrical Engineer</Select.Option>
                <Select.Option value="Diploma in Electronics & Communication">Diploma in Electronics & Communication</Select.Option>
                <Select.Option value="Diploma in Fire & safety">Diploma in Fire & safety</Select.Option>
                <Select.Option value="Diploma in HSE">Diploma in HSE</Select.Option>
                <Select.Option value="Diploma In Lab Assistant">Diploma In Lab Assistant</Select.Option>
                <Select.Option value="Diploma in Mechanical Engineer">Diploma in Mechanical Engineer</Select.Option>
                <Select.Option value="Diploma in Quality">Diploma in Quality</Select.Option>
                <Select.Option value="Diploma In Software Application">Diploma In Software Application</Select.Option>
                <Select.Option value="Diploma in Store Management">Diploma in Store Management</Select.Option>
                <Select.Option value="Diploma Information Technology">Diploma Information Technology</Select.Option>
                <Select.Option value="Health, Safety & Environment">Health, Safety & Environment</Select.Option>
                <Select.Option value="Higher Secondary Certificate">Higher Secondary Certificate</Select.Option>
                <Select.Option value="Industrial Training Institute(Draughtsman)-Civil">Industrial Training Institute(Draughtsman)-Civil</Select.Option>
                <Select.Option value="Industrial Training Institute(Electrician)">Industrial Training Institute(Electrician)</Select.Option>
                <Select.Option value="Industrial Training Institute(Fireman)">Industrial Training Institute(Fireman)</Select.Option>
                <Select.Option value="Industrial Training Institute(Fitter)">Industrial Training Institute(Fitter)</Select.Option>
                <Select.Option value="Industrial Training Institute(Mechanical)">Industrial Training Institute(Mechanical)</Select.Option>
                <Select.Option value="Industrial Training Institute(Surveyor)">Industrial Training Institute(Surveyor)</Select.Option>
                <Select.Option value="Industrial Training Institute(Wireman)">Industrial Training Institute(Wireman)</Select.Option>
                <Select.Option value="Industrial Training Institute(Wlder)">Industrial Training Institute(Wlder)</Select.Option>
                <Select.Option value="Institute of cost & works accounts in india">Institute of cost & works accounts in india</Select.Option>
                <Select.Option value="ITI">ITI</Select.Option>
                <Select.Option value="ITI Surveyor">ITI Surveyor</Select.Option>
                <Select.Option value="M E Construction and Management">M E Construction and Management</Select.Option>
                <Select.Option value="M Tech (Infrastructure Engineering and Management)">M Tech (Infrastructure Engineering and Management)</Select.Option>
                <Select.Option value="Master in Science">Master in Science</Select.Option>
                <Select.Option value="Master of Arts">Master of Arts</Select.Option>
                <Select.Option value="Master of Business Administration">Master of Business Administration</Select.Option>
                <Select.Option value="Master of Commerce">Master of Commerce</Select.Option>
                <Select.Option value="Master of Computer Application">Master of Computer Application</Select.Option>
                <Select.Option value="Master of Education">Master of Education</Select.Option>
                <Select.Option value="Master of Engineering(CIVIL)">Master of Engineering(CIVIL)</Select.Option>
                <Select.Option value="Master of Engineering(MECHANICAL)">Master of Engineering(MECHANICAL)</Select.Option>
                <Select.Option value="Master Of Social Work">Master Of Social Work</Select.Option>
                <Select.Option value="Master of Technology(CIVIL)">Master of Technology(CIVIL)</Select.Option>
                <Select.Option value="Master of Technology(MECHANICAL)">Master of Technology(MECHANICAL)</Select.Option>
                <Select.Option value="Masters in Construction Management">Masters in Construction Management</Select.Option>
                <Select.Option value="MSC- Digital Frensics & Information Security">MSC- Digital Frensics & Information Security</Select.Option>
                <Select.Option value="PGP- NICMAR">PGP- NICMAR</Select.Option>
                <Select.Option value="Post Graduate Diploma In Business Admininstration- Entrepreneurship">Post Graduate Diploma In Business Admininstration- Entrepreneurship</Select.Option>
                <Select.Option value="Post Graduate Diploma In Computer Application">Post Graduate Diploma In Computer Application</Select.Option>
                <Select.Option value="Post Graduate Diploma in Fire & Safety">Post Graduate Diploma in Fire & Safety</Select.Option>
                <Select.Option value="Post Graduate Diploma in Management - Human Resource">Post Graduate Diploma in Management - Human Resource</Select.Option>
                <Select.Option value="Post Graduate Diploma in Management ( Infrastructure Management)">Post Graduate Diploma in Management ( Infrastructure Management)</Select.Option>
                <Select.Option value="Under Graduate">Under Graduate</Select.Option>
                <Select.Option value="Others">Others</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Fresher" name="fresher" className="FresherContainer">
              <Checkbox
                checked={isDisable} // Use checked for controlled component
                onChange={(e) => {
                  const newValue = e.target.checked;
                  setIsDisable(!isDisable); // Toggle state
                  handleFormChange("fresher", newValue); // Update form values
                }}
              />
            </Form.Item>



          </div>

          <div className="Adjust">
            <Form.Item
              label="Current Company Name"
              name="currentCompanyName"
              rules={[
                {
                  validator: (_, value) => {
                    // If value is empty, it's allowed
                    if (!value || (/^[a-zA-Z][a-zA-Z ]*$/.test(value) && !/\d{2,}/.test(value) && !/ {2}/.test(value))) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Names cannot include special characters or multiple consecutive spaces!'));
                  },
                },
              ]}
            >
              <Input
                placeholder="Enter your Current Company Name"
                disabled={isDisable}
                onChange={(e) => { handleFormChange("currentCompanyName", e.target.value) }}
              />
            </Form.Item>

            <Form.Item
              label="Total Experience (In Years)"
              name="totalExperience"
            // rules={[{ required: true, message: 'Please select your total experience' }]}
            >
              <Select placeholder="Select Your Experience" disabled={isDisable} onChange={(value) => { handleFormChange("totalExperience", value) }}>
                {Array.from({ length: 43 }, (_, i) => (
                  <Select.Option key={i} value={i}>
                    {i}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>


          </div>

          <div className="Adjust">
            <Form.Item label="Relevant Experience" name="relevantExperience" >
              {/* <Cascader options={treeRelevantData} placeholder="Select Current Location" onChange={(value) => handleFormChange("relevantExperience", value)} /> */}
              {/* <div> */}
              <Select
                disabled={isDisable}
                onChange={handleSelectChange}
                placeholder="Select Relevant Experience"
                mode="multiple"
                style={{ width: '100%', margin: "8px 0px" }}
              >
                <Select.Option value="residential">Residential</Select.Option>
                <Select.Option value="commercial">Commercial</Select.Option>
                <Select.Option value="industrial">Industrial</Select.Option>
                <Select.Option value="institutional">Institutional</Select.Option>
                <Select.Option value="others">Others</Select.Option>
              </Select>

              <div className="Relevant">
                {selectedOptions.map((option, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", marginBottom: '8px' }}>
                    <span style={{ marginRight: '8px', textTransform: "capitalize" }}>{option}</span>
                    <Input
                      onKeyDown={(e) => {
                        const inputValue = e.target.value;

                        // Prevent non-numeric inputs
                        if (
                          e.key !== 'Backspace' &&
                          e.key !== 'Tab' &&
                          !/^[0-9]$/.test(e.key)
                        ) {
                          e.preventDefault();
                        }

                        // Prevent input if the value already has 2 digits
                        if (inputValue.length >= 2 && e.key !== 'Backspace' && e.key !== 'Tab') {
                          e.preventDefault();
                        }
                      }}
                      placeholder={`Enter Experience in ${option}`}
                      style={{ width: '60%' }}
                      maxLength={2} // Ensure a maximum of 2 digits
                      type="number" // Change to text to better control the input
                      onChange={(e) => handleInputChange(option, e.target.value)}
                    />

                  </div>
                ))}
              </div>
              {/* <div className="simple-dropdown" ref={dropdownRef}>
                <div className="select-box" onClick={toggleDropdown}>
                </div>
                {isOpen && (
                  <div className="dropdown-content">
                    <Form.Item name="residentialField">
                      <div>Residential <Input onChange={(e) => { handleFormChange("currentCompanyName", e.target.value) }} /></div>
                    </Form.Item>
                    <Form.Item name="commercialField">
                      <div>Commercial <Input /></div>
                    </Form.Item>
                    <Form.Item name="industrialField">
                      <div>Industrial <Input /></div>
                    </Form.Item>
                    <Form.Item name="institutionalField">
                      <div>Institutional <Input /></div>
                    </Form.Item>
                    <Form.Item name="othersField">
                      <div>Others <Input /></div>
                    </Form.Item>
                  </div>
                )}
              </div> */}

            </Form.Item>
            <Form.Item
              label="Current Location"
              name="currentLocation"
              rules={[{ required: true, message: 'Please select your current location' }]}
            >
              <Cascader options={treeCurrentLocationData} placeholder="Select Current Location" onChange={(value) => handleFormChange("currentLocation", value)} />
            </Form.Item>



          </div>

          <div className="Adjust">
            <Form.Item
              label="Home"
              name="home"
              rules={[{ required: true, message: 'Please select your home location' }]}
            >
              <Cascader
                // showSearch
                style={{ width: '100%' }}
                // dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                // treeDefaultExpandAll
                options={treeHomeData}
                placeholder="Select Option"
                onChange={(value) => handleFormChange("home", value)}
              />
            </Form.Item>

            {/* <Form.Item
              label="Notice Period (In Days)"
              name="noticePeriod"
              rules={[{ required: true, message: 'Please enter your notice period' }]}
            >
              <Input style={{ width: '100%' }} max={3} placeholder="Notice Period" onChange={(e) => { handleFormChange("noticePeriod", e.target.value) }} />
            </Form.Item> */}
            <Form.Item
              label="Notice Period (In Days)"
              name="noticePeriod"
              rules={[
                // Only apply required and max length rules if the field is not disabled
                ...(isDisable
                  ? []
                  : [
                    { required: true, message: 'Please enter your notice period' },
                    { max: 3, message: 'Notice period must be 3 characters or less' },
                  ]),
              ]}
            >
              <Input
                disabled={isDisable}
                onKeyDown={(e) => {
                  // Prevent non-numeric inputs
                  if (e.key !== 'Backspace' && e.key !== 'Tab' && !/^[0-9]$/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                style={{
                  width: "100%",
                  WebkitAppearance: 'none',
                  MozAppearance: 'textfield',
                }}
                maxLength={3} // Restrict input to 3 characters
                placeholder="Notice Period"
                type="number"
                onChange={(e) => handleFormChange("noticePeriod", e.target.value)}
              />
            </Form.Item>



          </div>

          <div className="Adjust">
            <Form.Item
              label="Gender"
              name="gender"
            >
              <Select placeholder="Select your gender"
                onChange={(value) => { handleFormChange("gender", value) }}>
                <Select.Option value="Male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
                <Select.Option value="Other">Other</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Skills" name="skill"
              rules={[
                // {
                //   pattern: /^[^1-9]*$/, // Disallow numbers 1-9
                //   message: 'Numbers 1-9 are not allowed!',
                // },
                {
                  validator: (_, value) => {
                    if (/^[^0-9]*$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Numbers 1-9 are not allowed!'));
                  },
                },
              ]}
            >
              <Input placeholder="Skills" onChange={(e) => { handleFormChange("skill", e.target.value) }} />
            </Form.Item>



          </div>

          <div className="Adjust">
            {/* <Form.Item label="Email ID" name="emailId">
              <Input placeholder="Enter your Email ID" onChange={(e) => { handleFormChange("emailId", e.target.value) }} />
            </Form.Item> */}
            <Form.Item
              label="Email ID"
              name="emailId"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address',
                },
              ]}
            >
              <Input
                placeholder="Enter your Email ID"
                onChange={(e) => { handleFormChange("emailId", e.target.value) }}
              />
            </Form.Item>

            <Form.Item label="Current Designation" name="currentDesignation">
              <Input disabled={isDisable} placeholder="Enter your Current Company Designation" onChange={(e) => { handleFormChange("currentDesignation", e.target.value) }} />
            </Form.Item>




          </div>

          <div className="Adjust">
            <Form.Item label="Current CTC (Per Annum)" name="currentCTC">
              <Input type="number" onKeyDown={(e) => {
                // Prevent non-numeric inputs
                if (e.key !== 'Backspace' && e.key !== 'Tab' && !/^[0-9]$/.test(e.key)) {
                  e.preventDefault();
                }
              }} disabled={isDisable} onChange={(e) => handleFormChange("currentCTC", e.target.value)} style={{ width: '100%' }} placeholder="Current CTC (Per Annum)" />
            </Form.Item>
            <Form.Item label="Expected CTC (Per Annum)" name="expectedCTC">
              <Input type="number" onKeyDown={(e) => {
                // Prevent non-numeric inputs
                if (e.key !== 'Backspace' && e.key !== 'Tab' && !/^[0-9]$/.test(e.key)) {
                  e.preventDefault();
                }
              }} onChange={(e) => handleFormChange("expectedCTC", e.target.value)} style={{ width: '100%' }} placeholder="Expected CTC (Per Annum)" />
            </Form.Item>
          </div>

          <div className="Adjust">
            <Form.Item label="Reference" name="reference">
              <Cascader options={referenceData} onChange={(value) => handleFormChange("reference", value)} placeholder="Select Option" />
            </Form.Item>
            <Form.Item label="Reference of friend (if any)" name="referenceOfFriend"
              rules={[
                // {
                //   pattern: /^[^1-9]*$/, // Disallow numbers 1-9
                //   message: 'Numbers 1-9 are not allowed!',
                // },
                {
                  // Disallow special characters
                  pattern: /^[a-zA-Z0-9 ]*$/,
                  message: 'Special characters are not allowed!',
                },
                {
                  validator: (_, value) => {
                    if (/^[^0-9]*$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Numbers 1-9 are not allowed!'));
                  },
                },
              ]}>
              <Input placeholder="Enter your friend name here" onChange={(e) => {
                handleFormChange("referenceOfFriend", e.target.value);
                console.log("Input value:", e.target.value); // Log the input value
              }} disabled={!isFriendFieldEnabled} />
            </Form.Item>
          </div>
          {/* <hr /> */}
          <div className="Adjust">
            <Form.Item label="Reference of others (if any)" name="referenceOfOthers"
              rules={[
                {
                  // Disallow special characters
                  pattern: /^[a-zA-Z0-9 ]*$/,
                  message: 'Special characters are not allowed!',
                },
                // {
                //   pattern: /^[^1-9]*$/, // Disallow numbers 1-9
                //   message: 'Numbers 1-9 are not allowed!',
                // },
                {
                  validator: (_, value) => {
                    if (/^[^0-9]*$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Numbers 1-9 are not allowed!'));
                  },
                },
              ]}>
              <Input onChange={(e) => {
                handleFormChange("referenceOfOthers", e.target.value);
                console.log("Input value:", e.target.value); // Log the input value
              }} placeholder="Enter reference here if you selected others option" disabled={!isReferenceothers} />
            </Form.Item>
            <Form.Item label="Photo Upload" name="photo"
            // rules={[{ required: true, message: 'Please enter your notice period' }]}
            >
              <Upload
                showUploadList={true}
                beforeUpload={(file) => {
                  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                  if (!isJpgOrPng) {
                    message.error('You can only upload JPG/PNG files!');
                  }
                  return isJpgOrPng ? false : Upload.LIST_IGNORE; // Prevent upload if not JPG/PNG
                }}  // Prevent automatic upload
                onChange={handleUploadChange}
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>
                  Click to Upload (PNG/JPG Only)
                </Button>
              </Upload>
            </Form.Item>



          </div>

          <div className="Adjust">
            <Form.Item label="Resume Upload" name="resume" rules={[{ required: true, }]}>
              <Upload onChange={handleResumeChange} showUploadList={true}
                beforeUpload={(file) => {
                  const isPdfOrWord = file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                  if (!isPdfOrWord) {
                    message.error('You can only upload PDF or Word files!');
                  }
                  return isPdfOrWord ? false : Upload.LIST_IGNORE; // Prevent upload if not PDF/Word
                }}
                maxCount={1}>
                <Button icon={<UploadOutlined />}>
                  Click to Upload
                </Button>
              </Upload>
            </Form.Item>
            <Form.Item label="Remarks (If any)" name="remarks">
              <Input placeholder="Enter your Remarks" onChange={(e) => { handleFormChange("remarks", e.target.value) }} />
            </Form.Item>
          </div>

          <Form.Item >
            <Button htmlType="submit" style={{ backgroundColor: "#0d2e61", color: "white" }}>
              Submit
            </Button>
          </Form.Item>
          {successMessage && (
            <div style={{ color: 'green', marginTop: '10px' }}>
              {successMessage}
            </div>
          )}
        </Form>

      </div>
    </>
  );
};
export default ApplicationForm;
