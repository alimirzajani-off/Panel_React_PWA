import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "../../Components/Grid/Grid";
import Group from "../../Components/Group/Group";

const columns = [
  { field: "FullName", title: "نام", width: "300px" },
  { field: "FatherName", title: "نام پدر", width: "350px" },
  { field: "PersonalNumber", title: "شماره ملی", width: "350px" },
  { field: "LastReceivedDate", title: "تاریخ آخرین دریافتی", width: "200px" },
  { field: "LastReceived", title: "آخرین دریافتی", width: "400px" },
];

const Needy = () => {
  const [needyData, setNeedyData] = useState();
  useEffect(() => {
    const getData = () => {
      axios.get("http://localhost:5000/user/getUser").then((res) => {
        setNeedyData(res.data);
      });
    };
    getData();
    return () => {};
  }, []);

  return (
    <div className="Needy">
      <Group>
        <Grid columns={columns} data={needyData} />
      </Group>
    </div>
  );
};

export default Needy;
