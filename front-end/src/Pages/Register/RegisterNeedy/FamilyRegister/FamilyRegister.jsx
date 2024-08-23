import { useState } from "react";
import Button from "../../../../Components/Button/Button";
import Group from "../../../../Components/Group/Group";
import Input from "../../../../Components/Inputs/Input/Input";

export const FamilyRegister = ({ onClose }) => {
  const [ValueState, setValueState] = useState({
    FirstName: "",
    LastName: "",
    ParentName: "",
    PersonalNumber: null,
    BirthDate: null,
    Proportion: "",
    MaritalStatus: "",
    Job: "",
    Education: "",
  });

  const HandleChangeValue = (e) => {
    if (e.target.type == "checkbox") {
      setValueState((prev) => {
        return {
          ...prev,
          [e.target.name]: {
            ...prev[e.target.name],
            [e.target.value]: e.target.checked,
          },
        };
      });
    } else {
      setValueState((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    }
  };

  return (
    <div className="">
      <Group
        title={<h3>اطلاعات عضو خانواده</h3>}
        className="flex flex-wrap justify-center	"
      >
        <Input
          name={"FullName"}
          label={"نام و نام خانوادگی"}
          value={ValueState.FullName}
          onChange={HandleChangeValue}
        />
        <Input
          name={"ParentName"}
          label={"نام پدر"}
          value={ValueState.ParentName}
          onChange={HandleChangeValue}
        />
        <Input
          name={"PersonalNumber"}
          type="number"
          label={"شماره ملی"}
          value={ValueState.PersonalNumber}
          onChange={HandleChangeValue}
        />
        <Input
          name={"BirthDate"}
          type="date"
          label={"تاریخ تولد"}
          value={ValueState.BirthDate}
          onChange={HandleChangeValue}
        />
        <Input
          name={"Proportion"}
          label={"نسبت"}
          value={ValueState.Proportion}
          onChange={HandleChangeValue}
        />
        <Input
          name={"MaritalStatus"}
          label={"وضعیت تاهل"}
          value={ValueState.MaritalStatus}
          onChange={HandleChangeValue}
        />
        <Input
          name={"Education"}
          label={"تحصیلات"}
          value={ValueState.Education}
          onChange={HandleChangeValue}
        />
        <Input
          name={"Job"}
          label={"شغل"}
          value={ValueState.Job}
          onChange={HandleChangeValue}
        />
      </Group>
      <div className="flex flex-wrap justify-center m-4">
        <Button
          className={"bg-lime-600 text-white m-2 w-24"}
          onClick={(e) => {
            e.preventDefault();
            onClose("save", ValueState);
          }}
        >
          ذخیره
        </Button>
        <Button
          className={"bg-red-600 text-white m-2 w-24"}
          onClick={(e) => {
            e.preventDefault();
            onClose("close");
          }}
        >
          بستن
        </Button>
      </div>
    </div>
  );
};
