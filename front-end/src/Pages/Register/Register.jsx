import { useState } from "react";
import Checkbox from "../../Components/CheckBox/CheckBox";
import Grid from "../../Components/Grid/Grid";
import Group from "../../Components/Group/Group";
import Input from "../../Components/Inputs/Input/Input";
import TextArea from "../../Components/Inputs/TextArea/TextArea";
import RadioGroup from "../../Components/RadioGroup/RadioGroup";
import "./Register.scss";

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
    console.log(e);
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
    <form className="Register">
      <div className="R-information">
        <Group title={<h3>اطلاعات سرپرست</h3>} className={"RI-user"}>
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
          <Grid columns={columns} data={ValueState.FamilyInfo} />
        </Group>
        <Group title={<h3>اطلاعات بیشتر</h3>}>
          <RadioGroup
            name={"ReliefCommittee"}
            items={RadioItems}
            title={"1. آیا خانوار تحت پوشش کمیته امداد می باشد؟"}
            value={ValueState.ReliefCommittee}
            onChange={HandleChangeValue}
          />
          <RadioGroup
            name={"PublicAssistance"}
            items={RadioItems}
            title={"2. آیا کمک های مردمی به این خانوار می رسد؟"}
            value={ValueState.PublicAssistance}
            onChange={HandleChangeValue}
          />
          <RadioGroup
            name={"SelfSufficiency"}
            items={RadioItems}
            title={"3. آیا تمایل به شرکت در طرح خود کفایی دارند؟"}
            value={ValueState.SelfSufficiency}
            onChange={HandleChangeValue}
          />
          <Checkbox
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
          <Input
            name={"MonthlyIncome"}
            type="number"
            label={"5. میانگین درآمد ماهیانه"}
            value={ValueState.MonthlyIncome}
            onChange={HandleChangeValue}
          />
          <RadioGroup
            name={"CarStatus"}
            items={RadioItems}
            title={"6. آیا وسیله نقلیه دارید؟"}
            value={ValueState.CarStatus}
            onChange={HandleChangeValue}
          />
          <Input
            name={"CarType"}
            type="text"
            label={"نوع وسیله نقلیه"}
            value={ValueState.CarType}
            onChange={HandleChangeValue}
          />
          <TextArea
            name={"Others"}
            label={"7. نیاز ها و مشکلات اساسی خانوار به شرح ذیل می باشد:"}
            value={ValueState.Others}
            onChange={HandleChangeValue}
          />
        </Group>
      </div>
    </form>
  );
};

export default Register;
