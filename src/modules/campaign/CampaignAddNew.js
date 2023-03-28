import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import FormGroup from "../../components/common/FormGroup";
import FormRow from "../../components/common/FormRow";
import { Dropdown } from "../../components/dropdown";
import { Input, Textarea } from "../../components/Input";
import { Label } from "../../components/label";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import ImageUploader from "quill-image-uploader";
import { Button } from "../../components/button";
import { toast } from "react-toastify";

import useOnChange from "../../hooks/useOnChange";
import DatePicker from "react-date-picker";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddNew = () => {
  const [content, setContent] = useState("");
  const [countries, setCountries] = useState([]);
  const { handleSubmit, control, setValue } = useForm();
  const handleAddNewCampaign = (values) => {};
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // imgbbAPI
        upload: async (file) => {
          // console.log("upload: ~ file", file);
          // const bodyFormData = new FormData();
          // console.log("upload: ~ bodyFormData", bodyFormData);
          // bodyFormData.append("image", file);
          // const response = await axios({
          //   method: "post",
          //   url: imgbbAPI,
          //   data: bodyFormData,
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // });
          // return response.data.data.url;
        },
      },
    }),
    []
  );
  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };

  const [filterCountry, setFilterCountry] = useOnChange(500);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}?fullText=true`
        );
        setCountries(response.data);
        console.log("response.data", response);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchCountries();
  }, [filterCountry]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="py-10 bg-white rounded-xl px-[66px]">
      <div className="text-center">
        <h1 className="py-4 font-bold px-14 bg-text4 bg-opacity-5 rounded-xl text-[25px] inline-block mb-10">
          Start a Campaign 🚀
        </h1>
        <form onSubmit={handleSubmit(handleAddNewCampaign)}>
          <FormRow>
            <FormGroup>
              <Label>Campaign Titel *</Label>
              <Input
                control={control}
                name="title"
                placeholder="Write a title"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Select a category *</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select a category"></Dropdown.Select>
                <Dropdown.List placeholder="Select a category">
                  <Dropdown.Option
                    onClick={() =>
                      handleSelectDropdownOption("category", "architecture ")
                    }
                  >
                    Architecture
                  </Dropdown.Option>
                  <Dropdown.Option>Crypto</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label>Short Description *</Label>
            <Textarea
              name="short_description"
              placeholder="Write a short description...."
              control={control}
            ></Textarea>
          </FormGroup>
          <FormGroup>
            <Label>Story *</Label>
            <ReactQuill
              placeholder="Write your story......"
              modules={modules}
              theme="snow"
              value={content}
              onChange={setContent}
            />
          </FormGroup>
          <FormRow>
            <FormGroup>
              <Label>Goal *</Label>
              <Input
                control={control}
                name="goal"
                placeholder="$0.00 USD"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Raised Amount *</Label>
              <Input
                control={control}
                name="amount"
                placeholder="$0.00 USD"
              ></Input>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Amount Prefilled</Label>
              <Input
                control={control}
                name="prefilled"
                placeholder="Amount Prefilled"
              ></Input>
              <p className="text-left text-sm text-text3">
                It will help fill amount box by click, place each amount by
                comma, ex: 10,20,30,40
              </p>
            </FormGroup>
            <FormGroup>
              <Label>Video</Label>
              <Input control={control} name="video" placeholder="Video"></Input>
              <p className="text-left text-sm text-text3">
                Place Youtube or Vimeo Video URL
              </p>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Campaign End Method</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select one"></Dropdown.Select>
                <Dropdown.List></Dropdown.List>
              </Dropdown>
            </FormGroup>
            <FormGroup>
              <Label>Country</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select a country"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Search
                    placeholder="Search Country"
                    onChange={setFilterCountry}
                  ></Dropdown.Search>
                  {countries.length > 0 &&
                    countries.map((country) => (
                      <Dropdown.Option
                        key={country?.name?.common}
                        onClick={() =>
                          handleSelectDropdownOption(
                            "country",
                            country?.name?.common
                          )
                        }
                      >
                        {country?.name?.common}
                      </Dropdown.Option>
                    ))}
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Start Date</Label>
              <DatePicker
                onChange={setStartDate}
                value={startDate}
                format="dd-MM-yyyy"
              />
            </FormGroup>
            <FormGroup>
              <Label>End Date</Label>
              <DatePicker
                onChange={setEndDate}
                value={endDate}
                format="dd-MM-yyyy"
              />
            </FormGroup>
          </FormRow>
          <div className="text-center mt-10">
            <Button className="bg-primary text-white mx-auto px-10">
              Submit new campaign{" "}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignAddNew;
