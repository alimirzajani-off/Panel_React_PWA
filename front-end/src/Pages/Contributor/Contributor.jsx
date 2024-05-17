import Grid from "../../Components/Grid/Grid";
import Group from "../../Components/Group/Group";

const columns = [
  { field: "FirstName", title: "نام", width: "300px" },
  { field: "LastName", title: "نام خانوادگی", width: "350px" },
  { field: "LastPaymentDate", title: "تاریخ آخرین پرداختی", width: "200px" },
  { field: "LastPayment", title: "مبلغ آخرین پرداختی", width: "300px" },
];

const data = [];

const Contributor = () => {
  return (
    <div className="Contributor">
      <Group>
        <Grid columns={columns} />
      </Group>
    </div>
  );
};

export default Contributor;
