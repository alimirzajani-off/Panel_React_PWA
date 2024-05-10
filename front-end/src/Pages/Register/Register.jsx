import Grid from "../../Components/Grid/Grid";
import Group from "../../Components/Group/Group";
import Input from "../../Components/Input/Input";
import "./Register.scss";

const columns = [
  { field: "FirstName", title: "نام", width: "500px" },
  { field: "LastName", title: "نام خانوادگی", width: "150px" },
  { field: "ParentName", title: "نام پدر", width: "300px" },
  { field: "PersonalNumber", title: "شماره ملی", width: "150px" },
  { field: "BirthDate", title: "تاریخ تولد", width: "500px" },
  { field: "Proportion", title: "نسبت", width: "400px" },
  { field: "MaritalStatus", title: "وضعیت تاهل", width: "800px" },
  { field: "Job", title: "شغل", width: "150px" },
  { field: "Education", title: "تحصیلات", width: "750px" },
];

const data = [
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
];

const Register = () => {
  return (
    <form className="Register">
      <div className="R-information">
        <Group title={<h3>اطلاعات سرپرست</h3>} className={"RI-user"}>
          <Input label={"نام و نام خانوادگی"} />
          <Input label={"نام پدر"} />
          <Input type="number" label={"شماره ملی"} />
          <Input type="date" label={"تاریخ تولد"} />
          <Input label={"تحصیلات"} />
          <Input label={"شغل"} />
          <Input label={"ملیت"} />
          <Input type="number" label={"تلفن ثابت"} />
          <Input type="number" label={"تلفن همراه"} />
          <Input type="number" label={"شماره حساب بانکی"} />
          <Input type="number" label={"کد پستی"} />
          <Input label={"آدرس"} />
          <Input label={"آدرس محل کار"} />
        </Group>
        <Group title={<h3>اطلاعات اعضا خانواده</h3>} className={"RI-user"}>
          <Grid columns={columns} data={data} />
        </Group>
        <Group title={<h3>اطلاعات بیشتر</h3>}>1 2 3 4 5</Group>
      </div>
    </form>
  );
};

export default Register;
