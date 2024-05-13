import { useState } from "react";
import Checkbox from "../../Components/CheckBox/CheckBox";
import Grid from "../../Components/Grid/Grid";
import Group from "../../Components/Group/Group";
import Input from "../../Components/Inputs/Input/Input";
import TextArea from "../../Components/Inputs/TextArea/TextArea";
import RadioGroup from "../../Components/RadioGroup/RadioGroup";
import "./Register.scss";
import Modal from "../../Components/Modal/Modal";
import Button from "../../Components/Button/Button";

const columns = [
  { field: "FirstName", title: "نام", width: "500px" },
  { field: "LastName", title: "نام خانوادگی", width: "150px" },
  { field: "FathertName", title: "نام پدر", width: "300px" },
  { field: "PersonalNumber", title: "شماره ملی", width: "150px" },
  { field: "BirthDate", title: "تاریخ تولد", width: "500px" },
  { field: "Proportion", title: "نسبت", width: "400px" },
  { field: "MaritalStatus", title: "وضعیت تاهل", width: "800px" },
  { field: "Job", title: "شغل", width: "150px" },
  { field: "Education", title: "تحصیلات", width: "750px" },
];

const data = [];

const RadioItems = [
  { value: "true", label: "بله" },
  { value: "false", label: "خیر" },
];

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setmodal] = useState("");
  const [ValueState, setValueState] = useState({
    FullName: "",
    FatherName: "",
    PersonalNumber: null,
    BirthDate: null,
    Education: "",
    Job: "",
    Nationality: "",
    TellPhone: null,
    CellPhone: null,
    BankAccount: null,
    PostalCode: null,
    HomeAddress: "",
    OfficeAddress: "",
    FamilyInfo: [
      {
        FirstName: "sdaf",
        LastName: "bre",
        ParentName: "aesed",
        PersonalNumber: 0,
        BirthDate: 1379,
        Proportion: "children",
        MaritalStatus: "mojarad",
        Job: "student",
        Education: "لیسلنس",
      },
      {
        FirstName: "qedsa",
        LastName: "hyrh",
        ParentName: "hytrw",
        PersonalNumber: 0,
        BirthDate: 1379,
        Proportion: "children",
        MaritalStatus: "mojarad",
        Job: "student",
        Education: "لیسلنس",
      },
      {
        FirstName: "",
        LastName: "",
        ParentName: "",
        PersonalNumber: 0,
        BirthDate: 1379,
        Proportion: "children",
        MaritalStatus: "mojarad",
        Job: "student",
        Education: "لیسلنس",
      },
      {
        FirstName: "",
        LastName: "",
        ParentName: "",
        PersonalNumber: 0,
        BirthDate: 1379,
        Proportion: "children",
        MaritalStatus: "mojarad",
        Job: "student",
        Education: "لیسلنس",
      },
    ],
    ReliefCommittee: "true",
    PublicAssistance: "true",
    SelfSufficiency: "false",
    HomeStatus: {},
    MonthlyIncome: null,
    CarStatus: "false",
    CarType: "",
    Others: "",
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

  const handleOpenModal = (e) => {
    e.preventDefault();
    setmodal(
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
            name={"FatherName"}
            label={"نام پدر"}
            value={ValueState.FatherName}
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
            name={"Education"}
            label={"نسبت"}
            value={ValueState.Education}
            onChange={HandleChangeValue}
          />
          <Input
            name={"Education"}
            label={"وضعیت تاهل"}
            value={ValueState.Education}
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
              console.log("save");
              setIsModalOpen(false);
            }}
          >
            ذخیره
          </Button>
          <Button
            className={"bg-red-600 text-white m-2 w-24"}
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(false);
            }}
          >
            بستن
          </Button>
        </div>
      </div>
    );
    setIsModalOpen(true);
  };

  return (
    <form className="Register">
      <div className="R-information">
        <Group
          title={<h3>اطلاعات سرپرست</h3>}
          className={"RI-user justify-center"}
        >
          <Input
            name={"FullName"}
            label={"نام و نام خانوادگی"}
            value={ValueState.FullName}
            onChange={HandleChangeValue}
          />
          <Input
            name={"FatherName"}
            label={"نام پدر"}
            value={ValueState.FatherName}
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
          <Input
            name={"Nationality"}
            label={"ملیت"}
            value={ValueState.Nationality}
            onChange={HandleChangeValue}
          />
          <Input
            name={"TellPhone"}
            type="number"
            label={"تلفن ثابت"}
            value={ValueState.TellPhone}
            onChange={HandleChangeValue}
          />
          <Input
            name={"CellPhone"}
            type="number"
            label={"تلفن همراه"}
            value={ValueState.CellPhone}
            onChange={HandleChangeValue}
          />
          <Input
            name={"BankAccount"}
            type="number"
            label={"شماره حساب بانکی"}
            value={ValueState.BankAccount}
            onChange={HandleChangeValue}
          />
          <Input
            name={"PostalCode"}
            type="number"
            label={"کد پستی"}
            value={ValueState.PostalCode}
            onChange={HandleChangeValue}
          />
          <Input
            name={"HomeAddress"}
            label={"آدرس"}
            value={ValueState.HomeAddress}
            onChange={HandleChangeValue}
          />
          <Input
            name={"OfficeAddress"}
            label={"آدرس محل کار"}
            value={ValueState.OfficeAddress}
            onChange={HandleChangeValue}
          />
        </Group>
        <Group title={<h3>اطلاعات اعضا خانواده</h3>} className={"RI-user"}>
          <Button
            onClick={handleOpenModal}
            className={
              "my-2 px-4 bg-lime-600 text-white hover:bg-lime-50 hover:text-black hover:border hover:border-green-50	hover:border-solid	"
            }
          >
            افزودن
          </Button>
          <Grid
            columns={columns}
            data={ValueState.FamilyInfo}
            className={"rounded-lg"}
          />
        </Group>
        <Group title={<h3>اطلاعات بیشتر</h3>} className={"RI-user RI-others"}>
          <div className="RI-othersRadio flex flex-wrap">
            <RadioGroup
              className="RIO-item"
              name={"ReliefCommittee"}
              items={RadioItems}
              title={"1. آیا خانوار تحت پوشش کمیته امداد می باشد؟"}
              value={ValueState.ReliefCommittee}
              onChange={HandleChangeValue}
            />
            <RadioGroup
              className="RIO-item"
              name={"PublicAssistance"}
              items={RadioItems}
              title={"2. آیا کمک های مردمی به این خانوار می رسد؟"}
              value={ValueState.PublicAssistance}
              onChange={HandleChangeValue}
            />
            <RadioGroup
              className="RIO-item"
              name={"SelfSufficiency"}
              items={RadioItems}
              title={"3. آیا تمایل به شرکت در طرح خود کفایی دارند؟"}
              value={ValueState.SelfSufficiency}
              onChange={HandleChangeValue}
            />
          </div>
          <Checkbox
            className="RIO-item items-center"
            name={"HomeStatus"}
            items={[
              { value: "rental", label: "استیجاری" },
              { value: "personal", label: "شخصی" },
              { value: "others", label: "منزل پدری" },
            ]}
            title={"4. وضعیت مسکن"}
            value={ValueState.HomeStatus}
            onChange={HandleChangeValue}
          />
          <div className="flex flex-wrap">
            <Input
              className="RIO-item"
              name={"MonthlyIncome"}
              type="number"
              label={"5. میانگین درآمد ماهیانه"}
              value={ValueState.MonthlyIncome}
              onChange={HandleChangeValue}
            />
          </div>
          <div className="flex flex-wrap">
            <RadioGroup
              className="RIO-item"
              name={"CarStatus"}
              items={RadioItems}
              title={"6. آیا وسیله نقلیه دارید؟"}
              value={ValueState.CarStatus}
              onChange={HandleChangeValue}
            />
            {ValueState.CarStatus == "true" && (
              <Input
                className="RIO-item"
                name={"CarType"}
                type="text"
                label={"نوع وسیله نقلیه"}
                value={ValueState.CarType}
                onChange={HandleChangeValue}
              />
            )}
          </div>
          <TextArea
            className="RIO-item flex flex-col w-full !h-full"
            name={"Others"}
            label={"7. نیاز ها و مشکلات اساسی خانوار به شرح ذیل می باشد:"}
            value={ValueState.Others}
            onChange={HandleChangeValue}
          />
        </Group>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {modal}
        </Modal>
      )}
      <div className="flex flex-wrap justify-center m-4">
        <Button
          className={"bg-lime-600 text-white m-2 w-24"}
          onClick={(e) => {
            e.preventDefault();
            console.log("save");
          }}
        >
          ذخیره
        </Button>
        <Button
          className={"bg-red-600 text-white m-2 w-24"}
          onClick={(e) => {
            e.preventDefault();
            console.log("close");
          }}
        >
          بستن
        </Button>
      </div>
    </form>
  );
};

export default Register;
