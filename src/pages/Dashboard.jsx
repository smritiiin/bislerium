import { Card, Text, CardBody } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <div>
      <p className="font-bold text-3xl mb-4">Welcome to the Dashboard!</p>
      Dashboard Tadaaa.........
      <div
        className="font-bold border p-10 "
        // style={{ height: "200px", width: "200px", border: "2px black solid" }}
      >
        Hello from this div
      </div>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>{" "}
    </div>
  );
};

export default Dashboard;
