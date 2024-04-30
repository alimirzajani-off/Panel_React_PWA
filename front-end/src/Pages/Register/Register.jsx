import Input from "../../Components/Input/Input";
import "./Register.scss";
const Register = () => {
  return (
    <form className="Register">
      <div className="R-information">
        <div className="RI-user">
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
        </div>
        <div className="RI-user"></div>
      </div>
    </form>
  );
};

export default Register;
