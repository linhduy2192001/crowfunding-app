import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import Input from "../../components/Input/Input";

const CampaignSupport = () => {
  const { control } = useForm();
  return (
    <div className="text-lg font-semibold mb-5">
      <h2>Support </h2>
      <div className="bg-white shadow-1 w-full py-7 px-6 flex flex-col mt-5  ">
        <p className="text-xl p-8 text-text3  text-center">
          Pledge without reward
        </p>
        <Input
          placeholder="$10"
          control={control}
          name="pledge"
          className="text-lg font-medium py-2 px-5 border border-strock w-full rounded mb-5"
        ></Input>
        <div className="bg-grayf3 p-5 rounded-xlk mb-5">
          <p className="text-text2 text-sm mb-5 font-semibold">
            Back it because you believe in it.
          </p>
          <p className="text-text3 text-sm">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button className="bg-secondary w-full text-white"> Continue</Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
