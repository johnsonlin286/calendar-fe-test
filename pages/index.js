import Layout from "@/components/Layout";
import Calendar from "@/components/Calendar";
import Drawer from "@/components/Drawer";

export default function Home() {
  return (
    <Layout title="calendar-fe-test">
      <Calendar />
      <Drawer />
    </Layout>
  );
}
