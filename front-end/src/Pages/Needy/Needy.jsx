import Grid from "../../Components/Grid/Grid";
import Group from "../../Components/Group/Group";

const columns = [
  { field: "FirstName", title: "نام", width: "300px" },
  { field: "LastName", title: "نام خانوادگی", width: "350px" },
  { field: "PersonalNumber", title: "شماره ملی", width: "350px" },
  { field: "LastReceivedDate", title: "تاریخ آخرین دریافتی", width: "200px" },
  { field: "LastReceived", title: "آخرین دریافتی", width: "400px" },
];

const data = [];

const Needy = () => {
  return (
    <div className="Needy">
      <Group>
        <Grid columns={columns} />
      </Group>
    </div>
  );
};

export default Needy;
