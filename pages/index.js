import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { eventActons } from "@/stores/redux/event";
import Layout from "@/components/Layout";
import Calendar from "@/components/Calendar";

export default function Home() {
  const { event } = useSelector((state) => state.event);
  const dispatch = useDispatch();

  return (
    <Layout>
      <Calendar />
    </Layout>
  );
}
