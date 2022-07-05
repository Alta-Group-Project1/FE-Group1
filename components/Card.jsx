import Image from "next/image";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import CustomButton from "./CustomButton";

const CardHome = (props) => {
  return (
    <div className="container grow flex flex-col border border-neutral-600 rounded-md p-3 md:p-4 text-neutral-800">
      <Image src={props.imageEvent ? props.imageEvent : "https://via.placeholder.com/400x200.jpg?text=No+Image"} alt={props.imageEvent} width={400} height={200} />
      <p className="font-semibold text-lg mt-4">{props.TitleEvent}</p>
      <div className="flex justify-start">
        <p className="font-normal text-sm mr-4">{props.dateStart}</p>
        <p className="font-normal text-sm">{props.timeStart}</p>
      </div>
      <p className="font-normal text-sm">IDR {props.price}</p>
    </div>
  );
};

const CardMyEvent = (props) => {
  return (
    <div className="container flex flex-col border border-neutral-600 rounded-md p-4 text-neutral-800">
      <Image src={props.imageEvent ? props.imageEvent : "https://via.placeholder.com/400x200.jpg?text=No+Image"} alt={props.imageEvent} width={400} height={200} />
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col">
          <p className="font-semibold text-lg mt-4">{props.TitleEvent}</p>
          <div className="flex justify-start">
            <p className="font-normal text-sm mr-4">{props.dateStart}</p>
            <p className="font-normal text-sm">{props.timeStart}</p>
          </div>
          <p className="font-normal text-sm">IDR {props.price}</p>
        </div>
        <div className="flex self-start lg:self-end mt-4 lg:mt-0">
          <div>
            <CustomButton label={<FaPencilAlt />} onClick={props.onClickEditMyEvent} />
          </div>
          <div className="ml-4">
            <CustomButton label={<FaTrashAlt />} onClick={props.onClickDelMyEvent} color={"red"} />
          </div>
        </div>
      </div>
    </div>
  );
};

const CardMyJoined = (props) => {
  return (
    <div className="container flex flex-col border border-neutral-600 rounded-md p-4 text-neutral-800">
      <Image src={props.imageEvent ? props.imageEvent : "https://via.placeholder.com/400x200.jpg?text=No+Image"} alt={props.imageEvent} width={400} height={200} />
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col">
          <p className="font-semibold text-lg mt-4">{props.TitleEvent}</p>
          <div className="flex justify-start">
            <p className="font-normal text-sm mr-4">{props.dateStart}</p>
            <p className="font-normal text-sm">{props.timeStart}</p>
          </div>
          <p className="font-normal text-sm">IDR {props.price}</p>
        </div>
        <div className="flex self-start lg:self-end mt-4 lg:mt-0">
          <div>
            <CustomButton label={<FaTrashAlt />} onClick={props.onClickDelEvent} color={"red"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardHome, CardMyEvent, CardMyJoined };
